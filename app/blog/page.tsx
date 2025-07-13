import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Sample blog posts data
const blogPosts = [
  {
    id: "sustainable-fashion-tips",
    title: "10 Tips for Building a Sustainable Wardrobe",
    excerpt: "Discover practical ways to make your fashion choices more eco-friendly without sacrificing style.",
    date: "May 15, 2023",
    author: "Emma Johnson",
    category: "Sustainability",
    image: "/placeholder.svg?height=600&width=800&text=Sustainable+Fashion",
  },
  {
    id: "thrifting-guide",
    title: "The Ultimate Guide to Thrifting: Finding Hidden Gems",
    excerpt: "Learn how to spot quality pieces and navigate thrift stores like a pro with our comprehensive guide.",
    date: "June 3, 2023",
    author: "Marcus Chen",
    category: "Thrifting Tips",
    image: "/placeholder.svg?height=600&width=800&text=Thrifting+Guide",
  },
  {
    id: "vintage-trends-2023",
    title: "Vintage Trends Making a Comeback in 2023",
    excerpt: "From 90s minimalism to Y2K aesthetics, these vintage styles are having a major moment this year.",
    date: "July 12, 2023",
    author: "Zoe Williams",
    category: "Fashion Trends",
    image: "/placeholder.svg?height=600&width=800&text=Vintage+Trends",
  },
  {
    id: "clothing-care",
    title: "How to Make Your Clothes Last Longer: Care Tips",
    excerpt: "Extend the life of your favorite pieces with these expert care and maintenance recommendations.",
    date: "August 5, 2023",
    author: "Emma Johnson",
    category: "Clothing Care",
    image: "/placeholder.svg?height=600&width=800&text=Clothing+Care",
  },
  {
    id: "ethical-brands",
    title: "5 Ethical Brands That Are Changing the Fashion Industry",
    excerpt: "Spotlight on innovative companies that prioritize sustainability, fair labor, and quality craftsmanship.",
    date: "September 20, 2023",
    author: "Marcus Chen",
    category: "Ethical Fashion",
    image: "/placeholder.svg?height=600&width=800&text=Ethical+Brands",
  },
  {
    id: "capsule-wardrobe",
    title: "Creating a Capsule Wardrobe with Thrifted Pieces",
    excerpt: "Build a versatile, timeless wardrobe using second-hand finds that work perfectly together.",
    date: "October 8, 2023",
    author: "Zoe Williams",
    category: "Styling Tips",
    image: "/placeholder.svg?height=600&width=800&text=Capsule+Wardrobe",
  },
]

// Categories for filter
const categories = [
  "All",
  "Sustainability",
  "Thrifting Tips",
  "Fashion Trends",
  "Clothing Care",
  "Ethical Fashion",
  "Styling Tips",
]

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] mb-16">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1600&text=ThriftVibe+Blog"
            alt="ThriftVibe Blog"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">ThriftVibe Blog</h1>
              <p className="text-lg mb-6">
                Insights, tips, and stories from the world of sustainable fashion and thrifting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="relative rounded-xl overflow-hidden">
              <div className="aspect-[16/9] relative">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center space-x-2 text-white/80 text-sm mb-2">
                  <span>{blogPosts[0].category}</span>
                  <span>•</span>
                  <span>{blogPosts[0].date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{blogPosts[0].title}</h2>
                <p className="text-white/90 mb-4 max-w-2xl">{blogPosts[0].excerpt}</p>
                <Button asChild>
                  <Link href={`/blog/${blogPosts[0].id}`}>Read More</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="group">
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground text-sm mb-2">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[hsl(35,80%,60%)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">{post.excerpt}</p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-2">
                      <span className="text-xs font-medium">{post.author.split(" ").map(n => n[0]).join("")}</span>
                    </div>
                    <span className="text-sm">{post.author}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-1">
              <button className="w-10 h-10 rounded-md flex items-center justify-center bg-primary text-primary-foreground">
                1
              </button>
              <button className="w-10 h-10 rounded-md flex items-center justify-center bg-muted hover:bg-muted/80">
                2
              </button>
              <button className="w-10 h-10 rounded-md flex items-center justify-center bg-muted hover:bg-muted/80">
                3
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest sustainable fashion tips, thrifting guides, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="sm:w-auto">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}