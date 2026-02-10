import { Outlet } from '@tanstack/react-router';
import { AppHeader } from './AppHeader';
import { Toaster } from '@/components/ui/sonner';
import { Heart } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function AppLayout() {
  // Initialize theme on app load
  useTheme();
  
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'swift-interview-prep';

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <AppHeader />
      <main className="container mx-auto flex-1 px-4 py-8 md:px-6 lg:px-8">
        <Outlet />
      </main>
      <footer className="border-t bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground">
            <p className="flex items-center gap-1.5">
              © {currentYear} Swift Interview Prep. Built with{' '}
              <Heart className="h-3.5 w-3.5 fill-destructive text-destructive" aria-label="love" />{' '}
              using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}
