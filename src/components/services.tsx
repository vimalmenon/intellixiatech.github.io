"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section id="services" className="py-24 bg-slate-800">
      <div className="container mx-auto max-w-5xl px-6">
        <motion.div
          ref={ref}
          style={{ opacity, y }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-white">
            AI Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            We deliver transformative AI solutions that drive innovation and business growth.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "AI Strategy & Consulting",
              description:
                "Strategic guidance to integrate AI into your business roadmap and operations.",
              icon: "🎯",
            },
            {
              title: "AI Integration & Automation",
              description:
                "Seamless AI integration and process automation to boost efficiency.",
              icon: "⚙️",
            },
            {
              title: "Predictive Analytics & Business Intelligence",
              description:
                "Data-driven insights and forecasting to inform strategic business decisions.",
              icon: "📊",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group rounded-xl bg-slate-900 p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6 text-4xl">{item.icon}</div>
              <h3 className="mb-4 text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
