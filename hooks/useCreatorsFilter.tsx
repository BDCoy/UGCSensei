"use client";

import { createContext, useContext, useState } from 'react';

const CreatorsFilterContext = createContext(null);

export function CreatorsFilterProvider({ children }) {
  const [filters, setFilters] = useState({
    country: 'all',
    language: 'all',
    minRating: 0,
    minPrice: 0,
    maxPrice: 10000,
    vehicleOwner: false,
    interest: 'all'
  });

  return (
    <CreatorsFilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </CreatorsFilterContext.Provider>
  );
}

export function useCreatorsFilterContext() {
  const context = useContext(CreatorsFilterContext);
  if (!context) {
    throw new Error('useCreatorsFilter must be used within a CreatorsFilterProvider');
  }
  return context;
}

export function useCreatorsFilter(creators) {
  const { filters } = useCreatorsFilterContext();

  const filteredCreators = creators.filter(creator => {
    if (filters.country !== 'all' && creator.location_country !== filters.country) return false;
    if (filters.language !== 'all' && creator.language !== filters.language) return false;
    if (creator.rating < filters.minRating) return false;
    if (creator.price_per_video < filters.minPrice) return false;
    if (creator.price_per_video > filters.maxPrice) return false;
    if (filters.vehicleOwner && !creator.vehicle_owner) return false;
    if (filters.interest !== 'all' && !creator.interests?.includes(filters.interest)) return false;
    return true;
  });

  return { filteredCreators };
}