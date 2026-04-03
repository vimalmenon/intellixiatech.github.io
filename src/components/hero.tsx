"use client"

import { motion } from "framer-motion";
import Link from "next/link"

export const Hero: React.FC = () => {
  return (<section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-950 px-6 py-24 text-white"> <div className="container mx-auto max-w-5xl text-center"> <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="mb-6 text-4xl font-bold md:text-6xl"> Empowering Businesses with Intelligent Solutions </motion.h1> <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} className="mb-8 text-lg md:text-xl text-blue-100"> We deliver cutting-edge AI solutions and strategic consultation that transform businesses into intelligent, data-driven enterprises </motion.p> <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }} className="flex flex-col items-center gap-4 md:flex-row md:justify-center"> <Link href="#contact" className="rounded-full bg-white px-8 py-3 text-blue-900 font-semibold hover:bg-blue-50 transition-colors duration-300"> Explore AI Services </Link> <Link href="#about" className="rounded-full border-2 border-white px-8 py-3 text-white font-semibold hover:bg-white/10 transition-colors duration-300"> Learn More </Link> </motion.div> </div> </section> ); }

