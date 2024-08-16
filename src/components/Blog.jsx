import React from "react";
import { Link, NavLink } from "react-router-dom";
import CHATGPT from "../components/img/BlogImage/CHATGPT.webp";
import AI from "../components/img/BlogImage/AI.webp";
import HTMLCSSImage from "../components/img/BlogImage/HTMLCSSImage.webp";
import IOT from "../components/img/BlogImage/IOT.webp";
import LOGO from "../components/img/BlogImage/Logo.png";
import { Grid, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";

const Blog = () => {
  const column =useBreakpointValue({ sm:1, base: 1, md: 1, lg: 2, xl: 2 });
const Blog = [
  {
    id:1,
    title:'ChatGPT',
    subTitle:'ChatGPT is a language model developed by OpenAI',
    desc:'It is a variant of the GPT (Generative Pre-training Transformer) model, which is a deep learning model that can generate natural language text. ChatGPT is   a large dataset of text and is able to understand and respond to a wide variety of prompts and questions. It can be used for a variety of natural language processing tasks, such as language translation, text summarization,and question answering',
    img:CHATGPT,
    live_link:'https://medium.com/@govinddixit9680a/chatgpt-fd72ffd4eb52'

  },
  {
    id:2,
    title:'Internet of Things',
    subTitle:'The IoT describes the network of physical objects—“things”',
    desc:'that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet.',
    img:IOT,
    live_link:'https://medium.com/@govinddixit9680a/internet-of-things-iot-7e60212fa632'

  },
  {
    id:3,
    title:'HTML, CSS, and JavaScript',
    subTitle:' HTML, CSS, and JavaScript project should be clear and descriptive',
    desc:' As a web developer, the three main languages we use to build websites are HTML, CSS, and JavaScript. JavaScript is the  programming language, we use HTML to structure the site, and we use  CSS to design and layout the web page. These days, CSS has become more than just a design language, though',
    img:HTMLCSSImage,
    live_link:'s://medium.com/@govinddixit9680a/html-css-and-javascript-8b96eef631e2'

  },
  {
    id:4,
    title:'Artificial Intelligence',
    subTitle:'Artificial intelligence leverages computers and machines',
    desc:'to mimic the problem-solving and decision-making capabilities of the human mind',
    img:AI,
    live_link:'https://medium.com/@govinddixit9680a/artificial-intelligence-8e45683da1cb'

  },
]
  return (
    <>
      <div className="heading-section mb-3 text-center  ">
        <h3 className="mb-4 WOOo">Blog By Harshit Dixit</h3>
      </div>

      <Grid m={1} templateColumns={`repeat(${column}, 1fr)`} gap={6} className="blogcontainer">
     
      {Blog.map((data)=>(
          <>
      <div class="blog-card" key={data.id} >
        <div class="meta">
          <div class="photo" style={{ backgroundImage: `url(${data?.img})` }}></div>
          <ul class="details">
            <li class="author">
              <Link to="https://medium.com/@govinddixit9680a">
                Harshit Dixit
              </Link>
            </li>
            <li class="date">Aug. 24, 2015</li>
            {/* <li class="tags">
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
          </ul>
        </li> */}
          </ul>
        </div>
    
        <div class="description">
          <h1>{data.title}</h1>
          <h2>{data.subTitle}</h2>
          <p>
           {data?.desc.slice(0,120)}
          </p>
          <p class="read-more">
            <Link
              to={data.live_link}
            >
              Read More
            </Link>
          </p>
        </div>
      </div>
      </>
        ))}

     
      {/* <div class="blog-card alt">
        <div class="meta">
          <div
            class="photo"
            style={{ backgroundImage: `url(${IOT})` }}
          ></div>
          <ul class="details">
            <li class="author">
            <Link to="https://medium.com/@govinddixit9680a">
                Harshit Dixit
              </Link>
            </li>
            <li class="date">July. 15, 2015</li>
          </ul>
        </div>
        <div class="description">
          <h1>Internet of Things</h1>
          <h2>
            The Internet of Things (IoT) describes the network of physical
            objects—“things”
          </h2>
          <p>
            that are embedded with sensors, software, and other technologies for
            the purpose of connecting and exchanging data with other devices and
            systems over the internet.
          </p>
          <p class="read-more">
            <Link to={'https://medium.com/@govinddixit9680a/internet-of-things-iot-7e60212fa632'}>Read More</Link>
          </p>
        </div>
      </div>

      <div class="blog-card ">
        <div class="meta">
          <div
            class="photo"
            style={{ backgroundImage: `url(${HTMLCSSImage})` }}
          ></div>
          <ul class="details">
            <li class="author">
            <Link to="https://medium.com/@govinddixit9680a">
                Harshit Dixit
              </Link>
            </li>
            <li class="date">July. 15, 2015</li>
          </ul>
        </div>
        <div class="description">
          <h1>HTML, CSS, and JavaScript</h1>
          <h2>
          HTML, CSS, and JavaScript project should be clear and descriptive
          </h2>
          <p>
          As a web developer, the three main languages we use to build
            websites are HTML, CSS, and JavaScript. JavaScript is the
            programming language, we use HTML to structure the site, and we use
            CSS to design and layout the web page. These days, CSS has become
            more than just a design language, though
          </p>
          <p class="read-more">
            <Link to="s://medium.com/@govinddixit9680a/html-css-and-javascript-8b96eef631e2">Read More</Link>
          </p>
        </div>
      </div>
      <div class="blog-card alt">
        <div class="meta">
          <div
            class="photo"
            style={{ backgroundImage: `url(${AI})` }}
          ></div>
          <ul class="details">
            <li class="author">
            <Link to="https://medium.com/@govinddixit9680a">
                Harshit Dixit
              </Link>
            </li>
            <li class="date">July. 15, 2015</li>
          </ul>
        </div>
        <div class="description">
          <h1>Artificial Intelligence</h1>
          <h2>
          Artificial intelligence leverages computers and machines
          </h2>
          <p>
          to mimic the problem-solving and decision-making capabilities of the
            human mind
          </p>
          <p class="read-more">
            <Link  to="https://medium.com/@govinddixit9680a/artificial-intelligence-8e45683da1cb">Read More</Link>
          </p>
        </div>
      </div> */}
      </Grid>
    </>
  );
};

export default Blog;
