"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Users, Calendar, Trophy, Clock } from "lucide-react"
import AnimatedCounter from "@/components/animated-counter"

export default function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const taglines = [
    "Empowering Future Innovators",
    "Code. Connect. Conquer.",
    "Bridging Academia with Innovation",
    "Building Tomorrow's Tech Leaders",
  ]

  // Rotate taglines
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Countdown timer (example: countdown to next event)
  useEffect(() => {
    const targetDate = new Date("2024-03-15T10:00:00").getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(156,146,172,0.15)_1px,transparent_0)] bg-[length:60px_60px]"></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-500/10 rotate-45 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-500/10 rounded-lg animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-green-500/10 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  ACM University
                </span>
                <br />
                <span className="text-foreground">Chapter</span>
              </h1>

              {/* Dynamic Tagline */}
              <div className="h-8 flex items-center justify-center lg:justify-start">
                <p className="text-lg sm:text-xl text-muted-foreground animate-fade-in">{taglines[currentTagline]}</p>
              </div>

              <p className="text-lg text-muted-foreground max-w-2xl">
                Join our vibrant community of tech enthusiasts, innovators, and future leaders. Together, we're building
                the next generation of computer science professionals.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white transform hover:scale-105 transition-all duration-300"
              >
                Join Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Upcoming Events
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:scale-105 transition-all duration-300"
              >
                Explore Projects
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-blue-500 mr-2" />
                  <AnimatedCounter end={250} duration={2000} />
                  <span className="text-2xl font-bold text-blue-500">+</span>
                </div>
                <p className="text-sm text-muted-foreground">Members</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="h-6 w-6 text-cyan-500 mr-2" />
                  <AnimatedCounter end={45} duration={2000} />
                  <span className="text-2xl font-bold text-cyan-500">+</span>
                </div>
                <p className="text-sm text-muted-foreground">Events</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="h-6 w-6 text-purple-500 mr-2" />
                  <AnimatedCounter end={12} duration={2000} />
                  <span className="text-2xl font-bold text-purple-500">+</span>
                </div>
                <p className="text-sm text-muted-foreground">Awards</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Next Big Event</h3>
                <p className="text-blue-100 mb-6">
                  Annual Hackathon 2024 - Where innovation meets opportunity. Join us for 48 hours of coding,
                  creativity, and collaboration.
                </p>

                {/* Countdown Timer */}
                <div className="bg-white/10 rounded-xl p-4 mb-6">
                  <div className="flex items-center mb-3">
                    <Clock className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Time Remaining</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div>
                      <div className="text-2xl font-bold">{timeLeft.days}</div>
                      <div className="text-xs text-blue-100">Days</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{timeLeft.hours}</div>
                      <div className="text-xs text-blue-100">Hours</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                      <div className="text-xs text-blue-100">Minutes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                      <div className="text-xs text-blue-100">Seconds</div>
                    </div>
                  </div>
                </div>

                <Button
                  variant="secondary"
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
