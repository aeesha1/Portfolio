import React from "react";

import { IconContext } from "react-icons";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillPhone, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-lightBlue p-10 text-grey font-cormorant dark:bg-darkgreen dark:text-lightBlue">
      <h1 className="text-5xl mb-10 text-green text-center font-lora font-medium">
        Contacts
      </h1>
      <IconContext.Provider value={{ color: "#496363", size: "2rem" }}>
        <div className="flex flex-col gap-5 items-start justify-between mx-auto my-16 lg:w-1/2">
          <Link href="https://wa.me/08155940241" className="text-grey">
            <div className="flex items-center justify-start gap-2">
              <RiWhatsappFill />
              <h3 className="m-0">Whatsapp: 08155940241</h3>
            </div>
          </Link>
          <Link href="mailto:aisha.agboola18@gmail.com" className="text-grey">
            <div className="flex items-center justify-start gap-2">
              <MdEmail />
              <h3 className="m-0">Email: aisha.agboola18@gmail.com</h3>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/olamide-agboola-a10424229/" className="text-grey">
            <div className="flex items-center justify-start gap-2">
              <BsLinkedin />
              <h3 className="m-0">LinkedIn: Olamide Agboola</h3>
            </div>
          </Link>
          <Link href="https://github.com/aeesha1" className="text-grey">
            <div className="flex items-center justify-start gap-2">
              <AiFillGithub />
              <h3 className="m-0">GitHub: aeesha1</h3>
            </div>
          </Link>
          <div className="flex items-center justify-start gap-2">
            <AiFillPhone />
            <h3 className="m-0">Phone: 081559490241</h3>
          </div>
        </div>
      </IconContext.Provider>
      <p className="text-center">© 2022 Olamide Agboola. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
