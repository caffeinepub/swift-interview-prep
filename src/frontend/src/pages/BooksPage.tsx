import { useNavigate } from '@tanstack/react-router';
import { BookCard } from '@/components/BookCard';
import { books } from '@/lib/data';
import { Sparkles } from 'lucide-react';

export function BooksPage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-6xl space-y-10 animate-fade-in">
      <div className="space-y-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <Sparkles className="h-4 w-4" />
          Master Swift Interviews
        </div>
        <h1 className="text-page-title">
          Choose Your Learning Path
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Select a book to start practicing coding challenges and ace your iOS interviews
        </p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book, index) => (
          <div
            key={book.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <BookCard
              book={book}
              onClick={() => navigate({ to: `/book/${book.id}` })}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
