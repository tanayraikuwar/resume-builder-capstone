import React from "react";
import "./myCSS/Home.css";
import resume from "./Images/resume.jpg"
import resume2 from "./Images/resume2.jpg"
import resume3 from "./Images/resume3.jpg"
import resume4 from "./Images/resume4.jpg"
import { Link } from "react-router-dom";




const Home = () => {

  return (
    <div className="mainHome">
      <div className="template">
        <h2>Templates</h2>
        <h6>Select A Template to get Started</h6>
      </div>
      <main>
        <div className="grid-container">

          <div className="grid-item grid-item-1">
          <Link to={"/myresume/changePersonalDetails"}> <button className="Mybtn btn btn-primary" onClick={
            console.log("template2")
          }> Use Template</button>
          </Link>
            <img src={resume} alt="resume" />
            
          </div>

          <div className="grid-item grid-item-2">
          <Link to={"/myresume/changePersonalDetails"}><button className="Mybtn btn btn-primary" onClick={() => {
              console.log("template2")
            }}>Use Template</button></Link>
            <img src={resume2} alt="resume" />
          
          </div>

          <div className="grid-item grid-item-3">
          <Link to={"/myresume/changePersonalDetails"}><button className="Mybtn btn btn-primary" onClick={() => {
              console.log("template3")
            }}>Use Template</button></Link>
            <img src={resume3} alt="resume" />
           
          </div>

          <div className="grid-item grid-item-4">
          <Link to={"/myresume/changePersonalDetails"}><button className="Mybtn btn btn-primary" onClick={() => {
              console.log("template4")
            }}>Use Template</button></Link>
            <img src={resume4} alt="resume" />
          
          </div>

        </div>
      </main>
    </div>
  );
}

export default Home;