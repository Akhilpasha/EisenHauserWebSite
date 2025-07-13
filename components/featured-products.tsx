import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

// This would typically come from your database or API
const featuredProducts = [
  {
    id: "1",
    name: "Vintage Denim Jacket",
    price: 45.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Outerwear",
    condition: "Excellent",
    isNew: true,
  },
  {
    id: "2",
    name: "Floral Summer Dress",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Dresses",
    condition: "Like New",
  },
  {
    id: "3",
    name: "Classic White Tee",
    price: 15.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Tops",
    condition: "Good",
  },
  {
    id: "4",
    name: "High-Waisted Jeans",
    price: 34.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Bottoms",
    condition: "Excellent",
    isNew: true,
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Finds</h2>
          <p className="text-muted-foreground max-w-2xl">
            Discover our hand-picked selection of unique, pre-loved pieces that are trending this season.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link href="/shop">Explore the Collection</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

