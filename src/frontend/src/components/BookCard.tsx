import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, ChevronRight } from 'lucide-react';
import type { Book } from '@/lib/data';

interface BookCardProps {
  book: Book;
  onClick: () => void;
}

export function BookCard({ book, onClick }: BookCardProps) {
  return (
    <Card 
      className="group cursor-pointer border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-medium hover:-translate-y-1 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Open ${book.title}`}
    >
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/10 transition-all group-hover:scale-110 group-hover:shadow-glow">
            <BookOpen className="h-7 w-7 text-primary" />
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
        </div>
        <div className="space-y-2">
          <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
            {book.title}
          </CardTitle>
          <CardDescription className="line-clamp-2 leading-relaxed">
            {book.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="font-semibold text-foreground">{book.sections}</span> sections
          </span>
          <span className="text-border">•</span>
          <span className="flex items-center gap-1.5">
            <span className="font-semibold text-foreground">{book.topics}</span> topics
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
