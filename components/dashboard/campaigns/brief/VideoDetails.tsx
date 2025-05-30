"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function VideoDetails() {
  return (
    <Card className="p-6">
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">1. Customize your order:</h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-2">Platform:</p>
              <div className="flex gap-2">
                <Badge variant="outline" className="cursor-pointer bg-[#4B35EF] text-white hover:bg-[#3525D3]">
                  TikTok
                </Badge>
                <Badge variant="outline" className="cursor-pointer">Meta</Badge>
                <Badge variant="outline" className="cursor-pointer">Other</Badge>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Duration:</p>
              <div className="flex gap-2">
                <Badge variant="outline" className="cursor-pointer">15s</Badge>
                <Badge variant="outline" className="cursor-pointer bg-[#4B35EF] text-white hover:bg-[#3525D3]">
                  30s
                </Badge>
                <Badge variant="outline" className="cursor-pointer">60s</Badge>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Editing:</p>
              <div className="flex gap-2">
                <Badge variant="outline" className="cursor-pointer">Yes</Badge>
                <Badge variant="outline" className="cursor-pointer bg-[#4B35EF] text-white hover:bg-[#3525D3]">
                  No
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">2. Additional services (optional)</h2>
          <p className="text-sm text-muted-foreground mb-6">
            More ways to boost your video ad performance
          </p>

          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex gap-4">
                <div className="grid grid-cols-2 gap-2">
                  <img src="/placeholder-image.jpg" alt="" className="w-20 h-20 rounded" />
                  <img src="/placeholder-image.jpg" alt="" className="w-20 h-20 rounded" />
                  <img src="/placeholder-image.jpg" alt="" className="w-20 h-20 rounded" />
                  <img src="/placeholder-image.jpg" alt="" className="w-20 h-20 rounded" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Get 4 authentic photos of your product</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Each creator that you will work with will produce authentic photos for thumbnails of your posts.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-medium">+$79 <span className="text-sm text-muted-foreground">/ each creator</span></span>
                    <Button variant="outline" size="sm">Add</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex gap-4">
                <div className="w-40 h-40 bg-gray-100 rounded flex items-center justify-center">
                  <div className="w-20 h-20 border-2 rounded flex items-center justify-center">
                    ▶
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Vertical + Square crop</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    4:5 + 1:1 | Add for Instagram and Facebook feed
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-medium">+$25 <span className="text-sm text-muted-foreground">/ video</span></span>
                    <Button variant="outline" size="sm">Add</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}