type CatalogueEventName = 'collection_opened' | 'product_viewed' | 'inquiry_added' | 'whatsapp_cta_clicked';

type CatalogueEventPayload = Record<string, string | number | boolean | undefined>;

export function trackCatalogueEvent(name: CatalogueEventName, payload: CatalogueEventPayload = {}) {
  if (import.meta.env.DEV) {
    console.debug('[catalogue-event]', name, payload);
  }
}
