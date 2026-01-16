import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  // 1. Domain-based config (For SEO and relative image paths)
  metadataBase: new URL("https://shortcutview.com"),

  // 2. Browser tab title settings
  title: {
    default: "Shortcut-View | Interactive Mac Keyboard Shortcuts Visualization",
    template: "%s | Shortcut-View",
  },

  // 3. Search engine description (Key keywords included)
  description: "Stop memorizing text lists! Visualize Mac keyboard shortcuts directly on a real keyboard layout. The easiest guide to boost your productivity by 2x for beginners and pros alike.",

  // 4. Search keywords
  keywords: [
    "Mac keyboard shortcuts",
    "macOS essential shortcuts",
    "Macbook guide",
    "keyboard visualization",
    "Shortcut-View",
    "Mac productivity tips",
    "Mac beginner guide",
    "mac screenshot shortcut",
    "force quit mac",
    "mac emoji shortcut",
    "ctrl alt delete mac",
    "macos keyboard cheat sheet",
    "finder shortcuts",
    "switch windows mac"
  ],

  // 5. Canonical URL
  alternates: {
    canonical: "/",
  },

  // 6. Social Media (OpenGraph)
  openGraph: {
    title: "Shortcut-View | The Easiest Visual Guide for Mac Shortcuts",
    description: "Learn essential Mac shortcuts at a glance with interactive keyboard visualization.",
    url: "https://shortcutview.com",
    siteName: "Shortcut-View",
    images: [
      {
        url: "/og-image.png", // Ensure this exists in your public folder
        width: 1200,
        height: 630,
        alt: "Shortcut-View Main Screen Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 7. Robots indexing
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
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-3766691232792823" />
        <meta name="google-site-verification" content="18W5-dwj_9oo48U7vs0wIAc53tXuCOaewUxC-rIost0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
