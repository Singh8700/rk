// app/layout.js or layout.tsx (depending on your setup)

import { Inter } from 'next/font/google';

import "./globals.css";
import Background from "./backgound/page";
import Container from "./globalComponents/Components";
import FooterPage from "./footer/page";
import FlotingButton from "./blogs/flotingButton";
import LoadingScreen from "./globalComponents/globalLoader";

// ✅ Use a valid Google Font subset — 'Papyrus' is not supported by Inter
const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: "Rohit Kumar | Creative Front-End Web Designer | Responsive & Modern Websites",
  description:
    "Discover Rohit Kumar, a skilled front-end developer with 3 years of experience building fast, responsive, and visually stunning websites using React, JavaScript, HTML, and CSS. Let’s create exceptional digital experiences together!",
  keywords: [
    "Web Developer",
    "Front-End Developer",
    "UI/UX",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Responsive Design",
    "rk960",
    "rk96x0",
    "rk960 portfolio",
    "rk96x0 portfolio",
    "rk96x0 Instagram profile",
  ],
  authors: [
    { name: "Rohit Kumar" },
    { name: "rk960" },
    { name: "rk96x0" },
  ],
  creator: "Rohit Kumar",
  openGraph: {
    title: "Rohit Kumar | Creative Front-End Web Designer | Responsive & Modern Websites",
    description:
      "Explore the portfolio of Rohit Kumar, specializing in building fast, scalable, and beautiful websites with React and modern front-end technologies. Let’s bring your ideas to life!",
    url: "https://rk9600.github.io/rk960/",
    siteName: "Rohit Kumar Portfolio",
    images: [
      {
        url: "/imgs/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Rohit Kumar Portfolio Banner",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Move meta tags into <head> — correct practice */}
        <meta name="google-site-verification" content="OM6pgVpezoI0qeA94p9M0MhFSu38lv2SWdy0Biu6D1Y" />
      </head>
      <body className={`antialiased ${inter.className}`}>
        <LoadingScreen />
        <Container />
        <Background />
        <FlotingButton />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}
