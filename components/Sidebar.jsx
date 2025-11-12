"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
export default function Sidebar() {
  return (
    <motion.div
      initial={ { x: -50, opacity: 0 } }
      animate={ { x: 0, opacity: 1 } }
      transition={ { duration: 0.5, delay: 0.3 } }
      className="md:w-1/3 w-full bg-white p-8 flex flex-col items-center border-r border-gray-100"
    >
      <motion.div
        initial={ { scale: 0.8, opacity: 0 } }
        animate={ { scale: 1, opacity: 1 } }
        transition={ { duration: 0.5, delay: 0.4 } }
        className="w-48 h-48 rounded-2xl overflow-hidden mb-6 shadow-md"
      >
        <img
          src="https://i.ibb.co/YTCCKcC/female-portrait.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Pawan Sen
      </h2>
      <p className="text-gray-500 mb-6">Full Stack Developer</p>
      <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
        <div>
          <p className="font-medium text-gray-700">
            <a
              href="https://github.com/pawansen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#24292f] hover:text-[#0366d6]" // GitHub colors
            >
              <FaGithub size={ 30 } />
            </a>
          </p>
        </div>
        <div>
          <p className="font-medium text-gray-700">
            <a
              href="https://www.linkedin.com/in/pawansen007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] hover:text-[#004182]"
            >
              <FaLinkedin size={ 30 } />
            </a>
          </p>
        </div>
        <div>
          <p className="font-medium text-gray-700">
            <a
              href="https://stackoverflow.com/users/3209163/pawan-sen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F48024] hover:text-[#CC7700]"
            >
              <FaStackOverflow size={ 30 } />
            </a>
          </p>
        </div>
      </div>

      <div className="w-full space-y-4 text-sm">
        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
          <div className="bg-gray-100 text-gray-800 p-3 rounded-xl text-lg">📱</div>
          <div>
            <p className="text-gray-400">Phone</p>
            <p className="font-medium text-gray-700">+91 82368 93792</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
          <div className="bg-gray-100 text-gray-800 p-3 rounded-xl text-lg">📧</div>
          <div>
            <p className="text-gray-400">Email</p>
            <p className="font-medium text-gray-700">pawan.yn007@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
          <div className="bg-gray-100 text-gray-800 p-3 rounded-xl text-lg">📍</div>
          <div>
            <p className="text-gray-400">Location</p>
            <p className="font-medium text-gray-700">Indore, India</p>
          </div>
        </div>
      </div>
      <a
        href="/PAWAN-SEN-FullStack-Developer.docx"
        download
        className="mt-8 px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-xl shadow hover:shadow-lg transition"
      >
        Download CV
      </a>
    </motion.div>
  );
}
