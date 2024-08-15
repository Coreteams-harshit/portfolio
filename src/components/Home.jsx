import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import { NavLink } from "react-router-dom";
import resume  from "../components/project/Harshit's Resume (4).pdf"
import { motion } from "framer-motion";
import styled from "styled-components";
import SocialMediaButtons from './SocialMediaButtons';
// import Typical from "react-typical";

const HomeSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  color: white;
  font-family: "Courier New", monospace;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: yellow;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
  color: #ffa500;
`;

const Button = styled(motion.a)`
  display: inline-block;
  padding: 0.75rem 2rem;
  margin: 0.5rem;
  border: 2px solid #007bff;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #007bff;
  }
`;

const Home = () => {

    const [text] = useTypewriter({
        words: ['Harshit Dixit', 'FullStack WebDevloper', 'Software Devloper', 'Fast Learner','Entrepreneur'],
        loop: {},
        typeSpeed : 200,
        deleteSpeed :200
        // onLoopDone: () => console.log(`loop completed after 3 runs.`)
        
      })
    const [text1] = useTypewriter({
        words: ['Hi ', ""],
     
        onDelete : ""
    
        // onLoopDone: () => console.log(`looSp completed after 3 runs.`)
        
      })
  return (
<>
{/* <div className='container-fluid'> */}
<div style={{marginTop: "4rem",marginLeft:'15px'}}>
  
<h1 style={{margin:"10px",color : "white"}} >
  <span style={{fontWeight : "bold",color : "#ffdb2e"}} >{text1}</span>
   I'M <span style={{color:'#ff512e'}}>Harshit Dixit </span>{" "}
<br/>
<span>a {" "}</span>
<span style={{fontWeight : "bold",color : "#ffdb2e"}} >{text}</span>
<span style={{color : "#ffdb2e"}} >
    <Cursor cursorStyle = "|"/>
    </span>
    </h1>
    <p className='description' >  Self-driven, quick starter, passionate programmer with a curious
              mind who enjoys solving a complex and challenging real-world
              problems, I Design And Code Beautifully Simple Things,And I Love
              What I Do</p>
              <div  style={{paddingLeft: "10px" }}>
                    <SocialMediaButtons/>
                    <NavLink    to={resume} target='_blank' className= " btn-get-started SOME mb-3">
                    Download CV
                    </NavLink>
                    <NavLink to='/contact'  style={{ padding:"11px 38px"}} className="btn-get-started">
                    Contact  Me
                    </NavLink>
                  </div>
              </div>
{/* </div> */}



   </>
  )
}

export default Home