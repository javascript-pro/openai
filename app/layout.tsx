import React from "react";
import pJSON from "../package.json";
import config from "../config.json";
import type { Metadata } from 'next';
import { Toaster } from 'sonner';

import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

const { 
  themeColor,
  title,
  description,
  url,
  og,
} = config;

export const metadata: Metadata = {
  metadataBase: new URL('https://goldlabel.pro'),
  title: `Goldlabel ${pJSON.version}`,
  description: 'Open Source Next.js chatbot template using Vercel AI SDK.',
};

export const viewport = {
  maximumScale: 1,
};

const LIGHT_THEME_COLOR = config.theme.light.primary;
const DARK_THEME_COLOR = config.theme.dark.primary;


const THEME_COLOR_SCRIPT = `\
(function() {
  var html = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'theme-color');
    document.head.appendChild(meta);
  }
  function updateThemeColor() {
    var isDark = html.classList.contains('dark');
    meta.setAttribute('content', isDark ? '${DARK_THEME_COLOR}' : '${LIGHT_THEME_COLOR}');
  }
  var observer = new MutationObserver(updateThemeColor);
  observer.observe(html, { attributes: true, attributeFilter: ['class'] });
  updateThemeColor();
})();`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: THEME_COLOR_SCRIPT,
          }}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/png/apple-touch-icon.png`}
        />
        <link rel="manifest" href="/manifest.json"></link>
        <meta name="theme-color" content={themeColor} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title} ${pJSON.version}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={og} />
        <meta property="og:url" content={url} />

      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-center" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
