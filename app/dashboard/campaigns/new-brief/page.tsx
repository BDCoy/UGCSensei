"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoDetails } from "@/components/dashboard/campaigns/brief/VideoDetails";
import { AdditionalServices } from "@/components/dashboard/campaigns/brief/AdditionalServices";
import { VideoBrief } from "@/components/dashboard/campaigns/brief/VideoBrief";
import { CreatorPreferences } from "@/components/dashboard/campaigns/brief/CreatorPreferences";

export default function NewBriefPage() {
  const [currentTab, setCurrentTab] = useState("video-details");

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold">Create a New Brief</h1>
        <p className="text-muted-foreground">
          Define your video requirements and preferences
        </p>
      </div>

      <div className="flex gap-8">
        <div className="flex-1">
          <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="video-details">Video details</TabsTrigger>
              <TabsTrigger value="wallet-setup">Wallet setup</TabsTrigger>
              <TabsTrigger value="video-brief">Video brief</TabsTrigger>
              <TabsTrigger value="creator-preferences">Creator preferences</TabsTrigger>
            </TabsList>

            <TabsContent value="video-details" className="mt-6">
              <VideoDetails />
            </TabsContent>

            <TabsContent value="wallet-setup" className="mt-6">
              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4">Wallet Setup</h2>
                <p className="text-muted-foreground">
                  Configure your payment settings and add funds to your wallet.
                </p>
              </Card>
            </TabsContent>

            <TabsContent value="video-brief" className="mt-6">
              <VideoBrief />
            </TabsContent>

            <TabsContent value="creator-preferences" className="mt-6">
              <CreatorPreferences />
            </TabsContent>
          </Tabs>
        </div>

        <div className="w-80">
          <Card className="p-6 sticky top-24">
            <h3 className="font-semibold mb-4">Order estimate</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>30 sec. original creator video</span>
                <span>$139</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>if premium creator selected</span>
                <span>$189</span>
              </div>
              <div className="pt-4 border-t mt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>$139 - $189</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  price per creator
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm">
              <p className="text-blue-600">
                Funds will be deducted after approving the creator.
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex justify-between pb-8">
        <Button variant="outline">Save as draft</Button>
        <div className="space-x-4">
          <Button variant="outline">Back</Button>
          <Button onClick={() => {
            const nextTab = {
              'video-details': 'wallet-setup',
              'wallet-setup': 'video-brief',
              'video-brief': 'creator-preferences',
              'creator-preferences': 'video-details'
            }[currentTab];
            setCurrentTab(nextTab);
          }}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}