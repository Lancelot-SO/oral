/* eslint-disable no-unused-vars */
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import banner from "./assets/oralbanner.png";
import bannermobile from "./assets/bannermobile.png";
import logo from "./assets/logo.png";
import axios from "axios";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useState } from 'react';
// import emailjs from '@emailjs/browser';

function App() {
  const [selectedType, setSelectedType] = useState("Anonymous");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [whistleData, setwhistleData] = useState({
    email: "",
    mobile_number: "",
    message: "",
  });

  const [ideaData, setIdeaData] = useState({
    project_name: "",
    project_description: "",
    email: "",
    mobile_number: "",
  });

  // Handle input changes for whistle
  const handleChange = (e) => {
    const { name, value } = e.target;
    setwhistleData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle input changes
  const handleIdeaChange = (e) => {
    const { name, value } = e.target;
    setIdeaData((prev) => ({ ...prev, [name]: value }));
  };

  //handle file change
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  //handle form submission for anonymous
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("message", message);
    if (file) {
      formData.append("attachment", file);
    }

    //post method for anonymous
    try {
      const response = await axios.post(
        "https://oralgh-api.interactivedigital.com.gh/api/anon-submission",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Submission successful!");
      console.log(response.data);

      // Clear the form fields
      setMessage("");
      setFile(null);
      document.getElementById("attachment").value = ""; // Clear the file input field
    } catch (error) {
      console.error("Error submitting the form", error);
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle whistleform submission
  const handleWhistleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionWhistleData = new FormData();
    submissionWhistleData.append("email", whistleData.email);
    submissionWhistleData.append("mobile_number", whistleData.mobile_number || ""); // Optional field
    submissionWhistleData.append("message", whistleData.message);

    if (file) {
      submissionWhistleData.append("attachment", file);
    }

    try {
      const response = await axios.post(
        "https://oralgh-api.interactivedigital.com.gh/api/whistleblower-submission",
        submissionWhistleData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Submission successful!");
      console.log("API Response:", response.data);

      // Clear the form fields
      setwhistleData({ email: "", mobile_number: "", message: "" });
      setFile(null);
      document.getElementById("file").value = ""; // Clear file input field
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  // Handle ideaform submission
  const handleIdeaSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionIdeaData = new FormData();
    submissionIdeaData.append("project_name", ideaData.project_name);
    submissionIdeaData.append("project_description", ideaData.project_description);
    submissionIdeaData.append("email", ideaData.email);
    submissionIdeaData.append("mobile_number", ideaData.mobile_number || ""); // Optional field

    if (file) {
      submissionIdeaData.append("attachment", file);
    }

    try {
      const response = await axios.post(
        "https://oralgh-api.interactivedigital.com.gh/api/ideas-submission",
        submissionIdeaData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Submission successful!");
      console.log("API Response:", response.data);

      // Clear the form fields
      setIdeaData({ project_name: "", project_description: "", email: "", mobile_number: "" });
      setFile(null);
      document.getElementById("file").value = ""; // Clear file input field
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=''>
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
          className='lg:hidden block w-full h-[1280px]'
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
        <div className="flex justify-center flex-col">
          <div className="bg-white/60 backdrop-blur-md shadow-md border-[8px]
          rounded-[80px] p-6 w-full max-w-md smallS8:max-w-sm smallS8:p-4 md:max-w-lg lg:max-w-xl lg:h-[70vh] h-auto overflow-y-auto custom-scrollbar">
            <h1 className="text-2xl font-bold text-center mb-6 text-green-600 smallS8:text-lg md:text-xl lg:text-2xl">
              Make A Submission
            </h1>
            <div>
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
                  <form onSubmit={handleSubmit}>
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
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
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
                        id="attachment"
                        name="attachment"
                        className="mt-2 block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-green-700 hover:file:bg-purple-100 smallS8:file:py-1 smallS8:file:px-2 md:file:py-3 md:file:px-6"
                        onChange={handleFileChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black smallS8:py-1 smallS8:text-sm md:py-2 md:text-base lg:py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Send Message"}
                    </button>
                  </form>
                </>
              )}

              {selectedType === "Whistleblowing" && (
                <>
                  <form onSubmit={handleWhistleSubmit}>

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
                        value={whistleData.email}
                        onChange={handleChange}
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
                        type="number"
                        id="mobile_number"
                        name="mobile_number"
                        placeholder="Your phone number"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 smallS8:sm:text-xs smallS8:p-1 md:p-2"
                        value={whistleData.mobile_number}
                        onChange={handleChange}
                      />
                    </div>

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
                        value={whistleData.message}
                        onChange={handleChange}
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
                        name="attachment"
                        className="mt-2 block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-green-700 hover:file:bg-purple-100 smallS8:file:py-1 smallS8:file:px-2 md:file:py-3 md:file:px-6"
                        onChange={handleFileChange}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black smallS8:py-1 smallS8:text-sm md:py-2 md:text-base lg:py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Send Message"}
                    </button>
                  </form>
                </>
              )}

              {selectedType === "Idea" && (
                <>
                  <form onSubmit={handleIdeaSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="project-name"
                        className="block text-lg font-medium text-black smallS8:text-sm md:text-base lg:text-lg"
                      >
                        Project Name
                      </label>
                      <input
                        type="text"
                        id="project_name"
                        name="project_name"
                        placeholder='Project Name'
                        required
                        value={ideaData.project_name}
                        onChange={handleIdeaChange}
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
                        name="project_description"
                        rows="4"
                        placeholder="Type your message here..."
                        required
                        value={ideaData.project_description}
                        onChange={handleIdeaChange}
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
                        value={ideaData.email}
                        onChange={handleIdeaChange}
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
                        type="number"
                        id="mobile_number"
                        name="mobile_number"
                        placeholder='055*****89'
                        required
                        value={ideaData.mobile_number}
                        onChange={handleIdeaChange}
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
                        name="attachment"
                        onChange={handleFileChange}
                        className="mt-2 block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-green-700 hover:file:bg-purple-100 smallS8:file:py-1 smallS8:file:px-2 md:file:py-3 md:file:px-6"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black smallS8:py-1 smallS8:text-sm md:py-2 md:text-base lg:py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Idea"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          <div className="mt-4 max-w-md md:max-w-lg lg:max-w-xl h-[70px] flex border-2 border-white rounded-[20px] bg-white/60 backdrop-blur-md shadow-md">
            <div className='flex flex-col border-2 border-l-0 border-t-0 border-b-0 border-white 
            rounded-l-[20px] w-[62px] bg-[#076F32] text-white rounded-tr-[20px] items-center justify-center gap-4'>
              <FaPhoneAlt />
              <FaEnvelope />
            </div>
            <div className='flex flex-col pl-10 justify-center gap-2 text-white'>
              <span>0800900111</span>
              <span>public@oralgh.org</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
