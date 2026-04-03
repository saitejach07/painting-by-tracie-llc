"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, Send, ArrowRight } from "lucide-react"
import { PaintSplash1, PaintSplash3, PaintSplatters } from "./paint-splashes"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(928) 295-5215",
    href: "tel:+19282955215",
    color: "#4ECDC4",
  },
  {
    icon: Mail,
    label: "Email",
    value: "traciespaintandscape@gmail.com",
    href: "mailto:traciespaintandscape@gmail.com",
    color: "#FF6B6B",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri: 7am-6pm, Sat: 8am-4pm",
    color: "#FFE66D",
  },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Paint splash decorations at edges */}
      <PaintSplash1 className="absolute -bottom-20 -left-20 w-56 h-64 opacity-60" />
      <PaintSplash3 className="absolute top-10 -right-20 w-52 h-60 opacity-50 -rotate-12" />
      <PaintSplatters className="absolute top-1/2 -right-6 w-16 h-16 opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Contact</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Get Your Free Quote
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to transform your space? Contact Tracie Pacheco for a free estimate on your painting or landscaping project.
            </p>

            <div className="mt-10 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-medium text-foreground hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-secondary/50 rounded-xl border border-border">
              <p className="text-sm font-medium text-foreground mb-2">Owner</p>
              <p className="text-lg font-semibold text-foreground">Tracie Pacheco</p>
              <p className="text-muted-foreground mt-1">Painting By Tracie LLC</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#7BC043] mx-auto mb-4 flex items-center justify-center">
                  <Send className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground">
                  Tracie will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground block mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground block mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="text-sm font-medium text-foreground block mb-2">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Painting</option>
                      <option value="commercial">Commercial Painting</option>
                      <option value="landscaping">Landscaping</option>
                      <option value="yard-cleanup">Yard Clean-Up</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    required
                    className="resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Request Free Quote"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
