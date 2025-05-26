"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award, Star, Zap } from "lucide-react"

export default function HighlightsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "Best Student Chapter 2023",
      description: "Recognized as the outstanding ACM student chapter for innovation and community impact.",
      year: "2023",
    },
    {
      icon: Award,
      title: "Hackathon Champions",
      description: "Our team won first place in the National Collegiate Programming Contest.",
      year: "2023",
    },
    {
      icon: Star,
      title: "Research Excellence",
      description: "Published 15+ research papers in top-tier conferences and journals.",
      year: "2023",
    },
    {
      icon: Zap,
      title: "Industry Partnerships",
      description: "Established collaborations with 25+ leading tech companies.",
      year: "2023",
    },
  ]

  const milestones = [
    { number: "2019", label: "Chapter Founded" },
    { number: "500+", label: "Members Joined" },
    { number: "100+", label: "Events Hosted" },
    { number: "50+", label: "Projects Completed" },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Celebrating our journey of excellence, innovation, and community impact.
          </p>
        </div>

        {/* Milestones */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {milestones.map((milestone, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">{milestone.number}</span>
              </div>
              <p className="text-muted-foreground font-medium">{milestone.label}</p>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{achievement.title}</h3>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recognition Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Recognized Excellence</h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Our commitment to fostering innovation and building a strong tech community has earned us recognition from
            industry leaders and academic institutions.
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-80">
            <div className="text-center">
              <div className="text-sm font-medium">Featured in</div>
              <div className="text-lg font-bold">Tech Today Magazine</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium">Partnered with</div>
              <div className="text-lg font-bold">Google Developer Groups</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium">Sponsored by</div>
              <div className="text-lg font-bold">Microsoft Azure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
