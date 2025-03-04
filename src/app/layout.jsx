import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "./backgound/page"
import NavBar from "./navBar/page"
import HeaderSection from "./headerSection/page"



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rohit | Front-End Web Developer",
  description: "Hey there! I'm Rohit, a passionate web developer specializing in front-end development. With 3 years of experience, I craft elegant, responsive, and efficient websites. Let's build something amazing together!",
  keywords: ["Web Developer", "Front-End Developer", "UI/UX", "JavaScript", "HTML", "CSS", "React", "Responsive Design"],
  authors: [{ name: "Rohit" }],
  creator: "Rohit",
  openGraph: {
    title: "Rohit | Front-End Web Developer",
    description: "Passionate web developer with expertise in front-end technologies. Let's collaborate to bring your vision to life!",
    url: "https://yourwebsite.com",
    siteName: "Rohit Portfolio",
    images: [
      {
        url: "/imgs/pic01.png", // Public folder se image ka path
        width: 1200,
        height: 630,
        alt: "Rohit Portfolio Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit | Web Developer",
    description: "Specializing in front-end development and responsive web design.",
    images: ["/imgs/pic01.png"], // Public folder se image ka path
  },
};


export default function RootLayout({ children }) {


  
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="7-0CsP-a--qYOgotHrh_RWoQNI2fiVvugVg2wlmVzHI" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <HeaderSection/>
        <NavBar/>
        <Background/>
        {children}
      </body>
    </html>
  );
}
