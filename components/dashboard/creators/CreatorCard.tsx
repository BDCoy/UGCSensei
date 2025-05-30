"use client";

import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function CreatorCard({ creator }) {
  const {
    users,
    bio,
    education,
    rating,
    portfolio_urls,
    price_per_video,
    interests,
    videos_on_time_percent,
    delivered_videos_count,
    location_country,
    location_region,
    vehicle_owner
  } = creator;

  const handleInvite = () => {
    // TODO: Implement invite functionality
    console.log('Invite creator:', creator.user_id);
  };

  return (
    <Card className="flex flex-col p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={users?.avatar_url} alt={users?.full_name} />
          <AvatarFallback>
            {users?.full_name?.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">{users?.full_name}</h3>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
              <span>{rating?.toFixed(1)}</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mt-1">
            {location_country} {location_region && `· ${location_region}`}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm line-clamp-2">{bio}</p>
      </div>

      {education && (
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">Education</p>
          <p className="text-sm">{education}</p>
        </div>
      )}

      <div className="mt-4">
        <p className="text-sm text-muted-foreground">Stats</p>
        <div className="flex gap-4 mt-1">
          <div>
            <p className="text-sm font-medium">{delivered_videos_count}</p>
            <p className="text-xs text-muted-foreground">Videos</p>
          </div>
          <div>
            <p className="text-sm font-medium">{videos_on_time_percent}%</p>
            <p className="text-xs text-muted-foreground">On Time</p>
          </div>
          <div>
            <p className="text-sm font-medium">${price_per_video}</p>
            <p className="text-xs text-muted-foreground">Per Video</p>
          </div>
        </div>
      </div>

      {interests && interests.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {interest}
            </Badge>
          ))}
        </div>
      )}

      {portfolio_urls && portfolio_urls.length > 0 && (
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">Portfolio</p>
          <div className="flex flex-wrap gap-2">
            {portfolio_urls.map((url, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#175779] hover:underline"
              >
                Link {index + 1}
              </a>
            ))}
          </div>
        </div>
      )}

      <Button
        onClick={handleInvite}
        className="mt-6 w-full bg-[#175779] hover:bg-[#124965]"
      >
        Invite to brief
      </Button>
    </Card>
  );
}