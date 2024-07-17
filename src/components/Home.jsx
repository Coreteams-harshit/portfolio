import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import { NavLink } from "react-router-dom";
import resume  from "../components/project/Harshit's Resume (4).pdf"

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
<div style={{marginTop: "9rem"}}>
<h1 style={{margin:"50px",color : "white",marginBottom: "-32px"}} >
  <span style={{fontWeight : "bold",color : "yellow"}} >{text1}</span>
    I'M A {" "}

<span style={{fontWeight : "bold",color : "yellow"}} >{text}</span>
<span style={{color : "yellow"}} >
    <Cursor cursorStyle = "|"/>
    </span>
    </h1>
    <p className='' style={{color : "#e2971d",fontSize: "1.8rem", margin: "51px"}}>  Self-driven, quick starter, passionate programmer with a curious
              mind who enjoys solving a complex and challenging real-world
              problems, I Design And Code Beautifully Simple Things,And I Love
              What I Do</p>
              <div className="mt-3" style={{paddingLeft: "50px"}}>
                    <NavLink   to={resume} target='_blank' className="btn-get-started SOME mb-3">
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