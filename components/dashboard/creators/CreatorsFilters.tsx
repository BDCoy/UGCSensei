"use client";

import { useCreatorsFilterContext } from '@/hooks/useCreatorsFilter';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function CreatorsFilters({ countries, languages, interests }) {
  const { filters, setFilters } = useCreatorsFilterContext();

  return (
    <div className="w-full lg:w-72 space-y-6 bg-white p-6 rounded-lg border h-fit">
      <div>
        <h3 className="font-semibold mb-4">Filters</h3>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Location</label>
            <Select
              value={filters.country}
              onValueChange={(value) => setFilters({ ...filters, country: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Language</label>
            <Select
              value={filters.language}
              onValueChange={(value) => setFilters({ ...filters, language: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Languages</SelectItem>
                {languages.map((language) => (
                  <SelectItem key={language} value={language}>
                    {language}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Minimum Rating</label>
            <Slider
              value={[filters.minRating]}
              onValueChange={([value]) => setFilters({ ...filters, minRating: value })}
              min={0}
              max={5}
              step={0.5}
            />
            <p className="text-sm text-muted-foreground">{filters.minRating} stars</p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Price Range</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={filters.minPrice}
                onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
                className="w-20 px-2 py-1 border rounded"
                placeholder="Min"
              />
              <span>-</span>
              <input
                type="number"
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
                className="w-20 px-2 py-1 border rounded"
                placeholder="Max"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Vehicle Owner</label>
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={filters.vehicleOwner}
                onCheckedChange={(checked) => 
                  setFilters({ ...filters, vehicleOwner: checked })
                }
              />
              <label className="text-sm">Has vehicle</label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Interests</label>
            <Select
              value={filters.interest}
              onValueChange={(value) => setFilters({ ...filters, interest: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Interests</SelectItem>
                {interests.map((interest) => (
                  <SelectItem key={interest} value={interest}>
                    {interest}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}