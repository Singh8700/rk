import ContactPage from "./contact"; // This can be a client component

export const metadata = {
  title: "Contact Me | Rohit Kumar - Front-End Web Developer",
  description:
    "Get in touch with Rohit Kumar, a dedicated front-end web developer. Whether you have a project, opportunity, or just want to say hello — let’s connect!",
  keywords: [
    "rk960",
    "rk96x0",
    "Contact Rohit Kumar",
    "Web Developer Contact",
    "Front-End Developer Contact",
    "Hire Web Developer",
    "JavaScript Developer",
    "React Developer",
    "Freelance Web Developer",
    "UI/UX Contact"
  ],
  authors: [{ name: "Rohit Kumar" }],
  creator: "Rohit Kumar",
  openGraph: {
    title: "Contact Me | Rohit Kumar - Front-End Developer",
    description:
      "Reach out to Rohit Kumar, a passionate front-end developer. Collaborate on exciting projects or inquire about development services.",
    url: "https://rk9600.github.io/rk960/contact",
    siteName: "Rohit Kumar Portfolio",
    images: [
      {
        url: "/imgs/favicon.jpg",
        width: 1200,
        height: 630,
        alt: "Rohit Kumar Contact Page Banner",
      },
    ],
    type: "website",
  },
};


export default function Page() {
  return <ContactPage />;
}
