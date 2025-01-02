// eslint-disable-next-line no-unused-vars
import React from "react";
import herobg from "../assets/hero/herobg.png";
import teamImg from "../assets/hero/teamImg.png";
import flag2 from "../assets/hero/flag2.png"
import freedom from "../assets/hero/freedom.png"
import blackbg from "../assets/hero/blackbg.png"
import Team1 from "../assets/hero/team1.png"
import Team3 from "../assets/hero/team3.png"
import Blog6 from "../assets/blog/blog6.png"
import Blog4 from "../assets/blog/blog4.png"
import address from "../assets/hero/address.png"
import partner1 from "../assets/hero/partner1.png"
import partner2 from "../assets/hero/partner2.png"
import partner3 from "../assets/hero/partner3.png"
import partner4 from "../assets/hero/partner4.png"
import security from "../assets/hero/security.png"
import { FaShieldAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Import React Icons




const Hero = () => {

    const newsItems = [
        {
            id: 1,
            title: "Ghana President-elect Mahama names anti-corruption team",
            description: "Former President and President-elect John Dramani Mahama ha...",
            image: Team1,
            link: "https://www.reuters.com/world/africa/ghana-president-elect-mahama-names-anti-corruption-team-2024-12-18/",
        },
        {
            id: 2,
            title: "Ablekuma North MP backs ORAL team’s...",
            description: "However, she said “We are people who must be guided by the past about what has happened…we have seen similar committees being formed before. Akufo-Addo put in place several committees..",
            image: Blog6,
            link: "https://www.ghanaweb.com/GhanaHomePage/NewsArchive/Ablekuma-North-MP-backs-ORAL-team-s-decision-to-work-without-allowances-1964897",
        },
        {
            id: 3,
            title: "Dossier on 'ghost names'...",
            description: "The Operation Recover All Loot (ORAL) team, chaired by Samuel...",
            image: Team3,
            link: "https://www.graphic.com.gh/news/general-news/team-oral-receives-dossier-on-alleged-ghost-names-at-national-service-authority.html#google_vignette",
        },
        {
            id: 4,
            title: "The day of accountability is coming for NPP –",
            description: "Despite the challenges, Tameklo noted Mahama’s unwavering resolve to ensure justice prevailed, stating that Mahama famously declared, “The wrongdoing must be investigated.”",
            image: Blog4,
            link: "https://3news.com/news/the-day-of-accountability-is-coming-for-npp-edudzi-tameklo/",
        },
    ];
    return (
        <div className="overflow-hidden">
            <div className="relative w-full h-auto lg:h-[550px]">
                {/* Background Image */}
                <img
                    src={herobg}
                    alt="hero background"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between h-full w-full lg:pr-16">
                    {/* Left Section (Image of Team) */}
                    <div className="flex-shrink-0 w-full lg:w-1/2 lg:max-w-[697px] mb-6 lg:mb-0">
                        <img
                            src={teamImg}
                            alt="Team"
                            loading="lazy"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Right Section (Text Content) */}
                    <div className="w-full lg:w-1/2 text-white space-y-6 lg:h-full flex flex-col justify-end">
                        {/* Blue Container */}
                        <div className="flex flex-col w-full space-y-2 items-center lg:items-end">
                            <span className="text-3xl lg:text-[38px] h-[55px] inline-block bg-gradient-to-r from-white to-white/30 bg-clip-text text-transparent font-bold text-center lg:text-right leading-[1.1] p-2 lg:p-3">
                                Welcome to
                            </span>
                            <span className="text-3xl lg:text-[48px] w-full font-bold text-center lg:text-right leading-[1.1] p-2 lg:p-3">
                                Operation<br /> Recover All Loot
                            </span>
                            <p className="text-sm lg:text-lg lg:w-[645px] h-auto text-white text-center lg:text-right px-2 lg:px-0">
                                Combating Corruption, Recovering Resources, Building a Better Ghana.
                            </p>
                            <p className="text-sm lg:text-lg lg:w-[625px] h-auto text-white/80 text-center lg:text-right px-2 lg:px-0">
                                Operation Recover All Loot (ORAL) is an independent public service initiative under the leadership of President-elect John Dramani Mahama. Our mission is to investigate corruption cases, recover misappropriated state resources, and prosecute offenders to ensure a transparent and accountable governance system.
                            </p>
                        </div>

                        {/* Yellow Container */}
                        <div className="flex justify-center lg:justify-end mt-4 lg:mt-0 opacity-0">
                            <div className="bg-[#146221] w-full lg:w-[340px] h-[50px] lg:h-[69px] text-white font-bold flex items-center justify-center">
                                Send your Message!
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <section>
                <div className="relative w-full min-h-[600px] lg:h-[518px] text-white flex items-center">
                    {/* Background Image */}
                    <img
                        src={blackbg}
                        alt="background"
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/85"></div>

                    {/* Content Wrapper */}
                    <div className="relative z-10 flex flex-col-reverse lg:flex-row w-full h-full px-4 lg:px-16 py-6 lg:py-0">
                        {/* Left Section */}
                        <div className="flex flex-col justify-center space-y-6 w-full lg:w-1/2">
                            {/* Mission Section */}
                            <div className="bg-transparent w-full max-w-lg lg:max-w-none mx-auto lg:mx-0 p-4 lg:p-6">
                                <h2 className="text-xl lg:text-2xl font-bold mb-4">Our Mission</h2>
                                <span className="text-sm lg:text-base">
                                    At ORAL, we are committed to:
                                </span>
                                <ul className="list-disc list-inside mt-4 text-sm lg:text-base leading-relaxed">
                                    <li>
                                        <strong>Investigating Corruption Cases:</strong> Establishing a
                                        specialized task force to scrutinize suspected corruption cases.
                                    </li>
                                    <li>
                                        <strong>Recovering Misappropriated State Resources:</strong>{" "}
                                        Prioritizing the retrieval of stolen state funds, property, and
                                        other assets for national development projects.
                                    </li>
                                    <li>
                                        <strong>Prosecuting Offenders:</strong> Committing to prosecuting
                                        individuals or entities found guilty of embezzling public
                                        resources.
                                    </li>
                                </ul>
                            </div>

                            {/* How We Work Section */}
                            <div className="bg-transparent w-full max-w-lg lg:max-w-none mx-auto lg:mx-0 p-4 lg:p-6">
                                <h2 className="text-xl lg:text-2xl font-bold mb-4">How We Work</h2>
                                <p className="text-sm lg:text-base leading-relaxed">
                                    ORAL operates within a legal framework to ensure fairness and
                                    transparency. Our dedicated team of experts collaborates with
                                    existing anti-corruption agencies such as CHRAJ, EOCO, and the OSP
                                    to gather and analyze information, which is then passed on for
                                    further action.
                                </p>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex justify-center items-center w-full lg:w-1/2 mb-6 lg:mb-0">
                            <img
                                src={freedom}
                                alt="Independence Arch"
                                loading="lazy"
                                className="w-3/4 max-w-sm lg:max-w-none lg:w-[450px] xl:w-[500px] h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-black text-white py-10 px-6 lg:px-16">
                {/* Title Section */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold">Report Corruption</h2>
                    <p className="text-sm lg:text-lg mt-4">
                        We encourage the public to report any suspected corruption cases
                        through our secure and confidential platforms:
                    </p>
                    <div className="w-10 h-[2px] bg-red-500 mx-auto mt-2"></div>
                </div>

                {/* Reporting Options */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Secure Portal */}
                    <div className="flex lg:flex-row flex-col items-center justify-center gap-4 bg-white text-black rounded-lg shadow-md lg:w-[395px] w-full h-[176px]">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full border border-green-500 mb-4">
                            <FaShieldAlt className="text-green-500 text-2xl" /> {/* React Icon */}
                        </div>
                        <div>
                            <h3 className="text-[28px] font-medium">Secure Portal</h3>
                            <p className="text-sm text-gray-500">reporting.oralgh.org</p>
                        </div>
                    </div>

                    {/* Toll-Free Number */}
                    <div className="flex lg:flex-row flex-col items-center justify-center gap-4 bg-white text-black rounded-lg shadow-md lg:w-[395px] w-full h-[176px]">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full border border-green-500 mb-4">
                            <FaPhoneAlt className="text-green-500 text-2xl" /> {/* React Icon */}
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[28px] font-medium">Toll-Free Number</h3>
                            <p className="text-sm text-gray-500">0800 900 111</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="relative rounded-lg shadow-md py-6 px-4 w-full h-52 lg:h-[176px] flex items-center justify-center">
                        {/* Background Image */}
                        <img
                            src={address}
                            alt="Email"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

                        {/* Content */}
                        <div className="relative z-10 flex lg:flex-row flex-col gap-4 text-white px-4">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full border border-white mx-auto mb-4">
                                <FaEnvelope className="text-white text-2xl" /> {/* React Icon */}
                            </div>
                            <div>
                                <h3 className="text-[28px] font-medium">Email</h3>
                                <p className="text-sm">public@oralgh.org</p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className="relative bg-gray-100 py-16 px-4 sm:px-8">
                    {/* Section Title */}
                    <h2 className="text-center text-3xl font-bold text-black mb-12">Meet The Partners</h2>

                    {/* Partners Grid */}
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Partner 1 */}
                        <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center w-full sm:w-48 h-24">
                            <img
                                src={partner1}
                                alt="Office of the Special Prosecutor"
                                className="max-h-full max-w-full object-cover"
                            />
                        </div>

                        {/* Partner 2 */}
                        <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center w-full sm:w-48 h-24">
                            <img
                                src={partner2}
                                alt="Commission on Human Rights & Justice"
                                className="max-h-full max-w-full object-cover"
                            />
                        </div>

                        {/* Partner 3 */}
                        <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center w-full sm:w-48 h-24">
                            <img
                                src={partner3}
                                alt="Ghana Police Service"
                                className="max-h-full max-w-full object-cover"
                            />
                        </div>

                        {/* Partner 4 */}
                        <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center w-full sm:w-48 h-24">
                            <img
                                src={partner4}
                                alt="Economic and Organized Crime Office (EOCO)"
                                className="max-h-full max-w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Ghana Flag */}
                    <div className="absolute right-0 top-0 h-full hidden sm:block">
                        <img
                            src={flag2}
                            alt="Ghana Flag"
                            className="h-full object-cover"
                        />
                    </div>
                </div>
            </section>


            <section>
                <div className="h-auto lg:h-[700px] bg-[#1E1E1E] text-white p-6 lg:px-16">
                    <div className="container mx-auto">
                        {/* Header Section */}
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h1 className="text-4xl font-bold mb-2">News</h1>
                                <p className="text-gray-400">Hear the latest news from our task...</p>
                            </div>
                            <a
                                href="/blog"
                                className="text-white cursor-pointer hover:text-gray-300 transition-colors"
                            >
                                See More
                            </a>
                        </div>

                        {/* News Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-auto">
                            {newsItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white border-none rounded-lg overflow-hidden p-4 flex flex-col h-full"
                                >
                                    <div className="relative w-full h-[280px]">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            loading="lazy"
                                            className="object-cover w-full h-full rounded-lg"
                                        />
                                    </div>
                                    {/* Content Section */}
                                    <div className="flex-grow flex flex-col">
                                        <h2
                                            className="text-lg font-semibold w-full text-black h-[55px] overflow-hidden"
                                        >
                                            {item.title}
                                        </h2>
                                        <p
                                            className="text-gray-600 text-sm flex-grow mb-4 h-[80px] overflow-hidden"
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                    {/* Read More Link */}
                                    <div className="mt-auto">
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            className="text-green-500 hover:text-green-400 text-sm font-medium transition-colors"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </section>

            <section>
                <div className="relative bg-black py-10">
                    <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-16 mt-6 lg:mt-0">
                        {/* Left Section */}
                        <div className="text-white text-center lg:text-left mb-6 lg:mb-0">
                            <h2 className="text-[25px] sm:text-[30px] lg:text-[35px] font-medium w-full lg:w-[301px]">
                                YOUR SECURITY IS OUR PRIORITY
                            </h2>
                        </div>

                        {/* Right Section */}
                        <div className="flex flex-wrap justify-center lg:ml-[280px] ml-0 gap-6">
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

                    {/* Floating Button */}
                    <div className="hidden lg:block absolute right-2 lg:top-0 top-6 transform -translate-y-1/2">
                        <div className="bg-gradient-to-b from-[#387A69] to-[#161F21] text-white text-center rounded-full w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center shadow-md">
                            <span className="text-xs sm:text-sm font-semibold">Send YOUR Complaint</span>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    );
};

export default Hero;
