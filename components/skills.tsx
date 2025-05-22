"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Cpu, Palette, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-5 w-5" />,
      skills: ["Kotlin", "Dart", "Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Tools & Environments",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Android Studio", "VS Code", "Git", "GitHub", "Figma", "Postman"],
    },
    {
      title: "Technologies",
      icon: <Cpu className="h-5 w-5" />,
      skills: ["Jetpack Compose", "Firebase", "Google Cloud", "Flutter", "REST APIs", "GraphQL"],
    },
    {
      title: "Design & Others",
      icon: <Palette className="h-5 w-5" />,
      skills: ["UI/UX Design", "Material Design", "Responsive Design", "Agile Methodology", "CI/CD"],
    },
  ]

  return (
    <section id="skills" className="py-16 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    {category.icon}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm py-1">
                        {skill}
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
