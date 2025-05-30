"use client";

import { useState } from 'react';
import { CreatorCard } from './CreatorCard';
import { useCreatorsFilter } from '@/hooks/useCreatorsFilter';

export function CreatorsGrid({ creators }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;
  const { filteredCreators } = useCreatorsFilter(creators);

  const paginatedCreators = filteredCreators.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const totalPages = Math.ceil(filteredCreators.length / itemsPerPage);

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedCreators.map((creator) => (
          <CreatorCard key={creator.user_id} creator={creator} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <nav className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 rounded-lg ${
                  page === i + 1
                    ? 'bg-[#175779] text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}