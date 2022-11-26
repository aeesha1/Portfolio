import React from "react";

import { IconContext } from "react-icons";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { GiAstronautHelmet } from "react-icons/gi";
import Image from "next/image";

import astrofall from "../../public/assets/astrofall.png";

import ReactTypingEffect from "react-typing-effect";
import Link from "next/link";

const Banner = ({ mode, setMode }) => {
  return (
    <section className="relative z-20 min-h-screen  bg-light bg-cover bg-no-repeat dark:bg-dark">
      <div className="absolute bottom-24 -z-10 w-96 left-18 md:w-96 md:right-36 lg:top-20">
        <Image
          src={astrofall}
          object-fit="cover"
          className="rotate-45 lg:-rotate-90"
        />
      </div>
      <div className="z-50">
        <nav className="py-10 px-10 mb-12 flex justify-between backdrop-blur-md md:px-20">
          <div className="flex gap-2 items-center justify-center text-grey">
            <GiAstronautHelmet fontSize={"2rem"} />
            <h1 className="text-lg font-lora text-green dark:text-purple">
              Olamide Agboola
            </h1>
          </div>

          <ul className="flex items-center">
            <li className="bg-[#EEE8A9] text-[#005C70] dark:bg-[#9194D4] p-3 rounded-2xl">
              {mode == false ? (
                <BsFillMoonFill
                  onClick={() => setMode(!mode)}
                  className="cursor-pointer text-2xl"
                />
              ) : (
                <BsFillSunFill
                  onClick={() => setMode(!mode)}
                  className="cursor-pointer text-2xl"
                />
              )}
            </li>
            <Link href="/OLAMIDE_AGBOOLA.pdf" locale={false}>
              <li className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
                Resume
              </li>
            </Link>
          </ul>
        </nav>

        <div className="text-center p-10">
          <h2 className="text-8xl py-2 text-green font-extraBold font-lora">
            <ReactTypingEffect
              text={["Hi! I am Olamide."]}
              eraseDelay={"100000"}
            />
          </h2>
          <h3 className="text-2xl-py-2 text-grey font-cormorant dark:text-lightBlue">
            <ReactTypingEffect
              text={[
                "...a web developer",
                " ...a biomedical engineer",
                "... an AI enthusiast",
              ]}
            />
          </h3>
          {/* <p className="text-md py-5 leading-8 text-grey">
            An aspiring AI software engineering
          </p> */}
        </div>

        {/* <div className="text-5xl flex justify-center gap-16 py-3 text-grey">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
      </div> */}
      </div>
    </section>
  );
};

export default Banner;
