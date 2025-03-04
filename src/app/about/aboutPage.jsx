"use client"
// import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"


const page = () => {
  const skills = [
    {
      skill: "HTML"
    },
    {
      skill: "CSS"
    },
    {
      skill: "Javascript"
    },
    {
      skill: "Next.js"
    },
    {
      skill: "Basic Node.js"
    },
    {
      skill: "Photoshop & CorelDraw"
    },
    {
      skill: "Figma"
    }
  ]
  return (
    <Wrapper>
      <motion.div 
      initial={{opacity:0,scale:0.2}}
      whileInView={{opacity:1,scale:1}}
      animate={{opacity:1,scale:1}}
      transition={{duration:1}}>
      <ContantSection>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hey there! I'm Kumas, a passionate web developer with a knack for crafting elegant and responsive websites. With 3 years of experience in the field, I specialize in front-end development, bringing designs to life through clean and efficient code. I'm always seeking new challenges and learning new technologies to stay ahead in the rapidly evolving web development landscape. If you're looking for a dedicated and skilled web developer, look no further – let's create something amazing together!
        </motion.p>
        <Skills>
          <motion.div
            className="skillContainer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill"
              >
                <motion.h3
                  initial={{ opacity: 0 ,y:-100}}
                  animate={{opacity:1,y:0}}
                  transition={{ duration: 1 , delay: index * 0.3 }}
                  whileInView={{opacity:1,y:0}}
                >
                  {skill.skill}
                </motion.h3>
              </motion.div>
            ))}
          </motion.div>
        </Skills>
      </ContantSection>
      </motion.div>
    </Wrapper>
  )
}

export default page

const Wrapper = styled.div`
  width:100vw;
  height:100vh;
  background:transparent;
  position:relative;
  // padding-top:10%;
  display:flex;
  justify-content:center;
  align-items:center;
`

const ContantSection = styled.div`
  width:750px;
  height:450px;
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
  padding:1.2rem;
  border-radius:10px;
  background:transparent;
  backdrop-filter:blur(5px);
  flex-direction:column;
  box-shadow:2px 5px 10px 0px rgba(255,255,255,0.75), inset 0px 0px 0px 1px rgba(255,255,255,0.75);
  -webkit-box-shadow:2px 5px 10px 0px rgba(255,255,255,0.75), inset 0px 0px 0px 1px rgba(255,255,255,0.75);
  -moz-box-shadow:2px 5px 10px 0px rgba(255,255,255,0.75), inset 0px 0px 0px 1px rgba(255,255,255,0.75);
  h2{
    font-size:2.5rem;
    color:rgba(${()=>Math.random() * 255},${()=>Math.random() * 255},${()=>Math.random() * 255},0.8);
    font-weight:bold;
    text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.8);
    font-family:'times new roman';
  }
  p{
    padding:0rem 2rem 0;
    font-size:1.2rem;
  }
  @media(max-width:990px){
  width:550px;
  height:max-content;
  }
  @media(max-width:660px){
    width:calc(100% - 20px);
    box-shadow:none;
    height:max-content;
    h2{
      font-size:1.5rem;
    }
    p{
      font-size:1rem;
    }
  }
  
`
const Skills = styled.div`
width:100%;
gap:10px;
display:flex;
justify-content:center;
align-items:center;

.skillContainer{
width:100%;
display:flex;
 flex-wrap:wrap;
 justify-content:space-around;
 align-items:center;
 .skill{
 width:max-content;
 display:flex;
 flex-wrap:wrap;
 justify-content:space-around;
 align-items:center;
 padding:10px;  
 h3{
  background:rgba(${()=>Math.random() * 255},${()=>Math.random() * 255},${()=>Math.random() * 255},0.2);
  text-align:center;
  padding:10px;
  border-radius:5px;
  font-weight:bold;
  font-family:'times new roman';
 }
 }
}
 `
