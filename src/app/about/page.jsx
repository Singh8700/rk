export async function generateMetadata() {
  return {
    title: "About Me | Front-End Web Developer",
    description:
      "Hey there! I'm Rohit, a passionate web developer specializing in front-end development. With 3 years of experience, I craft elegant, responsive, and efficient websites. Let's build something amazing together!",
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
      "rk96x0 Instagram profile"
    ],
    authors: [
      { name: "Rohit Kumar" },
      { name: "rk960" },   
      { name: "rk96x0" }  
    ],
    creator: "Rohit Kumar",
    openGraph: {
      title: "About Me | Front-End Web Developer",
      description:
        "A passionate web developer with expertise in front-end technologies. Let's collaborate to bring your vision to life!",
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
}



import React from 'react'
import AboutPage from './aboutPage'
import Education from './Education'
import ProjectShowcase from '../projects/ProjectShow'
import PosterPost from '../projects/posterPost'


const page = () => {
  return (
    <>
    <AboutPage id="about"/>
    <Education id="education"/>
    <ProjectShowcase id="projects"/>
    <PosterPost id="poster"/>
    </>
  )
}

export default page

