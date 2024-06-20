import React from "react";
import WeatherApp from "../Images/WeatherApp.png";
import NewsApp from "../Images/News_App.jpg";
import Netflix from "../Images/NetflixApp.webp";

const ProjectCard = ({ image, title, description, technologies, link }) => {
  return (
    <div
      className="project_card"
      id="Project"
      data-aos="flip-right"
      data-aos-duration="1000"
    >
      <div className="project_image">
        <img src={image} height="150px" width="150px" alt={title} />
      </div>
      <h2 className="project_title">{title}</h2>
      <p className="project_description">{description}</p>
      <p className="project_technologies">{technologies}</p>
      {link && (
        <a
          href={link}
          className="project_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          See Project
        </a>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <div className="container barun">
      <h1 className="projects_h1">Projects</h1>
      <div className="projects_barun">
        <ProjectCard
          image={WeatherApp}
          title="Weather App"
          description="A web application to check the current weather and forecast."
          technologies="React.js, API, CSS"
          link="https://github.com/Barun-Mishra-09/Weather-app"
        />

        <ProjectCard
          image={NewsApp}
          title="News App"
          description="Real-time news updates from various sources, personalized for user convenience."
          technologies="React js, Api request, Axios,  React-
                    Router"
          link="https://github.com/Barun-Mishra-09/NewsApp"
        />

        <ProjectCard
          image={Netflix}
          title="Netflix clone"
          description="A Netflix clone is a replica streaming platform offering on-demand movies and shows."
          technologies="Redux, Axios, React Router"
          link="https://github.com/Barun-Mishra-09/NewsApp"
        />
      </div>
    </div>
  );
};

export default Projects;
