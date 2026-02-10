import { useState, useEffect } from 'react';
import { toast } from 'sonner';

const STORAGE_KEY = 'savedQuestions';

export function useSavedQuestions() {
  const [savedQuestions, setSavedQuestions] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedQuestions));
  }, [savedQuestions]);

  const toggleSaved = (topicId: string) => {
    setSavedQuestions(prev => {
      const isCurrentlySaved = prev.includes(topicId);
      if (isCurrentlySaved) {
        toast.success('Removed from saved questions');
        return prev.filter(id => id !== topicId);
      } else {
        toast.success('Added to saved questions');
        return [...prev, topicId];
      }
    });
  };

  const removeSaved = (topicId: string) => {
    setSavedQuestions(prev => prev.filter(id => id !== topicId));
    toast.success('Removed from saved questions');
  };

  return {
    savedQuestions,
    savedCount: savedQuestions.length,
    toggleSaved,
    removeSaved,
  };
}
