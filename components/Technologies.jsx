import React from "react";
import { IconContext } from "react-icons";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiCss3 } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoVue } from "react-icons/io";

const Technologies = () => {
  return (
    
    <div className="w-full pb-10 px-12 bg-[#ABC7C7] dark:bg-greyish">
      <h3 className="leading-10 mb-8 text-lightBlue">Technologies I use</h3>
      <IconContext.Provider value={{color:"#779393", size:"3rem"}}>
        <div className="flex flex-wrap align-center justify-between">
          <FaHtml5 />
          <TbBrandNextjs />
          <RiReactjsLine />
          <SiCss3 />
          <SiTailwindcss />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Technologies;
