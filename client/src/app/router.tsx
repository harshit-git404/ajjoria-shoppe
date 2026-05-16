import { createBrowserRouter } from 'react-router-dom';

import { AppShell } from '@/app/layouts/app-shell';
import { HomePage } from '@/features/home/routes/home-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
