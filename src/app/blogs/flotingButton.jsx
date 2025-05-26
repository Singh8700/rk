"use client"
import React from 'react'
import styled from "styled-components"
import { LiaBlogSolid } from "react-icons/lia"
import {motion} from 'framer-motion'
import Link from 'next/link'

const flotingButton = () => {
  return (
   <motion.div
   initial={{opacity:0,y:50}}
   animate={{opacity:1,y:0}}
   transition={{duration:0.5}}
   >
    <Wrapper>
    <Link href="https://instagram.com/rk96x0" target="_blank">
    <Button>
     Post's
     <Icon/>
    </Button>
    </Link>
   </Wrapper>
   </motion.div>
  )
}

export default flotingButton

const Wrapper = styled.div`
width:100%;
height:max-content;
display:flex;
justify-content:flex-end;
align-items:center;
position:fixed;
bottom:5rem;
right:10px;
z-index:99;
padding:5px;
border-radius:5px;
text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.8);
@media(max-width:768px){
    bottom:8rem;
}
`

const Button = styled.button`
width:50px;
height:50px;
border-radius:50%;
background:rgb(${() => Math.floor(Math.random() * 256)},${() => Math.floor(Math.random() * 256)},${() => Math.floor(Math.random() * 256)});
border:none;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
font-weight:bold;
font-family:papyrus;
text-align:center;
padding:5px;
color:#fff;
position:relative;
`

const Icon = styled(LiaBlogSolid)`
font-size:1rem;
text-align:center;
position:absolute;
right:5px;
top:5px;
`
