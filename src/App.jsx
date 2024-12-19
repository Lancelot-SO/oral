/* eslint-disable no-unused-vars */
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import banner from "./assets/oralbanner.png";
import bannermobile from "./assets/bannermobile.png"
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const form = useRef();

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
    <div>
      <ToastContainer />
      <div className='relative'>
        {/* Desktop Banner */}
        <img src={banner} alt='banner'
          loading='lazy'
          className='hidden lg:block w-full h-[100vh]'
        />
        {/* Mobile Banner */}
        <img src={bannermobile} alt='banner'
          loading='lazy'
          className='lg:hidden block w-full h-[100vh]'
        />
      </div>

      <div className='absolute lg:top-[170px] lg:left-[1000px] top-[45%] left-[0%] md:left-[5%] md:top-[45%] right-0 sm:left-[10%] sm:top-[50%]'>
        <div className="flex justify-center">
          <div className="bg-white/60 backdrop-blur-md shadow-md rounded-lg p-6 w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-6">
              Drop Anonymous Tip
            </h1>
            <form ref={form} onSubmit={sendEmail} encType="multipart/form-data">
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-black"
                >
                  Your Anonymous Message <b className='text-red-500'>*</b>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Type your message here..."
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md resize-none shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2"
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="file"
                  className="block text-lg font-medium text-black"
                >
                  Attach a Document (optional)
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  className="mt-2 block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-green-700 hover:file:bg-purple-100"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Send Message
              </button>

              <div className="mt-6 border-t pt-4">
                <ul className="text-sm text-black space-y-2">
                  <li className="flex items-center">
                    <FaPhoneAlt className="text-green-600 mr-2" />
                    <span className="font-bold">Tel:</span> 0800900111
                  </li>
                  <li className="flex items-center">
                    <FaWhatsapp className="text-green-500 mr-2" />
                    <span className="font-bold">WhatsApp:</span> 0800900111
                  </li>
                  <li className="flex items-center">
                    <FaEnvelope className="text-green-600 mr-2" />
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
