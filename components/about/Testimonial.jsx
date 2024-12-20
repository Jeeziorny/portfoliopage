"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  // var settings = {
  //   dots: false,
  //   arrow: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 576,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };

  const testimonialContent = [
    {
      id: 1,
      text: `He always loved math. Now he sometimes help us fixing our old printer.`,
      avatar: "url(/img/testimonials/grandma.jpg)",
      name: "My grandmother",
      designation: "Pensioner",
    },
  ];

  return (
    <ul className="testimonila-slider-wrapper">
        {testimonialContent.map((item) => (
          <li key={item.id}>
            <div className="list_inner">
              <div className="text">
                <p>{item.text}</p>
              </div>
              <div className="details">
                <div className="image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: item.avatar,
                    }}
                  />
                </div>
                <div className="info">
                  <h3>{item.name}</h3>
                  <span>{item.designation}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );

  // return (
  //   <ul className="testimonila-slider-wrapper">
  //     <Slider {...settings} arrows={false}>
  //       {testimonialContent.map((item) => (
  //         <li key={item.id}>
  //           <div className="list_inner">
  //             <div className="text">
  //               <p>{item.text}</p>
  //             </div>
  //             <div className="details">
  //               <div className="image">
  //                 <div
  //                   className="main"
  //                   style={{
  //                     backgroundImage: item.avatar,
  //                   }}
  //                 />
  //               </div>
  //               <div className="info">
  //                 <h3>{item.name}</h3>
  //                 <span>{item.designation}</span>
  //               </div>
  //             </div>
  //           </div>
  //         </li>
  //       ))}
  //     </Slider>
  //   </ul>
  // );
};

export default Testimonial;
