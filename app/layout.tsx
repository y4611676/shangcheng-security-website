import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://shangchengsecurity.com'),
  title: {
    default: '上誠通訊監視 - 專業弱電系統施工廠商 | 24小時智慧守護',
    template: '%s | 上誠通訊監視',
  },
  description: '上誠通訊監視提供專業弱電系統工程服務，包括監控系統、網路工程、門禁系統、保全系統等。採用最新 AI 智慧偵測技術，為家庭與企業打造全方位安全防護解決方案。',
  keywords: '監控系統,弱電工程,門禁系統,保全系統,網路工程,廣播系統,電話總機,對講機,AI智慧偵測,桃園監控,中壢監控,上誠通訊,監視系統,安全防護',
  authors: [{ name: '上誠通訊監視' }],
  creator: '上誠通訊監視',
  publisher: '上誠通訊監視',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: '上誠通訊監視 - 專業弱電系統施工廠商',
    description: '24小時智慧守護，專業弱電系統施工商，為家庭與企業提供全方位安全防護解決方案。',
    url: 'https://shangchengsecurity.com',
    siteName: '上誠通訊監視',
    type: 'website',
    locale: 'zh_TW',
    images: [
      {
        url: '/surveillance-night.jpg',
        width: 1200,
        height: 630,
        alt: '上誠通訊監視 - 專業監控系統',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '上誠通訊監視 - 專業弱電系統施工廠商',
    description: '24小時智慧守護，專業弱電系統施工商，為家庭與企業提供全方位安全防護解決方案。',
    images: ['/surveillance-night.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
  },
  category: '弱電系統工程',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '上誠通訊監視',
    description: '專業弱電系統施工廠商，提供監控系統、網路工程、門禁系統、保全系統等服務',
    url: 'https://shangchengsecurity.com',
    telephone: '',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TW',
      addressLocality: '桃園',
      addressRegion: '桃園市',
    },
    image: 'https://shangchengsecurity.com/surveillance-night.jpg',
    priceRange: '$$',
    openingHours: 'Mo-Su 00:00-23:59',
    sameAs: [],
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
            description: '專業監控系統安裝與維護',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '門禁系統',
            description: '門禁系統設計與施工',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '網路工程',
            description: '網路佈線與系統整合',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '保全系統',
            description: '保全系統安裝與維護',
          },
        },
      ],
    },
  }

  return (
    <html lang="zh-TW">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}



