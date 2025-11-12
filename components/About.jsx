"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
export default function AboutUs() {
    return (
        <motion.div
            key="home"
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            exit={ { opacity: 0, y: 20 } }
            transition={ { duration: 0.4 } }
        >
            <h3 className="text-2xl font-bold mb-3">
                About Me
                <span
                    className="ml-3 inline-block w-16 h-1 bg-pink-500 align-middle rounded"
                ></span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in building dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I enjoy creating seamless user experiences and efficient server-side solutions. My goal is to leverage technology to solve real-world problems and deliver value through innovative software solutions.
            </p>
        </motion.div>
    )
}
