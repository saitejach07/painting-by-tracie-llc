import { Home, Building2, Trees, Leaf } from "lucide-react"
import { PaintSplash3, PaintSplash5, PaintDrip } from "./paint-splashes"

const services = [
  {
    icon: Home,
    title: "Residential Painting",
    description: "Transform your home with professional interior and exterior painting services. Quality finishes that last.",
    color: "#FF6B6B",
  },
  {
    icon: Building2,
    title: "Commercial Painting",
    description: "Professional painting solutions for offices, retail spaces, and commercial properties.",
    color: "#4ECDC4",
  },
  {
    icon: Trees,
    title: "Landscaping",
    description: "Complete landscaping services to create beautiful outdoor spaces that enhance your property.",
    color: "#7BC043",
  },
  {
    icon: Leaf,
    title: "Yard Clean-Up",
    description: "Thorough yard clean-up services including debris removal, trimming, and seasonal maintenance.",
    color: "#FFE66D",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Paint splash decorations at edges */}
      <PaintSplash3 className="absolute -top-16 -right-20 w-56 h-64 opacity-60" />
      <PaintSplash5 className="absolute -bottom-20 -left-16 w-48 h-56 opacity-50 rotate-180" />
      <PaintDrip className="absolute bottom-0 right-1/4 w-5 h-16 opacity-70" color="#C490E4" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Services</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            What We Offer
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive painting and landscaping solutions for every project, big or small.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="group p-8 bg-card rounded-xl border border-border hover:border-foreground/10 hover:shadow-lg transition-all duration-300"
            >
              <div 
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <service.icon className="w-7 h-7" style={{ color: service.color }} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
              {/* Colored accent line */}
              <div 
                className="w-16 h-1 rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: service.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
