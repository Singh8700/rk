export const metadata = {
  title: "My Projects | Front-End Portfolio by Rohit Kumar",
  description:
    "Explore a curated collection of front-end web development projects by Rohit Kumar (rk960 / rk96x0). Each project showcases responsive design, modern UI/UX practices, and advanced JavaScript, React, and CSS skills.",
  keywords: [
    "Front-End Projects",
    "Web Developer Portfolio",
    "JavaScript Projects",
    "React Projects",
    "HTML CSS Projects",
    "Responsive Web Design",
    "UI/UX Case Studies",
    "rk960",
    "rk96x0",
    "rk960 portfolio",
    "rk96x0 portfolio",
    "rk96x0 Instagram profile",
    "Rohit Kumar projects",
    "Frontend Developer Projects"
  ],
  authors: [
    { name: "Rohit Kumar" },
    { name: "rk960" },
    { name: "rk96x0" }
  ],
  creator: "Rohit Kumar",
  openGraph: {
    title: "My Projects | Front-End Portfolio by Rohit Kumar",
    description:
      "Showcasing real-world web development projects using React, JavaScript, HTML, and CSS. Built by Rohit Kumar (rk960 / rk96x0).",
    url: "https://rk9600.github.io/rk960/",
    siteName: "Rohit Kumar Portfolio",
    images: [
      {
        url: "/imgs/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Rohit Kumar Portfolio Projects Banner",
      },
    ],
    type: "website",
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