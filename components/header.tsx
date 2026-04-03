"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            {/* Colorful paint splash logo */}
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-full bg-[#FF6B6B]" />
              <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-[#4ECDC4]" />
              <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-[#FFE66D]" />
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-lg sm:text-xl text-foreground tracking-tight">Painting By Tracie LLC</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+19282955215" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              <Phone className="w-4 h-4" />
              (928) 295-5215
            </a>
            <Button asChild className="bg-foreground text-background hover:bg-foreground/90">
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-border">
              <a href="tel:+19282955215" className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-muted-foreground">
                <Phone className="w-4 h-4" />
                (928) 295-5215
              </a>
              <Button asChild className="w-full mt-2 bg-foreground text-background hover:bg-foreground/90">
                <Link href="#contact">Get a Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
