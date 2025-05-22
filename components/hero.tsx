"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-20 md:py-28 flex flex-col items-center justify-center">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2 w-full md:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Profile Photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1 w-full md:w-2/3 space-y-4 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">John Doe</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Android & Flutter Developer | GenAI Enthusiast
            </h2>
            <p className="max-w-[42rem] text-muted-foreground">
              Building intelligent and accessible mobile applications that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <Button asChild size="lg">
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/resume.pdf" target="_blank">
                  Download Resume
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
