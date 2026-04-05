import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Interior Painting", href: "#services" },
    { label: "Exterior Painting", href: "#services" },
    { label: "Cabinet Refinishing", href: "#services" },
    { label: "Commercial Painting", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "#3498DB" },
  { icon: Instagram, href: "#", label: "Instagram", color: "#FF6B6B" },
  { icon: Twitter, href: "#", label: "Twitter", color: "#4ECDC4" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              {/* Colorful paint splash logo */}
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-full bg-[#FF6B6B]" />
                <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-[#4ECDC4]" />
                <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-[#FFE66D]" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-xl text-background">Tracie Painting</span>
            </Link>
            <p className="mt-4 text-background/60 leading-relaxed">
              Professional painting services for homes and businesses. 
              Quality craftsmanship you can trust.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-background">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-background/60 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-background">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-background/60 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <ul className="space-y-3 text-background/60">
          <h3 className="font-semibold text-lg mb-4 text-background">Contact</h3>
            <li>
              <a
                href="https://www.google.com/maps?q=4539+N+22nd+St+Suite+5777+Phoenix+AZ+85016"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background transition-colors"
              >
                4539 N. 22nd St.<br />
                Suite 5777<br />
                Phoenix, AZ 85016
              </a>
            </li>
            <li>
              <a href="tel:+19282955215" className="hover:text-background transition-colors">
                (928) 295-5215
              </a>
            </li>

            <li>
              <a href="mailto:traciespaintandscape@gmail.com" className="hover:text-background transition-colors">
                traciespaintandscape@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            &copy; {new Date().getFullYear()} Tracie Painting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
