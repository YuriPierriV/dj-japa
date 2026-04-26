declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const googleAdsSendTo = process.env.NEXT_PUBLIC_GOOGLE_ADS_SEND_TO;
const googleAdsCurrency = process.env.NEXT_PUBLIC_GOOGLE_ADS_CURRENCY || 'BRL';
const googleAdsValue = Number(process.env.NEXT_PUBLIC_GOOGLE_ADS_VALUE || 1);

export function trackContactIntent(source: string) {
  if (typeof window === 'undefined') {
    return;
  }

  window.gtag?.('event', 'contact_click', {
    contact_source: source,
  });

  window.fbq?.('trackCustom', 'contact_click', {
    contact_source: source,
  });
}

export function trackLead(source: string) {
  if (typeof window === 'undefined') {
    return;
  }

  window.gtag?.('event', 'generate_lead', {
    lead_source: source,
    value: googleAdsValue,
    currency: googleAdsCurrency,
  });

  if (googleAdsSendTo) {
    window.gtag?.('event', 'conversion', {
      send_to: googleAdsSendTo,
      value: googleAdsValue,
      currency: googleAdsCurrency,
    });
  }

  window.fbq?.('track', 'Lead', {
    lead_source: source,
    value: googleAdsValue,
    currency: googleAdsCurrency,
  });
}
