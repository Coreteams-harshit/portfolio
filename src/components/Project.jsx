import { Grid } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import krisCent from "../components/project/image/image.png"
import tollgurusImg from "../components/project/image/tollGuru.png"
import portfolioImg from "../components/project/image/portfolio.png"
import restoImg from "../components/project/image/shreeshyamrestaurant.png"
import captchaForm from "../components/project/image/captchaForm.png"
import countDownTimer from "../components/project/image/countDownTimer.png"
import cryptoForm from "../components/project/image/cryptoForm.png"
import foodDeliveryWebsite from "../components/project/image/foodDeliveryWebsite.png"
import gymWebsite from "../components/project/image/gymWebsite.png"
import meeting from "../components/project/image/meeting.png"
import portfoliowithhtml from "../components/project/image/portfoliowithhtml.png"
import wallford from "../components/project/image/wallford.png"
import colorViews from "../components/project/image/colorViews.png"
import dance from "../components/project/image/dance Website.jpg"
import ecommerce from "../components/project/image/ecommerce.png"
import dice from "../components/project/image/dice.png"

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Instagram Clone Using REACT JS",
      date: "15th Jan, 2024",
      description:
        "This is my first Clone Application. It consists of my projects I have done so far with Like, Comment, Follow & UnFollow functionalities.",
      liveLink:
        "https://66b6f399059d03c8cc68f500--harmonious-blini-547498.netlify.app/",
      sourceLink: "https://github.com/harshitdixit9680/kriscent-social-media",
      ProjectImage:krisCent
    },
    {
      id: 2,
      title: "Toll Calculation Application Using REACT JS",
      date: "1st Jan, 2024",
      description: "This is my Toll Calculation Application Using APIs.",
      liveLink: "https://tollgurus.vercel.app/",
      sourceLink: "https://github.com/harshitdixit9680/tollgurus",
      ProjectImage:tollgurusImg
    },
    {
      id: 3,
      title: "Portfolio ",
      date: "8th November,2022",
      description:
        "This is my portfolio. It consists of my projects I have done so far in the fullstack web dev field. It also consists of some of my tech blogs.",
      liveLink: "https://harshitdixitportfolio.netlify.app",
      sourceLink: "https://github.com/harshitdixit9680/portfolio",
      ProjectImage:portfolioImg
    },
    {
      id: 4,
      title: "Restaurant Website Using MERN",
      date: "5th November, 2023",
      description:
        "It's a my fist Major Project in MongoDb ,ExpressJs,React JS ,NodeJS in this",
      liveLink: "https://shreeshyamreastaurantmain.netlify.app/",
      sourceLink: "https://github.com/harshitdixit9680/ract",
      ProjectImage:restoImg
    },
    {
      id: 5,
      title: "Frontend Meeting Website USing HTML CSS",
      date: "7th May, 2023",
      description:
        " Creating a frontend meeting website using HTML and CSS is a great project. To effectively promote it on social platforms, you can add some compelling lines and content that highlight the key features and benefits of your website.",
      liveLink: "https://harshitdixit9680.github.io/meeting",
      sourceLink: "https://github.com/harshitdixit9680/meeting",
      ProjectImage:meeting
    },
    {
      id: 6,
      title: "Personal Portfolio Website USing HTML CSS JS",
      date: "10th June, 2022",
      description:
        " This is my portfolio. It consists of my projects I have done so far in the fullstack web dev field.",
      liveLink: "https://harshit-dixit-portfolio.netlify.app/",
      // sourceLink: "https://github.com/harshitdixit9680/meeting",
      ProjectImage:portfoliowithhtml
    },
    {
      id: 7,
      title: "Landing Page Using HTML CSS",
      date: "5th March, 2023",
      description:
        "This is Simple Landing Website Using A HTML CSS JS. This IS Group In Running Internship periods",
      liveLink: "https://harshitdixit9680.github.io/wallford/",
      sourceLink: "https://github.com/harshitdixit9680/wallford/",
      ProjectImage:wallford
    },
    {
      id: 8,
      title: "Gym Website",
      date: "26th April, 2021",
      description:
        "In this creating a Gym website design using a HTML & CSS It's interactive frontend development project",
      liveLink: "https://harshit-dixit-portfolio.netlify.app/project/gymwebsite/gymwebsite",
      sourceLink: "https://github.com/harshitdixit9680/GymWebsite",
      ProjectImage:gymWebsite
    },
    {
      id: 9,
      title: "Food Delivery Website",
      date: "15TH JAN 2023",
      description:
        " An application where you upload your images fro  local storage and can be used by any one all over across the world.",
      liveLink: "https://harshit-dixit-portfolio.netlify.app/project/fooddeliverywebsite/",
      sourceLink: "https://github.com/harshitdixit9680/FoodDeliveryWebsite",
      ProjectImage:foodDeliveryWebsite
    },
    {
      id: 10,
      title: "Dance Website",
      date: "15th May, 2022",
      description:
        " An application where you upload your images fro  local storage and can be used by any one all over across the world.",
      // liveLink: "project/FoodDeliveryWebsite/index.html",
      sourceLink: "https://github.com/harshitdixit9680/DanceWebsite",
      ProjectImage:dance
    },
    
    {
      id: 11,
      title: "Captcha Form",
      date: "11TH DEC 2021",
      description:
        "Creating A Captcha Form Taking a Form And Verify the Captcha",
      liveLink: "https://harshitdixit9680.github.io/captcha-form/",
      sourceLink: "https://github.com/harshitdixit9680/captcha-form",
      ProjectImage:captchaForm
    },
    {
      id: 12,
      title: "Crypto Form",
      date: "11TH DEC 2021",
      description:
        "Creating A Crypto Form Details Take a form data and post",
      liveLink: "https://harshitdixit9680.github.io/crypto/",
      sourceLink: "https://github.com/harshitdixit9680/crypto",
      ProjectImage:cryptoForm
    },
    {
      id: 13,
      title: "Count Down Timer",
      date: "22TH MAR 2024",
      description:
        "Implement a countdown timer that functions as a stopwatch, including start, stop, and reset features. Also, add sorting by name and search functionality to the user table.",
      liveLink: "https://assignmentsamtaai.netlify.app/",
      sourceLink: "https://github.com/harshitdixit9680/assesment",
      ProjectImage:countDownTimer
    },
    {
      id: 14,
      title: "E-commerce-APP",
      date: "28TH JAN 2021",
      description:
        "Robust E-commerce platform with seamless user experience, advanced search, secure payment, and dynamic product management..",
      // liveLink: "https://assignmentsamtaai.netlify.app/",
      sourceLink: "https://github.com/harshitdixit9680/ECOMMERCE-APP",
      ProjectImage:ecommerce
    },
    {
      id: 15,
      title: "Dice Roller-APP",
      date: "2oTH MAR 2021",
      description:
        "Robust E-commerce platform with seamless user experience, advanced search, secure payment, and dynamic product management..",
      // liveLink: "https://assignmentsamtaai.netlify.app/",
      sourceLink: "https://github.com/harshitdixit9680/DiceRollerApp",
      ProjectImage:dice
    },
    {
      id:16,
      title: "Colors-Views",
      date: "26th April, 2021",
      description:
        " in this project touch to any place in your android change a color this places, It's using a kotlin language in Android Studio.",
      // liveLink: "project/FoodDeliveryWebsite/index.html",
      sourceLink: "https://github.com/harshitdixit9680/Colors-Views",
      ProjectImage:colorViews
    },
   
    // Add more projects if you have them
  ];

  return (
    <>
      <div className="heading-section mb-3 text-center  ">
        <span className="subheading ">Project</span>
        <h3 className="mb-4 WOO">Harshit Dixit Portfolio</h3>
      </div>

   

      {/* THis is the new card for the Project */}
      <Grid
        m={1}
        templateColumns="repeat(4, 1fr)"
        gap={3}
        className="blogcontainer"
      >
     {projects.map((data) => (
  <div key={data.id} className="nft">
    <div className="main">
      <img
        className="tokenImage"
        src={data?.ProjectImage}
        alt="NFT"
      />
      <h2>{data?.title}</h2>
      <p className="description">{data.description}</p>
      <div className="tokenInfo">
        <div className="duration">
          <ins>◷</ins>
          <p>{data.date}</p>
        </div>
      </div>
      <hr />
      <div className="creator">
        <div className="wrapper">
          <img
            src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
            alt="Creator"
          />
        </div>
        <p>
          <ins>Creation of</ins> Harshit Dixit
        </p>
      </div>
    </div>

    <div className="card-back">
      <a href={data.liveLink} target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M5 12h14v2H5z" fill="#fff"/></svg>
        Project Live
      </a>
      <a href={data.sourceLink} target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M5 12h14v2H5z" fill="#fff"/></svg>
        Source Code
      </a>
    </div>
  </div>
))}

      </Grid>
    </>
  );
};

export default Project;
