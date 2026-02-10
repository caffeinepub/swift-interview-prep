import { useNavigate } from '@tanstack/react-router';
import { SavedQuestionRow } from '@/components/SavedQuestionRow';
import { useSavedQuestions } from '@/hooks/useSavedQuestions';
import { books } from '@/lib/data';
import { BookmarkX, Sparkles } from 'lucide-react';

export function SavedQuestionsPage() {
  const navigate = useNavigate();
  const { savedQuestions } = useSavedQuestions();

  const savedTopics = savedQuestions
    .map((topicId) => {
      for (const book of books) {
        for (const section of book.data) {
          const topic = section.topics.find((t) => t.id === topicId);
          if (topic) {
            return {
              ...topic,
              bookId: book.id,
              bookTitle: book.title,
              sectionTitle: section.title,
            };
          }
        }
      }
      return null;
    })
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-4xl space-y-8 animate-fade-in">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-section-title">Saved Questions</h1>
            <p className="text-muted-foreground">
              {savedQuestions.length} question{savedQuestions.length !== 1 ? 's' : ''} saved for later
            </p>
          </div>
        </div>
      </div>

      {savedTopics.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed bg-accent/20 p-12 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <BookmarkX className="h-8 w-8 text-muted-foreground" />
          </div>
          <h2 className="mb-2 text-xl font-semibold">No saved questions yet</h2>
          <p className="max-w-md text-muted-foreground">
            Save questions while practicing to review them later. Click the bookmark icon on any question to save it.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {savedTopics.map((topic) => (
            <SavedQuestionRow
              key={topic!.id}
              topic={topic!}
              onClick={() =>
                navigate({
                  to: `/book/${topic!.bookId}/question/${topic!.id}`,
                })
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
