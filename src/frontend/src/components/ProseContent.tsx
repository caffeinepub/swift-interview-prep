interface ProseContentProps {
  content: string;
}

export function ProseContent({ content }: ProseContentProps) {
  return (
    <div 
      className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-strong:text-foreground prose-code:text-primary prose-pre:bg-muted prose-pre:border prose-pre:border-border"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
