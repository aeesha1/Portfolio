import React from "react";

import AOS from "aos";

import { useEffect } from "react";
import "aos/dist/aos.css";
import Image from "next/image";
import Skills from "../skills/Skills";
import Technologies from "../Technologies";

import ecomHome from "../../public/assets/ecomHome.jpeg";
import connectHome from "../../public/assets/connectHome.jpeg";
import movieHome from "../../public/assets/movieHome.jpeg";
import restaurantHome from "../../public/assets/restHome.jpeg";

const Projects = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="text-center text-grey font-lora bg-lightBlue dark:bg-darkgreen dark:text-lightBlue">
      <div className="p-10 pb-20"><Skills /></div>
      
      <Technologies />

      <div className="p-10 pb-20">
      
        <h1 className="text-5xl py-10 text-green font-lora font-medium">Projects</h1>

        <div className="grid my-10 mx-2 font-cormorant lg:grid-cols-2 lg:gap-20 lg:mx-10">
          <div>
            <div
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-easing="ease-in-sine"
              data-os-delay="100"
              className="h-min mb-24 lg:mb-40"
            >
              <div className="relative w-full">
                <Image alt="project-img" src={ecomHome} className="rounded-xl" />
              </div>
              <div className="text">
                <h3 className="leading-10 font-bold text-xl">
                  Ecommerce Website
                </h3>
                <p>A responsive ecommerce site for headphones</p>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-easing="ease-in-sine"
              data-os-delay="200"
              className="h-min mb-24"
            >
              <div className="relative w-full">
                <Image alt="project-img" src={connectHome} className="rounded-xl" />
              </div>
              <div>
                <h3 className="font-bold text-xl">
                  Connect Four game
                </h3>
                <p>
                  A two player game where each player connect four blocks to win
                </p>
              </div>
            </div>
          </div>

          <div className="lg:mt-56">
            <div
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-os-delay="300"
              className="h-min mb-24 lg:mb-32"
            >
              <div className="relative  w-full">
                <Image alt="project-img"
                  src={restaurantHome}
                  object-fit="cover"
                  className="rounded-xl"
                />
              </div>
              <div>
                <h3 className="leading-10 font-bold text-xl">
                  Restaurant Landing Page
                </h3>
                <p>
                  An aesthetic responsive landing page for a restaurant to
                  showcase menus
                </p>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-easing="ease-in-sine"
              data-os-delay="400"
              className="h-min mb-24"
            >
              <div className="relative  w-full">
                <Image alt="project-img" src={movieHome} className="rounded-xl" />
              </div>
              <div>
                <h3 className="font-bold text-xl">
                  Movie Search Website
                </h3>
                <p>A movie search website to obtain information about movies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
