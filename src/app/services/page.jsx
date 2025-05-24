import Services from "./service"; // This can be a client component

export const metadata = {
  title: "My Services| Front-End Web Developer",
  description:
    "Hey there! I'm Rohit, a passionate web developer specializing in front-end development...",
  keywords: [
    "Web Developer",
    "Front-End Developer",
    "UI/UX",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Responsive Design",
    "Digital Marketing price"
  ],
  authors: [{ name: "Rohit Kumar" }],
  creator: "Rohit Kumar",
  openGraph: {
    title: "My Services | Front-End Web Developer",
    description:
      "Passionate web developer with expertise in front-end technologies. Let's collaborate to bring your vision to life!",
    url: "https://rk9600.github.io/rk960/",
    siteName: "Rohit Kumar Portfolio",
    images: [
      {
        url: "/imgs/favicon.jpg",
        width: 1200,
        height: 630,
        alt: "Rohit Kumar Portfolio Banner",
      },
    ],
    type: "website",
  },
  
};

export default function Page() {
  return <Services />;
}
