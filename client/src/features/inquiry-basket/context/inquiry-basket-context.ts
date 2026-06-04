import { createContext, useContext } from 'react';

import type { InquiryItem } from '@/shared/types/catalogue';

export interface InquiryBasketContextValue {
  items: InquiryItem[];
  totalItems: number;
  isDrawerOpen: boolean;
  addItem: (item: InquiryItem) => void;
  removeItem: (productSlug: string) => void;
  updateQuantity: (productSlug: string, quantity: number) => void;
  clearBasket: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const InquiryBasketContext = createContext<InquiryBasketContextValue | undefined>(undefined);

export function useInquiryBasket() {
  const context = useContext(InquiryBasketContext);

  if (!context) {
    throw new Error('useInquiryBasket must be used within an InquiryBasketProvider');
  }

  return context;
}
