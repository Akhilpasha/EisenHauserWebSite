import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const teamMembers = [
  {
    name: "Emma Johnson",
    role: "Founder & Creative Director",
    image: "/placeholder.svg?height=400&width=400&text=Emma",
    bio: "Emma started ThriftVibe with a passion for sustainable fashion and a vision to make second-hand shopping stylish and accessible.",
  },
  {
    name: "Marcus Chen",
    role: "Head of Curation",
    image: "/placeholder.svg?height=400&width=400&text=Marcus",
    bio: "With an eye for unique pieces and quality, Marcus leads our team in sourcing the best pre-loved items for our collection.",
  },
  {
    name: "Zoe Williams",
    role: "Sustainability Officer",
    image: "/placeholder.svg?height=400&width=400&text=Zoe",
    bio: "Zoe ensures our practices align with our eco-conscious values, from packaging to partnerships.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] mb-16">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1600&text=About+Us"
            alt="ThriftVibe team"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
              <p className="text-lg mb-6">
                ThriftVibe was born from a love of unique fashion and a commitment to sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                ThriftVibe is about giving preloved clothes a new life while reducing fashion waste. We believe that
                sustainable fashion doesn't have to compromise on style or quality.
              </p>
              <p className="text-muted-foreground mb-6">
                Our mission is to make thrifting accessible, enjoyable, and impactful. We carefully curate each piece in
                our collection to ensure it meets our standards for quality and style, so you can shop with confidence.
              </p>
              <Button asChild>
                <Link href="/shop">Shop Our Collection</Link>
              </Button>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Our+Mission"
                alt="ThriftVibe mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to reducing fashion's environmental impact by extending the lifecycle of clothing and
                promoting conscious consumption.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Individuality</h3>
              <p className="text-muted-foreground">
                We celebrate personal style and believe that fashion should be an expression of your unique identity,
                not a reflection of trends.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-muted-foreground">
                We're building a community of like-minded individuals who value sustainability, quality, and the stories
                behind their clothes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
          <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            The passionate individuals behind ThriftVibe who are dedicated to bringing you the best in sustainable
            fashion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-accent mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-muted-foreground mb-4">
                Since our founding, we've helped extend the life of thousands of clothing items, reducing waste and
                environmental impact.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-4xl font-bold text-accent">5,000+</p>
                  <p className="text-sm text-muted-foreground">Items Rehomed</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-accent">10 tons</p>
                  <p className="text-sm text-muted-foreground">Textile Waste Saved</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-accent">1,500+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-accent">$5,000</p>
                  <p className="text-sm text-muted-foreground">Donated to Environmental Causes</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Our+Impact"
                alt="ThriftVibe impact"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of our sustainable fashion movement. Shop our curated collection and help us reduce fashion's
            environmental footprint.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

