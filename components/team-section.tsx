"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chapter President",
      bio: "Computer Science senior passionate about AI and machine learning. Leading our chapter's growth and innovation initiatives.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        github: "#",
        linkedin: "#",
        email: "sarah@acm.university.edu",
      },
    },
    {
      name: "Michael Chen",
      role: "Vice President",
      bio: "Software Engineering major with expertise in full-stack development. Coordinates technical workshops and hackathons.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        github: "#",
        linkedin: "#",
        email: "michael@acm.university.edu",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Secretary",
      bio: "Data Science enthusiast focused on analytics and visualization. Manages chapter communications and documentation.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        github: "#",
        linkedin: "#",
        email: "emily@acm.university.edu",
      },
    },
    {
      name: "David Kim",
      role: "Treasurer",
      bio: "Cybersecurity specialist and finance manager. Oversees chapter budget and sponsors relationships.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        github: "#",
        linkedin: "#",
        email: "david@acm.university.edu",
      },
    },
    {
      name: "Alex Thompson",
      role: "Technical Lead",
      bio: "Full-stack developer and open source contributor. Leads technical projects and mentors new members.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        github: "#",
        linkedin: "#",
        email: "alex@acm.university.edu",
      },
    },
    {
      name: "Lisa Wang",
      role: "Events Coordinator",
      bio: "UX/UI designer and event planning expert. Organizes workshops, seminars, and networking events.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        github: "#",
        linkedin: "#",
        email: "lisa@acm.university.edu",
      },
    },
  ]

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our dedicated team of student leaders working together to create an amazing experience for all members.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social Links - appear on hover */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <a
                      href={member.social.github}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Want to Join Our Team?</h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate students to join our leadership team. Applications for executive
              positions open at the beginning of each semester.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                View Open Positions
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Leadership Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
