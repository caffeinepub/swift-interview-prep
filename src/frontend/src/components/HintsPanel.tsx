import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, EyeOff, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HintsPanelProps {
  hints: string[];
  initialVisibleCount?: number;
}

export function HintsPanel({ hints, initialVisibleCount = 1 }: HintsPanelProps) {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  // Reset visible count when hints change or initialVisibleCount changes
  useEffect(() => {
    setVisibleCount(initialVisibleCount);
  }, [hints, initialVisibleCount]);

  const showNext = () => {
    if (visibleCount < hints.length) {
      setVisibleCount(visibleCount + 1);
    }
  };

  const showAll = () => {
    setVisibleCount(hints.length);
  };

  const hideAll = () => {
    setVisibleCount(0);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={showNext}
          disabled={visibleCount >= hints.length}
          className="gap-2"
        >
          <Eye className="h-4 w-4" />
          Show Next Hint
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={showAll}
          disabled={visibleCount >= hints.length}
          className="gap-2"
        >
          <Sparkles className="h-4 w-4" />
          Show All
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={hideAll}
          disabled={visibleCount === 0}
          className="gap-2"
        >
          <EyeOff className="h-4 w-4" />
          Hide All
        </Button>
        {visibleCount > 0 && (
          <Badge variant="outline" className="gap-1">
            {visibleCount} of {hints.length} visible
          </Badge>
        )}
      </div>
      
      <div className="space-y-3">
        {hints.map((hint, index) => (
          <div
            key={index}
            className={cn(
              "rounded-lg border-l-4 border-primary bg-primary/5 p-4 transition-all animate-fade-in",
              index < visibleCount ? "opacity-100" : "hidden"
            )}
          >
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              Hint #{index + 1}
            </p>
            <p className="text-sm leading-relaxed text-foreground">{hint}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
