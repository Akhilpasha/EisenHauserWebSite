import HeroCarousel from "@/components/hero-carousel"
import FeaturedProducts from "@/components/featured-products"
import WhyThrift from "@/components/why-thrift"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <FeaturedProducts />
      <WhyThrift />

      {/* New Arrivals Banner */}
      <section className="py-16">
        <div className="container-custom">
          <div className="relative rounded-xl overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image src="/placeholder.svg?height=600&width=1200" alt="New arrivals" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 py-16 px-8 md:py-24 md:px-12 text-white">
              <div className="max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">New Arrivals Every Week</h2>
                <p className="mb-8">
                  Our collection is constantly refreshed with unique finds. Check back often to discover new treasures.
                </p>
                <Button size="lg" variant="default" className="bg-white text-black hover:bg-white/90" asChild>
                  <Link href="/shop?filter=new">Shop New Arrivals</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="text-3xl font-bold mb-3">Follow Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl">
              Join our community on Instagram for styling tips, behind-the-scenes, and sustainable fashion inspiration.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <a
                key={item}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square relative rounded-md overflow-hidden group"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Instagram+${item}`}
                  alt={`Instagram post ${item}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    @thriftvibe
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

