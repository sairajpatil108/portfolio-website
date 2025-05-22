"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Android Developer Intern",
      company: "ScriptAnalytica Technologies",
      period: "May 2023 - Present",
      description:
        "Working on cutting-edge mobile applications including Soilmaster and VisionaryAI. Implementing modern Android development practices with Kotlin and Jetpack Compose.",
      achievements: [
        "Developed Soilmaster app for agricultural soil analysis using ML",
        "Built VisionaryAI, an accessibility app for visually impaired users",
        "Implemented CI/CD pipelines for automated testing and deployment",
        "Collaborated with cross-functional teams to deliver high-quality products",
      ],
      technologies: ["Kotlin", "Jetpack Compose", "Firebase", "ML Kit", "Git"],
    },
    {
      title: "Android Head",
      company: "GDG PCCOE",
      period: "August 2022 - Present",
      description:
        "Leading the Android development community at PCCOE. Organizing workshops, hackathons, and technical sessions to foster learning and collaboration.",
      achievements: [
        "Organized 5+ successful Android development workshops",
        "Mentored 20+ students in mobile app development",
        "Coordinated with Google Developer Experts for technical sessions",
        "Contributed to community growth by 40% in one year",
      ],
      technologies: ["Android", "Flutter", "Community Building", "Event Management"],
    },
  ]

  return (
    <section id="experience" className="py-16 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{exp.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
