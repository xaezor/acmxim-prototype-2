"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Code, Lightbulb, Heart } from "lucide-react"

export default function JoinUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    year: "",
    major: "",
    interest: "",
    experience: "",
    motivation: "",
  })

  const membershipTypes = [
    {
      icon: Users,
      title: "General Member",
      description: "Perfect for students who want to participate in events, workshops, and networking opportunities.",
      benefits: [
        "Access to all workshops and seminars",
        "Networking events with industry professionals",
        "Project collaboration opportunities",
        "Resume and career guidance",
      ],
      commitment: "Attend monthly meetings and participate in events",
    },
    {
      icon: Code,
      title: "Core Team Member",
      description: "For dedicated students ready to take on leadership roles and organize chapter activities.",
      benefits: [
        "Leadership experience and training",
        "Event planning and management",
        "Direct mentorship from faculty",
        "Priority access to internship opportunities",
      ],
      commitment: "Weekly meetings and active project involvement",
    },
    {
      icon: Lightbulb,
      title: "Project Contributor",
      description: "Ideal for students who want to contribute to open-source projects and research initiatives.",
      benefits: [
        "Hands-on project experience",
        "Collaboration with experienced developers",
        "Portfolio building opportunities",
        "Technical skill development",
      ],
      commitment: "Contribute to ongoing projects and attend technical sessions",
    },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Our Community
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to be part of something amazing? Choose your path and start your journey with ACM University today.
          </p>
        </div>

        {/* Membership Types */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {membershipTypes.map((type, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <type.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>

                <div className="text-left mb-6">
                  <h4 className="font-medium mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Heart className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Commitment:</strong> {type.commitment}
                  </p>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Application Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 bg-background/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Membership Application</h3>
                <p className="text-muted-foreground">Fill out the form below to start your application process.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@university.edu"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Academic Year *</label>
                    <Select onValueChange={(value) => handleInputChange("year", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="freshman">Freshman</SelectItem>
                        <SelectItem value="sophomore">Sophomore</SelectItem>
                        <SelectItem value="junior">Junior</SelectItem>
                        <SelectItem value="senior">Senior</SelectItem>
                        <SelectItem value="graduate">Graduate Student</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Major *</label>
                    <Input
                      value={formData.major}
                      onChange={(e) => handleInputChange("major", e.target.value)}
                      placeholder="e.g., Computer Science"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Area of Interest *</label>
                  <Select onValueChange={(value) => handleInputChange("interest", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your primary interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="mobile-development">Mobile Development</SelectItem>
                      <SelectItem value="ai-ml">Artificial Intelligence & Machine Learning</SelectItem>
                      <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                      <SelectItem value="data-science">Data Science</SelectItem>
                      <SelectItem value="blockchain">Blockchain</SelectItem>
                      <SelectItem value="iot">Internet of Things</SelectItem>
                      <SelectItem value="ar-vr">AR/VR</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Programming Experience</label>
                  <Textarea
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    placeholder="Tell us about your programming background, languages you know, projects you've worked on..."
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Why do you want to join ACM? *</label>
                  <Textarea
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    placeholder="Share your motivation for joining our chapter and what you hope to achieve..."
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                  size="lg"
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Have Questions?</h3>
          <p className="text-muted-foreground mb-6">
            Feel free to reach out to us for any questions about membership or our activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">Email Us: acm@university.edu</Button>
            <Button variant="outline">Join Our Discord</Button>
            <Button variant="outline">Follow @ACMUniversity</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
