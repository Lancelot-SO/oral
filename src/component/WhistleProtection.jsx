/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "../App.css";

const WhistleProtection = ({ isOpen, onClose }) => {
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
                    <h2 className="text-2xl font-bold mb-4">Whistleblower Protection</h2>

                    <h3 className="font-bold mt-4">Your Rights and Protections Under Ghanaian Law</h3>
                    <p>The Operation Recover All Loot (ORAL) initiative fully complies with and enforces the protections guaranteed under the Whistleblower Act, 2006 (Act 720). This law provides comprehensive protection for individuals who report wrongdoing in good faith.</p>

                    <h3 className="font-bold mt-4">Legal Framework</h3>
                    <h4 className="font-bold mt-2">Whistleblower Act Protection</h4>
                    <p>Under the Whistleblower Act, 2006 (Act 720), you are legally protected when you disclose information about:</p>
                    <ul className="list-disc pl-6">
                        <li>Economic crime</li>
                        <li>Financial impropriety in public office</li>
                        <li>Misappropriation of public funds</li>
                        <li>Misuse of public property</li>
                        <li>Fraud against the government</li>
                        <li>Environmental degradation</li>
                        <li>Public health and safety threats</li>
                        <li>Any other form of wrongdoing relating to public resources</li>
                    </ul>

                    <h3 className="font-bold mt-4">Your Protected Rights</h3>
                    <h4 className="font-bold mt-2">Confidentiality Protection</h4>
                    <ul className="list-disc pl-6">
                        <li>Your identity is protected by law and will not be disclosed without your explicit consent.</li>
                        <li>All submitted information is handled through encrypted channels.</li>
                        <li>Access to whistleblower information is strictly limited to authorized personnel.</li>
                        <li>Violation of confidentiality is a criminal offense under Ghanaian law.</li>
                    </ul>

                    <h4 className="font-bold mt-2">Employment Protection</h4>
                    <ul className="list-disc pl-6">
                        <li>You are protected against dismissal, suspension, demotion, harassment, intimidation, discrimination, and any other form of employment-related victimization.</li>
                    </ul>

                    <h4 className="font-bold mt-2">Legal Protection</h4>
                    <ul className="list-disc pl-6">
                        <li>Immunity from civil and criminal proceedings.</li>
                        <li>Protection against breach of confidentiality obligations.</li>
                        <li>Legal aid provision when necessary.</li>
                        <li>Right to anonymity in court proceedings.</li>
                    </ul>

                    <h3 className="font-bold mt-4">How We Protect You</h3>
                    <h4 className="font-bold mt-2">Technical Security</h4>
                    <ul className="list-disc pl-6">
                        <li>End-to-end encryption for all communications.</li>
                        <li>Secure anonymous reporting channels.</li>
                        <li>Protected data storage systems.</li>
                        <li>Regular security audits and updates.</li>
                    </ul>

                    <h4 className="font-bold mt-2">Procedural Protection</h4>
                    <ul className="list-disc pl-6">
                        <li>Strict information handling protocols.</li>
                        <li>Limited access to whistleblower data.</li>
                        <li>Secure case management system.</li>
                        <li>Regular staff training on protection protocols.</li>
                    </ul>

                    <h4 className="font-bold mt-2">Institutional Support</h4>
                    <ul className="list-disc pl-6">
                        <li>Dedicated whistleblower protection officers.</li>
                        <li>24/7 emergency support hotline.</li>
                        <li>Access to legal counsel when needed.</li>
                        <li>Continuous risk assessment and mitigation.</li>
                    </ul>

                    <h3 className="font-bold mt-4">Reporting Channels</h3>
                    <ul className="list-disc pl-6">
                        <li>Secure Online Portal: Anonymous submission option, encrypted communication, secure document upload, case tracking capability.</li>
                        <li>Protected Hotline: 24/7 availability, trained operators, no caller identification required, multiple language support.</li>
                        <li>In-Person Reporting: Secure meeting facilities, professional handlers, confidential documentation, protected environment.</li>
                    </ul>

                    <h3 className="font-bold mt-4">Additional Protections</h3>
                    <h4 className="font-bold mt-2">Police Protection</h4>
                    <ul className="list-disc pl-6">
                        <li>Physical protection.</li>
                        <li>Surveillance against threats.</li>
                        <li>Safe house facilities.</li>
                        <li>Emergency response.</li>
                    </ul>

                    <h4 className="font-bold mt-2">Financial Protection</h4>
                    <ul className="list-disc pl-6">
                        <li>Protection against financial penalties.</li>
                        <li>Compensation for victimization.</li>
                        <li>Coverage of protection-related expenses.</li>
                        <li>Support for relocation if necessary.</li>
                    </ul>

                    <h3 className="font-bold mt-4">Your Responsibilities</h3>
                    <h4 className="font-bold mt-2">To Maintain Protection</h4>
                    <ul className="list-disc pl-6">
                        <li>Report in good faith.</li>
                        <li>Provide truthful information.</li>
                        <li>Follow security protocols.</li>
                        <li>Maintain confidentiality.</li>
                        <li>Report any threats or intimidation immediately.</li>
                    </ul>

                    <h4 className="font-bold mt-2">Documentation</h4>
                    <ul className="list-disc pl-6">
                        <li>Keep records of relevant information.</li>
                        <li>Maintain copies of evidence securely.</li>
                        <li>Document any retaliatory actions.</li>
                        <li>Record all related communications.</li>
                    </ul>

                    <h3 className="font-bold mt-4">Support Services</h3>
                    <ul className="list-disc pl-6">
                        <li>Legal Support: Access to legal advisors, guidance on rights and protections, assistance with legal proceedings, documentation support.</li>
                        <li>Professional Support: Career counseling, employment advice, professional network protection, workplace mediation.</li>
                        <li>Personal Support: Psychological support, family protection services, relocation assistance, financial advice.</li>
                        <li>Emergency Response: Call the emergency hotline at 0800 900 111.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WhistleProtection;
