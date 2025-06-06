"use client"

import styled from "styled-components"
import {motion} from "framer-motion"

const page = () => {
  return (
    <Heading>
       <motion.h1
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{duration:0.2}}
       >
        RK Portfolio
       </motion.h1>
    </Heading>
  )
}

export default page
const Heading = styled.h1`
  width:100vw;
  font-size:2rem;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  font-family: 'Papyrus', 'Comic Sans MS', cursive;
  // padding-top:10px;
  position:fixed;
  font-weight:bold;
  top:0;
  right:0;
  z-index:999;
  backdrop-filter:blur(20px);
  h1{
  padding:0.5rem 1rem;
  font-family:'Papyrus', 'Comic Sans MS', cursive;
  }
  @media(max-width:660px){
   font-size:2rem
   }
  `