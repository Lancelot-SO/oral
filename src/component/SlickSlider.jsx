import React from "react";
import Slider from "react-slick";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import Team1 from "../assets/about/team1.png"
import Team2 from "../assets/about/team2.png"
import Team3 from "../assets/about/team3.png"
import Team4 from "../assets/about/team4.png"
import Team5 from "../assets/about/team5.png"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        id: 1,
        photo: Team1,
        name: "SAMUEL OKUDZETO ABLAKWA",
        position: "COMMITTEE CHAIR",
        desc: `A distinguished parliamentarian and former Deputy Minister of Education, Mr. Ablakwa has established himself as one of Ghana's most vigilant public servants. As Member of Parliament for North Tongu, he has:`,
        list1: `Led numerous parliamentary investigations into public sector financial irregularities`,
        list2: `Exposed several high-profile cases of procurement misconduct through meticulous research`,
        list3: `Consistently demonstrated non-partisan approach to oversight responsibilities`,
        list4: `Championed transparency in public financial management through legislative reforms`,
        list5: `Received multiple awards for his anti-corruption advocacy and public service`,
    },
    {
        id: 2,
        photo: Team2,
        name: "DANIEL YAO DOMELEVO",
        position: "COMMITEE MEMBER",
        desc: `A distinguished parliamentarian and former Deputy Minister of Education, Mr. Ablakwa has established himself as one of Ghana's most vigilant public servants. As Member of Parliament for North Tongu, he has:`,
        list1: `Led numerous parliamentary investigations into public sector financial irregularities`,
        list2: `Exposed several high-profile cases of procurement misconduct through meticulous research`,
        list3: `Consistently demonstrated non-partisan approach to oversight responsibilities`,
        list4: `Championed transparency in public financial management through legislative reforms`,
        list5: `Received multiple awards for his anti-corruption advocacy and public service`,
    },
    {
        id: 3,
        photo: Team3,
        name: "COP (RTD.) Nathaniel KOFI BOAKYE",
        position: "COMMITEE MEMBER",
        desc: `A career law enforcement professional with over three decades of distinguished service:`,
        list1: `Led numerous successful investigations into complex financial crimes and corruption cases`,
        list2: `Developed specialized investigative protocols for tracking illicit financial flows`,
        list3: `Established inter-agency collaboration frameworks that improved prosecution success rates`,
        list4: `Served as lead investigator on several high-profile corruption cases with consistent success`,
        list5: `Maintained an unblemished record of professional integrity throughout his career`,
        list6: `Known for his non-partisan approach to criminal investigations`,

    },
    {
        id: 4,
        photo: Team4,
        name: "MARTIN KPEBU",
        position: "COMMITEE MEMBER",
        desc: `A legal luminary with extensive experience in anti-corruption litigation and constitutional law:`,
        list1: `Successfully litigated numerous high-profile corruption cases in Ghana's superior courts`,
        list2: `Pioneered several public interest cases that strengthened anti-corruption legal frameworks`,
        list3: `Served as legal consultant to various international anti-corruption organizations`,
        list4: `Published extensively on anti-corruption law and public accountability`,
        list5: `Demonstrated consistent independence in handling politically sensitive cases`,
        list6: `Regular resource person for judicial training on corruption-related cases`,
    },
    {
        id: 5,
        photo: Team5,
        name: "Raymond Archer",
        position: "COMMITEE MEMBER",
        desc: `An internationally recognized investigative journalist with over two decades of exposing corruption:`,
        list1: `Led investigations that uncovered major financial scandals across multiple sectors `,
        list2: `Developed innovative investigative methodologies now used as industry standards`,
        list3: `Received multiple international awards for investigative journalism excellence `,
        list4: `Successfully collaborated with law enforcement agencies to secure prosecutions`,
        list5: `Maintained strict editorial independence throughout his career `,
        list6: `Built extensive networks for tracking illegal financial flows`,
        list7: `Demonstrated expertise in forensic document analysis and financial investigation `,

    },

    // Additional board members can be added here...
];

const SlickSlider = () => {
    const sliderRef = React.useRef(null);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="relative overflow-hidden lg:pl-16 px-2 pt-10 lg:h-[700px] h-auto">
            <div className="text-left mb-12">
                <h2 className="lg:text-4xl text-[20px] font-bold leading-tight">Meet the Team</h2>
                <p className="lg:w-[580px] h-[40px] lg:text-lg text-[14px] text-gray-600 mt-2 ">
                    Our board consists of highly accomplished financial services experts with a combined wealth of experience spanning more than two centuries.                </p>
            </div>
            <div className="relative">
                <Slider ref={sliderRef} {...settings}>
                    {data.map((item, index) => (
                        <div key={index} className="lg:px-4 px-0">
                            <div className="flex lg:flex-row flex-col w-full lg:h-[420px] h-[800px] shadow-lg overflow-hidden rounded-lg">
                                {/* Image Section */}
                                <div className="lg:w-[433px] bg-[#EFEFF0]">
                                    <img
                                        src={item.photo}
                                        alt={item.name}
                                        loading="lazy"
                                        className="lg:w-full lg:h-full w-[350px] h-[280px] object-cover"
                                    />
                                </div>
                                {/* Text Section */}
                                <div className="lg:w-1/2 h-auto lg:h-full bg-[#238931] text-white lg:p-2 p-2 flex flex-col ">
                                    <div className="flex flex-col w-[234px] h-[54px] bg-[#CC1526] rounded-tr-[16px] rounded-bl-[20px] items-center justify-center mb-2">
                                        <h3 className="font-bold text-[13px] leading-[17px]">{item.name}</h3>
                                        <p className="font-normal text-[9px] leading-[17px]">{item.position}</p>
                                    </div>
                                    <p className="text-sm text-whte w-full text-[12px]">{item.desc}</p>
                                    <div className="list-disc pl-5">
                                        <p className="text-[10px] text-white leading-[24px]">{item.list1}</p>
                                        <p className="text-[10px] text-white leading-[24px]">{item.list2}</p>
                                        <p className="text-[10px] text-white leading-[24px]">{item.list3}</p>
                                        <p className="text-[10px] text-white leading-[24px]">{item.list4}</p>
                                        <p className="text-[10px] text-white leading-[24px]">{item.list5}</p>
                                        <p className="text-[10px] text-white leading-[24px]">{item.list6}</p>
                                        <p className="text-[10px] text-white leading-[24px]">{item.list7}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {/* Previous Button */}
            <button
                className={`absolute hover:bg-[#FF0226] hover:text-white lg:top-[670px] top-[900px] lg:right-40 right-10 transform -translate-y-1/2 px-4 py-2 rounded-lg 
                   `}
                onClick={() => sliderRef.current.slickPrev()}
            >
                <IoIosArrowRoundBack size={24} />
            </button>

            {/* Next Button */}
            <button
                className={`absolute hover:bg-[#FF0226] hover:text-white lg:top-[670px] top-[900px] lg:right-20 transform -translate-y-1/2 px-4 py-2 rounded-lg 
                    `}
                onClick={() => sliderRef.current.slickNext()}
            >
                <IoIosArrowRoundForward size={24} />
            </button>
        </div>
    );
};

export default SlickSlider;
