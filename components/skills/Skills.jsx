import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import { IconContext } from "react-icons";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="relative z-50 -mt-40 mx-auto" id="skills">
      <div className="backdrop-blur-xl z-20 bg-opaquegreen dark:bg-opaquegreyish -mt-50 p-10 rounded-xl flex flex-col align-middle justify-center text-center">
        <div className="text-lightBlue">
          <h2 className="text-3xl font-noto mb-6">Who am I</h2>
          <p className="text-lg font-lora">
            I am a problem solver who enjoys taking on new challenges and using
            code to automate and simplify problems. I am dedicated to
            bringing my clients' ideas to life by paying close attention to
            every detail and inevitably fulfilling their expectations. When I'm
            not coding, I like listening to astrophysics podcasts, watching anime,
            and learning about the incredible science of the human brain.
          </p>
          <Carousel
            responsive={responsive}
            infinite={true}
            className="skills__carousel  font-lora text-lg"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="item mt-5 mx-auto w-1/2 ">
              <IconContext.Provider value={{ color: "gold" }}>
                <div className="flex justify-between items-center">
                  <BsStarFill fontSize={"3rem"} />
                  <BsStarFill fontSize={"3rem"} />
                  <BsStarFill fontSize={"3rem"} />
                  <BsStarFill fontSize={"3rem"} />
                  <BsStarHalf fontSize={"3rem"} />
                </div>
              </IconContext.Provider>
              <h5>Problem Solving</h5>
            </div>
            <div className="item mt-5 mx-auto w-1/2">
              <IconContext.Provider value={{ color: "gold" }}>
                <div className="flex justify-between items-center">
                  <BsStarFill fontSize={"3rem"} />
                  <BsStarFill fontSize={"3rem"} />
                  <BsStarFill fontSize={"3rem"} />
                  <BsStarHalf fontSize={"3rem"} />
                  <BsStar fontSize={"3rem"} />
                </div>
              </IconContext.Provider>
              <h5>Team Work</h5>
            </div>
            <div className="item mt-5 mx-auto w-1/2">
              <IconContext.Provider value={{ color: "gold" }}>
                <div className="flex justify-between items-center">
                  <BsStarFill fontSize={"3rem"} />
                  <BsStarFill fontSize={"3rem"} />
                  <BsStarFill fontSize={"3rem"} />
                  <BsStarFill fontSize={"3rem"} />
                  <BsStar fontSize={"3rem"} />
                </div>
              </IconContext.Provider>
              <h5>Web Development</h5>
            </div>
            <div className="item mt-5 mx-auto w-1/2">
              <IconContext.Provider value={{ color: "gold" }}>
                <div className="flex justify-between items-center">
                  <BsStarFill fontSize={"3rem"} />
                  <BsStarFill fontSize={"3rem"} />
                  <BsStarFill fontSize={"3rem"} />
                  <BsStarFill fontSize={"3rem"} />
                  <BsStar fontSize={"3rem"} />
                </div>
              </IconContext.Provider>
              <h5>Scripting</h5>
            </div>
            <div className="item mt-5 mx-auto w-1/2">
              <IconContext.Provider value={{ color: "gold" }}>
                <div className="flex justify-between items-center">
                  <BsStarFill fontSize={"3rem"} />
                  <BsStarFill fontSize={"3rem"} />
                  <BsStarFill fontSize={"3rem"} />
                  <BsStarFill fontSize={"3rem"} />
                  <BsStarHalf fontSize={"3rem"} />
                </div>
              </IconContext.Provider>
              <h5>Creativity</h5>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Skills;
