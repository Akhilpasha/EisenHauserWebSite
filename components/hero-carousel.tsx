"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

// Define the slide data
const slides = [
  {
    id: 1,
    title: "Sustainable Style, Second-Hand Soul",
    subtitle: "Discover unique, pre-loved clothing that's good for your style and the planet. Each piece tells a story—make it part of yours.",
    image: "/log_eisen.png?height=600&width=600",
    accent: "bg-primary",
    primaryCta: {
      text: "Shop Now",
      link: "/shop"
    },
    secondaryCta: {
      text: "Our Story",
      link: "/about"
    }
  },
  {
    id: 2,
    title: "Vintage Finds, Modern Style",
    subtitle: "Curated collections of timeless pieces that blend nostalgia with contemporary fashion trends.",
    image: "/placeholder.svg?height=800&width=600&text=Slide+2",
    accent: "bg-accent",
    primaryCta: {
      text: "Explore Vintage",
      link: "/shop?category=vintage"
    },
    secondaryCta: {
      text: "Style Guide",
      link: "/blog"
    }
  },
  {
    id: 3,
    title: "Eco-Friendly Fashion",
    subtitle: "Join our mission to reduce fashion waste and create a more sustainable future through conscious shopping.",
    image: "/placeholder.svg?height=800&width=600&text=Slide+3",
    accent: "bg-secondary",
    primaryCta: {
      text: "Shop Eco Collection",
      link: "/shop?category=eco"
    },
    secondaryCta: {
      text: "Our Impact",
      link: "/about#impact"
    }
  }
]

// Auto-slide interval in milliseconds (5 seconds)
const AUTO_SLIDE_INTERVAL = 3000

export default function HeroCarousel() {
  const [api, setApi] = useState<any>(null)
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Function to scroll to the next slide
  const scrollToNextSlide = useCallback(() => {
    if (api) {
      api.scrollNext()
    }
  }, [api])

  // Auto-slide effect
  useEffect(() => {
    if (!api || isPaused) return
    
    const interval = setInterval(scrollToNextSlide, AUTO_SLIDE_INTERVAL)
    
    return () => clearInterval(interval)
  }, [api, isPaused, scrollToNextSlide])

  // Update current slide index when slide changes
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }
    
    api.on("select", onSelect)
    
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <section className="relative min-h-[600px] lg:min-h-[800px] flex items-center overflow-hidden pt-16 md:pt-20">
      <div className="w-full h-full">
        <Carousel 
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <CarouselContent className="cursor-grab active:cursor-grabbing">
            {slides.map((slide) => (
              <CarouselItem key={slide.id} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[600px] lg:min-h-[800px] px-6 md:px-12 lg:px-24">
                  <div className="order-2 lg:order-1 animate-fade-in-up z-20" style={{ animationDelay: '0.2s' }}>
                    <div className={cn("h-1 w-20 rounded mb-6", slide.accent)} />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-4">
                      {slide.title.split(',').map((part, i) => (
                        i === 0 ? (
                          <span key={i} className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            {part}, <br />
                          </span>
                        ) : (
                          <span key={i} className="text-primary animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            {part}
                          </span>
                        )
                      ))}
                    </h1>
                    <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                      <Button size="lg" asChild>
                        <Link href={slide.primaryCta.link}>{slide.primaryCta.text}</Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <Link href={slide.secondaryCta.link}>{slide.secondaryCta.text}</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="order-1 lg:order-2 relative animate-fade-in-right z-10" style={{ animationDelay: '0.4s' }}>
                    <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl max-h-[500px] lg:max-h-[600px]">
                      <div className={cn("absolute inset-0 opacity-20 z-0", slide.accent)} />
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority
                        className="object-cover z-10 transition-transform duration-10000 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            {slides.map((slide, index) => (
              <button
                key={index}
                className={cn(
                  "h-3 mx-1 rounded-full transition-all duration-300 transform",
                  current === index 
                    ? cn("w-10", slide.accent) 
                    : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <CarouselPrevious className="hidden sm:flex left-2 sm:left-4 lg:left-12 opacity-70 hover:opacity-100 transition-opacity" />
          <CarouselNext className="hidden sm:flex right-2 sm:right-4 lg:right-12 opacity-70 hover:opacity-100 transition-opacity" />
        </Carousel>
      </div>
    </section>
  )
}