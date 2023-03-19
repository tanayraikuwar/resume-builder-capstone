import React from "react";
import cv from "../assets/Images/cv.webp";
import "../assets/allCSS/pageCSS/About.css";

const About = () => {
  return (
    <div className="divAbout">
      <div className="main">
        <div className="mid-one">
          <h2 className="heading">
            Resume <br />
            Builder
          </h2>
          <br />
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            perferendis totam ut aut excepturi unde aspernatur laboriosam rerum
            hic vitae. Inventore laboriosam obcaecati consequuntur repudiandae
            culpa, itaque minus accusamus iure. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Iste, odio! Eveniet itaque nesciunt,
            voluptate eaque dolorum nobis exercitationem recusandae modi magnam
            corporis hic ipsum non ullam illo natus similique quas? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Consequatur, sed quis
            ipsa saepe quod qui omnis porro sapiente delectus, quaerat animi vel
            magnam voluptatibus pariatur hic vitae neque rerum. Mollitia? Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Provident,
            quidem eum! Animi ex itaque iusto modi sunt praesentium minima ut
            nam, dolore ducimus repellat ab accusamus reiciendis molestias totam
            rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus expedita accusamus assumenda, inventore vel dicta
            incidunt nesciunt. Tempora eveniet in molestias adipisci consectetur
            rerum, consequuntur quia officia quibusdam reiciendis itaque!
          </p>
        </div>
        <div className="mid-two">
          <img src={cv} alt="logo" />
        </div>
      </div>
      <br />
      <h3 className="line">Share with your friends</h3>
      <ul className="socialMediaLinks">
        <li>
          <a href="#facebook">
            <i className="bi bi-facebook fb"></i>
          </a>
        </li>
        <li>
          <a href="#linkedin">
            <i className="bi bi-linkedin linkedin"></i>
          </a>
        </li>
        <li>
          <a href="#whatsapp">
            <i className="bi bi-whatsapp whatsapp"></i>
          </a>
        </li>
        <li>
          <a href="#twitter">
            <i className="bi bi-twitter twitter"></i>
          </a>
        </li>
        <li>
          <a href="#envelope">
            <i className="bi bi-envelope-fill envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
