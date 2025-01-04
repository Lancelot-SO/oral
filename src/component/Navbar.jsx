/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/hero/oral_logo.png";
import { FaRegFileAlt, FaPhone, FaRegClock } from "react-icons/fa";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation(); // Get the current location
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname); // Update active link when the location changes
    }, [location]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="w-full">
            {/* Top banner */}
            <div className="w-full bg-[#0B5C2C] text-white py-2">
                <div className="container mx-auto lg:px-24 px-4 flex justify-between items-center flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                        <FaRegClock />
                        <span>All systems operational</span>
                    </div>
                    <p className="text-center text-sm font-medium tracking-wider whitespace-nowrap">
                        TEAM_ORAL
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <FaPhone />
                            <a href="/contact">Contact</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaRegFileAlt />
                            <a href="#">Resources</a>
                        </div>
                    </div>
                </div>


            </div>

            {/* Main navigation */}
            <nav className="container mx-auto px-4 relative">
                <div className="flex justify-between h-20 lg:px-20">
                    {/* Logo */}
                    <Link to="/" className="py-1">
                        <div className="w-24 h-12">
                            <img
                                src={logo}
                                loading="lazy"
                                alt="Team Oral Logo"
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-[#0B5C2C] text-2xl"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? <HiX /> : <HiMenu />}
                    </button>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={`${activeLink === "/" ? "text-green-500 underline" : "text-[#0B5C2C]"
                                } hover:text-[#0B5C2C]/80 font-medium`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={`${activeLink === "/about" ? "text-green-500 underline" : "text-[#0B5C2C]"
                                } hover:text-[#0B5C2C]/80 font-medium`}
                        >
                            About us
                        </Link>
                        <Link
                            to="/report"
                            className={`${activeLink === "/report" ? "text-green-500 underline" : "text-[#0B5C2C]"
                                } hover:text-[#0B5C2C]/80 font-medium`}
                        >
                            Report Portal
                        </Link>
                        <Link
                            to="/blog"
                            className={`${activeLink === "/blog" ? "text-green-500 underline" : "text-[#0B5C2C]"
                                } hover:text-[#0B5C2C]/80 font-medium`}
                        >
                            Blog
                        </Link>

                        <Link
                            to="/contact"
                            className={`${activeLink === "/contact" ? "text-green-500 underline" : "text-[#0B5C2C]"
                                } hover:text-[#0B5C2C]/80 font-medium`}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Mobile Navigation Links */}
                <div
                    className={`fixed top-0 right-0 h-full z-50 w-[80%] bg-[#0B5C2C] text-white transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <button
                        className="absolute top-5 right-5 text-3xl"
                        onClick={closeMobileMenu}
                    >
                        <HiX />
                    </button>
                    <div className="flex flex-col items-center justify-center h-full space-y-8">
                        <Link
                            to="/"
                            className={`${activeLink === "/" ? "text-green-500 underline" : "text-white"
                                } text-lg font-medium`}
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={`${activeLink === "/about" ? "text-green-500 underline" : "text-white"
                                } text-lg font-medium`}
                            onClick={closeMobileMenu}
                        >
                            About us
                        </Link>
                        <Link
                            to="/report"
                            className={`${activeLink === "/report" ? "text-green-500 underline" : "text-white"
                                } text-lg font-medium`}
                            onClick={closeMobileMenu}
                        >
                            Report Portal
                        </Link>
                        <Link
                            to="/blog"
                            className={`${activeLink === "/blog" ? "text-green-500 underline" : "text-white"
                                } text-lg font-medium`}
                            onClick={closeMobileMenu}
                        >
                            Blog
                        </Link>
                        <Link
                            to="/contact"
                            className={`${activeLink === "/contact" ? "text-green-500 underline" : "text-white"
                                } text-lg font-medium`}
                            onClick={closeMobileMenu}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
