import { CheckCircle2, Circle, ChevronRight, Lock } from 'lucide-react';
import type { Topic } from '@/lib/data';
import { cn } from '@/lib/utils';

interface TopicRowProps {
  topic: Topic;
  isCompleted: boolean;
  onClick?: () => void;
}

export function TopicRow({ topic, isCompleted, onClick }: TopicRowProps) {
  const isClickable = !!onClick;

  return (
    <div
      className={cn(
        "group flex items-center justify-between rounded-lg border-2 bg-card p-4 transition-all",
        isClickable && "cursor-pointer hover:border-primary/50 hover:bg-accent/50 hover:shadow-soft hover:-translate-y-0.5",
        !isClickable && "cursor-not-allowed opacity-60",
        isCompleted && "border-success/30 bg-success/5"
      )}
      onClick={onClick}
      onKeyDown={(e) => {
        if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={isClickable ? 0 : undefined}
      role={isClickable ? "button" : undefined}
      aria-label={isClickable ? `Open ${topic.title}` : topic.title}
      aria-disabled={!isClickable}
    >
      <div className="flex items-center gap-3">
        {isCompleted ? (
          <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success" />
        ) : isClickable ? (
          <Circle className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
        ) : (
          <Lock className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
        )}
        <span className={cn(
          "font-medium transition-colors",
          isCompleted && "text-success",
          isClickable && "group-hover:text-primary"
        )}>
          {topic.title}
        </span>
      </div>
      {isClickable && (
        <ChevronRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
      )}
    </div>
  );
}
