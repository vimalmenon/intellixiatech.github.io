"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Home, User, Briefcase, Contact } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'AI Services', href: '#services', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900 shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between">
          <Link href="#home" className="text-2xl font-bold text-blue-500">
            Intellixiatech
        </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 focus:outline-none"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.05, color: '#3b82f6' }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 text-slate-300 font-medium hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <Icon size={18} />
                  {link.name}
                </motion.a>
              );
            })}
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden absolute top-full left-0 right-0 bg-slate-900 shadow-lg overflow-hidden"
              >
                <div className="flex flex-col p-6 gap-4">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        whileHover={{ scale: 1.02, color: '#3b82f6' }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-3 text-slate-300 font-medium hover:text-blue-400 transition-colors cursor-pointer"
                      >
                        <Icon size={18} />
                        {link.name}
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
