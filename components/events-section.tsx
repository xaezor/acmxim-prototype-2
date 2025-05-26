"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, ChevronLeft, ChevronRight } from "lucide-react"

export default function EventsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const events = [
    {
      id: 1,
      title: "Annual Hackathon 2024",
      date: "March 15-17, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "University Tech Center",
      participants: "200+ participants",
      description: "48 hours of innovation, coding, and collaboration. Build solutions for real-world problems.",
      image: "/placeholder.svg?height=200&width=300",
      status: "upcoming",
      category: "Competition",
    },
    {
      id: 2,
      title: "AI/ML Workshop Series",
      date: "February 20, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Science Building",
      participants: "50+ participants",
      description: "Hands-on workshop covering machine learning fundamentals and practical applications.",
      image: "/placeholder.svg?height=200&width=300",
      status: "upcoming",
      category: "Workshop",
    },
    {
      id: 3,
      title: "Tech Talk: Future of Computing",
      date: "January 25, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Main Auditorium",
      participants: "300+ participants",
      description: "Industry experts discuss emerging trends in quantum computing and edge technologies.",
      image: "/placeholder.svg?height=200&width=300",
      status: "past",
      category: "Seminar",
    },
    {
      id: 4,
      title: "Code Review Bootcamp",
      date: "December 10, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Lab Complex",
      participants: "75+ participants",
      description: "Learn best practices for code review, testing, and collaborative development.",
      image: "/placeholder.svg?height=200&width=300",
      status: "past",
      category: "Workshop",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(events.length / 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(events.length / 2)) % Math.ceil(events.length / 2))
  }

  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Upcoming{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us for exciting workshops, seminars, and competitions that will enhance your skills and expand your
            network.
          </p>
        </div>

        {/* Event Slider */}
        <div className="relative mb-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(events.length / 2) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    {events.slice(slideIndex * 2, slideIndex * 2 + 2).map((event) => (
                      <Card
                        key={event.id}
                        className="group hover:shadow-xl transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm overflow-hidden"
                      >
                        <div className="relative">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                event.status === "upcoming" ? "bg-green-500 text-white" : "bg-gray-500 text-white"
                              }`}
                            >
                              {event.status === "upcoming" ? "Upcoming" : "Past Event"}
                            </span>
                          </div>
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500 text-white">
                              {event.category}
                            </span>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">{event.description}</p>

                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-2" />
                              {event.date}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="h-4 w-4 mr-2" />
                              {event.time}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4 mr-2" />
                              {event.location}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Users className="h-4 w-4 mr-2" />
                              {event.participants}
                            </div>
                          </div>

                          <Button
                            className={`w-full ${
                              event.status === "upcoming"
                                ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                                : "bg-muted text-muted-foreground cursor-not-allowed"
                            }`}
                            disabled={event.status === "past"}
                          >
                            {event.status === "upcoming" ? "Register Now" : "Event Completed"}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Event Calendar CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
          >
            View Full Event Calendar
          </Button>
        </div>
      </div>
    </section>
  )
}
