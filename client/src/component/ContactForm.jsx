import React, { useRef, useState, useEffect } from "react";
import vivekContact from "../assets/vivek-contact.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    let timer;
    if (isButtonDisabled) {
      timer = setTimeout(() => {
        setIsButtonDisabled(false);
      }, 120000);
    }
    return () => clearTimeout(timer);
  }, [isButtonDisabled]);

  const validateForm = () => {
    const errors = {};
    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    if (!name) {
      errors.name = "Name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!message) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsButtonDisabled(true);

    emailjs
      .sendForm("service_sjh3j4n", "template_i6792x3", form.current, {
        publicKey: "qJvuGIesUjpBHRGa9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSuccess(true);
          setIsError(false);
          form.current.reset();
          setFormErrors({});
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsError(true);
          setIsSuccess(false);
        }
      );
  };

  return (
    <div className="px-4 py-8">
      <h1 className="text-center text-xl mb-2 lg:text-2xl">
        Contact
        <span className="text-violet-400 font-semibold"> Here!</span>
      </h1>

      <div className="flex flex-col lg:flex-row justify-between gap-8 mt-8">
        <form
          className="flex flex-col justify-center gap-4 w-full lg:w-1/2"
          ref={form}
          onSubmit={handleSubmit}
        >
          <div className="relative z-0">
            <input
              type="text"
              name="name"
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
            {formErrors.name && (
              <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
            )}
          </div>
          <div className="relative z-0">
            <input
              type="email"
              name="email"
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
            {formErrors.email && (
              <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
            )}
          </div>
          <div className="relative z-0">
            <textarea
              type="text"
              name="message"
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
            {formErrors.message && (
              <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
            )}
          </div>

          {isSuccess && (
            <div className="text-green-500 text-sm">
              Message sent successfully!
            </div>
          )}
          {isError && (
            <div className="text-red-500 text-sm">
              Failed to send message. Please try again.
            </div>
          )}

          <div
            className={`bg-violet-100 border border-violet-500 text-violet-950 w-fit px-2 cursor-pointer py-0 rounded-md ${
              isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <button className="text-sm" disabled={isButtonDisabled}>
              {isButtonDisabled ? "Thank you" : "Send Message"}
            </button>
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
