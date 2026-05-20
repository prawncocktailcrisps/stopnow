import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stop Now — Guaranteed Alcohol Counselling",
  description:
    "A half-day one-to-one video counselling session guaranteed to stop you drinking alcohol. One session, permanent change. 100% money-back guarantee.",
  keywords: "alcohol counselling, stop drinking, alcohol addiction, quit alcohol",
  openGraph: {
    title: "Stop Now — Guaranteed Alcohol Counselling",
    description: "One session. A lifetime free of alcohol.",
    url: "https://www.stopnow.uk",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
