import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CheckCircle2, Bookmark } from 'lucide-react';
import { useCompletedTopics } from '@/hooks/useCompletedTopics';
import { useSavedQuestions } from '@/hooks/useSavedQuestions';

interface QuestionActionsProps {
  topicId: string;
}

export function QuestionActions({ topicId }: QuestionActionsProps) {
  const { completedTopics, toggleCompleted } = useCompletedTopics();
  const { savedQuestions, toggleSaved } = useSavedQuestions();
  
  const isCompleted = completedTopics.includes(topicId);
  const isSaved = savedQuestions.includes(topicId);

  return (
    <TooltipProvider>
      <div className="flex items-center justify-end gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={isCompleted ? "default" : "outline"}
              size="sm"
              onClick={() => toggleCompleted(topicId)}
              className="gap-2 transition-all"
              aria-pressed={isCompleted}
              aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
            >
              <CheckCircle2 className={`h-4 w-4 ${isCompleted ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">{isCompleted ? 'Completed' : 'Mark Complete'}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isCompleted ? 'Mark as incomplete' : 'Mark as complete'}</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={isSaved ? "default" : "outline"}
              size="sm"
              onClick={() => toggleSaved(topicId)}
              className="gap-2 transition-all"
              aria-pressed={isSaved}
              aria-label={isSaved ? "Remove from saved" : "Save question"}
            >
              <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isSaved ? 'Remove from saved' : 'Save for later'}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
