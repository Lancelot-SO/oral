/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "../App.css";

const WhistleRight = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-6 shadow-lg">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
                    <h2 className="text-2xl font-bold mb-4">Whistleblower Rights</h2>
                    <h3 className="font-bold mt-4">Understanding Your Rights as a Whistleblower</h3>
                    <p>
                        As a whistleblower in Ghana, you have specific rights guaranteed under the
                        Whistleblower Act, 2006 (Act 720). ORAL is committed to ensuring these rights
                        are protected and upheld throughout the reporting process.
                    </p>

                    <h3 className="font-bold mt-4">Fundamental Rights</h3>
                    <h4 className="font-bold mt-2">Right to Report</h4>
                    <ul className="list-disc pl-6">
                        <li>Report any impropriety or wrongdoing without fear.</li>
                        <li>Choose your preferred reporting channel.</li>
                        <li>Submit reports anonymously.</li>
                        <li>Provide additional information after initial reporting.</li>
                        <li>Withdraw your disclosure at any stage.</li>
                    </ul>

                    <h4 className="font-bold mt-2">Right to Confidentiality</h4>
                    <ul className="list-disc pl-6">
                        <li>Complete confidentiality of your identity.</li>
                        <li>Protection of all submitted information.</li>
                        <li>Control over who knows your identity.</li>
                        <li>Anonymity in any subsequent proceedings.</li>
                        <li>Private communication channels.</li>
                    </ul>

                    <h4 className="font-bold mt-2">Right to Protection</h4>
                    <ul className="list-disc pl-6">
                        <li>Protection against any form of victimization.</li>
                        <li>Security of employment.</li>
                        <li>Personal safety measures when needed.</li>
                        <li>Protection extending to your family members.</li>
                        <li>Continued protection after case closure.</li>
                    </ul>

                    <h4 className="font-bold mt-2">Right to Information</h4>
                    <ul className="list-disc pl-6">
                        <li>Regular updates about your case.</li>
                        <li>Information about handling procedures.</li>
                        <li>Knowledge of who has access to your information.</li>
                        <li>Understanding of how your report will be used.</li>
                        <li>Updates on investigation outcomes.</li>
                    </ul>

                    <h3 className="font-bold mt-4">Workplace Rights</h3>
                    <h4 className="font-bold mt-2">Employment Security</h4>
                    <ul className="list-disc pl-6">
                        <li>You cannot be dismissed from your job.</li>
                        <li>Suspended or demoted.</li>
                        <li>Transferred against your will.</li>
                        <li>Harassed or intimidated.</li>
                        <li>Denied promotion or benefits.</li>
                        <li>Subjected to adverse working conditions.</li>
                    </ul>

                    <h4 className="font-bold mt-2">Career Protection</h4>
                    <ul className="list-disc pl-6">
                        <li>Continuation of career progression.</li>
                        <li>Fair performance evaluations.</li>
                        <li>Equal training opportunities.</li>
                        <li>Normal workplace benefits.</li>
                        <li>Professional development.</li>
                    </ul>

                    <h3 className="font-bold mt-4">Legal Rights</h3>
                    <h4 className="font-bold mt-2">Legal Standing</h4>
                    <ul className="list-disc pl-6">
                        <li>Submit evidence in confidence.</li>
                        <li>Be represented by legal counsel.</li>
                        <li>Receive legal aid if needed.</li>
                        <li>Appeal decisions affecting your rights.</li>
                        <li>Seek judicial review of administrative decisions.</li>
                    </ul>

                    <h4 className="font-bold mt-2">Immunity Rights</h4>
                    <ul className="list-disc pl-6">
                        <li>Criminal prosecution related to your disclosure.</li>
                        <li>Civil lawsuits arising from your report.</li>
                        <li>Disciplinary proceedings.</li>
                        <li>Professional sanctions.</li>
                        <li>Breach of confidentiality claims.</li>
                    </ul>

                    <h3 className="font-bold mt-4">Support Rights</h3>
                    <h4 className="font-bold mt-2">Professional Support</h4>
                    <ul className="list-disc pl-6">
                        <li>Access professional counseling.</li>
                        <li>Receive career guidance.</li>
                        <li>Obtain financial advice.</li>
                        <li>Access psychological support.</li>
                        <li>Receive family support services.</li>
                    </ul>

                    <h4 className="font-bold mt-2">Administrative Support</h4>
                    <ul className="list-disc pl-6">
                        <li>Assistance with documentation.</li>
                        <li>Help understanding procedures.</li>
                        <li>Support with communications.</li>
                        <li>Aid in evidence preservation.</li>
                        <li>Guidance through processes.</li>
                    </ul>

                    <h3 className="font-bold mt-4">Contact for Rights Issues</h3>
                    <p>
                        <strong>Immediate Assistance:</strong> rights@oralgh.org
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhistleRight;
