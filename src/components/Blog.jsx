import React from 'react'
import { NavLink } from 'react-router-dom'

const Blog = () => {
  return (
    <>
      <div className="heading-section mb-3 text-center  ">
        <h3 className="mb-4 WOOo">Blog By Harshit Dixit
        </h3>
      </div>

      <div className="blogcontainer">

        <div className="blogitem">
          <h2 style={{ fontWeight: "700", color: "#FF6A3D" }}>ChatGPT</h2>
          <p style={{ fontWeight: "600", fontSize: "1.4em" ,color: "#F4DB7D"}}  ><strong>ChatGPT is a language model developed by OpenAI.</strong> It is a variant of the GPT (Generative Pre-training Transformer) model, which is a deep learning model that can generate natural language text. ChatGPT is traSined on a large dataset of text and is able to understand and respond to a wide variety of prompts and questions. It can be used for a variety of natural language processing tasks, such as language translation, text summarization, and question answering.</p>
          {/* <a href=""
                        target="_blank"><button className="blog">Read More..</button></a> */}
          <div className="mt-3">
            <NavLink style={{ marginRight: "71px" }} to="https://medium.com/@govinddixit9680a/chatgpt-fd72ffd4eb52" className="btn-get-blog">
            Read More...
            </NavLink>
          </div>
        </div>
        <div className="blogitem">
          <h2 style={{ fontWeight: "700", color: "#FF6A3D" }}>Internet Of Things</h2>
          <p style={{ fontWeight: "600", fontSize: "1.4em",color: "#F4DB7D" }}><strong> The Internet of Things (IoT) describes the network of physical objects—“things”</strong>—that are
            embedded with sensors, software, and other technologies for the purpose of connecting and
            exchanging data with other devices and systems over the internet.</p>
        {/* {  <a href=""
            target="_blank"><button className="blog">Read More..</button></a>} */}
               <div className="mt-3">
            <NavLink style={{ marginRight: "71px" }} to="https://medium.com/@govinddixit9680a/internet-of-things-iot-7e60212fa632" className="btn-get-blog">
            Read More...
            </NavLink>
          </div>
        </div>
        <div className="blogitem">
          <h2 style={{ fontWeight: "700", color: "#FF6A3D" }}>Artificial Intelligence</h2>
          <p style={{ fontWeight: "600", fontSize: "1.4em",color: "#F4DB7D" }}> <strong> Artificial intelligence leverages computers and machines</strong>  to mimic the problem-solving and
            decision-making capabilities of the human mind</p>
          {/* <a href=""
            target="_blank"><button className="blog">Read More..</button></a> */}
               <div className="mt-3">
            <NavLink style={{ marginRight: "71px" }} to="https://medium.com/@govinddixit9680a/artificial-intelligence-8e45683da1cb" className="btn-get-blog">
            Read More...
            </NavLink>
          </div>
        </div>

        <div className="blogitem">
          <h2 style={{ fontWeight: "700", color: "#FF6A3D" }}>HTML, CSS, and JavaScript</h2>
          <p style={{ fontWeight: "600", fontSize: "1.4em",color: "#F4DB7D" }}>As a web developer, the three main languages we use to build websites are HTML, CSS, and
            JavaScript. JavaScript is the programming language, we use HTML to structure the site, and we
            use CSS to design and layout the web page. These days, CSS has become more than just a design
            language, though</p>
          {/* <a href="http"
            target="_blank"><button className="blog">Read More..</button></a> */}

<div className="mt-3">
            <NavLink style={{ marginRight: "71px" }} to="s://medium.com/@govinddixit9680a/html-css-and-javascript-8b96eef631e2" className="btn-get-blog">
            Read More...
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog