"use client"
import React from 'react'
import styled from "styled-components"
import HeaderSection from "../navBar/headerSection/page"
import NavBar from "../navBar/page"

const Container = () => {
  return (
    <StyledContainer>
      <HeaderSection/>
      <NavBar/>
    </StyledContainer>
  )
}

export default Container

const StyledContainer = styled.div`
width:100vw;
height:max-content;
display:flex;
justify-content:center;
align-items:center;
`
