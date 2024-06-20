import React from "react";
import Frontend_image from "../Images/FrontEnd_Imge.jpg";
import Backend_Image from "../Images/BackEnd_Image.jpg";
import Database_Image from "../Images/Database_Image.jpg";

function Experience() {
  return (
    <>
      <div className="container" id="Experience">
        <div className="exp_h1">
          <h1>EXPERIENCE</h1>
        </div>
        <div className="Exp" data-aos="zoom-in" data-aos-duration="1000">
          <div className="left_exp exp">
            <div className="front_img ">
              <img src={Frontend_image} alt="Frontend_image" />
            </div>
          </div>

          <div className="right">
            <h2> FRONT-END DEVELOPER</h2>

            <h4>
              →
              <i>
                {" "}
                Implement{" "}
                <b>
                  <u>Advanced CSS</u>
                </b>
                ,
                <b>
                  {" "}
                  <u>Animation</u>
                </b>
                and
                <b>
                  <u>Transition</u>
                </b>
                .
              </i>
            </h4>
            <h4>
              →
              <i>
                Collaborated with{" "}
                <b>
                  <u>UX/UI designer</u>
                </b>{" "}
                for making{" "}
                <b>
                  <u>Responsive</u>
                </b>
                , and{" "}
                <b>
                  <u>Interactive web application</u>
                </b>
                .
              </i>
            </h4>
            <h4>
              →{" "}
              <i>
                Build a{" "}
                <b>
                  <u>Single Page Application (SPA)</u>
                </b>{" "}
                Using React.
              </i>
            </h4>
          </div>
        </div>

        <div className="Exp" data-aos="zoom-in" data-aos-duration="1000">
          <div className="left_exp exp">
            <div className="front_img ">
              <img src={Backend_Image} alt="Backend_Image" />
            </div>
          </div>

          <div className="right">
            <h2> BACK-END DEVELOPER</h2>

            <h4>
              <i>
                → Develop a{" "}
                <b>
                  <u>RESTful API</u>
                </b>{" "}
                for a{" "}
                <b>
                  <u>blog, e-commerce site</u>
                </b>
                , or any other application.
              </i>
            </h4>
            <h4>
              <i>
                → Implement a user{" "}
                <b>
                  <u>Authentication</u>
                </b>{" "}
                with{" "}
                <b>
                  <u>Registration</u>, <u>login</u>, and <u>Password reset </u>{" "}
                </b>
                features.
              </i>
            </h4>
            <h4>
              →{" "}
              <i>
                Create a{" "}
                <b>
                  <u>Real-time chat application</u>
                </b>{" "}
                using WebSockets.
              </i>
            </h4>
          </div>
        </div>

        <div className="Exp" data-aos="zoom-in" data-aos-duration="1000">
          <div className="left_exp exp">
            <div className="front_img ">
              <img src={Database_Image} alt="Frontend_image" />
            </div>
          </div>

          <div className="right">
            <h2>DATABASE ENGINEER</h2>

            <h4>
              <i>
                → Experienced database engineer proficient in{" "}
                <b>
                  <u>MySQL and MongoDB</u>
                </b>
                .
              </i>
            </h4>
            <h4>
              <i>
                → Skilled in{" "}
                <b>
                  <u>Database design</u>
                </b>{" "}
                ,{" "}
                <b>
                  <u>optimisation, security and integrity management</u>
                </b>{" "}
                and more.
              </i>
            </h4>
            <h4>
              <i>
                → Collaborated with diverse teams on various{" "}
                <b>
                  <u>Database development projects</u>
                </b>
                .
              </i>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
