import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@/features/home/routes/home-page';
import { InquiryPage } from '@/features/inquiry/routes/inquiry-page';
import { AppShell } from '@/layouts/app-shell';
import { CollectionDetailPage } from '@/pages/catalogue/collection-detail-page';
import { CollectionsPage } from '@/pages/catalogue/collections-page';
import { ProductDetailPage } from '@/pages/catalogue/product-detail-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'collections',
        element: <CollectionsPage />,
      },
      {
        path: 'collections/:slug',
        element: <CollectionDetailPage />,
      },
      {
        path: 'product/:slug',
        element: <ProductDetailPage />,
      },
      {
        path: 'inquiry',
        element: <InquiryPage />,
      },
    ],
  },
]);
