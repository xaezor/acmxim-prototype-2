"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star, GitFork } from "lucide-react"

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Campus Navigator AI",
      description:
        "An intelligent campus navigation system using machine learning to provide optimal routes and real-time updates.",
      image: "/placeholder.svg?height=200&width=300",
      category: "AI/ML",
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
      github: "#",
      demo: "#",
      stars: 45,
      forks: 12,
      status: "completed",
    },
    {
      id: 2,
      title: "Student Collaboration Platform",
      description:
        "A comprehensive platform for students to collaborate on projects, share resources, and connect with peers.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Web Development",
      technologies: ["React", "Firebase", "Material-UI", "Node.js"],
      github: "#",
      demo: "#",
      stars: 32,
      forks: 8,
      status: "completed",
    },
    {
      id: 3,
      title: "Blockchain Voting System",
      description:
        "A secure and transparent voting system built on blockchain technology for student government elections.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Blockchain",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      github: "#",
      demo: "#",
      stars: 28,
      forks: 6,
      status: "in-progress",
    },
    {
      id: 4,
      title: "IoT Smart Campus",
      description:
        "Internet of Things solution for monitoring and optimizing campus resources like energy, water, and space utilization.",
      image: "/placeholder.svg?height=200&width=300",
      category: "IoT",
      technologies: ["Arduino", "Raspberry Pi", "Python", "MQTT"],
      github: "#",
      demo: "#",
      stars: 19,
      forks: 4,
      status: "in-progress",
    },
    {
      id: 5,
      title: "AR Study Assistant",
      description:
        "Augmented reality application to enhance learning experience with interactive 3D models and visualizations.",
      image: "/placeholder.svg?height=200&width=300",
      category: "AR/VR",
      technologies: ["Unity", "C#", "ARCore", "Blender"],
      github: "#",
      demo: "#",
      stars: 37,
      forks: 9,
      status: "completed",
    },
    {
      id: 6,
      title: "Cybersecurity Training Platform",
      description:
        "Interactive platform for learning cybersecurity concepts through hands-on exercises and simulations.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Cybersecurity",
      technologies: ["Python", "Docker", "React", "PostgreSQL"],
      github: "#",
      demo: "#",
      stars: 41,
      forks: 11,
      status: "completed",
    },
  ]

  const categories = ["all", "AI/ML", "Web Development", "Blockchain", "IoT", "AR/VR", "Cybersecurity"]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the innovative projects created by our talented members, showcasing cutting-edge technologies and
            creative solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`${
                filter === category
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                  : "hover:bg-blue-50 dark:hover:bg-blue-900/20"
              }`}
            >
              {category === "all" ? "All Projects" : category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant={project.status === "completed" ? "default" : "secondary"}>
                    {project.status === "completed" ? "Completed" : "In Progress"}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>

                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href={project.demo}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="h-6 w-6" />
                  </a>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      {project.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="h-4 w-4 mr-1" />
                      {project.forks}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {project.status === "completed" ? "Open Source" : "In Development"}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Hackathon CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Next Hackathon</h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Ready to build something amazing? Join our upcoming hackathon and collaborate with fellow developers to
            create innovative solutions that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-blue-50">Register for Hackathon</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              View Past Hackathons
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
