import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// import images
import scnew from "../img/contact/scnew.png";
import scnew2 from "../img/contact/scnew2.png";
import contact from "../img/contact/zepol.png";
import contactMobile from "../img/contact/zepo.png";
import about from "../img/contact/aboutband.jpg";

import green from "../img/contact/green.jpg";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
import Loading from "../components/Loading";
const MySwal = withReactContent(Swal);
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    // don’t proceed if any validation error
    if (emailError || nameError || messageError) return;

    try {
      // fire off the request
      const response = await fetch(
        `${process.env.REACT_APP_EMAIL_API_CALL}/v1/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fromKey: "client_1",
            name,
            recipient: email,
            message,
          }),
        }
      );

      // try to get JSON payload even on error
      let payload = null;
      try {
        payload = await response.json();
      } catch {
        /* ignore parse errors */
      }

      // if we got a non-2xx status, pull out the real message
      if (!response.ok) {
        const errMsg =
          (payload && (payload.message || payload.error)) ||
          `HTTP ${response.status} ${response.statusText}`;
        throw new Error(errMsg);
      }

      // success alert
      await MySwal.fire({
        title: "Success",
        text: "Your message has been sent successfully!",
        icon: "success",
        confirmButtonText: "Close",
      });

      // reset your form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error sending email:", err);

      await MySwal.fire({
        title: "Error",
        text: err.message || "There was an error sending your message.",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className=" lg:pt-24 pt-12"
      style={{ marginBottom: "2rem" }} // Add margin to the bottom for mobile screens
    >
      <div className="container mx-auto h-full ">
        <div className="flex flex-col lg:flex-row-reverse h-full items-center justify-start pt-12 gap-x-8 text-center lg:text-left lg:overflow-hidden">
          {/* bg */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="hidden lg:flex absolute bottom-0 left-0 right-0 top-72 -z-10"
          ></motion.div>
          <h1 className="h1 lg:hidden text-white mt-10 lg:mt-0 text-[40px]">
            Contact Us
          </h1>
          {/* image (mobile view) */}
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition: transition1, duration: 1.5 }}
            className="lg:hidden px-4  self-center mb-8 w-full ml-2"
          >
            <img src={contactMobile} alt="" />
          </motion.div>
          {/* text & form */}
          <div className="lg:flex-1 lg:pt-0 px-4">
            <h1 className="h1 lg:block text-black font-medium lg:pt-0 pt-6 hidden">
              Contact Us
            </h1>
            {/* form */}
            <form onSubmit={sendEmail} className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <div className="lg:w-72">
                  <input
                    className="outline-none border-b border-b-text-gray-400 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-gray-600"
                    type="text"
                    name="from_name"
                    placeholder="Your name"
                    value={name}
                    onBlurCapture={() =>
                      !!name.trim() ? setNameError(false) : setNameError(true)
                    }
                    onChange={(e) => setName(e.target.value)}
                  />
                  {nameError && (
                    <p className="text-red-800 text-xs">
                      Please enter your name
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <input
                    className="outline-none border-b border-b-text-gray-400 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-gray-600"
                    type="text"
                    name="from_email"
                    placeholder="Your email address"
                    value={email}
                    onBlurCapture={() =>
                      !!email.trim() && validateEmail(email)
                        ? setEmailError(false)
                        : setEmailError(true)
                    }
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && (
                    <p className="text-red-800 text-xs">
                      Please enter a valid email address
                    </p>
                  )}
                </div>
              </div>

              <input
                className="outline-none border-b border-b-text-gray-400 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-gray-600"
                type="text"
                name="message"
                placeholder="Your message"
                value={message}
                required
                onBlurCapture={() =>
                  !!message.trim()
                    ? setMessageError(false)
                    : setMessageError(true)
                }
                onChange={(e) => setMessage(e.target.value)}
              />

              {messageError && (
                <p className="text-red-800 text-xs">
                  Your message must not be blank.
                </p>
              )}

              <button
                type="submit"
                className="btn mb-[30px] mx-auto rounded-md lg:mx-0 self-start"
              >
                Send it
              </button>
            </form>
          </div>
          {/* image */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ transition: transition1, duration: 1.5 }}
            className="lg:flex-1 hidden lg:flex justify-center items-center h-full ml-12"
          >
            <img src={about} width={350} className="rounded-md" alt="" />
          </motion.div>
        </div>
      </div>

      {/* {modalOpen && (
        <div
          id="info-popup"
          tabindex="-1"
          class="absolute w-full backdrop-blur-sm flex justify-center top-0 align-middle z-50 h-full mt-56 flexCenter"
        >
          <div class="relative  p-4 w-full max-w-lg h-full md:h-auto">
            <div class="flex flex-col relative items-center justify-center p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
              <div class="flex items-center flex-col mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                <img
                  src={green}
                  width={35}
                  height={35}
                  alt="success"
                  className="rounded-full"
                />
                <h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                  Message Sent!
                </h3>
                <div className="flex flex-col items-center">
                  <p>Thank you for your message!</p>
                  <p>I will get back to you as soon as possible.</p>
                </div>
              </div>
              <div class="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
                <div class="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                  <button
                    onClick={() => setModalOpen(false)}
                    id="close-modal"
                    type="button"
                    class="py-2 px-4 w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </motion.section>
  );
};

export default Contact;
