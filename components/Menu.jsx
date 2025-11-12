"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Resume from '../components/Resume'
import About from '../components/About'
import Works from '../components/Works'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
export default function Menu() {
    const [active, setActive] = useState('home')

    return (
        // ===== Right Content =====
        <motion.div
            initial={ { x: 50, opacity: 0 } }
            animate={ { x: 0, opacity: 1 } }
            transition={ { duration: 0.5, delay: 0.3 } }
            className="md:w-2/3 w-full p-8 bg-white"
        >

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                { ["home", "resume", "works", "skills", "contact"].map((tab) => (
                    <button
                        key={ tab }
                        className={ `flex flex-col items-center px-5 py-3 rounded-xl transition-all duration-300 ${ active === tab
                            ? "text-white bg-gradient-to-r from-pink-500 to-red-500"
                            : "text-gray-700 bg-gray-100"
                            }` }
                        onClick={ () => setActive(tab) }
                    >
                        <span>
                            { tab === "home" && "🏠" }
                            { tab === "resume" && "📄" }
                            { tab === "works" && "🧩" }
                            { tab === "skills" && "💡" }
                            { tab === "contact" && "📇" }
                        </span>
                        <span className="text-sm font-medium mt-1 capitalize">
                            { tab }
                        </span>
                    </button>
                )) }
            </div>

            {/* Animated Section */ }
            <AnimatePresence mode="wait">
                { active === "home" && (
                    <About />
                ) }
                { active === "resume" && (
                    <Resume />
                )
                }
                { active === "works" && (
                    <Works />
                ) }
                { active === "skills" && (
                    <Skills />
                ) }
                { active === "contact" && (
                    <Contact />
                ) }
            </AnimatePresence >
        </motion.div >
    )
}