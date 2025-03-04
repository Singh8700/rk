"use client"

import {motion} from "framer-motion"
import { useEffect } from "react"
import styled from "styled-components"

const Education = () => {
    const randomNumber = () =>{
        return Math.floor(Math.random() * 2) + 1
    }

    // console.log(randomNumber(),"about imge")

    const education = [
        {
          year: "2017 - 2021",
          degree: "Bachelor of Arts (Programme)",
          institution: "Delhi University",
          description: "B.A Programme",
          grade: "1st Division",
          models: `./imgs/pic0${randomNumber()}.png`
        },
        {
            year: "2018 - 2019",
            degree: "Diploma in Computer Application",
            institution: "RIIT INFOTECH PVT. LTD.",
            description: "Computer Application",
            grade: "A Grade",
            models: `./imgs/pic0${randomNumber()}.png`
          },
        {
          year: "2017 - 2018",
          degree: "Senior Secondary School (12th)",
          institution: "G.S.B.V. D-Block Janak Puri",
          description: "Arts with Eco",
          grade: "74%",
          models: `./imgs/pic0${randomNumber()}.png`
        },
        {
          year: "2015 - 2016",
          degree: "Secondary School (10th)",
          institution: "G.S.B.V. D-Block Janak Puri",
          description: "General Studies",
          grade: "6.6 CGPE",
          models: `./imgs/pic0${randomNumber()}.png`
        },
       
      ]
    
    //   const certifications = [
    //     {
    //       year: "2017",
    //       title: "Advance Computer Course",
    //       organization: "RIIT INFOTECH PVT LTD",
    //       credential: "RIIT/666"
    //     },
    //     {
    //       year: "2017 - 18",
    //       title: "Web Design, Corel, Photoshop, TallyPrime",
    //       organization: "RIIT INFOTECH",
    //       credential: "RIIT/666"
    //     },
    //     {
    //       year: "2019",
    //       title: "Web Development (coding + hosting )",
    //       organization: "LEARN VEARN",
    //       credential: "FREE"
    //     },
    //     {
    //       year: "2019 - 2020",
    //       title: "Web Development (REACT JS Libraray to emprove)",
    //       organization: "LEARN VEARN",
    //       credential: "FREE"
    //     }
    //   ]
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}>
        <Wrapper>
            <motion.h2
            initial={{opacity:0,x:-20}}
            animate={{opacity:1}}
            transition={{duration:1}}
            whileInView={{x:0}}
            >
                Qualification
            </motion.h2>
            <motion.div
            className="educationContent"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5}}>
                {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="items"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="itemContent">
                    <span className="itemYear">{edu.year}</span>
                    <h4>{edu.degree}</h4>
                    <h5>{edu.institution}</h5>
                    <p>{edu.description}</p>
                    <span className="itemGrade">{edu.grade}</span>
                  </div>
                  <motion.div 
                  className='imgSection'
                    initial={{ opacity: 0, y: -20, scale: 0 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span></span>
                    <img src={edu.models} alt={edu.degree} />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
        </Wrapper>
    </motion.div>
  )
}

export default Education

const Wrapper = styled.div`
  width:100vw;
  height:max-content;
  display:flex;
  justify-content:center;
  align-items:flex-start;
  flex-wrap:wrap;
  padding:1rem;
  padding-bottom:10rem;
h2{
font-size:2.5rem;
font-weight:bold;
font-family:'times new roman';
border-bottom:2px dotted rgba(${()=>Math.random() * 255},${()=>Math.random() * 255},${()=>Math.random() * 255},0.8);
color:rgba(${()=>Math.random() * 255},${()=>Math.random() * 255},${()=>Math.random() * 255},0.8);
}
.educationContent{
width:100vw;
display:flex;
margin-top:2rem;
// background:red;
flex-wrap:wrap;
justify-content:space-around;
align-items:center;
gap:10px;

.items{
width:450px;
display:flex;
// background:blue;
justify-content:space-between;
align-items:center;
padding:15px;
position:relative;
background:rgba(0,0,0,0.2);
border-radius:10px;
overflow:visible;
gap:10px;
.itemContent{
width:80%;
display:flex;
flex-wrap:wrap;
// background:red;
justify-content:space-between;
align-items:flex-start;
position:relative;
z-index:99;

.itemYear{
font-size:0.8rem;
font-weight:bold;
font-family:'times new roman';
color:#fff;
margin:0.5rem;
background:rgba(${()=>Math.random() * 255},${()=>Math.random() * 255},${()=>Math.random() * 255},0.8);
padding:5px;
border-radius:5px;
text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.8);

}
h4{
font-size:1.8rem;
line-height:2rem;
font-weight:bold;
font-family:'times new roman';
color:#fff;
padding:5px;
position: relative;
top:20%;
border-radius:5px;
text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.8);

}
h5{
font-size:1rem;
font-weight:bold;
font-family:'times new roman';
color:#fff;
padding:5px;
border-radius:5px;
width:100%;
text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.8);}
}
p,.itemGrade{
    font-size:1rem;
    font-weight:bold;
    color:#fff;
    padding:5px;
    border-radius:5px;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.8);
    }
    .itemGrade{
        backdrop-filter:blur(5px);
        }
}
.imgSection{
width:50%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
position:absolute;
top:0;
right:0;
border-radius:5px;
z-index:1;
img{
width:100%;
height:100%;
position:absolute;
top:0;
left:13%;
z-index:99;
object-fit:cover;
}
}
}
@media(max-width:990px){
  .educationContent{
  width:100vw;
    .items{
      width:350px;
      gap:20px;
      .imgSection{
      width:200px;
      height:200px;
      }
    }
  }
}
@media(max-width:660px){
  .educationContent{
    .items{
      width:100%;
    //   background:pink;
      gap:20px;
      margin-top:20px;
      .itemContent{
          width:250px;
      }
      .imgSection{
      width:225px;
      height:225px;
      top:10%;  
      left:45%;
      transform:translateY(-50%);}
    }
  }
}
  
@media(max-width:440px){
  .educationContent{
  .items{
//   background:blue;
      .imgSection{
          width:200px;
          height:200px;
      }
  }}}
@media(max-width:400px){
  .educationContent{
  .items{
//   background:red;
      .imgSection{
          width:150px;
          height:150px;
          left:55%;
      }
  }}}

`