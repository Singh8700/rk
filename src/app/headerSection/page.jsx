"use client"
import React from 'react'
import styled from "styled-components"
import {motion} from "framer-motion"

const page = () => {
  return (
    <Heading>
       <motion.h1
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{duration:1}}
       >
        It's Me
       </motion.h1>
    </Heading>
  )
}

export default page
const Heading = styled.h1`
  width:100%;
  height:max-content;
  font-size:3rem;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  font-family: 'Times New Roman', Times, serif;
  padding-top:10px;
  position:fixed;
  color:rgba(${()=>Math.random() * 255},${()=>Math.random() * 255},${()=>Math.random() * 255},0.8);
  font-weight:bold;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.8);
  top:0;
  right:5%;
  z-index:999;
  backdrop-filter:blur(5px);
  @media(max-width:660px){
   font-size:2rem
   }
  `