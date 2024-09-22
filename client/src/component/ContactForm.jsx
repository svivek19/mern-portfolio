import React from "react";
import vivekContact from "../assets/vivek-contact.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-center text-xl mb-2 lg:text-2xl">
        Contact
        <span className="text-violet-400 font-semibold"> Here!</span>
      </h1>

      <div className="flex flex-col lg:flex-row justify-between gap-8 mt-8">
        <form className="flex flex-col justify-center gap-4 w-full lg:w-1/2">
          <div className="relative z-0">
            <input
              type="text"
              id="floating_standard"
              className="block py-2.5 px-0 w-full text-sm text-violet-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-violet-200 peer"
              placeholder=""
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-violet-100  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-violet-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Enter Your Name
            </label>
          </div>
          <div className="relative z-0">
            <input
              type="email"
              id="floating_standard"
              className="block py-2.5 px-0 w-full text-sm text-violet-400 bg-transparent border-0 border-b-2 border-gray-300 lowercase appearance-none  focus:outline-none focus:ring-0 focus:border-violet-200600 peer"
              placeholder=""
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-violet-100  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-violet-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Enter Your Email
            </label>
          </div>
          <div className="relative z-0">
            <textarea
              type="text"
              id="floating_standard"
              className="block py-2.5 px-0 w-full text-sm text-violet-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-violet-200600 peer"
              placeholder=""
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-violet-100  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-violet-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Message
            </label>
          </div>

          <div className="bg-violet-100 border border-violet-500 text-violet-950 w-fit px-2 cursor-pointer py-0 rounded-md">
            <button className="text-sm">Send Message</button>
          </div>
        </form>

        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <img
            src={vivekContact}
            alt="contact-img"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto animate-bounce"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-4">
        <div className="flex items-center gap-4 w-fit p-2 rounded-full text-violet-200 cursor-pointer border-2 border-violet-500 hover:border-4 hover:shadow-[0_0_10px_0_rgba(167,139,250,0.3)] transition-all duration-300">
          <a href="https://www.linkedin.com/in/svivek018/" target="_blank">
            <FaLinkedin size={30} />
          </a>
        </div>

        <div className="flex items-center gap-4 w-fit p-2 rounded-full text-violet-200 cursor-pointer border-2 border-violet-500 hover:border-4 hover:shadow-[0_0_10px_0_rgba(167,139,250,0.3)] transition-all duration-300">
          <a href="https://github.com/svivek19" target="_blank">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
