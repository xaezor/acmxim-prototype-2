"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import HighlightsSection from "@/components/highlights-section"
import EventsSection from "@/components/events-section"
import TeamSection from "@/components/team-section"
import ProjectsSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"
import JoinUsSection from "@/components/join-us-section"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import AnimatedCursor from "@/components/animated-cursor"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <AnimatedCursor />
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <HighlightsSection />
          <EventsSection />
          <TeamSection />
          <ProjectsSection />
          <TestimonialsSection />
          <JoinUsSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
