import { useState, useRef } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import emailjs from '@emailjs/browser';

const AnonymousForm = () => {
    const form = useRef(null); // Reference for the form
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const [file, setFile] = useState(null);
    const [userToken, setUserToken] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            // Validate file size (max 5MB)
            if (selectedFile.size > 5 * 1024 * 1024) {
                toast.error("File size exceeds 5MB limit.");
                return;
            }

            // Validate file type
            const allowedTypes = [
                "image/png",
                "image/jpeg",
                "application/pdf",
                "application/txt",
                "application/msword", // .doc
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
                "application/vnd.ms-excel", // .xls
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
                "application/zip", // .zip
                "application/x-rar-compressed" // .rar
            ];
            if (!allowedTypes.includes(selectedFile.type)) {
                toast.error("Invalid file type. Please upload PNG, JPEG, PDF, TXT, DOC, DOCX, XLS, XLSX, ZIP, or RAR.");
                return;
            }

            setFile(selectedFile);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData();
        formData.append("message", message);
        if (file) {
            formData.append("file", file);
        }

        try {
            // Save data to the database
            const response = await axios.post(
                "https://oralgh-api.interactivedigital.com.gh/api/anon-submission", // Replace with your database API URL
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            setUserToken(response.data["user token"]);
            setShowPopup(true);

            // Send the form data to EmailJS
            emailjs.sendForm('service_9qhefcl', 'template_gweq0p9', form.current, {
                publicKey: 'aV-FvEfOZg7fbxTN2',
                from_name: 'Oral Team',
            }).then(
                () => {
                    toast.success('Message sent successfully!');
                },
                (error) => {
                    toast.error('Failed to send message. Please try again.');
                    console.error("EmailJS Error: ", error);
                }
            );

            toast.success("Submission successful! Data saved and email sent.");
            setMessage("");
            setFile(null);
        } catch (error) {
            console.error("Error during submission:", error);
            toast.error("Failed to submit data or send email. Please try again.");
        } finally {
            setTimeout(() => {
                setIsSubmitting(false);
            }, 1500);
        }
    };

    const handleCopyToken = () => {
        navigator.clipboard.writeText(userToken)
            .then(() => {
                toast.success("Token copied to clipboard!");
            })
            .catch(() => {
                toast.error("Failed to copy token.");
            });
    };

    return (
        <div>
            <ToastContainer />
            <form ref={form} encType="multipart/form-data" method="post" onSubmit={handleSubmit} className="max-w-md mx-auto h-[360px] overflow-y-auto border space-y-4">
                {/* Message Input */}
                <div className="mb-4">
                    <label htmlFor="message" className="block text-lg font-medium text-black">
                        Your Anonymous Message <b className="text-red-500">*</b>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Type your message here..."
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md resize-none shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>

                {/* File Input */}
                <div className="mb-4">
                    <label htmlFor="file" className="block text-lg font-medium text-black">
                        Attach a Document (optional)
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        className="mt-2 block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-green-700 hover:file:bg-purple-100"
                        onChange={handleFileChange}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                        Selected File: {file ? file.name : "No file selected"}
                    </p>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting..." : "Send Message"}
                </button>
            </form>

            {/* Popup for User Token */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
                        <h2 className="text-lg font-medium mb-4">Your User Token</h2>
                        <span className="text-red-500 mb-2 text-[12px]">Please keep the token safe for a possible reward in future.</span>
                        <p className="text-gray-800 break-all mb-4">{userToken}</p>
                        <div className="flex space-x-4">
                            <button
                                onClick={handleCopyToken}
                                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-800"
                            >
                                Copy Token
                            </button>
                            <button
                                onClick={() => setShowPopup(false)}
                                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-800"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnonymousForm;
