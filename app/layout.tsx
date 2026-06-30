import type { Metadata } from 'next'
import '../styles/globals.css'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://buintel.com'),
  title: {
    default: 'Buintel',
    template: '%s | Buintel',
  },
  description:
    'Buintel Automations es una empresa especializada en automatización empresarial, inteligencia artificial y transformación digital. Automatizamos conciliaciones financieras, procesos operativos, reportes ejecutivos e integraciones empresariales.',
  keywords: [
    'automatización empresarial',
    'inteligencia artificial',
    'transformación digital',
    'automatización financiera',
    'n8n',
    'agentes IA',
    'SaaS',
    'integración de sistemas',
    'dashboards ejecutivos',
    'automatización retail',
    'Buintel Automations',
    'México',
  ],
  authors: [{ name: 'Buintel Automations', url: 'https://buintel.com' }],
  creator: 'Buintel Automations',
  publisher: 'Buintel Automations',
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
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://buintel.com',
    siteName: 'Buintel Automations',
    title: 'Buintel Automations — Automatizamos el futuro de tu operación',
    description:
      'Empresa líder en automatización empresarial e inteligencia artificial. Transformamos operaciones empresariales con tecnología avanzada y soluciones personalizadas.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Buintel Automations — Automatización Empresarial e IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buintel Automations — Automatización Empresarial e IA',
    description:
      'Automatizamos el futuro de tu operación con inteligencia artificial y tecnología avanzada.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/buintel_favicon.png', type: 'image/png' },
    ],
    apple: [{ url: '/buintel_favicon.png' }],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://buintel.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Buintel Automations',
              url: 'https://buintel.com',
              logo: 'https://buintel.com/logo.svg',
              description:
                'Empresa especializada en automatización empresarial, inteligencia artificial y transformación digital.',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+52-811-976-2538',
                contactType: 'customer service',
                availableLanguage: ['Spanish'],
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'MX',
              },
              sameAs: [
                'https://www.linkedin.com/company/buintel-automations',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
