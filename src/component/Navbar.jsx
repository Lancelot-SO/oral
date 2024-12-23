/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/hero/oral_logo.png";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                <div className="container mx-auto px-4">
                    <p className="text-center text-sm font-medium tracking-wider">
                        TEAM_ORAL
                    </p>
                </div>
            </div>

            {/* Main navigation */}
            <nav className="container mx-auto px-4 relative">
                <div className="flex justify-between h-20 lg:px-16">
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
                            className="text-[#0B5C2C] hover:text-[#0B5C2C]/80 font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="text-[#0B5C2C] hover:text-[#0B5C2C]/80 font-medium"
                        >
                            About us
                        </Link>
                        <Link
                            to="/blog"
                            className="text-[#0B5C2C] hover:text-[#0B5C2C]/80 font-medium"
                        >
                            Blog
                        </Link>
                        <Link
                            to="/report"
                            className="text-[#0B5C2C] hover:text-[#0B5C2C]/80 font-medium"
                        >
                            Report issue
                        </Link>
                        <Link
                            to="/contact"
                            className="text-[#0B5C2C] hover:text-[#0B5C2C]/80 font-medium"
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
                            className="text-white text-lg font-medium"
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="text-white text-lg font-medium"
                            onClick={closeMobileMenu}
                        >
                            About us
                        </Link>
                        <Link
                            to="/blog"
                            className="text-white text-lg font-medium"
                            onClick={closeMobileMenu}
                        >
                            Blog
                        </Link>
                        <Link
                            to="/report"
                            className="text-white text-lg font-medium"
                            onClick={closeMobileMenu}
                        >
                            Report issue
                        </Link>
                        <Link
                            to="/contact"
                            className="text-white text-lg font-medium"
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
