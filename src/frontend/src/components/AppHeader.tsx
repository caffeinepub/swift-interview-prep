import { useNavigate, useRouterState } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Bookmark, BookOpen } from 'lucide-react';
import { useSavedQuestions } from '@/hooks/useSavedQuestions';
import { ThemeToggle } from './ThemeToggle';
import { books } from '@/lib/data';

export function AppHeader() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const { savedCount } = useSavedQuestions();
  
  const currentPath = routerState.location.pathname;
  const isHome = currentPath === '/';
  const isSaved = currentPath === '/saved';
  
  // Parse current route to determine context
  let backLabel = '';
  let backPath = '/';
  
  if (currentPath.includes('/question/')) {
    const bookId = currentPath.split('/')[2];
    const book = books.find(b => b.id === bookId);
    backLabel = book?.title || 'Topics';
    backPath = `/book/${bookId}`;
  } else if (currentPath.includes('/book/')) {
    backLabel = 'All Books';
    backPath = '/';
  } else if (isSaved) {
    backLabel = 'All Books';
    backPath = '/';
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-md supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          {!isHome && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate({ to: backPath })}
              className="gap-2 hover:bg-accent"
              aria-label={`Back to ${backLabel}`}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{backLabel}</span>
            </Button>
          )}
          {isHome && (
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                Swift Interview Prep
              </h1>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant={isSaved ? "default" : "outline"}
            size="sm"
            onClick={() => navigate({ to: '/saved' })}
            className="relative gap-2 transition-all"
            aria-label={`Saved questions (${savedCount})`}
          >
            <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
            <span className="hidden sm:inline">Saved</span>
            {savedCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -right-1.5 -top-1.5 h-5 min-w-[1.25rem] animate-scale-in px-1 text-xs shadow-md"
              >
                {savedCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
