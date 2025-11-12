"use client";
import { motion } from "framer-motion";
export default function Resume() {
    return (
        <motion.div
            key="resume"
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            exit={ { opacity: 0, y: 20 } }
            transition={ { duration: 0.4 } }
        >
            <h3 className="text-3xl font-bold mb-6">
                Resume
                <span className="ml-3 inline-block w-20 h-1 bg-pink-500 rounded align-middle"></span>
            </h3>

            <div className="flex flex-col gap-10">
                {/* Experience */ }
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-5 flex items-center">
                        <span className="text-pink-500 mr-2 text-2xl">💼</span>
                        Experience
                    </h3>
                    <div className="space-y-5">
                        <div className="bg-blue-50 p-5 rounded-xl">
                            <p className="text-sm text-gray-400 mb-1">Nov 2024 – Present</p>
                            <h4 className="text-lg font-semibold text-gray-800">
                                Overseas Group (Contract Full Stack Developer)
                            </h4>
                            <ul className="list-disc ml-5 text-gray-600">
                                <li>Worked on Product Maidmatch Job Portal.</li>
                                <li>Mobile App development, web services Restful API & Database design.</li>
                                <li>Front-End developer.</li>
                                <li>Team Handling.</li>
                            </ul>
                        </div>
                        <div className="bg-indigo-50 p-5 rounded-xl">
                            <p className="text-sm text-gray-400 mb-1">Oct 2023 – Sept 2024</p>
                            <h4 className="text-lg font-semibold text-gray-800">
                                VAOW Energy (Full Stack Developer)
                            </h4>
                            <ul className="list-disc ml-5 text-gray-600">
                                <li>Worked on Product E-vehicle & Energy Storage Systems Software applications.</li>
                                <li>Mobile App development, web services Restful API & Database design.</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-5 rounded-xl">
                            <p className="text-sm text-gray-400 mb-1">Aug 2021 – Aug 2023</p>
                            <h4 className="text-lg font-semibold text-gray-800">
                                LMS Solutions Pvt Ltd. (Full Stack Developer)
                            </h4>
                            <ul className="list-disc ml-5 text-gray-600">
                                <li>Software developer with experience in e-commerce, enterprise and high-performance web technologies.</li>
                                <li>Create and participate in software planning and estimating, status monitoring and reporting.</li>
                                <li>Software analysis and documentation and Database designing.</li>
                                <li>Mobile App development, web services Restful API.</li>
                                <li>Worked on E-commerce & Chat APP & Social Network applications.</li>
                            </ul>
                        </div>
                        <div className="bg-indigo-50 p-5 rounded-xl">
                            <p className="text-sm text-gray-400 mb-1">July 2016 – Feb 2021</p>
                            <h4 className="text-lg font-semibold text-gray-800">
                                MobiWeb Technologies (Sr. Software Developer)
                            </h4>
                            <ul className="list-disc ml-5 text-gray-600">
                                <li>Working domain online flight details real-time arrival and departure and Gaming fantasy sports specialization.</li>
                                <li>Leading team.</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-5 rounded-xl">
                            <p className="text-sm text-gray-400 mb-1">Sept 2015 – July 2016</p>
                            <h4 className="text-lg font-semibold text-gray-800">
                                Vsure | Mobileappz (Software Developer)
                            </h4>
                            <ul className="list-disc ml-5 text-gray-600">
                                <li>Create and participate in software planning and estimating, status monitoring and reporting.</li>
                            </ul>
                        </div>
                        <div className="bg-indigo-50 p-5 rounded-xl">
                            <p className="text-sm text-gray-400 mb-1">Aug 2014 – Aug 2015</p>
                            <h4 className="text-lg font-semibold text-gray-800">
                                Conative IT Solution (Software Engineer)
                            </h4>
                            <ul className="list-disc ml-5 text-gray-600">
                                <li>Software analysis and documentation.</li>
                                <li>Mobile App development, web services Restful API.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Education */ }
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-5 flex items-center"></h3>
                    <span className="text-pink-500 mr-2 text-2xl">🎓</span>
                    Education

                    <div className="space-y-5">
                        <div className="bg-pink-50 p-5 rounded-xl">
                            <p className="text-sm text-gray-400 mb-1">July 2008 – April 2012</p>
                            <h4 className="text-lg font-semibold text-gray-800">
                                Computer Science (B.Tech)
                            </h4>
                            <p className="text-gray-600">
                                Rajiv Gandhi Proudyogiki Vishwavidyalaya Bhopal, with 70%
                            </p>
                        </div>
                        <div className="bg-pink-50 p-5 rounded-xl">
                            <p className="text-sm text-gray-400 mb-1">July 2007 – April 2008</p>
                            <h4 className="text-lg font-semibold text-gray-800">
                                Mathematics science HSC
                            </h4>
                            <p className="text-gray-600">
                                HSC Saraswati school of Nagda Jn. MP Board, with 71.70%
                            </p>
                        </div>
                        <div className="bg-pink-50 p-5 rounded-xl">
                            <p className="text-sm text-gray-400 mb-1">July 2005 – April 2006</p>
                            <h4 className="text-lg font-semibold text-gray-800">
                                Mathematics science SSC
                            </h4>
                            <p className="text-gray-600">
                                SSC Saraswati school of Nagda Jn. MP Board, with 79%
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </motion.div >
    );
}
