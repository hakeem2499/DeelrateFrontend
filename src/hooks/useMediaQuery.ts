// hooks/useMediaQuery.ts
'use client';

import { useState, useEffect } from 'react';

export default function useMediaQuery(query: string): boolean {
  // Memoize the initial state check to prevent unnecessary recalculations
  const getInitialState = () => 
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false;

  const [matches, setMatches] = useState<boolean>(getInitialState);

  useEffect(() => {
    // Early return if no window object (SSR/SSR)
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    
    // Update state immediately if initial match state changes
    setMatches(mediaQuery.matches);

    // Create handler with useCallback to prevent unnecessary re-creations
    const handleChange = () => setMatches(mediaQuery.matches);

    // Add listener
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup function
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
    // Add query as dependency to recreate effect when query changes
  }, [query]);

  return matches;
}