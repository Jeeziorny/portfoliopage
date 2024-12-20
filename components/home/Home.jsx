"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Social from "../Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(/img/slider/home.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Kamil Jeziorny</h3>
            <h4 className="typer">
              <ReactTyped
                strings={[
                  "Fullstack",
                  "IT Services",
                  "Freelance",
                ]}
                loop
                typeSpeed={80}
              />
            </h4>

            <p className="job">
              Creative Developer based in Wrocław. Happy to make life easier.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
