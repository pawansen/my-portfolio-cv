"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
const projects = [
  {
    title: "MaidMatch AI Management System",
    image: "/maidmatch-logo.svg",
    url: "https://maidmatch.ai",
    goal: "Connect employers, workers (maids), and partner agencies via intelligent matching.",
    userRoles: "Employers, Workers, Partner Agencies (facilitators; no direct agency sign-up).",
    features: "Profiles, secure login, AI-driven matching, agency-supported interview and contract workflows.",
    duration: "October 2024 to July 2025",
    developerRoles: [
      "Create Database Design & Write SQL Queries",
      "Implement Socket.io and complete One to one & Group Chatting",
      "Implement Whatsapp chat & Support system",
      "Working on Frontend side create components & implement logic",
      "Frontend implement chat & whatsapp chat",
      "Handling Team & Project Manage",
      "Using AI Tools Generate CV & Images"
    ],
    technology: "Node.js with Express or Fastify, PHP with Laravel, PostgreSQL/MySQL (relational) or MongoDB (NoSQL), React (with frameworks like Next.js), ChatGPT, RabbitMQ, AWS"
  },
  {
    title: "TwinGalaxies (Games & Social) LMS",
    image: "/logo-c9a931cc.svg",
    url: "https://www.twingalaxies.com",
    goal: "Platform for competitive gaming communities to authenticate and record achievements across all electronic gaming platforms.",
    duration: "December 2022 to April 2023",
    developerRoles: [
      "Analysis and gather info by client",
      "Create business logic & database, designed DB schema, Procedures, Functions, and Indexes",
      "Create Code structure MVC pattern",
      "Designed Authentication and Authorization stateless pattern Oauth 2.0",
      "Leveraged Redis to enhance caching and improve performance",
      "Implemented features like OTP login, Emails, Address verifications",
      "Designed REST APIs for application and admin panel",
      "Managing team",
      "Deployed backend on AWS server"
    ],
    technology: "NodeJS, ExpressJS, MySQL, Redis Cache, JIRA, AWS (S3)"
  },
  {
    title: "JomPet App (Ecommerce & Social) LMS",
    image: "/jom-pet.svg",
    url: "http://jompet.com",
    goal: "A pet sale, buy, and social app that allows users to buy/sell pets, chat, and interact socially with other pet owners.",
    duration: "February 2022 to November 2022",
    developerRoles: [
      "Analysis and gather info by client",
      "Create business logic & database, designed DB schema, Procedures, Functions, and Indexes",
      "Designed Authentication and Authorization stateless pattern Oauth 2.0",
      "Manage Social & chat pattern",
      "Design Notification pattern",
      "Leveraged Redis to enhance caching and improve performance"
    ],
    technology: "NodeJS, ExpressJS, MongoDB, Redis, Mongoose, Typescript, JIRA, AWS (S3)"
  },
  {
    title: "DataVaults (Data Storage) LMS",
    url: "https://datavault.link",
    image: "/cropped-datavault-logo-500x100.png",
    goal: "Secure and organized workspace for teams, customers, and investors with full data analytics and access management.",
    duration: "August 2021 to January 2022",
    developerRoles: [
      "Designed Authentication and Authorization stateless pattern Oauth 2.0",
      "Leveraged Redis to enhance caching and improve performance",
      "Design Notification pattern",
      "Optimized Queries",
      "Designed secure APIs with authorization"
    ],
    technology: "NodeJS, MySQL, Socket, Payment Gateway, Redis"
  },
  {
    title: "Electric Vehicle & Energy Storage System (VAOW ENERGY)",
    image: "/1696192427509.jpeg",
    goal: "The product is based on Electric Vehicle & Energy Storage System. It covers data from manufacturing, battery operations, motor behavior, HMI, and geographic data to give accurate insights and real-time tracking.",
    duration: "October 2023 to August 2024",
    developerRoles: [
      "Create business logic & database, designed DB schema, Procedures, Functions, and Indexes",
      "Create code structure MVC pattern",
      "Designed Authentication and Authorization stateless pattern Oauth 2.0",
      "Leveraged Redis to enhance caching and improve performance",
      "Designed REST APIs for application and admin panel",
      "Managing team"
    ],
    technology: "NodeJS, ReactJS, MongoDB & MySQL, Redis Cache, MQTT, Socket"
  },
  {
    title: "Reservation System (Hotels, Rooms, Tables & Food) LMS",
    image: "/mykonos-newly-added-shop-rename-it-logo.png",
    goal: "A digital Android & Web application allowing customers to book tables and menus from restaurants at their convenience, replacing manual reservation processes.",
    duration: "April 2023 to August 2023",
    developerRoles: [
      "Analysis and gather info by client",
      "Create business logic & database, designed DB schema, Procedures, Functions, and Indexes",
      "Create Code structure MVC pattern",
      "Designed Authentication and Authorization stateless pattern Oauth 2.0",
      "Leveraged Redis to enhance caching and improve performance",
      "Designed REST APIs for application and admin panel",
      "Managing team",
      "Deployed backend on AWS server"
    ],
    technology: "NestJS, ReactJS, MongoDB, Redis Cache, MQTT, Socket, AWS (S3)"
  },


  {
    title: "JERA (Energy) - Mobiweb",
    url: "https://www.jera.co.jp/english/",
    image: "/jera.svg",
    goal: "Digital power plant system for managing employee work schedules and assignments.",
    duration: "September 2020 to January 2021",
    developerRoles: [
      "Designed secure APIs with authorization",
      "Design Notification pattern",
      "Schedule task manager"
    ],
    technology: "NodeJS, Typescript, MySQL, Docker, Microservices"
  },
  {
    title: "FSL11 (E-Sports DFS, Auction, Gully Fantasy) - Mobiweb",
    url: "https://fsl11.com",
    image: "/fsl11.png",
    goal: "Fantasy sports platform allowing users to create virtual teams and compete based on real player performance data.",
    duration: "January 2019 to January 2020",
    developerRoles: [
      "Designed and developed Wallet for app transactions using PHP",
      "Designed secure APIs with authorization",
      "Design Notification pattern",
      "Designed Authentication and Authorization stateless pattern Oauth 2.0",
      "Integrated Payment Gateways (Razor Pay & Paytm) for smooth UPI, IMPS, NEFT transactions",
      "Leveraged Redis to enhance caching and improve performance",
      "Designed Real Time score calculation and point updates",
      "Integrated third-party score APIs",
      "Designed vendor referral program"
    ],
    technology: "PHP, MySQL, MongoDB, NodeJS, Socket, Payment Gateway"
  }
];


export default function Works() {
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (idx) => {
    setSelected(idx);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setSelected(null);
  };

  return (
    <motion.div
      key="works"
      initial={ { opacity: 0, y: 20 } }
      animate={ { opacity: 1, y: 0 } }
      exit={ { opacity: 0, y: 20 } }
      transition={ { duration: 0.4 } }
    >
      <h3 className="text-2xl font-bold mb-3">
        My Works
        <span className="ml-3 inline-block w-16 h-1 bg-pink-500 align-middle rounded"></span>
      </h3>
      <div className="max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          { projects.map((project, idx) => (
            <motion.div
              key={ idx }
              whileHover={ { scale: 1.04 } }
              whileTap={ { scale: 0.98 } }
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer flex flex-col items-center p-4 border border-gray-100 hover:border-pink-400 transition md:w-80"
              onClick={ () => openModal(idx) }
            >
              <img
                src={ project.image }
                alt={ project.title }
                className=" w-32 h-24 mb-4"
              />
              <h2 className="text-lg font-bold text-pink-600 mb-2 text-center flex items-center">
                <span className="mr-2">❖</span> { project.title }
              </h2>
              <span className="text-xs text-gray-500 mb-2">{ project.duration }</span>
              <span className="text-blue-500 underline">View Details</span>
            </motion.div>
          )) }
        </div>

        {/* Modal Popup */ }
        <AnimatePresence>
          { showModal && selected !== null && (
            <motion.div
              key="modal"
              initial={ { opacity: 0 } }
              animate={ { opacity: 1 } }
              exit={ { opacity: 0 } }
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
              onClick={ closeModal }
            >
              <motion.div
                initial={ { scale: 0.9, opacity: 0 } }
                animate={ { scale: 1, opacity: 1 } }
                exit={ { scale: 0.9, opacity: 0 } }
                transition={ { duration: 0.3 } }
                className="bg-white rounded-2xl shadow-2xl p-8 relative"
                onClick={ e => e.stopPropagation() }
              >
                <button
                  className="absolute top-3 right-3 text-gray-400 hover:text-pink-500 text-2xl font-bold"
                  onClick={ closeModal }
                  aria-label="Close"
                >
                  &times;
                </button>
                <img
                  src={ projects[selected].image }
                  alt={ projects[selected].title }
                  className="rounded-xl w-32 h-32 mb-4 mx-auto"
                />
                <h2 className="text-xl font-bold text-pink-600 mb-2 flex items-center justify-center">
                  <span className="mr-2">❖</span> { projects[selected].title }
                </h2>
                <a
                  href={ projects[selected].url }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline mb-3 inline-block text-center"
                >
                  Visit Project
                </a>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Goal:</span> { projects[selected].goal }
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">User Roles:</span> { projects[selected].userRoles }
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Key Features:</span> { projects[selected].features }
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Duration:</span> { projects[selected].duration }
                </p>
                <div className="mb-2">
                  <span className="font-semibold">Developer Roles:</span>
                  <ul className="list-disc ml-6 text-gray-700">
                    { projects[selected].developerRoles.map((role, i) => (
                      <li key={ i }>{ role }</li>
                    )) }
                  </ul>
                </div>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Technology:</span> { projects[selected].technology }
                </p>
              </motion.div>
            </motion.div>
          ) }
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
