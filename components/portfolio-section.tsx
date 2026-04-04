"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PaintSplash2, PaintSplash4, PaintSplatters } from "./paint-splashes"

const projects = [
  {
    id: 1,
    title: "Modern Living Room Transformation",
    category: "Interior",
    afterImage: "/images/portfolio-1.jpg",
    description: "Complete interior repaint with fresh neutral tones for a contemporary look.",
    location: "Arizona",
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Victorian Home Exterior",
    category: "Exterior",
    afterImage: "/images/portfolio-2.jpg",
    description: "Full exterior restoration with weather-resistant premium paint.",
    location: "Arizona",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Corporate Office Suite",
    category: "Commercial",
    afterImage: "/images/portfolio-4.jpg",
    description: "Professional office space painted to enhance productivity and aesthetics.",
    location: "Arizona",
    color: "#C490E4",
  },

  // ✅ BEFORE / AFTER PROJECTS ONLY
  {
    id: 4,
    title: "Backyard Landscaping Project",
    category: "Landscaping",
    beforeImage: "/images/landscaping-before.jpg",
    afterImage: "/images/landscaping-after.jpg",
    description: "Complete backyard transformation with fresh lawn, flower beds, and pathways.",
    location: "Arizona",
    color: "#7BC043",
    hasBeforeAfter: true,
  },
  {
    id: 5,
    title: "Front Yard Clean-Up",
    category: "Yard Clean-Up",
    beforeImage: "/images/yard-cleanup-before.jpg",
    afterImage: "/images/yard-cleanup-after.png",
    description: "Thorough clean-up with debris removal, trimming, and fresh mulch application.",
    location: "Arizona",
    color: "#FFE66D",
    hasBeforeAfter: true,
  },
  {
    id: 9,
    title: "Bathroom Interior Upgrade",
    category: "Interior",
    beforeImage: "/images/bathroom-before.jpg",
    afterImage: "/images/yard-cleanup-after.png",
    description: "Bright modern Bathroom repaint with clean white and accent tones.",
    location: "Arizona",
    color: "#FF6B6B",
    hasBeforeAfter: true,
  },

  // ✅ SINGLE IMAGE PROJECTS
  {
    id: 6,
    title: "Master Bedroom Refresh",
    category: "Interior",
    afterImage: "/images/portfolio-5.jpg",
    description: "Calming bedroom repaint with elegant soft white tones.",
    location: "Arizona",
    color: "#FF6B6B",
  },
  {
    id: 7,
    title: "Craftsman Home Revival",
    category: "Exterior",
    afterImage: "/images/portfolio-6.jpg",
    description: "Historic home exterior restoration with period-appropriate colors.",
    location: "Arizona",
    color: "#4ECDC4",
  },
  {
    id: 8,
    title: "Restaurant Interior",
    category: "Commercial",
    afterImage: "/images/portfolio-8.jpg",
    description: "Warm, inviting restaurant interior to create the perfect dining ambiance.",
    location: "Arizona",
    color: "#C490E4",
  },
]

const categories = ["All", "Interior", "Exterior", "Commercial", "Landscaping", "Yard Clean-Up"]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 bg-background relative overflow-hidden">
      <PaintSplash2 className="absolute -top-16 -right-20 w-52 h-60 opacity-70" />
      <PaintSplash4 className="absolute -bottom-20 -left-20 w-48 h-56 opacity-60 rotate-90" />
      <PaintSplatters className="absolute top-1/3 -left-6 w-16 h-16 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Recent Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our latest transformations.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              className={
                activeCategory === category
                  ? "bg-foreground text-background hover:bg-foreground/90"
                  : "border-border/50 hover:bg-secondary"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">

                {/* ✅ ONLY 3 PROJECTS HAVE BEFORE/AFTER */}
                {project.hasBeforeAfter ? (
                  <>
                    <Image
                      src={project.beforeImage!}
                      alt={`${project.title} - Before`}
                      fill
                      className={`object-cover ${
                        project.id === 5 ? "" : "transition-opacity duration-500"
                      } ${
                        hoveredProject === project.id ? "opacity-0" : "opacity-100"
                      }`}
                    />

                    <Image
                      src={project.afterImage}
                      alt={`${project.title} - After`}
                      fill
                      className={`object-cover ${
                        project.id === 5 ? "" : "transition-opacity duration-500"
                      } ${
                        hoveredProject === project.id ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 text-white text-xs font-medium rounded-full">
                      {hoveredProject === project.id ? "After" : "Before"}
                    </div>
                  </>
                ) : (
                  <Image
                    src={project.afterImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />

                {/* Dot */}
                <div
                  className="absolute top-4 right-4 w-3 h-3 rounded-full"
                  style={{ backgroundColor: project.color }}
                />

                {/* Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <span
                      className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-2"
                      style={{
                        backgroundColor: project.color,
                        color: project.color === "#FFE66D" ? "#000" : "#fff",
                      }}
                    >
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/80 mt-1">
                      {project.description}
                    </p>
                    <p className="text-xs text-white/60 mt-2">
                      {project.location}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}