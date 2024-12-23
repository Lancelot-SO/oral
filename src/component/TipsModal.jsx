/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const TipsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-6 shadow-lg overflow-y-auto max-h-[90vh]">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
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

                {/* Modal Content */}
                <h2 className="text-2xl font-bold mb-4">ORAL Information Submission Guidelines</h2>
                <div className="text-gray-700 text-sm md:text-base space-y-4">
                    <section>
                        <h3 className="font-bold">Before You Submit</h3>
                        <ul className="list-disc pl-6">
                            <li>Your identity will be protected. All submissions are encrypted and handled confidentially.</li>
                            <li>Provide as much specific detail as possible to enable effective investigation.</li>
                            <li>Include dates, locations, and names where available.</li>
                            <li>If you have supporting documents, prepare them for upload (accepted formats: PDF, JPG, PNG, DOC).</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="font-bold">Category-Specific Guidelines</h3>

                        <h4 className="font-bold mt-3">1. Financial Misconduct</h4>
                        <p>What to Include:</p>
                        <ul className="list-disc pl-6">
                            <li>Specific financial transactions or patterns you&rsquo;ve observed</li>
                            <li>Dates and amounts of suspicious transactions</li>
                            <li>Names of individuals or departments involved</li>
                            <li>Reference numbers of relevant documents</li>
                            <li>Bank accounts or financial institutions involved (if known)</li>
                            <li>Any documentary evidence of the transactions</li>
                        </ul>
                        <p className="mt-2 font-bold">Tips for Strong Submissions:</p>
                        <ul className="list-disc pl-6">
                            <li>Focus on specific instances rather than general allegations</li>
                            <li>Include transaction dates and amounts where possible</li>
                            <li>Note any witnesses or other people who may have knowledge</li>
                            <li>Mention if this is a one-time incident or ongoing pattern</li>
                        </ul>

                        <h4 className="font-bold mt-3">2. Asset-Related Information</h4>
                        <p>What to Include:</p>
                        <ul className="list-disc pl-6">
                            <li>Description of the assets in question</li>
                            <li>Location of properties or assets</li>
                            <li>Estimated value and acquisition date</li>
                            <li>Names of registered owners or beneficiaries</li>
                            <li>Source of funds used for acquisition (if known)</li>
                            <li>Any related companies or business entities</li>
                            <li>Photos or documentation of assets (if available)</li>
                        </ul>
                        <p className="mt-2 font-bold">Tips for Strong Submissions:</p>
                        <ul className="list-disc pl-6">
                            <li>Provide specific addresses for properties</li>
                            <li>Include registration numbers of vehicles or companies</li>
                            <li>Note any recent changes in ownership</li>
                            <li>Mention any visible signs of wealth inconsistent with known income</li>
                        </ul>

                        <h4 className="font-bold mt-3">3. Contract and Procurement Irregularities</h4>
                        <p>What to Include:</p>
                        <ul className="list-disc pl-6">
                            <li>Contract reference numbers</li>
                            <li>Tender or procurement process details</li>
                            <li>Names of companies and individuals involved</li>
                            <li>Contract values and payment details</li>
                            <li>Timeline of bidding and award process</li>
                            <li>Evidence of irregularities or violations</li>
                            <li>Details of project implementation status</li>
                        </ul>
                        <p className="mt-2 font-bold">Tips for Strong Submissions:</p>
                        <ul className="list-disc pl-6">
                            <li>Compare actual costs with market rates if possible</li>
                            <li>Note any deviations from standard procurement procedures</li>
                            <li>Include information about project quality or completion</li>
                            <li>Mention any conflicts of interest you&rsquo;re aware of</li>
                        </ul>

                        <h4 className="font-bold mt-3">4. Administrative Malpractices</h4>
                        <p>What to Include:</p>
                        <ul className="list-disc pl-6">
                            <li>Nature of the administrative violation</li>
                            <li>Department or office involved</li>
                            <li>Names and positions of key individuals</li>
                            <li>Dates of observed malpractices</li>
                            <li>Impact of the malpractice</li>
                            <li>Any official documents showing irregularities</li>
                        </ul>
                        <p className="mt-2 font-bold">Tips for Strong Submissions:</p>
                        <ul className="list-disc pl-6">
                            <li>Describe how normal procedures were bypassed</li>
                            <li>Include specific examples of violations</li>
                            <li>Note any attempts to cover up the malpractice</li>
                            <li>Mention any previous reports or complaints</li>
                        </ul>

                        <h4 className="mt-3 font-bold">5. Revenue-Related Issues</h4>
                        <p>What to Include:</p>
                        <ul className="list-disc pl-6">
                            <li>Type of revenue involved</li>
                            <li>Amount of suspected loss</li>
                            <li>Methods used to evade or divert funds</li>
                            <li>Timeframe of the activities</li>
                            <li>Individuals or entities involved</li>
                            <li>Any documentation of correct versus reported figures</li>
                        </ul>
                        <p className="mt-2 font-bold">Tips for Strong Submissions:</p>
                        <ul className="list-disc pl-6">
                            <li>Provide specific examples of revenue manipulation</li>
                            <li>Include dates and amounts where possible</li>
                            <li>Note any patterns in reporting discrepancies</li>
                            <li>Mention any systems or processes being exploited</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="font-bold">General Submission Tips</h3>
                        <ul className="list-disc pl-6">
                            <li>Provide exact dates, times, and locations.</li>
                            <li>Include names and titles of individuals involved.</li>
                            <li>Reference specific documents or transactions.</li>
                            <li>Stay factual: Focus on what you&rsquo;ve directly observed or can prove.</li>
                            <li>Protect yourself: Use secure, private internet connections.</li>
                            <li>Follow up: Note your submission reference number.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="font-bold">Need Help?</h3>
                        <ul className="list-disc pl-6">
                            <li>Contact our secure helpline: <b>0800 900 111</b></li>
                            <li>Email: <b><a href="mailto:public@oralgh.org"
                                className="text-blue-600 hover:underline">public@oralgh.org</a></b></li>
                            <li>Visit our FAQ section for more guidance.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TipsModal;
