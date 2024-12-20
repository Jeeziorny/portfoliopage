import React from "react";

const Intro = () => {
  const introContent = {
    image: "/img/slider/aboutme.jpg",
    name: "Kamil Jeziorny",
    designation: "Web Developer",
    text: (
      <>
        <p>
          Hi, my name is Kamil and I'm a programmer. I prefer working as a backend dev with cloud,
          but if you want me to create an interface for human, not other program, I'll handle that.
        </p>
        <p>
          My area of speciality can be described as web development, but I prefer to call it problem solving.
          Whether you're representing an IT company that hire full time or prefer B2B service I can help you.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
