"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaHeart, FaCoffee } from "react-icons/fa";
import Link from "next/link";

const FooterContainer = styled(motion.footer)`
  width: 100%;
  color: white;
  padding: 40px 5px 0px 20px;
  text-align: left;
  position: relative;
  bottom: 0;
  left: 0;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const SectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 3.5rem;
  padding-right:15px;
`;

const Section = styled.div`
  flex: 1;
  min-width: 150px;
  max-width: 300px;
  align-items:center;
  // background:red;
`;

const SectionTitle = styled.h3`
  margin-bottom: 15px;
  color: rgb(${()=>  Math.random() * 255},${()=>  Math.random() * 255},${()=>  Math.random() * 255});
`;

const SectionItem = styled.p`
  margin: 5px 0;
  color: #f8f9fa;
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 20px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p`
  margin: 0;
  display:flex;
  justify-content:center;
  color: #f8f9fa;
`;

const IconContainer = styled.span`
  color: #ffcc70;
  margin: 0 5px;
`;

const FooterPage = () => {
  return (
    <FooterContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionsContainer>
        <Section>
          <SectionTitle>Portfolio</SectionTitle>
          <SectionItem>Innovating the web, one pixel at a time.</SectionItem>
        </Section>
        <Section>
          <SectionTitle>Quick Links</SectionTitle>
          <SectionItem><Link href="/">Home</Link></SectionItem>
          <SectionItem><Link href="/services">Services</Link></SectionItem>
          <SectionItem><Link href="/about">About</Link></SectionItem>
          <SectionItem><Link href="/contact">Contact</Link></SectionItem>
        </Section>
        <Section>
          <SectionTitle>Services</SectionTitle>
          <SectionItem>Web Development</SectionItem>
          <SectionItem>UI/UX Design</SectionItem>
          <SectionItem>React Web Apps</SectionItem>
          <SectionItem>Next.js</SectionItem>
        </Section>
        <Section>
          <SectionTitle>Contact Info</SectionTitle>
          <SectionItem>Delhi, India</SectionItem>
          <SectionItem>rohitfolio8700@gmail.com</SectionItem>
          <SectionItem>+91 8700750589</SectionItem>
        </Section>
      </SectionsContainer>
      <FooterBottom>
        <FooterText>
          Made with
          <IconContainer>
            <FaHeart />
          </IconContainer>
          and
          <IconContainer>
            <FaCoffee />
          </IconContainer>
        </FooterText>
        <FooterText>© 2025 rk960 . All rights reserved.</FooterText>
      </FooterBottom>
    </FooterContainer>
  );
};

export default FooterPage;
