"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Shield, Clock, ArrowRight } from "lucide-react"
import { PaintSplash1, PaintSplash2, PaintSplash3, PaintSplash4, PaintSplash5, PaintDrip, PaintSplatters } from "./paint-splashes"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
      {/* Paint splash decorations */}
      <PaintSplash1 className="absolute -top-10 -right-16 w-64 h-72 opacity-80" />
      <PaintSplash2 className="absolute -bottom-16 -left-16 w-56 h-64 opacity-75 rotate-45" />
      <PaintSplash3 className="absolute top-20 -left-20 w-48 h-56 opacity-70 -rotate-12" />
      <PaintSplash4 className="absolute -bottom-10 right-1/4 w-40 h-48 opacity-65" />
      <PaintDrip className="absolute top-0 left-[15%] w-6 h-20 opacity-80" color="#4ECDC4" />
      <PaintDrip className="absolute top-0 right-[20%] w-5 h-16 opacity-70" color="#FFE66D" />
      <PaintDrip className="absolute top-0 right-[8%] w-4 h-14 opacity-60" color="#C490E4" />
      <PaintSplatters className="absolute bottom-32 left-[5%] w-24 h-24 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* Reviews */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFE66D] text-[#FFE66D]" />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                500+ 5-Star Reviews in Cottonwood, AZ
              </span>
            </div>

            {/* ✅ CLEAN SEO H1 */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              <span className="text-balance">Painting Services in Cottonwood</span>
            </h1>

            {/* ✅ TAGLINE (separate, lighter) */}
            <p className="mt-4 text-xl sm:text-2xl font-medium text-foreground/70">
              Precision Painting. Personal Touch.
            </p>

            {/* ✅ DESCRIPTION */}
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
                Interior and exterior painting for homes and businesses, using premium materials and meticulous attention to detail for long-lasting, high-quality results.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base px-8 h-12 bg-foreground text-background hover:bg-foreground/90">
                <Link href="#contact">
                  Get Free Estimate
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 h-12 border-foreground/20">
                <Link href="#portfolio">View Our Work</Link>
              </Button>
            </div>

            {/* TRUST BADGES */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4ECDC4]/15 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#4ECDC4]" />
                </div>
                <p className="font-medium text-foreground text-sm">Licensed & Insured</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF6B6B]/15 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#FF6B6B]" />
                </div>
                <p className="font-medium text-foreground text-sm">15+ Years Experience</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFE66D]/15 flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#FFE66D]" />
                </div>
                <p className="font-medium text-foreground text-sm">Satisfaction Guaranteed</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative lg:pl-8">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/women_painting2.png"
                alt="House painter in Cottonwood Arizona providing interior and exterior painting services"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FF6B6B] rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#4ECDC4] rounded-2xl -z-10" />
            <PaintSplash5 className="absolute -bottom-8 -right-8 w-32 h-36 opacity-80" />
          </div>

        </div>
      </div>
    </section>
  )
}