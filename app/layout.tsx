import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  // 1. 도메인 기반 설정 (SEO 점수 및 상대 경로 이미지 인식을 위함)
  metadataBase: new URL("https://shortcutview.com"),

  // 2. 브라우저 상단 제목 설정
  title: {
    default: "Shortcut-View | 이미지로 보는 맥북 단축키 시각화 사전",
    template: "%s | Shortcut-View",
  },

  // 3. 검색 엔진 검색 결과창 설명 (핵심 키워드 배치)
  description: "텍스트 리스트는 그만! 실제 키보드 레이아웃 위에서 맥북 단축키 위치를 바로 확인하세요. 초보자부터 전문가까지 작업 속도를 2배 높여주는 가장 쉬운 단축키 가이드입니다.",

  // 4. 검색 키워드 (내부 로봇 참고용)
  keywords: [
    "맥북 단축키",
    "macOS 필수 단축키",
    "맥북 사용법",
    "키보드 단축키 시각화",
    "Shortcut-View",
    "샷컷뷰",
    "맥북 단축키 모음",
    "맥북 초보 가이드"
  ],

  // 5. 표준 URL 설정 (중복 페이지 방지)
  alternates: {
    canonical: "/",
  },

  // 6. 소셜 미디어 공유용 (카카오톡, 페이스북, 트위터 등)
  openGraph: {
    title: "Shortcut-View | 가장 쉬운 맥북 단축키 시각화 사전",
    description: "키보드 이미지로 한눈에 배우는 맥북 필수 단축키 가이드",
    url: "https://shortcutview.com",
    siteName: "Shortcut-View",
    images: [
      {
        url: "/og-image.png", // public 폴더에 위치할 미리보기 이미지
        width: 1200,
        height: 630,
        alt: "Shortcut-View 서비스 메인 화면",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },

  // 7. 검색 로봇 인덱싱 허용
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
