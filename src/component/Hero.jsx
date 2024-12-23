// eslint-disable-next-line no-unused-vars
import React from "react";
import herobg from "../assets/hero/herobg.png";
import teamImg from "../assets/hero/teamImg.png";
import flag from "../assets/hero/flag.png"
import flag2 from "../assets/hero/flag2.png"
import freedom from "../assets/hero/freedom.png"
import blackbg from "../assets/hero/blackbg.png"
import Team1 from "../assets/hero/team1.png"
import Team2 from "../assets/hero/team2.png"
import Team3 from "../assets/hero/team3.png"


const Hero = () => {

    const newsItems = [
        {
            id: 1,
            title: "John Mahama names his...",
            description: "Former President and President-elect John Dramani Mahama ha...",
            image: Team1,
            link: "#",
        },
        {
            id: 2,
            title: "Revolutionising Customer...",
            description: "Regardless of industry or sector, almost all businesses today are s...",
            image: Team2,
            link: "#",
        },
        {
            id: 3,
            title: "Dossier on 'ghost names'...",
            description: "The Operation Recover All Loot (ORAL) team, chaired by Samuel...",
            image: Team3,
            link: "#",
        },
        {
            id: 4,
            title: "Dossier on 'ghost names'...",
            description: "The Operation Recover All Loot (ORAL) team, chaired by Samuel...",
            image: Team3,
            link: "#",
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
                        <div className="flex flex-col w-full space-y-4 items-center lg:items-end">
                            <h1 className="text-3xl lg:text-[56px] w-full h-auto font-bold text-center lg:text-right leading-[1.2] p-2 lg:p-4">
                                Operation <br />
                                Recover All Loot
                            </h1>

                            <p className="text-sm lg:text-lg lg:w-[625px] h-auto text-white/80 text-center lg:text-right px-2 lg:px-0">
                                Operation Recover All Loot stands at the forefront of Ghana&apos;s
                                fight against corruption, dedicated to investigating financial
                                impropriety and recovering misappropriated state resources. Through
                                rigorous investigation, transparent processes, and unwavering
                                commitment to justice, we work to restore public assets and
                                strengthen Ghana&apos;s financial integrity.
                            </p>
                            <button className="text-white bg-[#146221] px-4 lg:px-6 py-2 lg:py-3 font-medium self-center lg:self-end">
                                Be a Whistle Blower
                            </button>
                        </div>

                        {/* Yellow Container */}
                        <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
                            <button className="bg-[#146221] w-full lg:w-[340px] h-[50px] lg:h-[69px] text-white font-bold">
                                Send your Message!
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <section>
                <div className="flex lg:flex-row flex-col items-center justify-between px-4 lg:px-16 py-4 lg:py-0 bg-[#141415] w-full h-[124px] text-white">
                    <h2 className="font-bold text-[24px] sm:text-[36px] lg:text-[40px] leading-5 tracking-wide">
                        Make A Submission
                    </h2>
                    <a href="/" className="w-full sm:w-auto lg:w-[340px] flex items-center justify-center py-3 sm:py-4 lg:py-5 shadow-md bg-white">
                        <button className="text-[#146221] font-bold text-sm sm:text-base lg:text-lg">
                            Make your Submission
                        </button>
                    </a>
                </div>
            </section>


            <section>
                <div className="relative w-full h-[518px] text-white flex items-center">
                    {/* Background Image */}
                    <img
                        src={blackbg}
                        alt="background"
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/85"></div> {/* This adds the dark overlay */}

                    {/* Content Wrapper */}
                    <div className="relative z-10 flex w-full h-full items-center justify-center space-x-6 flex-col-reverse lg:flex-row">
                        {/* Left Section */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            {/* Flag and Content */}
                            <div className="relative flex">
                                <div className="absolute lg:top-40 top-[140px] left-0">
                                    <img
                                        src={flag}
                                        alt="Ghana Flag"
                                        loading="lazy"
                                        className="w-[200px] lg:w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="space-y-4 w-[528px] h-[174px] flex lg:pl-[200px] pt-4 mx-4 lg:mx-0">
                                    <span className="text-[12px]">
                                        Operation - Recover - All-Loot is a major plank under the president-elect
                                        John Dramani Mahama&apos;s anti-corruption agenda. JM has vowed to make corruption
                                        costly; to severely punish perpetrators and to recover looted funds and assets
                                        for national development.
                                        President Mahama has also pledged other far-reaching measures such as a constitutional
                                        review and banning his appointees and politically exposed persons from buying state assets.
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="w-full lg:w-1/2 flex items-center justify-center">
                            <img
                                src={freedom}
                                alt="Independence Arch"
                                loading="lazy"
                                className="w-3/4 lg:w-[450px] h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="h-auto bg-[#1E1E1E] text-white p-6 lg:px-16">
                    <div className="container mx-auto">
                        {/* Header Section */}
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h1 className="text-4xl font-bold mb-2">News</h1>
                                <p className="text-gray-400">Hear the latest news from our task...</p>
                            </div>
                            <a
                                href="#"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                See More
                            </a>
                        </div>

                        {/* News Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-auto">
                            {newsItems.map((item) => (
                                <div key={item.id} className="bg-white border-none rounded-lg overflow-hidden p-4">
                                    <div className="relative w-full h-[280px]">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            loading="lazy"
                                            className="object-cover w-full h-full rounded-lg"
                                        />
                                    </div>
                                    <div className="pt-0">
                                        <h2 className="text-lg font-semibold mb-2 text-black mt-4">{item.title}</h2>
                                        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                                        <a
                                            href={item.link}
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
                <div className="w-full lg:h-[240px] bg-black flex flex-col lg:flex-row justify-between pl-6 lg:pl-16 relative">
                    <div className="w-full lg:w-[410px] h-[200px] flex flex-col mt-10 px-4">
                        <span className="font-semibold text-[24px] lg:text-[37px] leading-[28px] lg:leading-[43px] text-white">
                            Your information is well protected with us...
                        </span>
                        <a href="#" className="w-[140px] lg:w-[200px] text-[10px] p-4 mt-2 bg-[#076F32] text-white text-center">
                            Call us: 0894756893
                        </a>
                    </div>

                    {/* Flag Image */}
                    <div className="mt-4 lg:mt-0 absolute bottom-0 right-0 lg:relative lg:right-auto lg:bottom-auto">
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
};

export default Hero;
