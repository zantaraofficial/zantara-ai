"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextType {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  compareList: string[];
  toggleCompare: (id: string) => void;
  clearCompare: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<string[]>([]);

  // Load favorites from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('zantara_favs');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const newFavs = prev.includes(id) 
        ? prev.filter(fid => fid !== id) 
        : [...prev, id];
      localStorage.setItem('zantara_favs', JSON.stringify(newFavs));
      return newFavs;
    });
  };

  const toggleCompare = (id: string) => {
    setCompareList(prev => {
      if (prev.includes(id)) return prev.filter(cid => cid !== id);
      if (prev.length >= 2) {
        alert("You can only compare 2 tools at a time.");
        return prev;
      }
      return [...prev, id];
    });
  };

  const clearCompare = () => setCompareList([]);

  return (
    <AppContext.Provider value={{ favorites, toggleFavorite, compareList, toggleCompare, clearCompare }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
