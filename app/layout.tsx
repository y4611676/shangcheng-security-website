import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://shangchengsecurity.com'),
  title: {
    default: '上誠通訊監視 - 專業弱電系統施工廠商 | 24小時智慧守護 | 桃園中壢監控系統',
    template: '%s | 上誠通訊監視',
  },
  description: '上誠通訊監視是桃園中壢地區專業弱電系統施工廠商，提供監控系統、網路工程、門禁系統、保全系統、廣播系統、電話總機等完整服務。採用最新 AI 智慧偵測技術，配備 4K 高畫質夜視功能與雲端儲存方案，為家庭與企業打造全方位安全防護解決方案。專業施工團隊，免費現場評估，24小時服務，是您值得信賴的弱電工程合作夥伴。',
  keywords: '監控系統,弱電工程,門禁系統,保全系統,網路工程,廣播系統,電話總機,對講機,AI智慧偵測,桃園監控,中壢監控,上誠通訊,監視系統,安全防護,弱電施工,監控安裝,門禁安裝,桃園弱電,中壢弱電,弱電系統規劃,監控系統維修,智慧監控,4K監控,夜視監控,雲端監控',
  authors: [{ name: '上誠通訊監視' }],
  creator: '上誠通訊監視',
  publisher: '上誠通訊監視',
  applicationName: '上誠通訊監視',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: '上誠通訊監視 - 專業弱電系統施工廠商 | 桃園中壢監控系統',
    description: '上誠通訊監視是桃園中壢地區專業弱電系統施工廠商，提供監控系統、網路工程、門禁系統、保全系統等完整服務。採用最新 AI 智慧偵測技術，配備 4K 高畫質夜視功能與雲端儲存方案，為家庭與企業打造全方位安全防護解決方案。專業施工團隊，免費現場評估，24小時服務。',
    url: 'https://shangchengsecurity.com',
    siteName: '上誠通訊監視',
    type: 'website',
    locale: 'zh_TW',
    alternateLocale: ['zh-CN', 'en'],
    images: [
      {
        url: '/surveillance-night.jpg',
        width: 1200,
        height: 630,
        alt: '上誠通訊監視 - 專業監控系統，AI智慧偵測，4K高畫質夜視，24小時守護您的安全',
        type: 'image/jpeg',
        secureUrl: 'https://shangchengsecurity.com/surveillance-night.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '上誠通訊監視 - 專業弱電系統施工廠商 | 桃園中壢監控系統',
    description: '上誠通訊監視是桃園中壢地區專業弱電系統施工廠商，提供監控系統、網路工程、門禁系統、保全系統等完整服務。採用最新 AI 智慧偵測技術，配備 4K 高畫質夜視功能與雲端儲存方案，為家庭與企業打造全方位安全防護解決方案。',
    images: ['/surveillance-night.jpg'],
    creator: '@shangchengsecurity',
    site: '@shangchengsecurity',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'pc5kQR6Iby5-_IkdwBcx6XkwWGrpgbRVqpweS_0kzwg',
  },
  alternates: {
    canonical: 'https://shangchengsecurity.com',
    languages: {
      'zh-TW': 'https://shangchengsecurity.com',
      'zh-CN': 'https://shangchengsecurity.com',
    },
  },
  category: '弱電系統工程',
  classification: '弱電系統工程、監控系統、安全防護',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1E2A5E' },
    { media: '(prefers-color-scheme: dark)', color: '#1E2A5E' },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '上誠通訊監視',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'content-language': 'zh-TW',
    'copyright': '© 2025 上誠通訊監視 All rights reserved.',
    'rating': 'general',
    'revisit-after': '7 days',
    'distribution': 'global',
    'coverage': 'worldwide',
    'target': 'all',
    'audience': 'all',
    'X-UA-Compatible': 'IE=edge,chrome=1',
    'format-detection': 'telephone=no',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 主要商家資訊結構化資料
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://shangchengsecurity.com/#organization',
    name: '上誠通訊監視',
    alternateName: '上誠通訊',
    description: '專業弱電系統施工廠商，提供監控系統、網路工程、門禁系統、保全系統等服務。桃園中壢地區專業施工，採用最新 AI 智慧偵測技術，24小時守護您的安全。',
    url: 'https://shangchengsecurity.com',
    telephone: '+886-3-4611676',
    email: 'shangchengsecurit@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '中華路一段533號',
      addressLocality: '中壢區',
      addressRegion: '桃園市',
      postalCode: '320',
      addressCountry: 'TW',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '24.9936',
      longitude: '121.3010',
    },
    image: [
      'https://shangchengsecurity.com/surveillance-night.jpg',
    ],
    logo: 'https://shangchengsecurity.com/favicon.svg',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: '桃園市',
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '24.9936',
        longitude: '121.3010',
      },
      geoRadius: {
        '@type': 'Distance',
        name: '桃園地區',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '弱電系統服務',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '監控系統',
            description: 'IP 攝影機、類比監控、4K 高畫質錄影，提供完整監視解決方案。AI 智慧偵測、夜視功能、遠端觀看。',
            provider: {
              '@type': 'LocalBusiness',
              name: '上誠通訊監視',
            },
            areaServed: {
              '@type': 'City',
              name: '桃園市',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '門禁系統',
            description: '智慧門禁管理系統，支援 RFID、生物辨識、遠端控制等功能。卡片門禁、指紋辨識、遠端管理。',
            provider: {
              '@type': 'LocalBusiness',
              name: '上誠通訊監視',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '網路工程',
            description: '提供企業級網路佈線、光纖施工、無線網路規劃等完整網路架設服務。結構化佈線、光纖網路、無線覆蓋。',
            provider: {
              '@type': 'LocalBusiness',
              name: '上誠通訊監視',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '保全系統',
            description: '紅外線感應、玻璃破碎偵測、瓦斯偵測等全方位保全防護設備。入侵偵測、火災警報、異常通知。',
            provider: {
              '@type': 'LocalBusiness',
              name: '上誠通訊監視',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '廣播系統',
            description: '公共廣播、緊急廣播、背景音樂系統規劃與安裝，音質清晰穩定。',
            provider: {
              '@type': 'LocalBusiness',
              name: '上誠通訊監視',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '電話總機',
            description: '企業電話系統建置、總機安裝、VoIP 電話系統整合服務。',
            provider: {
              '@type': 'LocalBusiness',
              name: '上誠通訊監視',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '對講機系統',
            description: '大樓對講機、社區管理系統、訪客管理，打造智慧社區環境。',
            provider: {
              '@type': 'LocalBusiness',
              name: '上誠通訊監視',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '全弱電系統',
            description: '整合式弱電系統規劃，包含通訊、監控、消防、廣播等全方位解決方案。',
            provider: {
              '@type': 'LocalBusiness',
              name: '上誠通訊監視',
            },
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '100',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: '客戶評價',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
        },
        reviewBody: '專業的弱電系統施工服務，技術團隊經驗豐富，服務態度優良，值得信賴。',
        datePublished: '2025-01-01',
      },
    ],
  }

  // 網站結構化資料
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://shangchengsecurity.com/#website',
    url: 'https://shangchengsecurity.com',
    name: '上誠通訊監視',
    alternateName: '上誠通訊',
    description: '專業弱電系統施工廠商，提供監控系統、網路工程、門禁系統、保全系統等服務',
    publisher: {
      '@id': 'https://shangchengsecurity.com/#organization',
    },
    inLanguage: 'zh-TW',
    copyrightHolder: {
      '@id': 'https://shangchengsecurity.com/#organization',
    },
    copyrightYear: '2025',
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://shangchengsecurity.com/?s={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
      {
        '@type': 'ReadAction',
        target: 'https://shangchengsecurity.com',
      },
    ],
  }

  // 麵包屑導航結構化資料
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '首頁',
        item: 'https://shangchengsecurity.com',
      },
    ],
  }

  // FAQ 結構化資料
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '上誠通訊監視提供哪些服務？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '上誠通訊監視提供完整的弱電系統工程服務，包括監控系統、網路工程、門禁系統、保全系統、廣播系統、電話總機、對講機系統以及全弱電系統整合規劃。',
        },
      },
      {
        '@type': 'Question',
        name: '監控系統有哪些特色？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '我們的監控系統採用最新 AI 智慧偵測技術，能夠精準辨識異常行為，減少誤報。配備高畫質夜視功能，即使在完全黑暗的環境下也能清晰成像。同時提供雲端儲存方案，採用多重加密技術，確保影像資料安全無虞。',
        },
      },
      {
        '@type': 'Question',
        name: '服務區域包含哪些地區？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '我們主要服務桃園市地區，包括中壢、桃園、平鎮、楊梅等區域。提供免費現場評估服務，歡迎來電洽詢。',
        },
      },
      {
        '@type': 'Question',
        name: '如何聯絡上誠通訊監視？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '您可以透過電話 03-4611676、LINE @081kqduw、Email shangchengsecurit@gmail.com 或親自前往桃園市中壢區中華路一段533號與我們聯絡。營業時間為週一至週五 09:00-18:00。',
        },
      },
      {
        '@type': 'Question',
        name: '是否提供免費評估服務？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '是的，我們提供免費現場評估與專業諮詢服務，為您量身打造最適合的安全防護方案。歡迎來電預約。',
        },
      },
    ],
  }

  // 組織結構化資料
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://shangchengsecurity.com/#organization',
    name: '上誠通訊監視',
    alternateName: '上誠通訊',
    url: 'https://shangchengsecurity.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://shangchengsecurity.com/favicon.svg',
      width: 512,
      height: 512,
    },
    image: 'https://shangchengsecurity.com/surveillance-night.jpg',
    description: '專業弱電系統施工廠商，提供監控系統、網路工程、門禁系統、保全系統等服務',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '中華路一段533號',
      addressLocality: '中壢區',
      addressRegion: '桃園市',
      postalCode: '320',
      addressCountry: 'TW',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+886-3-4611676',
        contactType: 'customer service',
        areaServed: 'TW',
        availableLanguage: ['zh-TW', 'zh-CN'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      },
      {
        '@type': 'ContactPoint',
        email: 'shangchengsecurit@gmail.com',
        contactType: 'customer service',
        areaServed: 'TW',
        availableLanguage: ['zh-TW', 'zh-CN'],
      },
    ],
    sameAs: [],
    foundingDate: '2020',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '10-50',
    },
    areaServed: {
      '@type': 'City',
      name: '桃園市',
    },
  }

  // 圖片結構化資料
  const imageObjectData = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    url: 'https://shangchengsecurity.com/surveillance-night.jpg',
    contentUrl: 'https://shangchengsecurity.com/surveillance-night.jpg',
    caption: '上誠通訊監視 - 專業夜間智慧監控系統，AI 即時偵測技術，高畫質成像，24小時守護您的安全',
    description: '專業監控系統展示，採用 AI 智慧偵測技術，配備 4K 高畫質夜視功能',
    width: 1200,
    height: 900,
    encodingFormat: 'image/jpeg',
    license: 'https://shangchengsecurity.com',
    copyrightHolder: {
      '@type': 'Organization',
      name: '上誠通訊監視',
    },
  }

  // 評價結構化資料
  const reviewData = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: '上誠通訊監視',
      '@id': 'https://shangchengsecurity.com/#organization',
    },
    author: {
      '@type': 'Person',
      name: '客戶評價',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: '專業的弱電系統施工服務，技術團隊經驗豐富，服務態度優良，值得信賴。',
    datePublished: '2025-01-01',
  }

  // 服務結構化資料
  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: '弱電系統工程',
    provider: {
      '@id': 'https://shangchengsecurity.com/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: '桃園市',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://shangchengsecurity.com',
      servicePhone: '+886-3-4611676',
      serviceSmsNumber: '+886-3-4611676',
      availableLanguage: ['zh-TW', 'zh-CN'],
    },
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  }

  return (
    <html lang="zh-TW">
      <head>
        {/* 基礎 SEO */}
        <link rel="canonical" href="https://shangchengsecurity.com" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* hreflang 標籤 */}
        <link rel="alternate" hrefLang="zh-TW" href="https://shangchengsecurity.com" />
        <link rel="alternate" hrefLang="zh-CN" href="https://shangchengsecurity.com" />
        <link rel="alternate" hrefLang="x-default" href="https://shangchengsecurity.com" />
        
        {/* DNS Prefetch 和 Preconnect */}
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload 關鍵資源 */}
        <link rel="preload" href="/surveillance-night.jpg" as="image" type="image/jpeg" fetchPriority="high" />
        
        {/* 地理標籤 */}
        <meta name="geo.region" content="TW-TAO" />
        <meta name="geo.placename" content="桃園市中壢區" />
        <meta name="geo.position" content="24.9936;121.3010" />
        <meta name="ICBM" content="24.9936, 121.3010" />
        
        {/* 更多 Meta 標籤 */}
        <meta httpEquiv="Content-Language" content="zh-TW" />
        <meta name="language" content="zh-TW" />
        <meta name="content-language" content="zh-TW" />
        <meta name="copyright" content="© 2025 上誠通訊監視 All rights reserved." />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="DC.title" content="上誠通訊監視 - 專業弱電系統施工廠商" />
        <meta name="DC.creator" content="上誠通訊監視" />
        <meta name="DC.subject" content="弱電系統工程、監控系統、安全防護" />
        <meta name="DC.description" content="上誠通訊監視是桃園中壢地區專業弱電系統施工廠商，提供監控系統、網路工程、門禁系統、保全系統等完整服務" />
        <meta name="DC.publisher" content="上誠通訊監視" />
        <meta name="DC.language" content="zh-TW" />
        <meta name="DC.coverage" content="桃園市" />
        
        {/* Apple 相關標籤 */}
        <meta name="apple-mobile-web-app-title" content="上誠通訊監視" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* 更多 Open Graph 標籤 */}
        <meta property="og:image:secure_url" content="https://shangchengsecurity.com/surveillance-night.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale:alternate" content="zh_CN" />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* 更多 Twitter Card 標籤 */}
        <meta name="twitter:image:alt" content="上誠通訊監視 - 專業監控系統，AI智慧偵測，4K高畫質夜視，24小時守護您的安全" />
        <meta name="twitter:site:id" content="@shangchengsecurity" />
        
        {/* 結構化資料 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}



