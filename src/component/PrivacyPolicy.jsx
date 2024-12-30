/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "../App.css";

const PrivacyPolicy = ({ isOpen, onClose }) => {
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
                    <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
                    <h3 className="font-bold mt-4">Introduction</h3>
                    <p>
                        Operation Recover All Loot (ORAL) is committed to protecting the privacy and security of all individuals who interact with our platform.
                        This privacy policy explains how we collect, use, protect, and handle your information in accordance with Ghana's Data Protection Act, 2012 (Act 843) and other relevant laws.
                    </p>

                    <h3 className="font-bold mt-4">Key Principles</h3>
                    <ul className="list-disc pl-6">
                        <li>Strict confidentiality</li>
                        <li>Data minimization</li>
                        <li>Purpose limitation</li>
                        <li>Security by design</li>
                        <li>Transparency</li>
                        <li>User control</li>
                    </ul>

                    <h3 className="font-bold mt-4">Information We Collect</h3>
                    <h4 className="font-bold mt-2">Required Information</h4>
                    <ul className="list-disc pl-6">
                        <li>Case-related details and evidence</li>
                        <li>Contact information (if provided)</li>
                        <li>Supporting documentation</li>
                        <li>Communication records</li>
                        <li>Technical metadata for security</li>
                    </ul>

                    <h4 className="font-bold mt-2">Optional Information</h4>
                    <ul className="list-disc pl-6">
                        <li>Demographic information</li>
                        <li>Professional background</li>
                        <li>Related case references</li>
                        <li>Additional contact details</li>
                        <li>Witness information</li>
                    </ul>

                    <h4 className="font-bold mt-2">Automatically Collected Information</h4>
                    <ul className="list-disc pl-6">
                        <li>IP addresses (anonymized)</li>
                        <li>Browser type and version</li>
                        <li>Device information</li>
                        <li>Access timestamps</li>
                        <li>Security audit logs</li>
                    </ul>

                    <h3 className="font-bold mt-4">How We Use Your Information</h3>
                    <h4 className="font-bold mt-2">Primary Uses</h4>
                    <ul className="list-disc pl-6">
                        <li>Processing and analyzing reported cases</li>
                        <li>Coordinating with authorized agencies</li>
                        <li>Protecting whistleblower safety</li>
                        <li>Managing case progression</li>
                        <li>Maintaining platform security</li>
                    </ul>

                    <h4 className="font-bold mt-2">Secondary Uses</h4>
                    <ul className="list-disc pl-6">
                        <li>Improving our services</li>
                        <li>Generating anonymized statistics</li>
                        <li>Enhancing security measures</li>
                        <li>Training and quality assurance</li>
                        <li>System optimization</li>
                    </ul>

                    <h3 className="font-bold mt-4">Data Protection Measures</h3>
                    <h4 className="font-bold mt-2">Technical Security</h4>
                    <ul className="list-disc pl-6">
                        <li>End-to-end encryption</li>
                        <li>Multi-factor authentication</li>
                        <li>Advanced firewall protection</li>
                        <li>Regular security audits</li>
                        <li>Intrusion detection systems</li>
                        <li>Secure data backups</li>
                    </ul>

                    <h3 className="font-bold mt-4">Administrative Controls</h3>
                    <ul className="list-disc pl-6">
                        <li>Strict access controls</li>
                        <li>Regular staff training</li>
                        <li>Security clearance requirements</li>
                        <li>Audit logging</li>
                        <li>Incident response protocols</li>
                    </ul>

                    <h3 className="font-bold mt-4">Physical Security</h3>
                    <ul className="list-disc pl-6">
                        <li>Secure data centers</li>
                        <li>Controlled access facilities</li>
                        <li>24/7 security monitoring</li>
                        <li>Disaster recovery sites</li>
                        <li>Environmental controls</li>
                    </ul>

                    <h3 className="font-bold mt-4">Information Sharing</h3>
                    <h4 className="font-bold mt-2">Authorized Recipients</h4>
                    <p>We only share information with:</p>
                    <ul className="list-disc pl-6">
                        <li>Designated anti-corruption agencies (CHRAJ, EOCO, OSP, etc.)</li>
                        <li>Law enforcement (when legally required)</li>
                        <li>Protection service providers</li>
                        <li>Legal authorities (under court order)</li>
                    </ul>

                    <h4 className="font-bold mt-2">Sharing Protocols</h4>
                    <ul className="list-disc pl-6">
                        <li>Strict need-to-know basis</li>
                        <li>Secure transfer protocols</li>
                        <li>Written agreements</li>
                        <li>Access logging</li>
                        <li>Usage tracking</li>
                    </ul>

                    <h3 className="font-bold mt-4">Your Rights</h3>
                    <h4 className="font-bold mt-2">Access Rights</h4>
                    <ul className="list-disc pl-6">
                        <li>Access your personal data</li>
                        <li>Request data corrections</li>
                        <li>Obtain processing information</li>
                        <li>Receive data copies</li>
                        <li>Know data recipients</li>
                    </ul>

                    <h4 className="font-bold mt-2">Control Rights</h4>
                    <ul className="list-disc pl-6">
                        <li>Withdraw consent</li>
                        <li>Request data deletion</li>
                        <li>Limit data processing</li>
                        <li>Object to processing</li>
                        <li>Transfer data</li>
                    </ul>

                    <h3 className="font-bold mt-4">Data Retention</h3>
                    <h4 className="font-bold mt-2">Retention Periods</h4>
                    <ul className="list-disc pl-6">
                        <li>Active cases: Duration of investigation</li>
                        <li>Closed cases: 7 years minimum</li>
                        <li>Security logs: 5 years</li>
                        <li>Communication records: 3 years</li>
                        <li>Technical data: 1 year</li>
                    </ul>

                    <h4 className="font-bold mt-2">Deletion Protocols</h4>
                    <ul className="list-disc pl-6">
                        <li>Secure wiping methods</li>
                        <li>Verified destruction</li>
                        <li>Audit trail maintenance</li>
                        <li>Hardware sanitization</li>
                        <li>Archive management</li>
                    </ul>

                    <h3 className="font-bold mt-4">International Data Transfers</h3>
                    <h4 className="font-bold mt-2">Transfer Safeguards</h4>
                    <ul className="list-disc pl-6">
                        <li>Strict necessity basis</li>
                        <li>Encrypted transfers</li>
                        <li>Legal agreements</li>
                        <li>Privacy shields</li>
                        <li>Data localization</li>
                    </ul>

                    <h4 className="font-bold mt-2">Transfer Purposes</h4>
                    <ul className="list-disc pl-6">
                        <li>International investigations</li>
                        <li>Asset recovery</li>
                        <li>Agency cooperation</li>
                        <li>Technical support</li>
                        <li>Security operations</li>
                    </ul>

                    <h3 className="font-bold mt-4">Children's Privacy</h3>
                    <p>
                        We do not knowingly collect information from individuals under 18 years old. Special procedures apply if such information is received through adult reporters.
                    </p>

                    <h3 className="font-bold mt-4">Website Analytics and Cookies</h3>
                    <h4 className="font-bold mt-2">Essential Cookies</h4>
                    <ul className="list-disc pl-6">
                        <li>Security tokens</li>
                        <li>Session management</li>
                        <li>Authentication status</li>
                        <li>Language preferences</li>
                        <li>Technical stability</li>
                    </ul>

                    <h4 className="font-bold mt-2">Analytics</h4>
                    <ul className="list-disc pl-6">
                        <li>Anonymized usage data</li>
                        <li>Performance metrics</li>
                        <li>Error monitoring</li>
                        <li>Access patterns</li>
                        <li>System health</li>
                    </ul>

                    <h3 className="font-bold mt-4">Changes to Privacy Policy</h3>
                    <p>We may update this policy to:</p>
                    <ul className="list-disc pl-6">
                        <li>Reflect service changes</li>
                        <li>Meet legal requirements</li>
                        <li>Enhance protection</li>
                        <li>Improve clarity</li>
                        <li>Address new risks</li>
                    </ul>

                    <h3 className="font-bold mt-4">Contact Information</h3>
                    <ul className="list-disc pl-6">
                        <li><strong>Privacy Officer:</strong> privacy@oralgh.org</li>
                        <li><strong>Data Protection:</strong> dataprotection@oralgh.org</li>
                        <li><strong>Security Team:</strong> security@oralgh.org</li>
                        <li><strong>General Inquiries:</strong> public@oralgh.org</li>
                    </ul>

                    <h3 className="font-bold mt-4">Legal Framework</h3>
                    <ul className="list-disc pl-6">
                        <li>Data Protection Act, 2012 (Act 843)</li>
                        <li>Whistleblower Act, 2006 (Act 720)</li>
                        <li>Electronic Transactions Act, 2008 (Act 772)</li>
                        <li>Cybersecurity Act, 2020 (Act 1038)</li>
                    </ul>

                    <h3 className="font-bold mt-4">Emergency Contacts</h3>
                    <ul className="list-disc pl-6">
                        <li><strong>Emergency Hotline:</strong> 0800 900 111</li>
                        <li><strong>Security Response:</strong> security@oralgh.org</li>
                        <li><strong>24/7 Support Portal:</strong> [secure.oralgh.org]</li>
                    </ul>

                    <h3 className="font-bold mt-4">Reporting Privacy Incidents</h3>
                    <p>If you suspect a privacy breach:</p>
                    <ul className="list-disc pl-6">
                        <li>Contact our privacy team immediately</li>
                        <li>Document the incident</li>
                        <li>Preserve relevant evidence</li>
                        <li>Follow provided instructions</li>
                        <li>Maintain confidentiality</li>
                    </ul>

                    <h3 className="font-bold mt-4">Accountability</h3>
                    <ul className="list-disc pl-6">
                        <li>Regular privacy audits</li>
                        <li>Staff training</li>
                        <li>Policy updates</li>
                        <li>Public transparency</li>
                        <li>Continuous improvement</li>
                    </ul>

                    <p className="mt-4"><strong>Last Updated:</strong> [Date] <strong>Version:</strong> 1.0</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
