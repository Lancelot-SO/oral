/* eslint-disable no-unused-vars */
import React from 'react'
import footerImg from "../assets/footer/footerImg.png"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <div className='lg:h-[260px] h-[600px] flex lg:flex-row flex-col gap-4 bg-gradient-to-r from-[#0C1E15] to-[#064A3B] text-white py-8'>
                <div className='lg:pt-[60px]'>
                    <img
                        src={footerImg}
                        alt='footer'
                        loading='lazy'
                        className='object-cover'
                    />
                </div>
                <div className='lg:w-[1200px] w-full lg:h-[200px] h-[300px] px-4 lg:px-0'>
                    <div className='flex lg:flex-row flex-col justify-between lg:h-[107px] border-b border-white'>
                        <div className='flex flex-col gap-2'>
                            <label>
                                Be a whistle blower
                            </label>
                            <div className='flex gap-2'>
                                <input type='text'
                                    placeholder='Enter your email'
                                    name='footer_email'
                                    className='w-[256px] h-[30px] border border-white bg-transparent'
                                />
                                <button className='h-[30px] px-4 border border-white bg-transparent'>
                                    Send
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col py-4 lg:py-0">
                            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                            <div className="flex space-x-4">
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white">
                                    <FaFacebook />
                                </a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-6 lg:gap-0 items-center justify-between pt-4">
                        <div className='flex lg:flex-col gap-6'>
                            <p className="text-[12px]">
                                The appearance of U.S. Department of Defense personnel or other visual information does not imply or constitute DoD endorsement.
                            </p>
                            <p className='text-[12px]'>
                                The appearance of U.S. Department of Defense personnel or other visual information does not imply or constitute DoD endorsement.
                            </p>
                        </div>
                        <div className="flex space-x-4 text-xs">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                            <a href="#" className="hover:underline">Terms & Conditions</a>
                            <a href="#" className="hover:underline">Press</a>
                            <a href="#" className="hover:underline">Careers</a>
                            <a href="#" className="hover:underline">Powered by Nucleus</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer