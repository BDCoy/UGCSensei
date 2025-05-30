"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export function BriefsTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Briefs</h2>
          <p className="text-sm text-muted-foreground">
            Create briefs to communicate your video ad needs to creators — it's free. Once you approve creators, your briefs turn into active tasks. Need ideas? Check out our brief templates.
          </p>
        </div>
        <Link href="/dashboard/campaigns/new-brief">
          <Button className="bg-[#4B35EF] hover:bg-[#3525D3]">
            <PlusIcon className="w-4 h-4 mr-2" />
            Create a new brief
          </Button>
        </Link>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Brief name</TableHead>
            <TableHead>Creators to approve</TableHead>
            <TableHead>Actions required</TableHead>
            <TableHead>Video orders</TableHead>
            <TableHead>Date created</TableHead>
            <TableHead>Brief visibility</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full" />
                <div>
                  <div className="font-medium">30s video for BDCX Insights Solutions</div>
                  <div className="text-sm text-muted-foreground">#20968</div>
                </div>
              </div>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <span className="px-2 py-1 text-xs bg-gray-100 rounded-full">
                Finish your draft
              </span>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>May 15, 2025</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}