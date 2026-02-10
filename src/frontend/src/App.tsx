import { RouterProvider, createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import { AppLayout } from './components/AppLayout';
import { BooksPage } from './pages/BooksPage';
import { TopicsPage } from './pages/TopicsPage';
import { QuestionDetailPage } from './pages/QuestionDetailPage';
import { SavedQuestionsPage } from './pages/SavedQuestionsPage';

const rootRoute = createRootRoute({
  component: AppLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: BooksPage,
});

const topicsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/book/$bookId',
  component: TopicsPage,
});

const questionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/book/$bookId/question/$topicId',
  component: QuestionDetailPage,
});

const savedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/saved',
  component: SavedQuestionsPage,
});

const routeTree = rootRoute.addChildren([indexRoute, topicsRoute, questionRoute, savedRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
