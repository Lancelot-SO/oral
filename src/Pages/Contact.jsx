/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import contactbg from "../assets/contact/contactbg.png"
import contact from "../assets/contact/contact1.png"
import flag2 from "../assets/hero/flag2.png"
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaLock, FaShieldAlt, FaUserShield } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();


        emailjs
            .sendForm('service_zdvl0th', 'template_pxt9jok', form.current, {
                publicKey: 'aV-FvEfOZg7fbxTN2',
                from_name: 'Oral Team',
            })
            .then(
                () => {
                    toast.success('Message sent successfully!');
                },
                // eslint-disable-next-line no-unused-vars
                (error) => {
                    toast.error('Failed to send message. Please try again.');
                },
            );
        e.target.reset();

    };
    return (
        <div>
            <ToastContainer />
            <div className="relative">
                <img
                    src={contactbg}
                    alt="about"
                    className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px]"
                    loading="lazy"
                />
                <div className="absolute top-[60%] sm:top-[65%] md:top-[54%] left-4 sm:left-8 md:left-[60px] transform -translate-y-1/2 sm:-translate-y-0 w-[90%] sm:w-[80%] md:w-[758px] h-auto flex flex-col gap-2 px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Contact Us
                    </h2>
                    <p className="text-white text-sm sm:text-base md:text-lg">
                        A secure portal to submit your information through the correct
                        channel, ensuring easy tracking of all submissions. Rest assured,
                        your data is fully protected.
                    </p>
                </div>
            </div>

            <section>
                <div className="relative w-full h-[500px]">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 z-0"
                    >
                        <img src={contact}
                            loading='lazy'
                            alt="contact"
                            className='w-full h-[100%] object-cover' />
                    </div>

                    {/* Form Card */}
                    <div className="absolute lg:left-[20%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-6 text-center">
                                Get in <span className="text-[#2B5335]">Touch</span>
                            </h2>

                            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name='name'
                                    className="w-full p-2 border border-gray-200 rounded-md"
                                />

                                <input
                                    type="email"
                                    placeholder="Email"
                                    name='personal_email'
                                    className="w-full p-2 border border-gray-200 rounded-md"
                                />

                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    name='mobile_number'
                                    className="w-full p-2 border border-gray-200 rounded-md"
                                />

                                <textarea
                                    placeholder="Enter your message"
                                    name='message'
                                    className="w-full p-2 border border-gray-200 rounded-md resize-none"
                                />


                                <button
                                    type="submit"
                                    className="w-full bg-[#2B5335] hover:bg-[#234429] text-white font-medium py-2 rounded-md"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-black text-white py-12 px-6">
                {/* Title Section */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">You can also contact us through</h2>
                    <p className="text-gray-400 mt-2">
                        Let’s embody your beautiful ideas together, simplify the way you
                        visualize your next big things.
                    </p>
                </div>

                {/* Contact Methods */}
                <div className="bg-white text-black rounded-lg shadow-md py-6 px-8 flex flex-col lg:flex-row justify-center items-center gap-6">
                    {/* Phone */}
                    <div className="flex items-center">
                        <div className="text-green-600 text-2xl mr-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 8.25v-1.5A2.25 2.25 0 015.25 4.5h1.5m9 0h1.5A2.25 2.25 0 0120.25 6.75v1.5m-15 9v1.5a2.25 2.25 0 002.25 2.25h1.5m9 0h1.5a2.25 2.25 0 002.25-2.25v-1.5m-3.75-15v15m-6.75-15v15m-6.75-15h15m-15 15h15"
                                />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold">PHONE</h4>
                            <p className="text-gray-600">0800900111</p>
                        </div>
                    </div>

                    {/* Fax */}
                    <div className="flex items-center">
                        <div className="text-green-600 text-2xl mr-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.5 7.5h1.75a2.25 2.25 0 012.25 2.25v9.75a2.25 2.25 0 01-2.25 2.25H5.75a2.25 2.25 0 01-2.25-2.25V9.75A2.25 2.25 0 015.75 7.5H7.5m9 0V4.5m0 0h-6v3m6 0H6m9 0v9m-6-3h6m-6 3h6"
                                />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold">FAX</h4>
                            <p className="text-gray-600">0800900111</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center">
                        <div className="text-green-600 text-2xl mr-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 10l8.25 5.25L19.5 10M21 6v12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold">EMAIL</h4>
                            <p className="text-gray-600">public@oralgh.org</p>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="w-full lg:h-[240px] bg-black flex flex-col lg:flex-row justify-between pl-6 lg:pl-16 relative">
                    <div className="w-full lg:w-[410px] h-auto flex flex-col mt-10 px-4">
                        <span className="lg:w-[420px] h-[87px] font-semibold text-[24px] lg:text-[37px] leading-[28px] lg:leading-[43px] text-white">
                            Your information is well protected with us...
                        </span>

                        <div className="lg:w-[1200px] lg:h-[100px] mt-2 py-2 flex gap-2 lg:flex-row flex-col items-center justify-between">
                            <div>
                                <div className="flex flex-col items-center text-center ">
                                    <div className="bg-green-200 text-green-500 p-2 rounded-full">
                                        <FaLock className="w-4 h-4" />
                                    </div>
                                    <h3 className="text-lg text-white font-semibold">End-to-End Encryption</h3>
                                    <p className="text-sm text-white">
                                        All communications are fully encrypted and secured.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col items-center text-center ">
                                    <div className="bg-green-200 text-green-500 p-2 rounded-full">
                                        <FaShieldAlt className="w-4 h-4" />
                                    </div>
                                    <h3 className="text-lg text-white font-semibold">Legal Protection</h3>
                                    <p className="text-sm text-white">
                                        Complete whistleblower protection under Act 720.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-green-200 text-green-500 p-2 rounded-full">
                                        <FaUserShield className="w-4 h-4" />
                                    </div>
                                    <h3 className="text-lg text-white font-semibold">Professional Handling</h3>
                                    <p className="text-sm text-white">
                                        Expert analysis and secure case management.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Flag Image */}
                    <div className="hidden lg:block mt-4 lg:mt-0 absolute bottom-0 right-0 lg:relative lg:right-auto lg:bottom-auto">
                        <img
                            src={flag2}
                            alt="Ghana Flag"
                            className="w-[200px] lg:w-auto h-auto"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact