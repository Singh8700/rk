"use client"
import styled from "styled-components";
import {motion} from "framer-motion"
// Styled Components for Responsive UI
const Container = styled.div`
  padding: 40px;
  margin-bottom: 10%;
  overflow-x: hidden;
  @media (max-width: 990px) {
      margin-bottom: 18%;
  }
  @media (max-width: 768px) {
      margin-bottom: 30%;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: rgba(${() => Math.random() * 180}, ${() => Math.random() * 180}, ${() => Math.random() * 180},0.9);
font-weight:bold;
font-family:'times new roman';
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  @media(max-width: 1080px){
    grid-template-columns: 1fr 1fr;
  }
     @media(max-width: 768px){
    grid-template-columns: 1fr 1fr;
  }
    @media(max-width: 660px){
      grid-template-columns: 1fr;
    }
`;

const Card = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

// Styled Iframe with Zoom Out Effect
const IframeWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
`;

const IframeImage = styled.iframe`
  width: 260%;
  height: 250%;
  border: none;
  transform: scale(0.4); /* Zoom out effect */
  transform-origin: top left;
  pointer-events: none; /* Disable interactions */
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 780px) {
    width: 340%;
    height: 300%;
    transform: scale(0.3); /* More zoom out for smaller screens */
  }
`;

const Content = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 10px;
  color: #aaa;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 12px 18px;
  background: rgba(${() => Math.random() * 255}, ${() => Math.random() * 255}, ${() => Math.random() * 255},0.3);
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  transition: background 0.3s, transform 0.2s;
  text-align: center;

  &:hover {
    background: #005bb5;
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 0.9rem;
  }
`;

// API Object Data (Fake Data)
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and styled-components.",
    image: "https://rk960.github.io/itsme/",
  },
  {
    "id": 8,
    "title": "DigiMark",
    "description": "DigiMark is a digital marketing tool designed to help users analyze and optimize their online presence. It offers insights into website performance, SEO metrics, and social media engagement.",
    "image": "https://rk960.github.io/digimark/"
}
,
  {
    id: 2,
    title: "School Web Page",
    description: "A modern school website built with nextjs and styled-components.",
    image: "https://school-rho-neon.vercel.app/",
  },
  {
    id: 3,
    title: "Diecs Game",
    description: "Diecs is a dice-based game by Rohit Kumar Singh. Roll the dice, score points, and aim for the highest score! Play here",
    image: "https://rk960.github.io/DiecsGame/",
  },
  {
    "id": 5,
    "title": "Image Search Tool",
    "description": "An image search tool by Rohit Kumar Singh that allows users to search for images based on their queries.",
    "image": "https://rk960.github.io/imgsearch/"
},
{
    "id": 7,
    "title": "Books Manager",
    "description": "A web-based application designed to help users manage their book collections efficiently, allowing for easy addition, editing, and organization of book details.",
    "image": "https://rk960.github.io/booksmanager/"
},
{
    "id": 10,
    "title": "Projects",
    "description": "A collection of projects developed by Rohit Kumar Singh, showcasing various applications and tools, including a calculator with basic arithmetic functions.",
    "image": "https://rk960.github.io/projects/"
}
,
  {
    "id": 4,
    "title": "Notes Management System",
    "description": "A system designed to help users manage their notes efficiently, allowing for easy creation, editing, and organization of notes.",
    "image": "https://rk960.github.io/userListProject/"
},
{
    "id": 9,
    "title": "My Report",
    "description": "A personal portfolio website showcasing the skills, resume, and projects of Rohit Kumar Singh, a web designer and front-end developer.",
    "image": "https://rk960.github.io/myreport/"
}
,
  {
    id: 6,
    title: "Weather App",
    description: "This is a weather app that provides users with real-time weather updates. It has a simple interface for easy location-based weather checks.",
    image: "https://rk960.github.io/weatherApps/"
},


];

export default function ProjectShowcase(props) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    >
    <Container>
      <Title>My Projects</Title>
      <Grid>
        {props.showOnly > 0 ? (
          projects.slice(0, props.showOnly).map((project) => (
            <motion.div  key={project.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5}}
            >
              <Card key={project.id}>
              <IframeWrapper>
                <IframeImage src={project.image} />
              </IframeWrapper>
              <Content>
                <ProjectTitle>{project.title}</ProjectTitle>
                <Description>{project.description}</Description>
                <Button href={project.image} target="_blank" rel="noopener noreferrer">
                  View Project
                </Button>
              </Content>
            </Card>
            </motion.div>
          ))
        ) : (
          projects.map((project) => (
            <motion.div  key={project.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5}}
            >
            <Card key={project.id}>
              <IframeWrapper>
                <IframeImage src={project.image} />
              </IframeWrapper>
              <Content>
                <ProjectTitle>{project.title}</ProjectTitle>
                <Description>{project.description}</Description>
                <Button href={project.image} target="_blank" rel="noopener noreferrer">
                  View Project
                </Button>
              </Content>
            </Card>
            </motion.div>
         ))    
        )
        }
      </Grid>
    </Container>
    </motion.div>
  );
}
