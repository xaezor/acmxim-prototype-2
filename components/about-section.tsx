"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Lightbulb, Users } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To advance computing as a science and profession, fostering innovation and excellence in technology education.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "Creating a world where technology serves humanity, driven by ethical innovation and inclusive collaboration.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Encouraging creative problem-solving and cutting-edge research in computer science and technology.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building a supportive network of students, professionals, and academics passionate about technology.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              ACM University
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a dynamic student chapter of the Association for Computing Machinery, dedicated to advancing the
            field of computing through education, research, and community engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Journey</h3>
              <p className="text-blue-100 mb-6">
                Be part of a community that's shaping the future of technology. Whether you're a beginner or an expert,
                there's a place for you in our chapter.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Weekly technical workshops and seminars</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Networking opportunities with industry professionals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Hands-on project collaboration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Career development and mentorship programs</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-blue-100">Active Members</div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm text-blue-100">Events/Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">25+</div>
                    <div className="text-sm text-blue-100">Partnerships</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
