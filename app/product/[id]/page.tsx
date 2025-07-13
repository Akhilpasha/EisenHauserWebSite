import Image from "next/image"
import Link from "next/link"
import { Heart, Share2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductCard from "@/components/product-card"

// This would typically come from your database or API based on the ID
const product = {
  id: "1",
  name: "Vintage Denim Jacket",
  price: 45.99,
  description:
    "This classic vintage denim jacket features a relaxed fit with authentic distressing and fading. Perfect for layering over any outfit, this versatile piece adds an effortless cool to your wardrobe. The medium-wash denim has been pre-loved to perfection, giving it that coveted lived-in feel that new jackets lack.",
  details: [
    "Material: 100% Cotton Denim",
    "Era: 1990s",
    "Condition: Excellent vintage condition with natural fading",
    "Closure: Button front",
    "Pockets: Two chest pockets, two side pockets",
    "Care: Machine wash cold, hang dry",
  ],
  sizing: "Fits like a modern Medium. Model is 5'9\" and typically wears size Medium.",
  images: [
    "/placeholder.svg?height=600&width=500&text=Main",
    "/placeholder.svg?height=600&width=500&text=Back",
    "/placeholder.svg?height=600&width=500&text=Detail+1",
    "/placeholder.svg?height=600&width=500&text=Detail+2",
  ],
  category: "Outerwear",
  condition: "Excellent",
  sizes: ["S", "M", "L"],
}

// Related products
const relatedProducts = [
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
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="flex text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-foreground">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-foreground">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square relative rounded-md overflow-hidden cursor-pointer">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-medium">${product.price.toFixed(2)}</span>
              <span className="ml-2 px-2 py-1 bg-muted text-xs rounded-full">{product.condition}</span>
            </div>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            <div className="space-y-6 mb-8">
              <div>
                <label htmlFor="size-select" className="block text-sm font-medium mb-2">
                  Size
                </label>
                <Select>
                  <SelectTrigger id="size-select" className="w-full">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1" size="lg">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="mr-2 h-5 w-5" />
                  Add to Wishlist
                </Button>
              </div>

              <Button variant="ghost" size="sm" className="w-full sm:w-auto">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>

            <Tabs defaultValue="details">
              <TabsList className="w-full">
                <TabsTrigger value="details" className="flex-1">
                  Details
                </TabsTrigger>
                <TabsTrigger value="sizing" className="flex-1">
                  Sizing
                </TabsTrigger>
                <TabsTrigger value="shipping" className="flex-1">
                  Shipping
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="pt-4">
                <ul className="space-y-2 text-sm">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="sizing" className="pt-4">
                <p className="text-sm">{product.sizing}</p>
              </TabsContent>
              <TabsContent value="shipping" className="pt-4">
                <p className="text-sm">
                  Free shipping on orders over $50. Orders typically ship within 1-2 business days. Returns accepted
                  within 14 days of delivery.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

