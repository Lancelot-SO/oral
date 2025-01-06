/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import footerImg from "../assets/footer/footerImg.png";
import WhistleProtection from "./WhistleProtection";
import WhistleRight from "./WhistleRight";
import Terms from "./Terms";
import PrivacyPolicy from "./PrivacyPolicy";
import Faq from "./Faq";

const Footer = () => {
    const [isWhistleProtectionOpen, setIsWhistleProtectionOpen] = useState(false);
    const [isWhistleRightOpen, setIsWhistleRightOpen] = useState(false);
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [isFaqOpen, setIsFaqOpen] = useState(false);





    return (
        <div className="">
            <WhistleProtection isOpen={isWhistleProtectionOpen} onClose={() => setIsWhistleProtectionOpen(false)} />
            <WhistleRight isOpen={isWhistleRightOpen} onClose={() => setIsWhistleRightOpen(false)} />
            <Terms isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
            <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
            <Faq isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />



            <footer className="bg-gradient-to-r from-black via-green-900 to-green-700 text-white">
                <div className="w-full px-4 lg:pl-20 sm:px-2 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {/* Left Section */}
                        <div>
                            <h2 className="text-2xl font-bold">ORAL</h2>
                            <img
                                src={footerImg}
                                alt="footer"
                                loading="lazy"
                                className="object-cover mt-4"
                            />
                            <div className="flex space-x-4 mt-4">
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-300"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook className="w-6 h-6" />
                                </a>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-300"
                                    aria-label="Twitter"
                                >
                                    <FaTwitter className="w-6 h-6" />
                                </a>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-300"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram className="w-6 h-6" />
                                </a>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-300"
                                    aria-label="Instagram"
                                >
                                    <FaTiktok className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        {/* Other Sections */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-4 lg:w-[1050px] 4xl:w-[1350px] border-b border-white">
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {/* Resources Section */}
                                <div className="lg:w-full w-[170px]">
                                    <h3 className="font-semibold mb-4 4xl:text-[20px]">Resources</h3>
                                    <ul className="space-y-2 4xl:space-y-6 text-sm 4xl:text-[20px]">
                                        <li>
                                            <a href="#" className="hover:text-gray-300 hover:underline">
                                                Reporting Guidelines
                                            </a>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => setIsWhistleProtectionOpen(true)}
                                                className="hover:text-gray-300 cursor-pointer text-[13px] hover:underline">
                                                Whistleblower Protection
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => setIsFaqOpen(true)}
                                                className="hover:text-gray-300 hover:underline">
                                                FAQ
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                                {/* Legal & Security Section */}
                                <div>
                                    <h3 className="font-semibold mb-4 4xl:text-[20px]">Legal & Security</h3>
                                    <ul className="space-y-2 4xl:space-y-6 text-sm 4xl:text-[20px]">
                                        <li>
                                            <button
                                                onClick={() => setIsPrivacyOpen(true)}
                                                className="hover:text-gray-300 hover:underline">
                                                Privacy Policy
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => setIsTermsOpen(true)}
                                                className="hover:text-gray-300 hover:underline">
                                                Terms of Service
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => setIsWhistleRightOpen(true)}
                                                className="hover:text-gray-300 hover:underline">
                                                Whistleblower Rights
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                                {/* Partner Agencies Section */}
                                <div>
                                    <h3 className="font-semibold mb-4 4xl:text-[20px]">Partner Agencies</h3>
                                    <ul className="space-y-2 4xl:space-y-6 text-sm 4xl:text-[20px]">
                                        <li>
                                            <a href="#" className="hover:text-gray-300 hover:underline">
                                                CHIRAJ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-gray-300 hover:underline">
                                                EOCO
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-gray-300 hover:underline">
                                                OSP
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Contact & Support Section */}
                                <div>
                                    <h3 className="font-semibold mb-4 4xl:text-[20px]">Contact & Support</h3>
                                    <ul className="space-y-2 4xl:space-y-6 text-sm 4xl:text-[20px]">
                                        <li>
                                            <a href="#" className="hover:text-gray-300 hover:underline">
                                                Secure Contact
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-gray-300 hover:underline">
                                                Email & Phone Guide
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Footer Bottom */}
                        <div className="py-4 text-center lg:text-end lg:w-[1350px] 4xl:w-[1720px] text-xs">
                            <p className="space-x-4">
                                <a href="#" className="hover:text-gray-300 4xl:text-[20px] hover:underline">
                                    Privacy Policy
                                </a>
                                <span>|</span>
                                <a href="#" className="hover:text-gray-300 4xl:text-[20px] hover:underline">
                                    Terms & Conditions
                                </a>
                                <span>|</span>
                                <a href="#" className="hover:text-gray-300 4xl:text-[20px] hover:underline">
                                    News
                                </a>
                                <span>|</span>
                                <a href="#" className="hover:text-gray-300 4xl:text-[20px] hover:underline">
                                    Report
                                </a>
                                <span>|</span>
                                <span className="hover:text-gray-300 4xl:text-[20px]">
                                    Powered by ID
                                </span>
                            </p>
                        </div>

                    </div>


                </div>
            </footer>
        </div>

    );
};

export default Footer;
