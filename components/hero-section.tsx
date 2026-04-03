import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Shield, Clock, ArrowRight } from "lucide-react"
import { PaintSplash1, PaintSplash2, PaintSplash3, PaintSplash4, PaintSplash5, PaintDrip, PaintSplatters } from "./paint-splashes"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
      {/* Paint splash decorations - positioned at edges, not over content */}
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
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFE66D] text-[#FFE66D]" />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">500+ 5-Star Reviews</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              <span className="text-balance">Transform Your</span>
              <br />
              <span className="relative inline-block">
                Space
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Professional residential and commercial painting services. 
              Premium quality, meticulous attention to detail, and results that speak for themselves.
            </p>

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

            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4ECDC4]/15 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#4ECDC4]" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Licensed & Insured</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF6B6B]/15 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#FF6B6B]" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">15+ Years Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFE66D]/15 flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#FFE66D]" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Satisfaction Guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-painting.jpg"
                alt="Professional painting service"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative colored blocks */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FF6B6B] rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#4ECDC4] rounded-2xl -z-10" />
            <PaintSplash5 className="absolute -bottom-8 -right-8 w-32 h-36 opacity-80" />
          </div>
        </div>
      </div>
    </section>
  )
}
