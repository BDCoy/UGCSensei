"use client";

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send } from 'lucide-react';

interface Conversation {
  brief_id: string;
  brief_title: string;
  last_message: string;
  last_message_time: string;
  other_user: {
    id: string;
    full_name: string;
    avatar_url: string;
  };
}

interface Message {
  id: string;
  sender_id: string;
  message: string;
  created_at: string;
  users: {
    full_name: string;
    avatar_url: string;
  };
}

export default function MessagesPage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const supabase = createClient();

  useEffect(() => {
    const fetchConversations = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { data, error } = await supabase
        .from('messages')
        .select(`
          briefs (
            id,
            title,
            brand_id,
            creator_id,
            users!briefs_brand_id_fkey (id, full_name, avatar_url),
            users!briefs_creator_id_fkey (id, full_name, avatar_url)
          )
        `)
        .order('created_at', { ascending: false });

      if (!error && data) {
        // Process conversations
        const processedConversations = data.reduce((acc: Conversation[], message: any) => {
          const brief = message.briefs;
          const isUserBrand = user?.id === brief.brand_id;
          const otherUser = isUserBrand ? brief.users_2 : brief.users_1;

          const existingConvo = acc.find(c => c.brief_id === brief.id);
          if (!existingConvo) {
            acc.push({
              brief_id: brief.id,
              brief_title: brief.title,
              last_message: message.message,
              last_message_time: message.created_at,
              other_user: otherUser
            });
          }
          return acc;
        }, []);

        setConversations(processedConversations);
      }
    };

    fetchConversations();
  }, [supabase]);

  useEffect(() => {
    if (selectedConversation) {
      const fetchMessages = async () => {
        const { data, error } = await supabase
          .from('messages')
          .select(`
            *,
            users (full_name, avatar_url)
          `)
          .eq('brief_id', selectedConversation)
          .order('created_at', { ascending: true });

        if (!error && data) {
          setMessages(data);
        }
      };

      fetchMessages();

      // Set up real-time subscription
      const channel = supabase
        .channel('messages')
        .on('postgres_changes', 
          { event: '*', schema: 'public', table: 'messages', filter: `brief_id=eq.${selectedConversation}` },
          (payload) => {
            fetchMessages();
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [selectedConversation, supabase]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConversation) return;

    const { data: { user } } = await supabase.auth.getUser();
    
    const { error } = await supabase
      .from('messages')
      .insert({
        brief_id: selectedConversation,
        sender_id: user?.id,
        message: newMessage.trim()
      });

    if (!error) {
      setNewMessage('');
    }
  };

  return (
    <div className="flex h-[calc(100vh-9rem)]">
      {/* Conversations List */}
      <div className="w-80 border-r">
        <div className="p-4 border-b">
          <h1 className="text-xl font-semibold">Messages</h1>
        </div>
        <ScrollArea className="h-full">
          {conversations.map((conversation) => (
            <div
              key={conversation.brief_id}
              className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                selectedConversation === conversation.brief_id ? 'bg-gray-50' : ''
              }`}
              onClick={() => setSelectedConversation(conversation.brief_id)}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">
                    {conversation.other_user.full_name}
                  </p>
                  <p className="text-sm text-muted-foreground truncate">
                    {conversation.brief_title}
                  </p>
                  <p className="text-sm text-muted-foreground truncate">
                    {conversation.last_message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b">
              <h2 className="font-semibold">
                {conversations.find(c => c.brief_id === selectedConversation)?.brief_title}
              </h2>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-3 ${
                      message.sender_id === supabase.auth.user()?.id
                        ? 'flex-row-reverse'
                        : ''
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0" />
                    <div
                      className={`p-3 rounded-lg max-w-[70%] ${
                        message.sender_id === supabase.auth.user()?.id
                          ? 'bg-[#175779] text-white'
                          : 'bg-gray-100'
                      }`}
                    >
                      <p>{message.message}</p>
                      <p className="text-xs mt-1 opacity-70">
                        {new Date(message.created_at).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <form onSubmit={sendMessage} className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1"
                />
                <Button type="submit" className="bg-[#175779] hover:bg-[#124965]">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            Select a conversation to start messaging
          </div>
        )}
      </div>
    </div>
  );
}