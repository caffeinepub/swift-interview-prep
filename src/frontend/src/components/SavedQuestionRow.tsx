import { Button } from '@/components/ui/button';
import { Trash2, ChevronRight } from 'lucide-react';
import { useSavedQuestions } from '@/hooks/useSavedQuestions';
import type { Topic } from '@/lib/data';

interface SavedQuestionRowProps {
  topic: Topic & { bookId: string; bookTitle: string; sectionTitle: string };
  onClick: () => void;
}

export function SavedQuestionRow({ topic, onClick }: SavedQuestionRowProps) {
  const { toggleSaved } = useSavedQuestions();

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSaved(topic.id!);
  };

  return (
    <div
      className="group flex items-center justify-between rounded-lg border-2 bg-card p-4 transition-all hover:border-primary/50 hover:bg-accent/50 hover:shadow-soft hover:-translate-y-0.5 cursor-pointer"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Open ${topic.title}`}
    >
      <div className="flex-1 space-y-1">
        <h3 className="font-semibold transition-colors group-hover:text-primary">
          {topic.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {topic.bookTitle} · {topic.sectionTitle}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleRemove}
          className="text-muted-foreground hover:text-destructive"
          aria-label="Remove from saved"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
        <ChevronRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
      </div>
    </div>
  );
}
