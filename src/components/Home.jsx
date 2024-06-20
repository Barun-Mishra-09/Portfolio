import React, { useEffect, useRef } from "react";
import Image from "../Images/My_image.jpg";
import Typed from "typed.js";

// we will use aos(Animate on scroll) for hiding and unhide the content while scrooling
// As it is very good library to use and  make your page dynamic
// for installing it use :- npm i aos

const Home = () => {
  const typedBarun = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My name is Barun Mishra",
        "I'm a full stack developer",
      ],
      typeSpeed: 90,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedBarun.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container Home" id="Home">
        <div className="Left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedBarun}></h1>
          <button className="btn_download">Download Resume</button>
        </div>

        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={Image} alt="My_images" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
