import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/app/router';
import { QueryProvider } from '@/app/providers/query-provider';
import { ThemeProvider } from '@/app/providers/theme-provider';
import { InquiryBasketProvider } from '@/features/inquiry-basket/context/inquiry-basket-provider';
import '@/styles/globals.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryProvider>
        <InquiryBasketProvider>
          <RouterProvider router={router} />
        </InquiryBasketProvider>
      </QueryProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
