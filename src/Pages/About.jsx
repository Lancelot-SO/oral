/* eslint-disable no-unused-vars */
import React from 'react'
import aboutbg from "../assets/about/aboutbg.png"
import about1 from "../assets/about/about1.png"
import about2 from "../assets/about/about2.png"
import about3 from "../assets/about/about3.png"
import SlickSlider from '../component/SlickSlider'
import flag2 from "../assets/hero/flag2.png"



const About = () => {
    return (
        <div>
            <div className="relative">
                <img
                    src={aboutbg}
                    alt="about"
                    className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px]"
                    loading="lazy"
                />
                <div className="absolute top-[60%] sm:top-[65%] md:top-[54%] left-4 sm:left-8 md:left-[60px] transform -translate-y-1/2 sm:-translate-y-0 w-[90%] sm:w-[80%] md:w-[758px] h-auto flex flex-col gap-2 px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        About Us
                    </h2>
                    <p className="text-white text-sm sm:text-base md:text-lg">
                        Operation - Recover-All-Loot is a major plank under President-elect John Dramani Mahama’s anti-corruption agenda. John Mahama has vowed to make corruption costly: to severely punish perpetrators and to recover looted funds and assets for national development.
                    </p>
                </div>
            </div>
            <section>
                <div className="flex items-center justify-center px-4 sm:px-6">
                    <div className="bg-[#F8F8F8] w-full max-w-[1360px] h-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6 py-6">
                        {/* Mission Section */}
                        <div className="w-full md:w-[548px] h-full flex flex-col items-start justify-center md:text-left">
                            <h2 className="font-bold text-[20px] md:text-[24px]">Mission</h2>
                            <p className="text-sm md:text-base text-[#56575D]">
                                Operation Recover All Loot stands at the forefront of Ghana&rsquo;s fight against corruption, dedicated to investigating financial impropriety and recovering misappropriated state resources. Through rigorous investigation, transparent processes, and unwavering commitment to justice, we work to restore public assets and strengthen Ghana&#39;s financial integrity.
                            </p>
                        </div>
                        {/* Mandate Section */}
                        <div className="w-full md:w-[548px] h-full flex flex-col items-start justify-center md:text-left">
                            <h2 className="font-bold text-[20px] md:text-[24px]">Mandate</h2>
                            <p className="text-sm md:text-base text-[#56575D]">
                                Established under the directive of President-elect John Dramani Mahama, ORAL operates as an independent investigative body with the authority to:
                            </p>
                            <ul className="list-disc pl-5 text-sm md:text-base text-[#56575D]">
                                <li>Investigate allegations of corruption and financial misconduct</li>
                                <li>Trace and recover misappropriated state assets</li>
                                <li>Collaborate with anti-graft agencies for prosecution</li>
                                <li>Recommend systemic improvements to prevent future losses</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-white">
                <div className="max-w-[1360px] mx-auto px-4 lg:px-0">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Approach</h2>
                    <p className="text-sm md:text-base mb-6 text-[#56575D]">
                        ORAL employs a three-pronged strategy:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Investigation Section */}
                        <div className="bg-[#F8F8F8] p-6 rounded-md shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Investigation</h3>
                            <p className="text-sm md:text-base text-[#56575D]">
                                We conduct thorough, evidence-based investigations into allegations of corruption and financial misconduct, utilizing state-of-the-art forensic tools and methodologies.
                            </p>
                        </div>

                        {/* Recovery Section */}
                        <div className="bg-[#F8F8F8] p-6 rounded-md shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Recovery</h3>
                            <p className="text-sm md:text-base text-[#56575D]">
                                Through legal channels and international cooperation, we work to trace and recover misappropriated state assets, both within Ghana and abroad.
                            </p>
                        </div>

                        {/* Prevention Section */}
                        <div className="bg-[#F8F8F8] p-6 rounded-md shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Prevention</h3>
                            <p className="text-sm md:text-base text-[#56575D]">
                                We analyze patterns of corruption to recommend systemic improvements and strengthen institutional safeguards against future misconduct.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black text-white py-16 px-4">
                <div className="max-w-6xl mx-4 lg:mx-14">
                    <h2 className="text-4xl font-bold mb-4">
                        Our Commitment to{' '}
                        <span className="block">Transparency</span>
                    </h2>

                    <p className="text-lg mb-8">
                        ORAL operates with complete independence and transparency. Our processes are:
                    </p>

                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                        <div className="space-y-4">
                            <div className="flex items-start ">
                                <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white"></span>
                                <span>Documented and subject to oversight</span>
                            </div>
                            <div className="flex items-start">
                                <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white"></span>
                                <span>Conducted within strict legal frameworks</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white"></span>
                                <span>Regular public reporting of progress</span>
                            </div>
                            <div className="flex items-start">
                                <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white"></span>
                                <span>Open to scrutiny by relevant authorities</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full h-auto flex flex-col-reverse md:flex-row ">
                    {/* Text Section */}
                    <div className="md:flex-1 flex items-center justify-center">
                        <div className="w-full max-w-[400px] h-auto md:h-[208px] flex flex-col pl-[20px] py-6 md:py-0">
                            <h2 className="text-[24px] md:text-[30px] font-semibold text-black">
                                Public Participation
                            </h2>
                            <p className="text-[#56575D] text-[14px] py-4">
                                The success of our mission depends on public vigilance and participation. We provide secure channels for:
                            </p>
                            <ul className="list-disc pl-5 text-[14px] text-[#56575D]">
                                <li className="pb-2">Confidential reporting of corruption</li>
                                <li className="pb-2">Whistleblower protection</li>
                                <li className="pb-2">Public education and awareness</li>
                                <li>Stakeholder engagement</li>
                            </ul>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className="md:flex-1">
                        <img src={about1} alt="img" className="object-cover w-full h-[250px] md:h-full" loading="lazy" />
                    </div>


                </div>
            </section>


            <section>
                <div className="w-full h-auto flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:flex-1">
                        <img src={about2} alt="img" className="object-cover w-full h-[250px] md:h-full" loading="lazy" />
                    </div>

                    {/* Text Section */}
                    <div className="bg-[#F8F8F8] md:flex-1 flex items-center">
                        <div className="w-full max-w-[600px] h-auto md:h-[208px] flex flex-col px-6 md:pl-[50px] py-6 md:py-0">
                            <h2 className="text-[24px] md:text-[30px] font-semibold text-black">
                                Our Values
                            </h2>
                            <ul className="list-disc pl-5 text-[14px] text-[#56575D]">
                                <li className="pb-2">Integrity: Maintaining the highest ethical standards in all our operations</li>
                                <li className="pb-2">Professionalism: Conducting investigations with rigor and expertise</li>
                                <li className="pb-2">Accountability: Being answerable to the people of Ghana</li>
                                <li>Transparency: Maintaining open communication about our processes and progress</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full h-auto flex flex-col-reverse md:flex-row ">
                    {/* Text Section */}
                    <div className="md:flex-1 flex items-center justify-center">
                        <div className="w-full max-w-[400px] h-auto md:h-[208px] flex flex-col pl-[20px] py-6 md:py-0">
                            <h2 className="text-[24px] md:text-[30px] font-semibold text-black">
                                International Cooperation
                            </h2>
                            <p className="text-[#56575D] text-[14px] py-4">
                                ORAL maintains strategic partnerships with:
                            </p>
                            <ul className="list-disc pl-5 text-[14px] text-[#56575D]">
                                <li className="pb-2">International anti-corruption agencies</li>
                                <li className="pb-2">Financial intelligence units worldwide</li>
                                <li className="pb-2">Asset recovery networks</li>
                                <li>Development partners</li>
                            </ul>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className="md:flex-1">
                        <img src={about3} alt="img" className="object-cover w-full h-[250px] md:h-full" loading="lazy" />
                    </div>


                </div>
            </section>

            <section>
                <SlickSlider />
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
    )
}

export default About