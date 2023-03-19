import React from "react";
import "../assets/allCSS/pageCSS/Home.css";
import resume from "../assets/Images/resume.jpg"
import resume2 from "../assets/Images/resume2.jpg"
import resume3 from "../assets/Images/resume3.jpg"
import resume4 from "../assets/Images/resume4.jpg"
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import selectTemplate from "../Redux/Action/templateActions/selectTemplate";




const Home = (props) => {
  let dispatch = props.dispatch

  return (
    <div className="mainHome">
      <div className="template">
        <h2>Templates</h2>
        <h6>Select A Template to get Started</h6>
      </div>
      <main>
        <div className="grid-container">

          <div className="grid-item grid-item-1">
            <Link to={"/myresume/changePersonalDetails"}> <button className="Mybtn btn btn-primary"
              onClick={() => dispatch(selectTemplate("template1"))}> Use Template</button>
            </Link>
            <img src={resume} alt="resume" />

          </div>

          <div className="grid-item grid-item-2">
            <Link to={"/myresume/changePersonalDetails"}><button className="Mybtn btn btn-primary"
              onClick={() => dispatch(selectTemplate("template2"))} >Use Template</button></Link>
            <img src={resume2} alt="resume" />

          </div>

          <div className="grid-item grid-item-3">
            <Link to={"/myresume/changePersonalDetails"}><button className="Mybtn btn btn-primary"
              onClick={() => dispatch(selectTemplate("template3"))} >Use Template</button></Link>
            <img src={resume3} alt="resume" />

          </div>

          <div className="grid-item grid-item-4">
            <Link to={"/myresume/changePersonalDetails"}><button className="Mybtn btn btn-primary"
              onClick={() => dispatch(selectTemplate("template4"))} >Use Template</button></Link>
            <img src={resume4} alt="resume" />

          </div>

        </div>
      </main>
    </div>
  );
}

export default Home;