"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Soilmaster",
      description:
        "An Android application that helps farmers analyze soil quality using machine learning. The app provides recommendations for crop selection and fertilizer usage based on soil analysis.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["Kotlin", "Jetpack Compose", "TensorFlow Lite", "Firebase"],
      github: "https://github.com/username/soilmaster",
      liveLink: "https://play.google.com/store/apps/details?id=com.example.soilmaster",
    },
    {
      title: "DigiPanchyat",
      description:
        "A digital solution for rural governance, enabling transparent communication between villagers and local authorities. Features include complaint registration, public announcements, and resource allocation tracking.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
      github: "https://github.com/username/digipanchyat",
      liveLink: "https://play.google.com/store/apps/details?id=com.example.digipanchyat",
    },
    {
      title: "VisionaryAI",
      description:
        "An accessibility app that uses computer vision to assist visually impaired users. Features include object detection, text recognition, and voice navigation.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["Kotlin", "ML Kit", "Camera X", "Text-to-Speech"],
      github: "https://github.com/username/visionaryai",
      liveLink: "https://play.google.com/store/apps/details?id=com.example.visionaryai",
    },
    {
      title: "SkyForecast",
      description:
        "A weather forecasting app with a clean, intuitive UI. Provides detailed weather information, hourly and weekly forecasts, and weather alerts.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["Flutter", "OpenWeather API", "Bloc Pattern", "Animations"],
      github: "https://github.com/username/skyforecast",
      liveLink: "https://play.google.com/store/apps/details?id=com.example.skyforecast",
    },
    {
      title: "NoteIt",
      description:
        "A minimalist note-taking app with cloud sync, markdown support, and categorization features. Focuses on simplicity and ease of use.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["Kotlin", "Room Database", "MVVM", "Material Design"],
      github: "https://github.com/username/noteit",
      liveLink: "https://play.google.com/store/apps/details?id=com.example.noteit",
    },
  ]

  return (
    <section id="projects" className="py-16 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.liveLink} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View App
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
