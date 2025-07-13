import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Sustainable Style, <br />
              <span className="text-accent">Second-Hand Soul</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Discover unique, pre-loved clothing that's good for your style and the planet. Each piece tells a
              story—make it part of yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/shop">Shop Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Sustainable fashion"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-lg shadow-lg max-w-[200px]">
              <p className="text-sm font-medium">"ThriftVibe helped me find my style while staying eco-conscious!"</p>
              <p className="text-xs text-muted-foreground mt-2">— Sarah, Loyal Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

