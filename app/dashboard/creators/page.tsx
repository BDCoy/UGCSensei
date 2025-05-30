import { createClient } from '@/utils/supabase/client';
import { CreatorsGrid } from '@/components/dashboard/creators/CreatorsGrid';
import { CreatorsFilters } from '@/components/dashboard/creators/CreatorsFilters';
import { CreatorsFilterProvider } from '@/hooks/useCreatorsFilter';

export default async function CreatorsPage() {
  const supabase = createClient();

  // Fetch creators with their user profiles
  const { data: creators, error } = await supabase
    .from('creators')
    .select(`
      *,
      users (
        full_name,
        avatar_url
      )
    `);

  if (error) {
    console.error('Error fetching creators:', error);
    return <div>Error loading creators</div>;
  }

  // Get unique values for filters
  const uniqueCountries = [...new Set(creators.map(c => c.location_country).filter(Boolean))];
  const uniqueLanguages = [...new Set(creators.map(c => c.language).filter(Boolean))];
  const allInterests = creators
    .flatMap(c => c.interests || [])
    .filter(Boolean);
  const uniqueInterests = [...new Set(allInterests)];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold">Creators</h1>
        <p className="text-muted-foreground">
          Find and connect with talented creators for your next campaign
        </p>
      </div>

      <CreatorsFilterProvider>
        <div className="flex flex-col lg:flex-row gap-8">
          <CreatorsFilters
            countries={uniqueCountries}
            languages={uniqueLanguages}
            interests={uniqueInterests}
          />
          <CreatorsGrid creators={creators} />
        </div>
      </CreatorsFilterProvider>
    </div>
  );
}