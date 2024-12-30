/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const WhistleblowingForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [whistleData, setWhistleData] = useState({
        email: "",
        mobile_number: "",
        message: "",
    });
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWhistleData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData();
        formData.append("email", whistleData.email);
        formData.append("mobile_number", whistleData.mobile_number || "");
        formData.append("message", whistleData.message);
        if (file) {
            formData.append("attachment", file);
        }

        try {
            await axios.post(
                "https://oralgh-api.interactivedigital.com.gh/api/whistleblower-submission",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            toast.success("Submission successful!");
            setWhistleData({ email: "", mobile_number: "", message: "" });
            setFile(null);
        } catch (error) {
            toast.error("Failed to submit. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleSubmit} className="max-w-md mx-auto h-[360px] overflow-y-auto border space-y-4">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg font-medium text-black smallS8:text-sm md:text-base lg:text-lg">
                        Your Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email address"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 smallS8:sm:text-xs smallS8:p-1 md:p-2"
                        value={whistleData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="phone" className="block text-lg font-medium text-black smallS8:text-sm md:text-base lg:text-lg">
                        Your Phone Number
                    </label>
                    <input
                        type="tel"
                        id="mobile_number"
                        name="mobile_number"
                        placeholder="Your phone number"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 smallS8:sm:text-xs smallS8:p-1 md:p-2"
                        value={whistleData.mobile_number}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-lg font-medium text-black smallS8:text-sm md:text-base lg:text-lg">
                        Your Whistleblowing Message <b className="text-red-500">*</b>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Type your message here..."
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md resize-none shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2 smallS8:sm:text-xs smallS8:p-1 md:p-2 md:sm:text-base"
                        value={whistleData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="file" className="block text-lg font-medium text-black smallS8:text-sm md:text-base lg:text-lg">
                        Attach a Document (optional)
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="attachment"
                        className="mt-2 block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-green-700 hover:file:bg-purple-100 smallS8:file:py-1 smallS8:file:px-2 md:file:py-3 md:file:px-6"
                        onChange={handleFileChange}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black smallS8:py-1 smallS8:text-sm md:py-2 md:text-base lg:py-3"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting..." : "Send Message"}
                </button>
            </form>
        </div>

    );
};

export default WhistleblowingForm;