"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Menu from "../components/Menu";
export default function PortfolioPage() {
  const [active, setActive] = useState("resume");

  return (
    <motion.div
      initial={ { opacity: 0, y: 40 } }
      animate={ { opacity: 1, y: 0 } }
      exit={ { opacity: 0, y: 40 } }
      transition={ { duration: 0.5 } }
      className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-cyan-50 flex justify-center items-center py-12 px-4"
    >
      <motion.div
        initial={ { scale: 0.95, opacity: 0 } }
        animate={ { scale: 1, opacity: 1 } }
        transition={ { duration: 0.5, delay: 0.2 } }
        className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
      >
        <Sidebar />
        <Menu />

      </motion.div>
    </motion.div>
  );
}
