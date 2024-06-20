import React from "react";
import Html_Image from "../Images/Html_Image.jpg";
import CSS_Image from "../Images/CSS_Image.png";
import JS_Image from "../Images/Js_Image.png";
import ReactJs from "../Images/React_js_Image.png";
import ExpressJs from "../Images/Express_js_Image.png";
import NodeJs from "../Images/Node_js_Image.svg";
import MySql from "../Images/MySql_Image.jpg";
import MongoDB from "../Images/Mongo_db_Image.jpg";

function Skills() {
  return (
    <>
      <div className="container Skills" id="Skills">
        <h1 className="skills_h1">SKILLS</h1>
        <div className="img">
          <div className="html" data-aos="flip-left" data-aos-duration="1000">
            <img
              src={Html_Image}
              height="120px"
              width="120px"
              alt="html_image"
            />
            <h2>HTML</h2>
          </div>
          <div
            className="css skills"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src={CSS_Image} height="120px" width="120px" alt="CSS_image" />
            <h2>CSS</h2>
          </div>
          <div className="js" data-aos="flip-left" data-aos-duration="1000">
            <img src={JS_Image} height="120px" width="120px" alt="JS_Image" />
            <h2>JS</h2>
          </div>
          <div className="react" data-aos="flip-left" data-aos-duration="1000">
            <img src={ReactJs} height="120px" width="120px" alt="ReactJs" />
            <h2>React Js</h2>
          </div>
          <div
            className="express"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src={ExpressJs} height="120px" width="120px" alt="ExpressJs" />
            <h2>Express Js</h2>
          </div>
          <div className="node" data-aos="flip-left" data-aos-duration="1000">
            <img src={NodeJs} height="120px" width="120px" alt="NodeJs" />
            <h2>Node Js</h2>
          </div>
          <div className="mysql" data-aos="flip-left" data-aos-duration="1000">
            <img src={MySql} height="120px" width="120px" alt="MySql" />
            <h2>MySql</h2>
          </div>
          <div
            className="mongodb"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src={MongoDB} height="120px" width="120px" alt="MongoDB" />
            <h2>MongoDB</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
