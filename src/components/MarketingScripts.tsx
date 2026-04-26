import Script from 'next/script';

const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const gtagLoaderId = googleTagId || googleAdsId;

export default function MarketingScripts() {
  return (
    <>
      {gtagLoaderId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagLoaderId}`}
            strategy="afterInteractive"
          />
          <Script id="google-tag" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              ${googleTagId ? `gtag('config', '${googleTagId}');` : ''}
              ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ''}
            `}
          </Script>
        </>
      ) : null}

      {metaPixelId ? (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              height="1"
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              style={{ display: 'none' }}
              width="1"
            />
          </noscript>
        </>
      ) : null}
    </>
  );
}
