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
  color: rgba(${() => Math.random() * 255}, ${() => Math.random() * 255}, ${() => Math.random() * 255},0.3);
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
  @media(max-width: 768px){
    grid-template-columns: repeat(1fr , minmax(100px, 1fr));
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
  display:flex;
  justify-content:center;
  align-items:center;
  background:blue;
  overflow: hidden;
  position: relative;
`;

const IframeImage = styled.iframe`
  width: 100%;
  height: 150%;
  backdround:red;
  border: none;
  transform: scale(0.4); /* Zoom out effect */
  transform-origin: top left;
  pointer-events: none; /* Disable interactions */
  user-select: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 480px) {
    width: 300%;
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
    title: "Photoshop Poster Design Demo",
    description: "Creative Photoshop poster design demo showcasing modern graphics and vibrant colors for marketing.",
    image: "https://drive.google.com/file/d/1z7ByWfvyTNT2TMAzyTdLi4eCeAVRPDn0/preview",
  },
  {
    id: 3,
    title: "Photoshop Poster Design Demo",
    description: "Creative Photoshop poster design demo showcasing modern graphics and vibrant colors for marketing.",
    image: "https://drive.google.com/file/d/1ANWjpI-hjgAr359mQsFs4PGGU4gp4I_2/preview",
  },
  {
    id: 5,
    title: "Photoshop Poster Design Demo",
    description: "Creative Photoshop poster design demo showcasing modern graphics and vibrant colors for marketing.",
    image: "https://drive.google.com/file/d/1bJfgrzG33_BBhBXAGqLkekAJhFpQSCb-/preview"
},
{
    id: 7,
    title: "Photoshop Poster Design Demo",
    description: "Creative Photoshop poster design demo showcasing modern graphics and vibrant colors for marketing.",
    image: "https://drive.google.com/file/d/1r2M33BbfJrdh8bOlg6trHSArt0kX-9wp/preview"
},
  {
    id: 8,
    title: "CorelDRAW Logo Design",
    description: "Professional logo created in CorelDRAW using blue and green colors, reflecting creativity and innovation.",
    image: "https://drive.google.com/file/d/1XMwxIzCf-jhms-cXll3hNOeBMnXNBrNE/preview"
}
,
  {
    id: 2,
    title: "CorelDRAW Logo Design",
    description: "Professional logo created in CorelDRAW using blue and green colors, reflecting creativity and innovation.",
    image: "https://drive.google.com/file/d/1Q52acYUW4VQlOJer6mfDFUgax0M0mXKW/preview",
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
    
      <Title>Poster Design</Title>
      <Grid>
        {props.showOnly > 0 ? (
          projects.slice(0, props.showOnly).map((project) => (
            <motion.div 
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
            <motion.div 
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
