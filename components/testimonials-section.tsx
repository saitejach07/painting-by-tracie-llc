import { Star, Quote } from "lucide-react"
import { PaintSplash4, PaintSplash5, PaintDrip } from "./paint-splashes"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Homeowner, Oak Park",
    rating: 5,
    text: "Tracie Painting transformed our entire home. The team was professional, punctual, and the quality exceeded our expectations.",
    color: "#FF6B6B",
  },
  {
    name: "Michael Chen",
    location: "Business Owner",
    rating: 5,
    text: "We hired them for our office renovation and couldn't be happier. They worked around our schedule with minimal disruption.",
    color: "#4ECDC4",
  },
  {
    name: "Emily Rodriguez",
    location: "Homeowner, Riverside",
    rating: 5,
    text: "The color consultation was incredibly helpful. They helped us choose the perfect palette and the painting was flawless.",
    color: "#FFE66D",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Paint splash decorations at edges */}
      <PaintSplash4 className="absolute top-10 -left-16 w-44 h-52 opacity-60 rotate-12" />
      <PaintSplash5 className="absolute -bottom-16 -right-20 w-48 h-56 opacity-50 -rotate-45" />
      <PaintDrip className="absolute top-0 right-1/3 w-5 h-16 opacity-70" color="#7BC043" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            What Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
            >
              {/* Colored accent bar */}
              <div 
                className="absolute top-0 left-6 w-12 h-1 rounded-full"
                style={{ backgroundColor: testimonial.color }}
              />
              <Quote className="w-8 h-8 text-border mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFE66D] text-[#FFE66D]" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: testimonial.color }}
                >
                  <span className="text-sm font-semibold text-white">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
