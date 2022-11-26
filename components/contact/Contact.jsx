import React from "react";
import Script from "next/script";

import { useEffect } from "react";

import Image from "next/image";
import astro from "../../public/assets/astrostar.png";

import { Form, Input, TextArea, Button } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import Swal from "sweetalert2";

const Contact = () => {
  const submitForm = () => {
    emailjs.init("bzGr4W6sh8998GKY2");

    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = (Math.random() * 100000) | 0;
        // these IDs from the previous steps
        emailjs.sendForm("myservice", "template_8atei1h", this).then(
          function () {
            console.log("SUCCESS!");
            Swal.fire({
              icon: "success",
              title: "Message Sent Successfully",
            });
          },
          function (error) {
            console.log("FAILED...", error);
            Swal.fire({
              icon: "error",
              title: "Ooops, something went wrong",
            });
          }
        );
      });
  };

  return (
    <div className="relative z-50 bg-[#496363] py-10 px-20 font-lora">
      <Script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      ></Script>
      ;
      <div className="absolute -top-5 -right-8 w-80 lg:-top-72 lg:-right-16 lg:rotate-45">
        <Image src={astro} alt="astro-img" />
      </div>
      <div className="w-full flex flex-col align-middle justify-between lg:flex-row gap-10 lg:pr-14">
        <div className="flex align-start justify-start lg:flex-col lg:justify-center">
          <h2 className="text-green text-5xl">Keep In Touch!</h2>
        </div>
        <div className="w-full p-10 rounded-xl backdrop-blur-xl text-grey text-xl bg-opaquegreyish lg:w-1/2 lg:-mt-40">
          <Form onSubmit={submitForm} id="contact-form">
            <input type="hidden" name="contact_number"></input>
            <Form.Field
              id="form-input-control-email"
              control={Input}
              label="Email"
              name="email"
              placeholder="Email…"
              required
              icon="mail"
              iconPosition="left"
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label="Name"
              name="name"
              placeholder="Name…"
              required
              icon="user circle"
              iconPosition="left"
            />
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Message"
              name="message"
              placeholder="Message…"
              required
            />
            <Button type="submit" className="bg-[#E6F4F1]">
              <h3 className=" text-green">Submit</h3>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
