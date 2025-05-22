"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Certifications() {
  const certifications = [
    {
      title: "Associate Android Developer",
      issuer: "Google",
      date: "June 2023",
      image: "/placeholder.svg?height=100&width=100",
      link: "https://www.credential.net/example",
    },
    {
      title: "Flutter Development Bootcamp",
      issuer: "Udemy",
      date: "March 2023",
      image: "/placeholder.svg?height=100&width=100",
      link: "https://www.udemy.com/certificate/example",
    },
    {
      title: "Java SE 11 Developer",
      issuer: "Oracle",
      date: "December 2022",
      image: "/placeholder.svg?height=100&width=100",
      link: "https://www.youracclaim.com/example",
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "Microsoft",
      date: "August 2022",
      image: "/placeholder.svg?height=100&width=100",
      link: "https://www.microsoft.com/learn/example",
    },
    {
      title: "Kotlin Developer",
      issuer: "JetBrains",
      date: "May 2022",
      image: "/placeholder.svg?height=100&width=100",
      link: "https://www.jetbrains.com/academy/example",
    },
  ]

  return (
    <section id="certifications" className="py-16 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={cert.link} target="_blank" className="block h-full">
                <Card className="h-full hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="relative h-12 w-12 overflow-hidden rounded-md">
                      <Image src={cert.image || "/placeholder.svg"} alt={cert.issuer} fill className="object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{cert.title}</CardTitle>
                      <CardDescription>{cert.issuer}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Award className="h-4 w-4 mr-1" />
                        <span>{cert.date}</span>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
