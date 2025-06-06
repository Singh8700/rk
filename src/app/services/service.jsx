"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {servicesData} from "../apis/apis";

const ServicesContainer = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  margin-top: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  font-family: 'Papyrus', 'Comic Sans MS', cursive;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffcc70;
  margin-bottom: 30px;
  text-align: center;
`;

const ServicesGrid = styled.div`
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
`;

const ServiceCard = styled(motion.div)`
  background: #111111;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  color: rgb(${()=>  Math.random() * 255},${()=>  Math.random() * 255},${()=>  Math.random() * 255});
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ServiceDesc = styled.p`
  font-size: 0.9rem;
  color: #d1d1d1;
  margin-bottom: 10px;
  font-family:'Poppins';
`;

const WhatsappLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 15px;
  background: #25d366;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    background: #1ebe5d;
  }
`;



const ServicesPage = () => {
  return (
    <ServicesContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Title>Our Services</Title>
      <ServicesGrid>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} whileHover={{ scale: 1.05 }} id={service.showCase}>
            <Icon>{service.icon}</Icon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDesc>{service.desc}</ServiceDesc>
            <WhatsappLink href={service.link} target="_blank">Contact on WhatsApp</WhatsappLink>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default ServicesPage;
