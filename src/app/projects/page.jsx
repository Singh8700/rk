export const metadata = {
  title: "Projects Page | Front-End Web Developer",
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
  ],
  authors: [{ name: "Rohit Kumar" }],
  creator: "Rohit Kumar",
  openGraph: {
    title: "Projects Page | Front-End Web Developer",
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
  twitter: {
    card: "summary_large_image",
    title: "Projects Page | Front-End Web Developer",
    description: "Specializing in front-end development and responsive web design.",
    images: ["/imgs/favicon.jpg"],
  },
};

import ProjectShowcase from "./ProjectShow"
import  PosterPost from "./posterPost"
const page = () => {
    return (
      <div style={{"margin-top":"50px"}}>
        <ProjectShowcase />
        <PosterPost />
      </div>
    )
}

export default page