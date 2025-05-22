"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-16 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto bg-card rounded-lg p-6 shadow-sm border">
          <p className="text-lg leading-relaxed">
            I'm currently pursuing my degree in Computer Engineering at PCCOE, where I've developed a strong foundation
            in software development principles and practices. Through my internships and personal projects, I've gained
            hands-on experience in Android and Flutter development.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            My passion lies in building intelligent and accessible applications that make a positive impact. I'm
            particularly interested in the intersection of mobile development and artificial intelligence, exploring how
            GenAI can enhance user experiences and solve complex problems.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            sharing my knowledge through technical articles and community events.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
