/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import contactbg from "../assets/contact/contactbg.png"
import contact from "../assets/contact/contact1.png"
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import security from "../assets/hero/security.png"
import { FaPhone } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();


        emailjs
            .sendForm('service_zdvl0th', 'template_itfqyvf', form.current, {
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
                <div className="absolute top-[60%] sm:top-[65%] md:top-[54%] left-4 sm:left-8 lg:left-[62px] transform -translate-y-1/2 sm:-translate-y-0 w-[90%] sm:w-[80%] md:w-[758px] h-auto flex flex-col gap-2 px-4">
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
                    <div className="absolute 4xl:left-[15%] lg:left-[20%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md
                     bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-6 text-center">
                                Get in <span className="text-[#2B5335]">Touch</span>
                            </h2>

                            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name='full_name'
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
                                    Send
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
                <div className="bg-white text-black rounded-lg shadow-md py-6 lg:w-[1344px] 4xl:w-[1750px] lg:ml-[55px] px-8 flex flex-col lg:flex-row justify-center items-center gap-6">
                    {/* Phone */}
                    <div className="flex items-center">
                        <div className="text-green-600 text-2xl mr-4">
                            <FaPhone />
                        </div>
                        <div>
                            <h4 className="font-bold">Phone</h4>
                            <p className="text-gray-600">080 - 090 - 011 - 1</p>
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
                <div className="relative bg-black py-10">
                    <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-20 mt-6 lg:mt-0">
                        {/* Left Section */}
                        <div className="text-white text-center lg:text-left mb-6 lg:mb-0">
                            <h2 className="text-[25px] sm:text-[30px] lg:text-[35px] font-medium w-full lg:w-[331px]">
                                YOUR SECURITY IS OUR PRIORITY
                            </h2>
                        </div>

                        {/* Right Section */}
                        <div className="flex flex-wrap justify-end ml-0 lg:pr-4 pr-0 gap-6 lg:w-[1041px] 4xl:w-[1400px] 4xl:pr-0">
                            {/* Card 1 */}
                            <div className="w-full sm:w-[250px] h-[110px] bg-gradient-to-r from-[#161F21] to-[#387A69] p-4 sm:p-6 text-white">
                                <h3 className="text-[13px] font-semibold mb-2">END-TO-END ENCRYPTION</h3>
                                <p className="text-sm">All communications are fully encrypted and secured.</p>
                            </div>

                            {/* Card 2 */}
                            <div className="w-full sm:w-[250px] h-[110px] bg-gradient-to-r from-[#161F21] to-[#387A69] p-4 sm:p-6 text-white">
                                <h3 className="text-[13px] font-semibold mb-2">LEGAL PROTECTION</h3>
                                <p className="text-sm">Complete whistleblower protection under Act 720.</p>
                            </div>

                            {/* Card 3 */}
                            <div
                                className="w-full sm:w-[250px] h-[110px] bg-cover bg-center text-white p-4 flex flex-col justify-end"
                                style={{
                                    backgroundImage: `url(${security})`,
                                }}
                            >
                                <h3 className="text-[13px] font-semibold mb-1">PROFESSIONAL HANDLING</h3>
                                <p className="text-sm">Expert analysis and secure case management.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact