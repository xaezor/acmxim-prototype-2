"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    about: [
      { name: "Our Mission", href: "#about" },
      { name: "Leadership Team", href: "#team" },
      { name: "Achievements", href: "#achievements" },
      { name: "Partners", href: "#partners" },
    ],
    activities: [
      { name: "Upcoming Events", href: "#events" },
      { name: "Workshops", href: "#workshops" },
      { name: "Hackathons", href: "#hackathons" },
      { name: "Projects", href: "#projects" },
    ],
    resources: [
      { name: "Study Materials", href: "#resources" },
      { name: "Career Guidance", href: "#career" },
      { name: "Mentorship", href: "#mentorship" },
      { name: "Alumni Network", href: "#alumni" },
    ],
    connect: [
      { name: "Join Us", href: "#join" },
      { name: "Contact", href: "#contact" },
      { name: "Newsletter", href: "#newsletter" },
      { name: "FAQ", href: "#faq" },
    ],
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ACM</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                University
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Empowering the next generation of computer science professionals through innovation, collaboration, and
              continuous learning.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Computer Science Building, University Campus
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                acm@university.edu
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (555) 123-4567
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Activities</h3>
            <ul className="space-y-2">
              {footerLinks.activities.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-blue-500 hover:text-white transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-blue-500 hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-blue-500 hover:text-white transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-blue-500 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© {currentYear} ACM University Chapter. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
