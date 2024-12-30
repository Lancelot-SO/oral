/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "../App.css";

const TermsOfService = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-6 shadow-lg overflow-y-auto max-h-[90vh] custom-scrollbar">
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
                <div className="content">
                    <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
                    <p><strong>Version:</strong> 1.1</p>
                    <p><strong>Effective Date:</strong> 27 December 2024</p>

                    <h3 className="font-bold mt-4">1. Introduction and Purpose</h3>
                    <p>
                        These Terms of Service (&#34;Terms&#34;) constitute a legally binding agreement between Operation Recover All Loot (&#34;ORAL,&#34; "we,&#34; "us," or "our")
                        and any individual or entity (&#34;User,&#34; &#34;you,&#34; or &#34;your&#34;) accessing or using our platform and services.
                    </p>
                    <p>
                        These Terms have been crafted to ensure the effective, secure, and legally compliant operation of our anti-corruption intelligence gathering
                        and analysis services.
                    </p>

                    <h3 className="font-bold mt-4">2. Comprehensive Definitions</h3>
                    <h4 className="font-bold mt-2">2.1 Platform and Services</h4>
                    <p>
                        &#34;Platform&#34; encompasses the entirety of ORAL&#39;s digital and physical infrastructure, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>The website www.oralgh.org and all its subdomains</li>
                        <li>Mobile and desktop applications</li>
                        <li>Secure reporting portals</li>
                        <li>Communication channels</li>
                        <li>Physical reporting facilities</li>
                        <li>Documentation systems</li>
                        <li>Case management infrastructure</li>
                    </ul>

                    {/* Add additional sections here using a similar format */}
                    <h4 className="font-bold mt-2">2.2 User Categories</h4>
                    <p>We recognize different types of users, each with specific rights and responsibilities:</p>
                    <ul className="list-disc pl-6">
                        <li>Whistleblowers: Individuals reporting misconduct</li>
                        <li>Witnesses: Those providing supporting evidence</li>
                        <li>Representatives: Legal or authorized agents</li>
                        <li>Support Users: Those seeking information or assistance</li>
                        <li>Anonymous Users: Individuals choosing not to identify themselves</li>
                    </ul>

                    {/* Continue with the rest of the content */}
                    <h4 className="font-bold mt-2">2.3 Information Categories</h4>
                    <ul className="list-disc pl-6">
                        <li>Primary Reports: Direct allegations of misconduct</li>
                        <li>Supporting Evidence: Documentation and proof</li>
                        <li>Supplementary Information: Additional context or details</li>
                        <li>Witness Statements: Third-party corroboration</li>
                        <li>Follow-up Information: Updates to existing reports</li>
                    </ul>


                    {/* Service Scope and Operations */}
                    <h3 className="font-bold mt-4">3. Service Scope and Operations</h3>

                    {/* Core Functions */}
                    <h4 className="font-bold mt-2">3.1 Core Functions</h4>
                    <p>ORAL's services encompass four primary functions:</p>
                    <ol className=" pl-6">
                        <li>
                            <strong>3.1.1 Information Reception</strong>
                            <p>We provide multiple secure channels for receiving reports:</p>
                            <ul className="list-disc pl-6">
                                <li>Digital submissions through encrypted platforms</li>
                                <li>Verbal reports via secure telephone lines</li>
                                <li>Physical documentation through secure facilities</li>
                                <li>Electronic communications through protected channels</li>
                                <li>Real-time digital reporting systems</li>
                            </ul>
                        </li>
                        <li>
                            <strong>3.1.2 Analysis and Processing</strong>
                            <p>Our expert team conducts thorough analysis including:</p>
                            <ul className="list-disc pl-6">
                                <li>Verification of submitted information</li>
                                <li>Cross-referencing with existing data</li>
                                <li>Pattern identification</li>
                                <li>Risk assessment</li>
                                <li>Priority determination</li>
                                <li>Evidence evaluation</li>
                                <li>Credibility assessment</li>
                            </ul>
                        </li>
                        <li>
                            <strong>3.1.3 Agency Referral</strong>
                            <p>We maintain structured protocols for referring cases to:</p>
                            <ul className="list-disc pl-6">
                                <li>CHRAJ for administrative justice matters</li>
                                <li>EOCO for organized financial crimes</li>
                                <li>OSP for specialized corruption cases</li>
                                <li>Other authorized agencies as appropriate</li>
                                <li>Law enforcement when required</li>
                            </ul>
                        </li>
                        <li>
                            <strong>3.1.4 Source Protection</strong>
                            <p>We implement comprehensive protection measures:</p>
                            <ul className="list-disc pl-6">
                                <li>Identity concealment protocols</li>
                                <li>Secure communication channels</li>
                                <li>Legal protection mechanisms</li>
                                <li>Physical security measures</li>
                                <li>Digital security systems</li>
                            </ul>
                        </li>
                    </ol>

                    {/* Service Limitations */}
                    <h4 className="font-bold mt-2">3.2 Service Limitations</h4>
                    <p>Users must understand that ORAL:</p>
                    <ul className="list-disc pl-6">
                        <li>Does not conduct investigations directly</li>
                        <li>Cannot guarantee specific outcomes</li>
                        <li>Does not have prosecution authority</li>
                        <li>Cannot override agency decisions</li>
                        <li>Does not provide legal representation</li>
                        <li>Cannot guarantee complete anonymity in all cases</li>
                        <li>May be subject to legal disclosure requirements</li>
                    </ul>

                    {/* User Rights and Responsibilities */}
                    <h3 className="font-bold mt-4">4. User Rights and Responsibilities</h3>

                    {/* Fundamental Rights */}
                    <h4 className="font-bold mt-2">4.1 Fundamental Rights</h4>
                    <p>Every user is entitled to:</p>
                    <ol className=" pl-6">
                        <li>
                            <strong>4.1.1 Access Rights</strong>
                            <p>Users are entitled to:</p>
                            <ul className="list-disc pl-6">
                                <li>Use of secure reporting channels</li>
                                <li>Access to protection mechanisms</li>
                                <li>Information about case status</li>
                                <li>Communication with assigned handlers</li>
                                <li>Support services access</li>
                            </ul>
                        </li>
                        <li>
                            <strong>4.1.2 Protection Rights</strong>
                            <p>Users have the right to:</p>
                            <ul className="list-disc pl-6">
                                <li>Identity confidentiality</li>
                                <li>Legal protection under applicable laws</li>
                                <li>Security measures appropriate to risk level</li>
                                <li>Protection from retaliation</li>
                                <li>Access to emergency assistance</li>
                            </ul>
                        </li>
                        <li>
                            <strong>4.1.3 Information Rights</strong>
                            <p>Users are entitled to:</p>
                            <ul className="list-disc pl-6">
                                <li>Explanation of processes</li>
                                <li>Knowledge of information handling</li>
                                <li>Understanding of security measures</li>
                                <li>Access to support resources</li>
                            </ul>
                        </li>
                    </ol>

                    {/* Information Handling and Security */}
                    <h3 className="font-bold mt-4">5. Information Handling and Security</h3>

                    {/* Data Classification Framework */}
                    <h4 className="font-bold mt-2">5.1 Data Classification Framework</h4>
                    <p>ORAL implements a comprehensive data classification system that categorizes all received information based on sensitivity levels:</p>
                    <ol className=" pl-6">
                        <li>
                            <strong>5.1.1 Critical Level Information</strong>
                            <p>Information that, if compromised, could:</p>
                            <ul className="list-disc pl-6">
                                <li>Endanger whistleblower safety</li>
                                <li>Compromise ongoing investigations</li>
                                <li>Threaten national security</li>
                                <li>Impact financial stability</li>
                                <li>Jeopardize evidence integrity</li>
                            </ul>
                        </li>
                        <li>
                            <strong>5.1.2 Sensitive Level Information</strong>
                            <p>Information requiring heightened protection including:</p>
                            <ul className="list-disc pl-6">
                                <li>Personal identification details</li>
                                <li>Financial records</li>
                                <li>Internal communications</li>
                                <li>Witness statements</li>
                                <li>Supporting documentation</li>
                            </ul>
                        </li>
                        <li>
                            <strong>5.1.3 Standard Level Information</strong>
                            <p>General information including:</p>
                            <ul className="list-disc pl-6">
                                <li>Public records</li>
                                <li>Published documents</li>
                                <li>Statistical data</li>
                                <li>Historical records</li>
                                <li>Educational materials</li>
                            </ul>
                        </li>
                    </ol>

                    {/* Information Processing Protocols */}
                    <h4 className="font-bold mt-2">5.2 Information Processing Protocols</h4>
                    <ol className=" pl-6">
                        <li>
                            <strong>5.2.1 Reception Procedures</strong>
                            <p>All incoming information undergoes:</p>
                            <ul className="list-disc pl-6">
                                <li>Initial security screening</li>
                                <li>Classification assessment</li>
                                <li>Priority evaluation</li>
                                <li>Risk analysis</li>
                                <li>Authentication verification</li>
                                <li>Source validation</li>
                                <li>Intake documentation</li>
                            </ul>
                        </li>
                        <li>
                            <strong>5.2.2 Storage Requirements</strong>
                            <p>Information storage must adhere to:</p>
                            <ul className="list-disc pl-6">
                                <li>Encryption standards</li>
                                <li>Access controls</li>
                                <li>Backup protocols</li>
                                <li>Retention policies</li>
                                <li>Disposal procedures</li>
                                <li>Audit requirements</li>
                                <li>Security certifications</li>
                            </ul>
                        </li>
                        <li>
                            <strong>5.2.3 Transmission Protocols</strong>
                            <p>Information transmission follows:</p>
                            <ul className="list-disc pl-6">
                                <li>End-to-end encryption</li>
                                <li>Secure channel verification</li>
                                <li>Access logging</li>
                                <li>Transfer authentication</li>
                                <li>Route verification</li>
                                <li>Delivery confirmation</li>
                                <li>Security monitoring</li>
                            </ul>
                        </li>
                    </ol>

                    {/* Legal Framework and Compliance */}
                    <h3 className="font-bold mt-4">6. Legal Framework and Compliance</h3>

                    {/* Statutory Compliance */}
                    <h4 className="font-bold mt-2">6.1 Statutory Compliance</h4>
                    <ol className=" pl-6">
                        <li>
                            <strong>6.1.1 Primary Legislative Framework</strong>
                            <p>Operations comply with:</p>
                            <ul className="list-disc pl-6">
                                <li>Whistleblower Act, 2006 (Act 720)</li>
                                <li>Data Protection Act, 2012 (Act 843)</li>
                                <li>Anti-Money Laundering Act, 2020 (Act 1044)</li>
                                <li>Office of the Special Prosecutor Act, 2017 (Act 959)</li>
                                <li>Cybersecurity Act, 2020 (Act 1038)</li>
                            </ul>
                        </li>
                        <li>
                            <strong>6.1.2 Regulatory Compliance</strong>
                            <p>Adherence to regulations from:</p>
                            <ul className="list-disc pl-6">
                                <li>Bank of Ghana</li>
                                <li>Securities and Exchange Commission</li>
                                <li>Financial Intelligence Centre</li>
                                <li>Public Services Commission</li>
                                <li>National Information Technology Agency</li>
                            </ul>
                        </li>
                    </ol>

                    {/* International Standards */}
                    <h4 className="font-bold mt-2">6.2 International Standards</h4>
                    <p>Compliance with:</p>
                    <ul className="list-disc pl-6">
                        <li>ISO 27001 Information Security</li>
                        <li>ISO 37001 Anti-bribery Systems</li>
                        <li>GDPR-aligned data protection</li>
                        <li>International anti-corruption conventions</li>
                        <li>Global financial intelligence standards</li>
                    </ul>

                    {/* Platform Security and Technology */}
                    <h3 className="font-bold mt-4">7. Platform Security and Technology</h3>

                    {/* Technical Infrastructure */}
                    <h4 className="font-bold mt-2">7.1 Technical Infrastructure</h4>
                    <ol className=" pl-6">
                        <li>
                            <strong>7.1.1 Security Architecture</strong>
                            <p>Implementation of:</p>
                            <ul className="list-disc pl-6">
                                <li>Multi-layer security framework</li>
                                <li>Advanced encryption systems</li>
                                <li>Intrusion detection mechanisms</li>
                                <li>Access control systems</li>
                                <li>Backup infrastructure</li>
                                <li>Disaster recovery systems</li>
                                <li>Security monitoring tools</li>
                            </ul>
                        </li>
                        <li>
                            <strong>7.1.2 Authentication Systems</strong>
                            <p>Utilization of:</p>
                            <ul className="list-disc pl-6">
                                <li>Multi-factor authentication</li>
                                <li>Biometric verification options</li>
                                <li>Token-based access</li>
                                <li>Session management</li>
                                <li>Identity verification</li>
                                <li>Access logging</li>
                                <li>Credential protection</li>
                            </ul>
                        </li>
                    </ol>

                    {/* Security Operations */}
                    <h4 className="font-bold mt-2">7.2 Security Operations</h4>
                    <ol className="pl-6">
                        <li>
                            <strong>7.2.1 Monitoring and Response</strong>
                            <p>Continuous monitoring of:</p>
                            <ul className="list-disc pl-6">
                                <li>System activities</li>
                                <li>Access attempts</li>
                                <li>Security incidents</li>
                                <li>Performance metrics</li>
                                <li>System integrity</li>
                                <li>Network traffic</li>
                                <li>Security alerts</li>
                            </ul>
                        </li>
                        <li>
                            <strong>7.2.2 Incident Management</strong>
                            <p>Structured response to:</p>
                            <ul className="list-disc pl-6">
                                <li>Security breaches</li>
                                <li>System failures</li>
                                <li>Data incidents</li>
                                <li>Access violations</li>
                                <li>Technical issues</li>
                                <li>Emergency situations</li>
                                <li>System compromises</li>
                            </ul>
                        </li>
                    </ol>

                    {/* User Support and Communication */}
                    <h3 className="font-bold mt-4">8. User Support and Communication</h3>

                    {/* Support Services */}
                    <h4 className="font-bold mt-2">8.1 Support Services</h4>
                    <ol className="pl-6">
                        <li>
                            <strong>8.1.1 Technical Support</strong>
                            <p>Provision of:</p>
                            <ul className="list-disc pl-6">
                                <li>24/7 helpdesk services</li>
                                <li>Technical guidance</li>
                                <li>Platform assistance</li>
                                <li>Access support</li>
                                <li>Problem resolution</li>
                                <li>System navigation help</li>
                                <li>Emergency technical support</li>
                            </ul>
                        </li>
                        <li>
                            <strong>8.1.2 User Assistance</strong>
                            <p>Offering:</p>
                            <ul className="list-disc pl-6">
                                <li>Submission guidance</li>
                                <li>Process explanation</li>
                                <li>Status updates</li>
                                <li>Documentation help</li>
                                <li>General information</li>
                                <li>Reference materials</li>
                                <li>Training resources</li>
                            </ul>
                        </li>
                    </ol>

                    {/* Communication Channels */}
                    <h4 className="font-bold mt-2">8.2 Communication Channels</h4>
                    <ol className="pl-6">
                        <li>
                            <strong>8.2.1 Secure Communications</strong>
                            <p>Establishment of:</p>
                            <ul className="list-disc pl-6">
                                <li>Encrypted messaging systems</li>
                                <li>Secure voice channels</li>
                                <li>Protected email services</li>
                                <li>Anonymous reporting options</li>
                                <li>Emergency contact methods</li>
                                <li>Secure file transfer</li>
                                <li>Confidential messaging</li>
                            </ul>
                        </li>
                    </ol>

                    {/* Liability and Disclaimers */}
                    <h3 className="font-bold mt-4">9. Liability and Disclaimers</h3>

                    {/* Scope of Liability */}
                    <h4 className="font-bold mt-2">9.1 Scope of Liability</h4>
                    <ol className="pl-6">
                        <li>
                            <strong>9.1.1 ORAL's Responsibilities</strong>
                            <p>We are responsible for:</p>
                            <ul className="list-disc pl-6">
                                <li>Platform security</li>
                                <li>Information protection</li>
                                <li>Confidentiality maintenance</li>
                                <li>Process integrity</li>
                                <li>Professional handling</li>
                                <li>Proper referrals</li>
                                <li>Support provision</li>
                            </ul>
                        </li>
                        <li>
                            <strong>9.1.2 Limitation of Liability</strong>
                            <p>We cannot guarantee:</p>
                            <ul className="list-disc pl-6">
                                <li>Investigation outcomes</li>
                                <li>Agency decisions</li>
                                <li>Third-party actions</li>
                                <li>External processes</li>
                                <li>Legal proceedings</li>
                                <li>Recovery results</li>
                                <li>Timeline specifics</li>
                            </ul>
                        </li>
                    </ol>

                    {/* User Acknowledgments */}
                    <h4 className="font-bold mt-2">9.2 User Acknowledgments</h4>
                    <ol className=" pl-6">
                        <li>
                            <strong>9.2.1 Risk Understanding</strong>
                            <p>Users acknowledge:</p>
                            <ul className="list-disc pl-6">
                                <li>Inherent process risks</li>
                                <li>External factors</li>
                                <li>Agency independence</li>
                                <li>Timeline variables</li>
                                <li>Outcome uncertainties</li>
                                <li>System limitations</li>
                                <li>External constraints</li>
                            </ul>
                        </li>
                    </ol>

                    {/* Modification and Updates */}
                    <h3 className="font-bold mt-4">10. Modification and Updates</h3>

                    {/* Terms Modification */}
                    <h4 className="font-bold mt-2">10.1 Terms Modification</h4>
                    <ol className="pl-6">
                        <li>
                            <strong>1.1.1 9Update Procedures</strong>
                            <p>ORAL may modify terms through:</p>
                            <ul className="list-disc pl-6">
                                <li>Formal review process</li>
                                <li>Legal consultation</li>
                                <li>Stakeholder input</li>
                                <li>Public notification</li>
                                <li>User communication</li>
                                <li>Implementation planning</li>
                                <li>Transition management</li>
                            </ul>
                        </li>
                        <li>
                            <strong>10.1.2 User Notification</strong>
                            <p>Updates communicated via:</p>
                            <ul className="list-disc pl-6">
                                <li>Platform announcements</li>
                                <li>Email notifications</li>
                                <li>Website updates</li>
                                <li>Official communications</li>
                                <li>User alerts</li>
                                <li>Support channels</li>
                                <li>Public notices</li>
                            </ul>
                        </li>
                    </ol>

                    {/* Dispute Resolution */}
                    <h3 className="font-bold mt-4">11. Dispute Resolution</h3>

                    {/* Resolution Framework */}
                    <h4 className="font-bold mt-2">11.1 Resolution Framework</h4>
                    <ol className="pl-6">
                        <li>
                            <strong>11.1.1 Internal Resolution</strong>
                            <p>Process including:</p>
                            <ul className="list-disc pl-6">
                                <li>Initial review</li>
                                <li>Formal assessment</li>
                                <li>Mediation options</li>
                                <li>Resolution proposals</li>
                                <li>Implementation plans</li>
                                <li>Appeal procedures</li>
                                <li>Outcome documentation</li>
                            </ul>
                        </li>
                        <li>
                            <strong>11.1.2 External Resolution</strong>
                            <p>Options including:</p>
                            <ul className="list-disc pl-6">
                                <li>Legal arbitration</li>
                                <li>Regulatory review</li>
                                <li>Independent assessment</li>
                                <li>External mediation</li>
                                <li>Legal proceedings</li>
                                <li>Official investigation</li>
                                <li>Formal adjudication</li>
                            </ul>
                        </li>
                    </ol>

                    {/* Termination and Closure */}
                    <h3 className="font-bold mt-4">12. Termination and Closure</h3>

                    {/* Termination Conditions */}
                    <h4 className="font-bold mt-2">12.1 Termination Conditions</h4>
                    <ol className="pl-6">
                        <li>
                            <strong>12.1.1 User-Initiated</strong>
                            <p>Circumstances including:</p>
                            <ul className="list-disc pl-6">
                                <li>Voluntary withdrawal</li>
                                <li>Service discontinuation</li>
                                <li>Account closure</li>
                                <li>Report withdrawal</li>
                                <li>Communication cessation</li>
                                <li>Access termination</li>
                                <li>Relationship conclusion</li>
                            </ul>
                        </li>
                        <li>
                            <strong>12.1.2 ORAL-Initiated</strong>
                            <p>Conditions including:</p>
                            <ul className="list-disc pl-6">
                                <li>Terms violation</li>
                                <li>Security concerns</li>
                                <li>Legal requirements</li>
                                <li>Platform abuse</li>
                                <li>False submissions</li>
                                <li>System misuse</li>
                                <li>Protocol violations</li>
                            </ul>
                        </li>
                    </ol>

                    {/* Emergency Procedures */}
                    <h3 className="font-bold mt-4">13. Emergency Procedures</h3>

                    {/* Emergency Response */}
                    <h4 className="font-bold mt-2">13.1 Emergency Response</h4>
                    <ol className="pl-6">
                        <li>
                            <strong>13.1.1 Immediate Actions</strong>
                            <p>Protocols for:</p>
                            <ul className="list-disc pl-6">
                                <li>Threat response</li>
                                <li>Safety measures</li>
                                <li>Security activation</li>
                                <li>Agency notification</li>
                                <li>Protection deployment</li>
                                <li>Evidence preservation</li>
                                <li>System protection</li>
                            </ul>
                        </li>
                        <li>
                            <strong>13.1.2 Support Mechanisms</strong>
                            <p>Provision of:</p>
                            <ul className="list-disc pl-6">
                                <li>Emergency contacts</li>
                                <li>Immediate assistance</li>
                                <li>Protection services</li>
                                <li>Safe facilities</li>
                                <li>Legal support</li>
                                <li>Medical assistance</li>
                                <li>Security services</li>
                            </ul>
                        </li>
                    </ol>

                    {/* Contact and Support */}
                    <h3 className="font-bold mt-4">14. Contact and Support</h3>

                    {/* Contact Information */}
                    <h4 className="font-bold mt-2">14.1 Contact Information</h4>
                    <ol className="pl-6">
                        <li>
                            <strong>14.1.1 General Contacts</strong>
                            <p>Access through:</p>
                            <ul className="list-disc pl-6">
                                <li>Main helpline: 0800 900 111</li>
                                <li>Emergency line: [Number]</li>
                                <li>Email: <a href='#' className='underline font-bold text-blue-600'>public@oralgh.org</a></li>
                                <li>Secure portal: <a href='https://www.oralgh.org' target='_blank' className='font-bold text-blue-600'>www.oralgh.org</a></li>
                                <li>Regional offices</li>
                                <li>Support centers</li>
                                <li>Mobile units</li>
                            </ul>
                        </li>
                        <li>
                            <strong>14.1.2 Specialized Support</strong>
                            <p>Access to:</p>
                            <ul className="list-disc pl-6">
                                <li>Technical support</li>
                                <li>Legal assistance</li>
                                <li>Security services</li>
                                <li>Protection team</li>
                                <li>Analysis unit</li>
                                <li>Emergency response</li>
                                <li>Agency liaison</li>
                            </ul>
                        </li>
                    </ol>

                    {/* Governing Law and Jurisdiction */}
                    <h3 className="font-bold mt-4">15. Governing Law and Jurisdiction</h3>

                    {/* Legal Framework */}
                    <h4 className="font-bold mt-2">15.1 Legal Framework</h4>
                    <ol className="pl-6">
                        <li>
                            <strong>15.1.1 Applicable Law</strong>
                            <p>Governed by:</p>
                            <ul className="list-disc pl-6">
                                <li>Laws of Ghana</li>
                                <li>Relevant statutes</li>
                                <li>Applicable regulations</li>
                                <li>Legal precedents</li>
                                <li>International conventions</li>
                                <li>Bilateral agreements</li>
                                <li>Regional protocols</li>
                            </ul>
                        </li>
                        <li>
                            <strong>15.1.2 Jurisdictional Scope</strong>
                            <p>Encompassing:</p>
                            <ul className="list-disc pl-6">
                                <li>Territorial jurisdiction</li>
                                <li>Subject matter jurisdiction</li>
                                <li>Personal jurisdiction</li>
                                <li>International cooperation</li>
                                <li>Agency coordination</li>
                                <li>Legal authority</li>
                                <li>Enforcement capacity</li>
                            </ul>
                        </li>
                    </ol>

                    <p className="mt-4">
                        This Terms of Service document is effective immediately upon publication and supersedes all previous versions.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
