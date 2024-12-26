/* eslint-disable no-unused-vars */
import React from 'react'
import reportbg from "../assets/report/reportbg.png"
import MainForm from '../component/MainForm'

const Report = () => {
    return (
        <div>
            <div className="relative">
                <img
                    src={reportbg}
                    alt="about"
                    className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px]"
                    loading="lazy"
                />
                <div className="absolute top-[60%] sm:top-[65%] md:top-[54%] left-4 sm:left-8 md:left-[60px] transform -translate-y-1/2 sm:-translate-y-0 w-[90%] sm:w-[80%] md:w-[758px] h-auto flex flex-col gap-2 px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Report an issue
                    </h2>
                    <p className="text-white text-sm sm:text-base md:text-lg">
                        A secure portal to submit your information through the correct
                        channel, ensuring easy tracking of all submissions. Rest assured,
                        your data is fully protected.
                    </p>
                </div>
            </div>

            <section>
                <MainForm />
            </section>
        </div>
    )
}

export default Report