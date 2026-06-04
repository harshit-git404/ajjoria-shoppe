import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import { InquiryBasketContext } from '@/features/inquiry-basket/context/inquiry-basket-context';
import type { InquiryItem } from '@/shared/types/catalogue';

const STORAGE_KEY = 'ajjoria-inquiry-basket';

function readStoredItems() {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const storedItems = window.localStorage.getItem(STORAGE_KEY);
    return storedItems ? (JSON.parse(storedItems) as InquiryItem[]) : [];
  } catch {
    return [];
  }
}

export function InquiryBasketProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<InquiryItem[]>(readStoredItems);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((item: InquiryItem) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((currentItem) => currentItem.productSlug === item.productSlug);

      if (existingItem) {
        return currentItems.map((currentItem) =>
          currentItem.productSlug === item.productSlug
            ? {
                ...currentItem,
                quantity: currentItem.quantity + item.quantity,
                note: item.note ?? currentItem.note,
              }
            : currentItem,
        );
      }

      return [...currentItems, item];
    });
    setIsDrawerOpen(true);
  }, []);

  const removeItem = useCallback((productSlug: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.productSlug !== productSlug));
  }, []);

  const updateQuantity = useCallback((productSlug: string, quantity: number) => {
    setItems((currentItems) =>
      currentItems
        .map((item) => (item.productSlug === productSlug ? { ...item, quantity: Math.max(0, quantity) } : item))
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const clearBasket = useCallback(() => {
    setItems([]);
  }, []);

  const openDrawer = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      items,
      totalItems: items.reduce((total, item) => total + item.quantity, 0),
      isDrawerOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearBasket,
      openDrawer,
      closeDrawer,
    }),
    [addItem, clearBasket, closeDrawer, isDrawerOpen, items, openDrawer, removeItem, updateQuantity],
  );

  return <InquiryBasketContext.Provider value={value}>{children}</InquiryBasketContext.Provider>;
}
