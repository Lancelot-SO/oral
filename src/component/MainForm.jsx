/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TipsModal from "./TipsModal";
import report from "../assets/report/anonymous.png";
import whistler from "../assets/report/whistler.png";
import idea from "../assets/report/idea.png";
import AnonymousForm from "./AnonymousForm";
import WhistleblowingForm from "./WhistleblowerForm";
import IdeaForm from "./IdeaForm";
import defaultImg from "../assets/report/report.png";  // Default image
import flag2 from "../assets/hero/flag2.png"
import { FaLock, FaShieldAlt, FaUserShield } from "react-icons/fa";


function MainForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [submissionType, setSubmissionType] = useState("");

    // Determine background image based on the selected submission type
    const getIllustrationImage = () => {
        if (!submissionType) {
            return defaultImg;  // Return default image if no selection is made
        }
        switch (submissionType) {
            case "general":
                return report;
            case "whistler":
                return whistler;
            case "idea":
                return idea;
            default:
                return defaultImg;  // Fallback to default image if no match
        }
    };

    return (
        <div>
            <div className="grid lg:grid-cols-2 min-h-[420px]">
                {/* Illustration Side */}
                <div className="relative block lg:block bg-gradient-to-br from-pink-100 via-green-500 to-green-900 p-4">
                    <img
                        src={getIllustrationImage()}
                        alt="illustration"
                        loading="lazy"
                        className="object-contain h-full w-full"
                    />
                </div>


                {/* Form Side */}
                <div className="p-4 bg-white">
                    <TipsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

                    <h2 className="flex font-bold lg:text-[32px] text-[20px] items-center justify-center mb-2">
                        Make A Submission
                    </h2>

                    {/* Dropdown Section (Always Visible) */}
                    <div className="space-y-2 mb-4 max-w-md mx-auto">
                        <div className="relative">
                            <label
                                htmlFor="dropdown"
                                className="text-base font-medium text-black smallS8:text-sm md:text-base lg:text-base flex items-center"
                            >
                                Type of Submission
                                <div
                                    className="relative group ml-2 cursor-pointer"
                                    onClick={() => setIsModalOpen(true)}
                                >
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
                                className="block w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                defaultValue=""
                                onChange={(e) => setSubmissionType(e.target.value)}
                            >
                                <option value="" disabled>
                                    Type of submission
                                </option>
                                <option value="general">Anonymous</option>
                                <option value="whistler">Whistleblowing</option>
                                <option value="idea">Idea</option>
                            </select>
                        </div>
                    </div>

                    {/* Conditionally render the appropriate form */}
                    {submissionType === "general" ? (
                        <AnonymousForm />
                    ) : submissionType === "whistler" ? (
                        <WhistleblowingForm />
                    ) : submissionType === "idea" ? (
                        <IdeaForm />
                    ) : (
                        <form className="max-w-md mx-auto h-[360px] overflow-y-auto space-y-4">
                            <div className="space-y-2">
                                <textarea
                                    placeholder="Message"
                                    disabled
                                    className="w-full border border-gray-300 rounded-lg p-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-green-500"
                                ></textarea>
                            </div>

                            <div className="border-2 border-dashed rounded-lg p-4 text-center space-y-2">
                                <div className="flex items-center justify-center">
                                    <svg
                                        className="h-6 w-6 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5-5m0 0l5 5m-5-5v12"
                                        />
                                    </svg>
                                </div>
                                <div className="text-sm text-gray-600">
                                    Select a file or drag and drop here
                                </div>
                                <input type="file" className="hidden" id="file-upload" />
                                <button
                                    type="button"
                                    disabled
                                    className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none"
                                >
                                    SELECT FILE
                                </button>
                            </div>

                            <button
                                type="submit"
                                disabled
                                className="w-full px-4 py-2 text-base font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:outline-none"
                            >
                                Send
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <section>
                <div className="w-full lg:h-[240px] bg-black flex flex-col lg:flex-row justify-between pl-6 lg:pl-16 relative">
                    <div className="w-full lg:w-[410px] h-auto flex flex-col mt-10 px-4">
                        <span className="lg:w-[530px] h-[67px] font-semibold text-[24px] lg:text-[37px] leading-[28px] lg:leading-[43px] text-white">
                            Your Security is Our Priority
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
    );
}

export default MainForm;
