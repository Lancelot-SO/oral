/* eslint-disable no-unused-vars */
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import banner from "./assets/oralbanner.png";
import bannermobile from "./assets/bannermobile.png";
import logo from "./assets/logo.png";

import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const form = useRef();
  const [selectedType, setSelectedType] = useState("Anonymous");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9qhefcl', 'template_gweq0p9', form.current, {
        publicKey: 'aV-FvEfOZg7fbxTN2',
      })
      .then(
        () => {
          toast.success('Message sent successfully!');
        },
        (error) => {
          toast.error('Failed to send message. Please try again.');
        },
      );
    e.target.reset();
  };

  return (
    <div className=''>
      <ToastContainer />
      <div className='relative'>
        {/* Desktop Banner */}
        <img src={banner} alt='banner'
          loading='lazy'
          className='hidden object-cover lg:block w-full h-[100vh]'
        />
        {/* Mobile Banner */}
        <img src={bannermobile} alt='banner'
          loading='lazy'
          className='lg:hidden block w-full h-[1250px]'
        />

        {/* logo */}
        <div className='absolute top-5 left-5 smallS8:top-2 smallS8:left-2'>
          <img src={logo} alt='banner'
            loading='lazy'
            className=''
          />
        </div>
      </div>

      <div className="overflow-x-hidden absolute lg:top-[130px] lg:left-[1150px] vl:left-[75%] xxl:left-[75%] top-[48%] left-[10%] 
      xsm:left-[6%] xsm:top-[84%] smallS8:top-[74%] smallS8:left-[4%] small:top-[55%] 
      md:left-[30%] md:top-[50%] nsm:top-[60%] nsm:left-[10%] xxsm:top-[64%] xxsm:left-[7%] rsm:top-[60%] rsm:left-[10%]">
        <div className="flex justify-center">
          <div className="bg-white/60 backdrop-blur-md shadow-md rounded-lg p-6 w-full max-w-md smallS8:max-w-sm smallS8:p-4 md:max-w-lg lg:max-w-xl lg:h-[80vh] h-auto overflow-y-auto custom-scrollbar">
            <h1 className="text-2xl font-bold text-center mb-6 smallS8:text-lg md:text-xl lg:text-2xl">
              Make A Submission
            </h1>
            <form ref={form} onSubmit={sendEmail} encType="multipart/form-data">
              <div className="mb-4">
                <label
                  htmlFor="dropdown"
                  className=" text-lg font-medium text-black smallS8:text-sm md:text-base lg:text-lg flex items-center"
                >
                  Type of Submission
                  <div className="relative group ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>

                  </div>

                </label>

                <select
                  id="dropdown"
                  name="type"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 smallS8:p-1 md:p-2"
                >
                  <option value="Anonymous">Anonymous</option>
                  <option value="Whistleblowing">Whistleblowing</option>
                  <option value="Idea">Idea</option>
                </select>
              </div>

              {/* Conditionally Render Fields Based on Selection */}
              {selectedType === "Anonymous" && (
                <>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-lg font-medium text-black smallS8:text-sm md:text-base lg:text-lg"
                    >
                      Your Anonymous Message <b className="text-red-500">*</b>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Type your message here..."
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md resize-none shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 smallS8:sm:text-xs smallS8:p-1 md:p-2 md:sm:text-base"
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="file"
                      className="block text-lg font-medium text-black smallS8:text-sm md:text-base lg:text-lg"
                    >
                      Attach a Document (optional)
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      className="mt-2 block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-green-700 hover:file:bg-purple-100 smallS8:file:py-1 smallS8:file:px-2 md:file:py-3 md:file:px-6"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black smallS8:py-1 smallS8:text-sm md:py-2 md:text-base lg:py-3"
                  >
                    Send Message
                  </button>
                </>
              )}

              {selectedType === "Whistleblowing" && (
                <>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-lg font-medium text-black smallS8:text-sm md:text-base lg:text-lg"
                    >
                      Your Whistleblowing Message <b className="text-red-500">*</b>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Type your message here..."
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md resize-none shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 smallS8:sm:text-xs smallS8:p-1 md:p-2 md:sm:text-base"
                    ></textarea>
                  </div>

                  {/* Email and Phone fields for Whistleblowing */}
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-lg font-medium text-black smallS8:text-sm md:text-base lg:text-lg"
                    >
                      Your Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 smallS8:sm:text-xs smallS8:p-1 md:p-2"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium text-black smallS8:text-sm md:text-base lg:text-lg"
                    >
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email address"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 smallS8:sm:text-xs smallS8:p-1 md:p-2"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="file"
                      className="block text-lg font-medium text-black smallS8:text-sm md:text-base lg:text-lg"
                    >
                      Attach a Document (optional)
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      className="mt-2 block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-green-700 hover:file:bg-purple-100 smallS8:file:py-1 smallS8:file:px-2 md:file:py-3 md:file:px-6"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black smallS8:py-1 smallS8:text-sm md:py-2 md:text-base lg:py-3"
                  >
                    Send Message
                  </button>
                </>
              )}

              {selectedType === "Idea" && (
                <>
                  <div className="mb-4">
                    <label
                      htmlFor="project-name"
                      className="block text-lg font-medium text-black smallS8:text-sm md:text-base lg:text-lg"
                    >
                      Project Name
                    </label>
                    <input
                      type="text"
                      id="project-name"
                      name="project-name"
                      placeholder='Project Name'
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 smallS8:sm:text-xs smallS8:p-1 md:p-2 md:sm:text-base"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-lg font-medium text-black smallS8:text-sm md:text-base lg:text-lg"
                    >
                      Project Description
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Type your message here..."
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md resize-none shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 smallS8:sm:text-xs smallS8:p-1 md:p-2 md:sm:text-base required"
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium text-black smallS8:text-sm md:text-base lg:text-lg"
                    >
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder='Enter Email Address'
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 smallS8:sm:text-xs smallS8:p-1 md:p-2"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-lg font-medium text-black smallS8:text-sm md:text-base lg:text-lg"
                    >
                      Your Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder='055*****89'
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 smallS8:sm:text-xs smallS8:p-1 md:p-2"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="file"
                      className="block text-lg font-medium text-black smallS8:text-sm md:text-base lg:text-lg"
                    >
                      Attach a Document (optional)
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      className="mt-2 block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-green-700 hover:file:bg-purple-100 smallS8:file:py-1 smallS8:file:px-2 md:file:py-3 md:file:px-6"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black smallS8:py-1 smallS8:text-sm md:py-2 md:text-base lg:py-3"
                  >
                    Submit Idea
                  </button>
                </>
              )}

              <div className="mt-6 border-t pt-4">
                <ul className="text-sm text-black space-y-2 smallS8:text-xs md:text-sm lg:text-base">
                  <li className="flex items-center">
                    <FaPhoneAlt className="text-green-600 mr-2 smallS8:text-sm md:text-base" />
                    <span className="font-bold">Tel:</span> 0800900111
                  </li>
                  {/* <li className="flex items-center">
                    <FaWhatsapp className="text-green-500 mr-2 smallS8:text-sm md:text-base" />
                    <span className="font-bold">WhatsApp: </span> 0800900111
                  </li> */}
                  <li className="flex items-center">
                    <FaEnvelope className="text-green-600 mr-2 smallS8:text-sm md:text-base" />
                    <span className="font-bold">Email:</span>{" "}
                    <a
                      href="mailto:public@oralgh.org"
                      className="text-green-500 hover:underline"
                    >
                      public@oralgh.org
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
