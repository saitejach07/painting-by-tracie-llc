import Image from "next/image"
import { Check } from "lucide-react"
import { PaintSplash1, PaintSplash6, PaintSplatters } from "./paint-splashes"

const features = [
  "Licensed & fully insured",
  "Premium quality materials",
  "Meticulous preparation",
  "Free color consultation",
  "Transparent pricing",
  "Satisfaction guaranteed",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Paint splash decorations at edges */}
      <PaintSplash1 className="absolute top-20 -left-20 w-52 h-60 opacity-60 rotate-45" />
      <PaintSplash6 className="absolute -bottom-16 -right-16 w-48 h-56 opacity-50" />
      <PaintSplatters className="absolute bottom-1/3 -left-8 w-20 h-20 opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/team.jpg"
                alt="Tracie Painting team"
                fill
                className="object-cover"
              />
            </div>
            {/* Color accent blocks */}
            <div className="absolute -bottom-4 -left-4 w-1/2 h-20 bg-[#FF6B6B] rounded-xl -z-10" />
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#4ECDC4] rounded-xl -z-10" />
            
            {/* Stats badge */}
            <div className="absolute -bottom-6 right-8 bg-card border border-border rounded-xl p-4 shadow-xl">
              <div className="text-3xl font-bold text-foreground">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">About Us</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Quality You Can Trust
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              For over 15 years, Tracie Painting has been transforming homes and businesses 
              throughout the region. Our commitment to excellence and customer satisfaction 
              drives everything we do.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We use only premium materials and proven techniques to ensure lasting, 
              beautiful results for every project we undertake.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {features.map((feature, index) => {
                const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#C490E4', '#7BC043', '#3498DB']
                return (
                  <div key={feature} className="flex items-center gap-2">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: colors[index % colors.length] }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
