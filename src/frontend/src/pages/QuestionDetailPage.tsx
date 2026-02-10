import { useParams, useNavigate } from '@tanstack/react-router';
import { QuestionActions } from '@/components/QuestionActions';
import { QuestionSections } from '@/components/QuestionSections';
import { ProseContent } from '@/components/ProseContent';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { books } from '@/lib/data';

export function QuestionDetailPage() {
  const { bookId, topicId } = useParams({ from: '/book/$bookId/question/$topicId' });
  const navigate = useNavigate();
  
  const book = books.find(b => b.id === bookId);
  const topic = book?.data.flatMap(s => s.topics).find(t => t.id === topicId);
  
  if (!book || !topic) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Question not found</h1>
        <p className="text-muted-foreground">The requested question could not be found.</p>
      </div>
    );
  }
  
  const handleNavigate = (targetTopicId: string) => {
    navigate({ to: `/book/${bookId}/question/${targetTopicId}` });
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8 pb-12 animate-fade-in">
      <div className="space-y-6">
        <QuestionActions topicId={topicId} />
        
        <div className="space-y-4 rounded-xl border-2 bg-gradient-to-br from-card to-primary/5 p-6 shadow-soft">
          {topic.meta && (
            <p className="text-sm font-semibold text-primary">{topic.meta}</p>
          )}
          <h1 className="text-page-title leading-tight">{topic.title}</h1>
          {topic.description && (
            <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary/30 pl-4">
              {topic.description}
            </p>
          )}
        </div>
      </div>
      
      {topic.content && (
        <div className="rounded-xl border bg-card p-6 shadow-soft">
          <ProseContent content={topic.content} />
        </div>
      )}
      
      <QuestionSections topic={topic} />
      
      <div className="flex items-center justify-between border-t-2 pt-8">
        {topic.prevTopic ? (
          <Button
            variant="outline"
            onClick={() => handleNavigate(topic.prevTopic!)}
            className="gap-2 hover:bg-accent"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">{findTopicTitle(book, topic.prevTopic)}</span>
            <span className="sm:hidden">Previous</span>
          </Button>
        ) : (
          <div />
        )}
        
        {topic.nextTopic ? (
          <Button
            variant="outline"
            onClick={() => handleNavigate(topic.nextTopic!)}
            className="gap-2 hover:bg-accent"
          >
            <span className="hidden sm:inline">{findTopicTitle(book, topic.nextTopic)}</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

function findTopicTitle(book: typeof books[0], topicId: string): string {
  for (const section of book.data) {
    const topic = section.topics.find(t => t.id === topicId);
    if (topic) return topic.title;
  }
  return '';
}
