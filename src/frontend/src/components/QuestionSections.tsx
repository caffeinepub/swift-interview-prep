import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { HintsPanel } from './HintsPanel';
import { ProseContent } from './ProseContent';
import { ChevronDown, Lightbulb, CheckCircle, Video } from 'lucide-react';
import { useState } from 'react';
import type { Topic } from '@/lib/data';
import { cn } from '@/lib/utils';

interface QuestionSectionsProps {
  topic: Topic;
}

export function QuestionSections({ topic }: QuestionSectionsProps) {
  const [videoOpen, setVideoOpen] = useState(false);
  const [hintsOpen, setHintsOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);

  return (
    <div className="space-y-4">
      {topic.videoUrl && (
        <Collapsible open={videoOpen} onOpenChange={setVideoOpen}>
          <div className="overflow-hidden rounded-xl border-2 bg-card shadow-soft transition-all hover:shadow-medium">
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="flex w-full items-center justify-between p-6 text-left hover:bg-accent/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Video className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg font-semibold">Video Explanation</span>
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform duration-200",
                    videoOpen && "rotate-180"
                  )}
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t bg-accent/20">
              <div className="p-6">
                <div className="overflow-hidden rounded-lg">
                  <iframe
                    src={topic.videoUrl}
                    className="aspect-video w-full"
                    allowFullScreen
                    title="Video explanation"
                  />
                </div>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
      )}

      {topic.hints && topic.hints.length > 0 && (
        <Collapsible open={hintsOpen} onOpenChange={setHintsOpen}>
          <div className="overflow-hidden rounded-xl border-2 bg-card shadow-soft transition-all hover:shadow-medium">
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="flex w-full items-center justify-between p-6 text-left hover:bg-accent/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold">Hints</span>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {topic.hints.length}
                    </span>
                  </div>
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform duration-200",
                    hintsOpen && "rotate-180"
                  )}
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t bg-accent/20">
              <div className="p-6">
                <HintsPanel hints={topic.hints} initialVisibleCount={hintsOpen ? 1 : 0} />
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
      )}

      {topic.solution && (
        <Collapsible open={solutionOpen} onOpenChange={setSolutionOpen}>
          <div className="overflow-hidden rounded-xl border-2 bg-card shadow-soft transition-all hover:shadow-medium">
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="flex w-full items-center justify-between p-6 text-left hover:bg-accent/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                    <CheckCircle className="h-5 w-5 text-success" />
                  </div>
                  <span className="text-lg font-semibold">Solution</span>
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform duration-200",
                    solutionOpen && "rotate-180"
                  )}
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t bg-accent/20">
              <div className="p-6">
                <ProseContent content={topic.solution} />
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
      )}
    </div>
  );
}
