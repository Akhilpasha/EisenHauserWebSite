import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// Sample blog posts data (in a real app, this would come from a database or CMS)
const blogPosts = [
  {
    id: "sustainable-fashion-tips",
    title: "10 Tips for Building a Sustainable Wardrobe",
    excerpt: "Discover practical ways to make your fashion choices more eco-friendly without sacrificing style.",
    date: "May 15, 2023",
    author: "Emma Johnson",
    authorRole: "Founder & Creative Director",
    authorImage: "/placeholder.svg?height=400&width=400&text=Emma",
    category: "Sustainability",
    image: "/placeholder.svg?height=600&width=800&text=Sustainable+Fashion",
    content: `
      <p class="mb-4">The fashion industry is one of the largest polluters in the world, but that doesn't mean you have to give up style to be sustainable. Building an eco-friendly wardrobe is about making mindful choices that reduce your environmental impact while still expressing your personal style.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">1. Quality Over Quantity</h2>
      <p class="mb-4">Invest in well-made pieces that will last for years rather than cheaply made fast fashion that falls apart after a few wears. Look for sturdy seams, quality fabrics, and timeless designs that won't go out of style quickly.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">2. Embrace Second-Hand Shopping</h2>
      <p class="mb-4">Thrift stores, vintage shops, and online resale platforms are treasure troves of unique finds. By purchasing pre-loved items, you're extending the lifecycle of clothing and preventing it from ending up in landfills.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">3. Research Brands Before Buying</h2>
      <p class="mb-4">Support companies that prioritize ethical manufacturing, fair labor practices, and sustainable materials. Many brands now publish transparency reports and information about their supply chains.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">4. Choose Natural and Organic Fibers</h2>
      <p class="mb-4">Natural fibers like organic cotton, linen, and hemp typically have a lower environmental impact than synthetic materials like polyester, which is derived from petroleum and releases microplastics when washed.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">5. Care for Your Clothes Properly</h2>
      <p class="mb-4">Extend the life of your garments by following care instructions, washing in cold water, line-drying when possible, and repairing items instead of replacing them when they show signs of wear.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">6. Rent for Special Occasions</h2>
      <p class="mb-4">For events that require something special you'll only wear once, consider renting instead of buying. Numerous services now offer designer clothing rentals for a fraction of the purchase price.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">7. Host Clothing Swaps</h2>
      <p class="mb-4">Organize exchanges with friends or community members to refresh your wardrobe without buying new items. One person's castoff could become your new favorite piece!</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">8. Repurpose and Upcycle</h2>
      <p class="mb-4">Get creative with items you no longer wear. Old t-shirts can become cleaning rags, jeans can be cut into shorts, and fabric from unwearable garments can be used for crafts or patches.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">9. Build a Capsule Wardrobe</h2>
      <p class="mb-4">Focus on versatile pieces that can be mixed and matched to create numerous outfits. This approach reduces the total number of items you need while maximizing your styling options.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">10. Shop Your Own Closet</h2>
      <p class="mb-4">Before making new purchases, take inventory of what you already own. You might rediscover forgotten items or find new ways to style existing pieces, reducing the urge to buy more.</p>
      
      <p class="mt-8 mb-4">Remember, building a sustainable wardrobe is a journey, not an overnight transformation. Start with small changes and gradually incorporate more sustainable practices as you learn and grow. Every mindful choice makes a difference!</p>
    `,
    relatedPosts: ["thrifting-guide", "ethical-brands", "capsule-wardrobe"]
  },
  {
    id: "thrifting-guide",
    title: "The Ultimate Guide to Thrifting: Finding Hidden Gems",
    excerpt: "Learn how to spot quality pieces and navigate thrift stores like a pro with our comprehensive guide.",
    date: "June 3, 2023",
    author: "Marcus Chen",
    authorRole: "Head of Curation",
    authorImage: "/placeholder.svg?height=400&width=400&text=Marcus",
    category: "Thrifting Tips",
    image: "/placeholder.svg?height=600&width=800&text=Thrifting+Guide",
    content: "<p>Detailed content about thrifting would go here...</p>",
    relatedPosts: ["sustainable-fashion-tips", "vintage-trends-2023", "clothing-care"]
  },
  {
    id: "vintage-trends-2023",
    title: "Vintage Trends Making a Comeback in 2023",
    excerpt: "From 90s minimalism to Y2K aesthetics, these vintage styles are having a major moment this year.",
    date: "July 12, 2023",
    author: "Zoe Williams",
    authorRole: "Sustainability Officer",
    authorImage: "/placeholder.svg?height=400&width=400&text=Zoe",
    category: "Fashion Trends",
    image: "/placeholder.svg?height=600&width=800&text=Vintage+Trends",
    content: "<p>Detailed content about vintage trends would go here...</p>",
    relatedPosts: ["thrifting-guide", "ethical-brands", "capsule-wardrobe"]
  },
  {
    id: "clothing-care",
    title: "How to Make Your Clothes Last Longer: Care Tips",
    excerpt: "Extend the life of your favorite pieces with these expert care and maintenance recommendations.",
    date: "August 5, 2023",
    author: "Emma Johnson",
    authorRole: "Founder & Creative Director",
    authorImage: "/placeholder.svg?height=400&width=400&text=Emma",
    category: "Clothing Care",
    image: "/placeholder.svg?height=600&width=800&text=Clothing+Care",
    content: "<p>Detailed content about clothing care would go here...</p>",
    relatedPosts: ["sustainable-fashion-tips", "thrifting-guide", "capsule-wardrobe"]
  },
  {
    id: "ethical-brands",
    title: "5 Ethical Brands That Are Changing the Fashion Industry",
    excerpt: "Spotlight on innovative companies that prioritize sustainability, fair labor, and quality craftsmanship.",
    date: "September 20, 2023",
    author: "Marcus Chen",
    authorRole: "Head of Curation",
    authorImage: "/placeholder.svg?height=400&width=400&text=Marcus",
    category: "Ethical Fashion",
    image: "/placeholder.svg?height=600&width=800&text=Ethical+Brands",
    content: "<p>Detailed content about ethical brands would go here...</p>",
    relatedPosts: ["sustainable-fashion-tips", "thrifting-guide", "capsule-wardrobe"]
  },
  {
    id: "capsule-wardrobe",
    title: "Creating a Capsule Wardrobe with Thrifted Pieces",
    excerpt: "Build a versatile, timeless wardrobe using second-hand finds that work perfectly together.",
    date: "October 8, 2023",
    author: "Zoe Williams",
    authorRole: "Sustainability Officer",
    authorImage: "/placeholder.svg?height=400&width=400&text=Zoe",
    category: "Styling Tips",
    image: "/placeholder.svg?height=600&width=800&text=Capsule+Wardrobe",
    content: "<p>Detailed content about capsule wardrobes would go here...</p>",
    relatedPosts: ["sustainable-fashion-tips", "thrifting-guide", "ethical-brands"]
  },
]

// Function to get post by slug
function getPostBySlug(slug: string) {
  return blogPosts.find(post => post.id === slug)
}

// Function to get related posts
function getRelatedPosts(relatedIds: string[]) {
  return blogPosts.filter(post => relatedIds.includes(post.id))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
  // If post doesn't exist, return 404
  if (!post) {
    notFound()
  }
  
  const relatedPosts = getRelatedPosts(post.relatedPosts)
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] mb-8">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full flex items-end">
          <div className="container-custom pb-12">
            <div className="max-w-3xl text-white">
              <div className="flex items-center space-x-2 text-white/80 text-sm mb-3">
                <Link href={`/blog?category=${post.category}`} className="hover:text-white">
                  {post.category}
                </Link>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center mt-6">
                <div className="w-10 h-10 rounded-full overflow-hidden relative mr-3">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm text-white/70">{post.authorRole}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* Share Links */}
              <div className="mt-12 pt-6 border-t">
                <p className="font-medium mb-3">Share this article</p>
                <div className="flex space-x-4">
                  <button className="p-2 bg-muted rounded-full hover:bg-muted/80" aria-label="Share on Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </button>
                  <button className="p-2 bg-muted rounded-full hover:bg-muted/80" aria-label="Share on Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </button>
                  <button className="p-2 bg-muted rounded-full hover:bg-muted/80" aria-label="Share on LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </button>
                  <button className="p-2 bg-muted rounded-full hover:bg-muted/80" aria-label="Copy Link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-12 p-6 bg-muted rounded-lg">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden relative flex-shrink-0">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{post.author}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{post.authorRole}</p>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Related Posts */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                <div className="space-y-6">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="flex gap-4">
                      <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium line-clamp-2 mb-1">
                          <Link href={`/blog/${relatedPost.id}`} className="hover:text-[hsl(35,80%,60%)]">
                            {relatedPost.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-muted-foreground">{relatedPost.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <Link href="/blog?category=Sustainability" className="px-3 py-1 bg-muted rounded-full text-sm hover:bg-muted/80">
                    Sustainability
                  </Link>
                  <Link href="/blog?category=Thrifting+Tips" className="px-3 py-1 bg-muted rounded-full text-sm hover:bg-muted/80">
                    Thrifting Tips
                  </Link>
                  <Link href="/blog?category=Fashion+Trends" className="px-3 py-1 bg-muted rounded-full text-sm hover:bg-muted/80">
                    Fashion Trends
                  </Link>
                  <Link href="/blog?category=Clothing+Care" className="px-3 py-1 bg-muted rounded-full text-sm hover:bg-muted/80">
                    Clothing Care
                  </Link>
                  <Link href="/blog?category=Ethical+Fashion" className="px-3 py-1 bg-muted rounded-full text-sm hover:bg-muted/80">
                    Ethical Fashion
                  </Link>
                  <Link href="/blog?category=Styling+Tips" className="px-3 py-1 bg-muted rounded-full text-sm hover:bg-muted/80">
                    Styling Tips
                  </Link>
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="p-6 bg-muted rounded-lg">
                <h3 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest sustainable fashion tips and thrifting guides delivered to your inbox.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md text-sm"
                  />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* More Articles Section */}
      <section className="py-12 bg-muted">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">More Articles You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.id} className="bg-background rounded-lg overflow-hidden group">
                <Link href={`/blog/${post.id}`}>
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center space-x-2 text-muted-foreground text-xs mb-2">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-[hsl(35,80%,60%)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}