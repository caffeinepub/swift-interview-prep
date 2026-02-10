import { useParams, useNavigate } from '@tanstack/react-router';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { TopicRow } from '@/components/TopicRow';
import { books } from '@/lib/data';
import { useCompletedTopics } from '@/hooks/useCompletedTopics';
import { Trophy, Target } from 'lucide-react';

export function TopicsPage() {
  const { bookId } = useParams({ from: '/book/$bookId' });
  const navigate = useNavigate();
  const { completedTopics } = useCompletedTopics();
  
  const book = books.find(b => b.id === bookId);
  
  if (!book) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Book not found</h1>
        <p className="text-muted-foreground">The requested book could not be found.</p>
      </div>
    );
  }
  
  const allTopics = book.data.flatMap(s => s.topics.filter(t => t.id));
  const completedCount = allTopics.filter(t => completedTopics.includes(t.id!)).length;
  const totalCount = allTopics.length;
  const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
  const isComplete = completedCount === totalCount && totalCount > 0;

  return (
    <div className="mx-auto max-w-4xl space-y-8 animate-fade-in">
      <div className="space-y-6">
        <div className="space-y-3">
          <h1 className="text-section-title">{book.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{book.description}</p>
        </div>
        
        <div className="space-y-3 rounded-xl border-2 bg-gradient-to-br from-card to-accent/20 p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isComplete ? (
                <Trophy className="h-5 w-5 text-success" />
              ) : (
                <Target className="h-5 w-5 text-primary" />
              )}
              <span className="font-semibold">Your Progress</span>
            </div>
            <Badge variant={isComplete ? "default" : "secondary"} className="gap-1.5">
              {completedCount} / {totalCount}
            </Badge>
          </div>
          <Progress value={progressPercent} className="h-3" />
          <p className="text-sm text-muted-foreground">
            {isComplete 
              ? "🎉 Congratulations! You've completed all topics!" 
              : `${totalCount - completedCount} topic${totalCount - completedCount !== 1 ? 's' : ''} remaining`
            }
          </p>
        </div>
      </div>
      
      {book.data.map((section, idx) => (
        <div key={idx} className="space-y-4 animate-slide-in" style={{ animationDelay: `${idx * 100}ms` }}>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{section.subtitle}</p>
          </div>
          
          <div className="space-y-2">
            {section.topics.map((topic) => (
              <TopicRow
                key={topic.id || topic.title}
                topic={topic}
                isCompleted={topic.id ? completedTopics.includes(topic.id) : false}
                onClick={topic.id ? () => navigate({ to: `/book/${bookId}/question/${topic.id}` }) : undefined}
              />
            ))}
          </div>
          
          {idx < book.data.length - 1 && <Separator className="my-8" />}
        </div>
      ))}
    </div>
  );
}
