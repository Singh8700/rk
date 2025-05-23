import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "./backgound/page"
import Container from "./Container"
import FooterPage from "./footer/page"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <meta name="google-site-verification" content="OM6pgVpezoI0qeA94p9M0MhFSu38lv2SWdy0Biu6D1Y" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Container/>
        <Background/>
        {children}
        <FooterPage/>
      </body>
    </html>
  );
}
