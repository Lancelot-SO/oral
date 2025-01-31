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
        photo: Team2,
        name: "DANIEL YAO DOMELEVO",
        position: "COMMITTEE MEMBER",
        desc: `Mr. Daniel has established himself as one of Ghana's most vigilant public servants. As former auditor general, he has:`,
        list1: `Led numerous parliamentary investigations into public sector financial irregularities`,
        list2: `Exposed several high-profile cases of procurement misconduct through meticulous research`,
        list3: `Consistently demonstrated non-partisan approach to oversight responsibilities`,
        list4: `Championed transparency in public financial management through legislative reforms`,
        list5: `Received multiple awards for his anti-corruption advocacy and public service`,
    },
    {
        id: 2,
        photo: Team3,
        name: "MARTIN KPEBU",
        position: "COMMITEE MEMBER",
        desc: `A legal luminary with extensive experience in anti-corruption litigation and constitutional law:`,
        list1: `Led numerous successful investigations into complex financial crimes and corruption cases`,
        list2: `Developed specialized investigative protocols for tracking illicit financial flows`,
        list3: `Established inter-agency collaboration frameworks that improved prosecution success rates`,
        list4: `Served as lead investigator on several high-profile corruption cases with consistent success`,
        list5: `Maintained an unblemished record of professional integrity throughout his career`,
        list6: `Known for his non-partisan approach to criminal investigations`,
    },
    {
        id: 3,
        photo: Team4,
        name: "COP(RTD.) NATHANIEL KOFI BOAKYE",
        position: "COMMITEE MEMBER",
        desc: `A career law enforcement professional with over three decades of distinguished service:`,
        list1: `Successfully litigated numerous high-profile corruption cases in Ghana's superior courts`,
        list2: `Pioneered several public interest cases that strengthened anti-corruption legal frameworks`,
        list3: `Served as legal consultant to various international anti-corruption organizations`,
        list4: `Published extensively on anti-corruption law and public accountability`,
        list5: `Demonstrated consistent independence in handling politically sensitive cases`,
        list6: `Regular resource person for judicial training on corruption-related cases`,

    },
    {
        id: 4,
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
    {
        id: 5,
        photo: Team1,
        name: "SAMUEL OKUDZETO ABLAKWA",
        position: "COMMITEE CHAIR",
        desc: `A distinguished parliamentarian and former Deputy Minister of Education, Mr. Ablakwa has established himself as one of Ghana's most vigilant public servants. As Member of Parliament for North Tongu, he has:`,
        list1: `Led numerous parliamentary investigations into public sector financial irregularities`,
        list2: `Exposed several high-profile cases of procurement misconduct through meticulous research`,
        list3: `Consistently demonstrated non-partisan approach to oversight responsibilities`,
        list4: `Championed transparency in public financial management through legislative reforms`,
        list5: `Received multiple awards for his anti-corruption advocacy and public service`,

    },
    // Additional board members can be added here...
];

const SlickSlider = () => {
    const sliderRef = React.useRef(null);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
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
        <div className="relative overflow-hidden lg:pl-16 px-2 pt-10 lg:h-[900px] h-auto">
            <div className="text-left mb-12">
                <h2 className="lg:text-4xl text-[20px] font-bold leading-tight">Team Profile</h2>
                <p className=" h-[40px] lg:text-lg text-[14px] text-gray-600 mt-2 ">
                    Our board consists of highly accomplished financial services experts with
                    a combined wealth of experience spanning more than two centuries.                    </p>
            </div>
            <div className="relative lg:h-[800px] h-[580px]">
                <Slider ref={sliderRef} {...settings}>
                    {data.map((item) => (
                        <div key={item.id} className="">
                            {/* Card Design */}
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden lg:w-[400px] w-[330px] relative lg:h-[590px] h-[500px]">
                                {/* Image Section */}
                                <div className="group relative w-full lg:h-[500px] h-[400px]">
                                    <img
                                        src={item.photo}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Hover Overlay Section */}
                                    <div className="absolute lg:h-[500px] h-[400px] bottom-0 left-0 bg-gradient-to-b from-[#387A69] to-[#161F21] text-white p-4 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                        <p className="lg:text-sm text-[10px] mb-4">{item.desc}</p>
                                        <ul className="lg:text-sm text-[10px] list-disc list-inside space-y-1">
                                            <li className="mb-4">{item.list1}</li>
                                            <li className="mb-4">{item.list2}</li>
                                            <li className="mb-4">{item.list3}</li>
                                            <li className="mb-4">{item.list4}</li>
                                            {item.list5 && <li className="mb-4">{item.list5}</li>}
                                            {item.list6 && <li className="mb-4">{item.list6}</li>}
                                            {item.list7 && <li className="">{item.list7}</li>}
                                        </ul>
                                    </div>
                                </div>

                                {/* Position Text Overlay */}
                                <div className="w-[230px] h-[60px] bg-white absolute bottom-[75px] left-[15%] px-2 py-1 rounded flex flex-col items-center justify-center">
                                    <h3 className="text-[18px] font-medium text-[#146221] uppercase">
                                        {item.position}
                                    </h3>
                                    <div className="bottom-0 left-4 w-[20px] h-[1px] text-[#146221]"></div>
                                </div>

                                {/* Name Section */}
                                <div className="w-[230px] h-[60px] absolute bottom-4 left-[15%] flex items-center justify-center">
                                    <h4 className="text-[20px] font-bold text-center text-gray-900">
                                        {item.name}
                                    </h4>
                                </div>
                            </div>
                        </div>



                    ))}
                </Slider>
            </div>
            {/* Previous Button */}
            <button
                className={`absolute hover:bg-[#146221] hover:text-white lg:top-[850px] top-[715px] lg:right-60 right-10 transform -translate-y-1/2 px-4 py-2 rounded-lg 
                   `}
                onClick={() => sliderRef.current.slickPrev()}
            >
                <IoIosArrowRoundBack size={24} />
            </button>

            {/* Next Button */}
            <button
                className={`absolute hover:bg-[#146221] hover:text-white lg:top-[850px] top-[715px] lg:right-40 transform -translate-y-1/2 px-4 py-2 rounded-lg 
                    `}
                onClick={() => sliderRef.current.slickNext()}
            >
                <IoIosArrowRoundForward size={24} />
            </button>
        </div>
    );
};

export default SlickSlider;
