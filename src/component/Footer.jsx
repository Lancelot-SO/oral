/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
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
        <div>
            <WhistleProtection isOpen={isWhistleProtectionOpen} onClose={() => setIsWhistleProtectionOpen(false)} />
            <WhistleRight isOpen={isWhistleRightOpen} onClose={() => setIsWhistleRightOpen(false)} />
            <Terms isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
            <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
            <Faq isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />



            <footer className="bg-gradient-to-r from-black via-green-900 to-green-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                            </div>
                        </div>

                        {/* Other Sections */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-4 border-b border-white">
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {/* Resources Section */}
                                <div>
                                    <h3 className="font-semibold mb-4">Resources</h3>
                                    <ul className="space-y-2 text-sm">
                                        <li>
                                            <a href="#" className="hover:text-gray-300 hover:underline">
                                                Reporting
                                            </a>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => setIsWhistleProtectionOpen(true)}
                                                className="hover:text-gray-300 cursor-pointer hover:underline">
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
                                    <h3 className="font-semibold mb-4">Legal & Security</h3>
                                    <ul className="space-y-2 text-sm">
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
                                    <h3 className="font-semibold mb-4">Partner Agencies</h3>
                                    <ul className="space-y-2 text-sm">
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
                                    <h3 className="font-semibold mb-4">Contact & Support</h3>
                                    <ul className="space-y-2 text-sm">
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

                    </div>

                    {/* Footer Bottom */}
                    <div className="py-4 text-center lg:text-end text-xs">
                        <p className="space-x-4">
                            <a href="#" className="hover:text-gray-300 hover:underline">
                                Privacy Policy
                            </a>
                            <span>|</span>
                            <a href="#" className="hover:text-gray-300 hover:underline">
                                Terms & Conditions
                            </a>
                            <span>|</span>
                            <a href="#" className="hover:text-gray-300 hover:underline">
                                News
                            </a>
                            <span>|</span>
                            <a href="#" className="hover:text-gray-300 hover:underline">
                                Report
                            </a>
                            <span>|</span>
                            <a href="#" className="hover:text-gray-300 hover:underline">
                                Powered by unknown
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>

    );
};

export default Footer;
