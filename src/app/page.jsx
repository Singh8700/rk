"use client"
import React from 'react'
import styled from "styled-components"
import {motion} from 'framer-motion'
import AboutPage from './about/aboutPage'
import ProjectShowcase from './about/ProjectShow'
import PosterPost from './about/posterPost'
import ServicesContainer from './services/page'
import Contact from './contact/page'

const page = () => {

  const randomePic = ()=>{
    return Math.floor(Math.random() * 2) + 1
  }

  console.log(randomePic())

  return (
   <Wrapper>
    {/* heading content */}

    {/* landing content  */}
    <motion.div
    initial={{opacity:0,scale:0.5}}
    animate={{opacity:1,scale:1}}
    transition={{duration:1}}
    whileInView={{scale:1}}
    >
      <LandingContent>
        <LandingText>
          <motion.h1
          initial={{opacity:0,scale:0.5}}
          animate={{opacity:1,scale:1}}
          transition={{duration:1}}
          whileInView={{scale:1}}
          >
            Transforming Ideas into Stunning
            <span> Digital Realities</span>
          </motion.h1>
          <p>Passionate about web design, branding, and UI/UX – let’s create something
            <span> amazing together!</span>
          </p>
          <span>
          <button>
          Get in
          <span> Touch</span>
          </button>
          <button>
          View My
          <span> Work</span>
          </button>
          </span>
        </LandingText>
        <LandingImage>
          <motion.img
          initial={{opacity:0,scale:0.5}}
          animate={{opacity:1,scale:1}}
          transition={{duration:1}}
          whileInView={{scale:1}}
          src={`./imgs/pic0${randomePic()}.png`} alt={`./imgs/pic0${randomePic()}.png`} />
          <span></span>
        </LandingImage>
      </LandingContent>
    </motion.div>
    <ProjectShowcase showOnly={3}/>
    <PosterPost showOnly={3}/>
    <ServicesContainer/>
    <Contact/>
    <motion.div 
    initial={{opacity:0,x:-200}}
    transition={{duration:1}}
    animate={{opacity:1,x:0}}
    whileInView={{opacity:1,x:0}}
    >
    <AboutPage/>
    </motion.div>
   </Wrapper>
  )
}

export default page

const Wrapper = styled.div`
  width:100vw;
  overflow-x:hidden;
  position:relative;
  background:transparent;
`


const LandingContent = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center; 
  position:relative;
  top:0;
  flex-wrap:wrap-reverse;
  @media(max-width:660px){
  height:max-content;
  top:10%;
    padding-bottom:15rem;
  }
`

const LandingText = styled.div`
width:50%;
padding:2rem 1rem 0;
transition: all 0.3s ease;
display:flex;
flex-direction:column; 
justify-content:center;
align-items:flex-start;
  h1{
  font-size:5rem;
  padding:0rem 1rem 0;
  line-height:1;
  font-family:'time-new-roman';
  span{
    font-weight:bold;
     color:rgb(${()=>Math.random() * 255},${()=>Math.random() * 255},${()=>Math.random() * 255});
  }
  }
  p{
    padding:0rem 2rem 0;
    font-size:1.2rem;
  span{
  font-weight:bold;
    color:rgba(${()=>Math.random() * 255},${()=>Math.random() * 255},${()=>Math.random() * 255},0.5);
  }
  }
  button{
    background:none;
    border:none;
    outline:1px solid rgb(${()=>Math.random() * 255},${()=>Math.random() * 255},${()=>Math.random() * 255});
    color:#fff;
    padding:0.5rem;
    border-radius:5px;
    font-weight:bold;
    margin:1rem 0rem 0rem 10rem;
    transition: all 0.3s ease;
    span{
    font-weight:bold;
      color:rgba(${()=>Math.random() * 255},${()=>Math.random() * 255},${()=>Math.random() * 255},0.5);
    }
  }
  button:hover{
  background:rgba(${()=>Math.random() * 255},${()=>Math.random() * 255},${()=>Math.random() * 255},0.2);
  box-shadow:0 0 10px #ccc;
  font-weight:bold;
  transition: all 0.3s ease;
  }
  @media(max-width:990px){
    h1{
      font-size:2.5rem;
    }
      p{
      font-size:1rem;
      }
    button{
      margin:2rem 0rem 0rem 2rem;
    }
  }
  @media(max-width:660px){
  margin:0;
  width:100%;
    h1{
      padding-bottom:2rem;
    }
    button{
      margin:2rem 0rem 0rem 1rem;
    }
  }
`

const LandingImage = styled.div`
width:350px;
position:relative;
display:flex;
justify-content:center;
align-items:center;
img{
  width:100%;
  height:100%;
  position:relative;
  border-radius:10px;
}
  img:before{
    content:"";
    position:absolute;
    width:100%;
    height:100%;
    background:red;
  }
@media(max-width:660px){
  width:100%;
  margin-top:25%;
  img{
    width:60%;
  }
}
`
