/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "../App.css";

const Faq = ({ isOpen, onClose }) => {
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
                    <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions (FAQ)</h2>

                    <h3 className="font-bold mt-4">About ORAL</h3>
                    <h4 className="font-bold mt-2">What is ORAL?</h4>
                    <p>Operation Recover All Loot (ORAL) is Ghana's central information gathering and analysis hub for reports of financial misconduct and corruption. We work with established anti-corruption agencies like CHRAJ, EOCO, and OSP by collecting, analyzing, and referring evidence for investigation and action.</p>

                    <h4 className="font-bold mt-2">Is ORAL a government agency?</h4>
                    <p>ORAL is an independent initiative established under the directive of President-elect John Dramani Mahama. While we coordinate with government agencies, our operations are independent to ensure impartial analysis and referral of cases.</p>

                    <h4 className="font-bold mt-2">How is ORAL different from other anti-corruption agencies?</h4>
                    <p>ORAL serves as an intelligence gathering and analysis hub rather than an investigative or prosecutorial body. We complement existing agencies by providing them with analyzed intelligence packages for investigation and action.</p>

                    <h3 className="font-bold mt-4">Reporting Process</h3>
                    <h4 className="font-bold mt-2">How do I submit a report?</h4>
                    <p>You can submit information through multiple secure channels:</p>
                    <ul className="list-disc pl-6">
                        <li>Online portal at <a href="https://www.oralgh.org/report" className="text-blue-500 underline">www.oralgh.org/report</a></li>
                        <li>Toll-free hotline: 0800 900 111</li>
                        <li>Encrypted email: public@oralgh.org</li>
                        <li>In-person appointments at our secure facilities</li>
                    </ul>

                    <h4 className="font-bold mt-2">Can I report anonymously?</h4>
                    <p>Yes. Our systems are designed to accept and protect anonymous submissions. You can choose to remain anonymous or provide your details confidentially.</p>

                    <h4 className="font-bold mt-2">What happens after I submit a report?</h4>
                    <ul className="list-decimal pl-6">
                        <li>Your submission is securely received and encrypted</li>
                        <li>Our expert team analyzes the information</li>
                        <li>Additional information may be requested if needed</li>
                        <li>A comprehensive intelligence package is prepared</li>
                        <li>The case is referred to appropriate agencies for action</li>
                    </ul>

                    <h4 className="font-bold mt-2">What types of misconduct should I report?</h4>
                    <ul className="list-disc pl-6">
                        <li>Financial misconduct</li>
                        <li>Asset-related information</li>
                        <li>Contract and procurement irregularities</li>
                        <li>Administrative malpractices</li>
                        <li>Revenue-related issues</li>
                    </ul>

                    <h3 className="font-bold mt-4">Security and Confidentiality</h3>
                    <h4 className="font-bold mt-2">How is my information protected?</h4>
                    <ul className="list-disc pl-6">
                        <li>End-to-end encryption for all communications</li>
                        <li>Secure data storage systems</li>
                        <li>Strict access controls</li>
                        <li>Regular security audits</li>
                        <li>Professional handling protocols</li>
                    </ul>

                    <h4 className="font-bold mt-2">Who has access to my report?</h4>
                    <p>Only authorized ORAL analysts have access to your information. Access is strictly controlled and logged for security purposes.</p>

                    <h4 className="font-bold mt-2">Can my employer find out that I reported?</h4>
                    <p>No. Your identity is protected by law, and we maintain strict confidentiality protocols to prevent unauthorized disclosure.</p>

                    {/* Whistleblower Protection */}
                    <h3 className="font-bold mt-4">Whistleblower Protection</h3>
                    <h4 className="font-bold mt-2">What legal protections do I have?</h4>
                    <p>The Whistleblower Act, 2006 (Act 720) provides comprehensive protection including:</p>
                    <ul className="list-disc pl-6">
                        <li>Confidentiality protection</li>
                        <li>Employment protection</li>
                        <li>Legal immunity</li>
                        <li>Physical security when needed</li>
                        <li>Protection against retaliation</li>
                    </ul>

                    <h4 className="font-bold mt-2">What if I face retaliation?</h4>
                    <p>Contact our protection team immediately through:</p>
                    <ul className="list-disc pl-6">
                        <li>Emergency hotline: 0800 900 111</li>
                        <li>Protection email: protection@oralgh.org</li>
                        <li>Emergency portal features</li>
                    </ul>
                    <p>We will activate immediate protection measures as needed.</p>

                    {/* Case Management */}
                    <h3 className="font-bold mt-4">Case Management</h3>
                    <h4 className="font-bold mt-2">How can I track my case?</h4>
                    <p>Use your secure reference number to:</p>
                    <ul className="list-disc pl-6">
                        <li>Call our hotline</li>
                        <li>Email our case management team</li>
                    </ul>

                    <h4 className="font-bold mt-2">How long does the process take?</h4>
                    <p>Timeline varies based on:</p>
                    <ul className="list-disc pl-6">
                        <li>Case complexity</li>
                        <li>Quality of evidence</li>
                        <li>Required analysis</li>
                        <li>Agency workload</li>
                    </ul>
                    <p>We provide regular updates on case progress.</p>

                    {/* Evidence and Documentation */}
                    <h3 className="font-bold mt-4">Evidence and Documentation</h3>
                    <h4 className="font-bold mt-2">What evidence should I provide?</h4>
                    <ul className="list-disc pl-6">
                        <li>Official documents</li>
                        <li>Financial records</li>
                        <li>Correspondence</li>
                        <li>Photos or videos</li>
                        <li>Witness information</li>
                        <li>Any relevant supporting material</li>
                    </ul>

                    <h4 className="font-bold mt-2">How should I secure evidence?</h4>
                    <ul className="list-disc pl-6">
                        <li>Make secure copies</li>
                        <li>Store originals safely</li>
                        <li>Document chronologically</li>
                        <li>Maintain chain of custody</li>
                        <li>Avoid unauthorized sharing</li>
                    </ul>

                    {/* Working with Agencies */}
                    <h3 className="font-bold mt-4">Working with Agencies</h3>
                    <h4 className="font-bold mt-2">Which agencies does ORAL work with?</h4>
                    <p>We coordinate with:</p>
                    <ul className="list-disc pl-6">
                        <li>CHRAJ (Commission on Human Rights and Administrative Justice)</li>
                        <li>EOCO (Economic and Organised Crime Office)</li>
                        <li>OSP (Office of Special Prosecutor)</li>
                        <li>Other relevant oversight bodies</li>
                    </ul>

                    <h4 className="font-bold mt-2">How are cases referred to agencies?</h4>
                    <p>Cases are referred based on:</p>
                    <ul className="list-disc pl-6">
                        <li>Agency mandate</li>
                        <li>Case type</li>
                        <li>Jurisdictional considerations</li>
                        <li>Resource availability</li>
                        <li>Urgency of action needed</li>
                    </ul>

                    {/* Support and Assistance */}
                    <h3 className="font-bold mt-4">Support and Assistance</h3>
                    <h4 className="font-bold mt-2">Can I get legal assistance?</h4>
                    <p>Yes, we can connect you with:</p>
                    <ul className="list-disc pl-6">
                        <li>Legal advisors</li>
                        <li>Rights specialists</li>
                        <li>Protection experts</li>
                        <li>Support services</li>
                    </ul>

                    {/* Technical Questions */}
                    <h3 className="font-bold mt-4">Technical Questions</h3>
                    <h4 className="font-bold mt-2">Is the online portal secure?</h4>
                    <p>Yes, our portal features:</p>
                    <ul className="list-disc pl-6">
                        <li>SSL encryption</li>
                        <li>Multi-factor authentication</li>
                        <li>Session security</li>
                        <li>Regular security updates</li>
                        <li>Continuous monitoring</li>
                    </ul>

                    <h4 className="font-bold mt-2">Can I submit from my work computer?</h4>
                    <p>We recommend using:</p>
                    <ul className="list-disc pl-6">
                        <li>Personal devices</li>
                        <li>Secure networks</li>
                        <li>Private browsing</li>
                        <li>VPN services when needed</li>
                    </ul>

                    {/* Contact and Communication */}
                    <h3 className="font-bold mt-4">Contact and Communication</h3>
                    <h4 className="font-bold mt-2">How can I contact ORAL securely?</h4>
                    <ul className="list-disc pl-6">
                        <li>Secure hotline: 0800 900 111</li>
                        <li>Encrypted email: public@oralgh.org</li>
                        <li>Online portal: <a href="https://www.oralgh.org" className="text-blue-500 underline">www.oralgh.org</a></li>
                        <li>Regional offices (by appointment)</li>
                    </ul>

                    {/* Follow-up and Outcomes */}
                    <h3 className="font-bold mt-4">Follow-up and Outcomes</h3>
                    <h4 className="font-bold mt-2">Will I know the outcome of my report?</h4>
                    <p>You will receive:</p>
                    <ul className="list-disc pl-6">
                        <li>Referral notifications</li>
                        <li>Agency action updates</li>
                        <li>Final outcome reports (where possible)</li>
                    </ul>

                    <h4 className="font-bold mt-2">Can I provide additional information later?</h4>
                    <p>Yes, you can:</p>
                    <ul className="list-disc pl-6">
                        <li>Update your submission</li>
                        <li>Add new evidence</li>
                        <li>Provide clarifications</li>
                        <li>Report related issues</li>
                    </ul>
                    <p>Remember: Your role in fighting corruption is crucial. We are here to support and protect you throughout the process.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;
