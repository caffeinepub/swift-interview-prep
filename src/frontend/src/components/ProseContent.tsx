import { useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { Copy, Check } from 'lucide-react';

interface ProseContentProps {
  content: string;
}

export function ProseContent({ content }: ProseContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const codeBlocks = containerRef.current.querySelectorAll('pre');
    const buttons: HTMLButtonElement[] = [];

    codeBlocks.forEach((pre) => {
      // Skip if button already exists
      if (pre.querySelector('.code-copy-button')) return;

      const button = document.createElement('button');
      button.className = 'code-copy-button';
      button.setAttribute('aria-label', 'Copy code');
      button.setAttribute('type', 'button');
      
      // Create icon container
      const iconContainer = document.createElement('span');
      iconContainer.className = 'code-copy-icon';
      iconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
      button.appendChild(iconContainer);

      // Create text label
      const textLabel = document.createElement('span');
      textLabel.className = 'code-copy-text';
      textLabel.textContent = 'Copy';
      button.appendChild(textLabel);

      button.addEventListener('click', async () => {
        const codeElement = pre.querySelector('code');
        const textToCopy = codeElement?.textContent || '';

        try {
          await navigator.clipboard.writeText(textToCopy);
          
          // Update button state
          iconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
          textLabel.textContent = 'Copied';
          button.classList.add('copied');
          
          toast.success('Code copied to clipboard');

          // Reset after 2 seconds
          setTimeout(() => {
            iconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
            textLabel.textContent = 'Copy';
            button.classList.remove('copied');
          }, 2000);
        } catch (err) {
          toast.error('Failed to copy code to clipboard');
          console.error('Copy failed:', err);
        }
      });

      // Handle keyboard activation
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          button.click();
        }
      });

      pre.appendChild(button);
      buttons.push(button);
    });

    // Cleanup function
    return () => {
      buttons.forEach((button) => {
        button.remove();
      });
    };
  }, [content]);

  return (
    <div 
      ref={containerRef}
      className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-strong:text-foreground prose-code:text-primary prose-pre:bg-muted prose-pre:border prose-pre:border-border"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
