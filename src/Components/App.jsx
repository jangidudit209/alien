
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold"
      >
        Welcome to AllenIn
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mt-4 max-w-xl text-lg"
      >
        Countdown to an epic event. Be part of something special.
      </motion.p>
      <button className="mt-6 px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200">
        Register Now
      </button>
    </section>
  );
}
