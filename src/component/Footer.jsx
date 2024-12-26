/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import footerImg from "../assets/footer/footerImg.png";

const Footer = () => {
    return (
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
                                        <a href="#" className="hover:text-gray-300">
                                            Reporting
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-gray-300">
                                            Whistleblower Protection
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-gray-300">
                                            FAQ
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Legal & Security Section */}
                            <div>
                                <h3 className="font-semibold mb-4">Legal & Security</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a href="#" className="hover:text-gray-300">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-gray-300">
                                            Terms of Service
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-gray-300">
                                            Whistleblower Rights
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Partner Agencies Section */}
                            <div>
                                <h3 className="font-semibold mb-4">Partner Agencies</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a href="#" className="hover:text-gray-300">
                                            CHIRAJ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-gray-300">
                                            EOCO
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-gray-300">
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
                                        <a href="#" className="hover:text-gray-300">
                                            Secure Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-gray-300">
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
                        <a href="#" className="hover:text-gray-300">
                            Privacy Policy
                        </a>
                        <span>|</span>
                        <a href="#" className="hover:text-gray-300">
                            Terms & Conditions
                        </a>
                        <span>|</span>
                        <a href="#" className="hover:text-gray-300">
                            News
                        </a>
                        <span>|</span>
                        <a href="#" className="hover:text-gray-300">
                            Report
                        </a>
                        <span>|</span>
                        <a href="#" className="hover:text-gray-300">
                            Powered by unknown
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
