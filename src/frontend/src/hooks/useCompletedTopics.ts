import { useState, useEffect } from 'react';
import { toast } from 'sonner';

const STORAGE_KEY = 'completedTopics';

export function useCompletedTopics() {
  const [completedTopics, setCompletedTopics] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedTopics));
  }, [completedTopics]);

  const toggleCompleted = (topicId: string) => {
    setCompletedTopics(prev => {
      const isCurrentlyCompleted = prev.includes(topicId);
      if (isCurrentlyCompleted) {
        toast.success('Marked as incomplete');
        return prev.filter(id => id !== topicId);
      } else {
        toast.success('Marked as completed');
        return [...prev, topicId];
      }
    });
  };

  return {
    completedTopics,
    toggleCompleted,
  };
}
