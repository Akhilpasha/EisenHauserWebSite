import { Suspense } from "react"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// This would typically come from your database or API
const products = [
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
  {
    id: "5",
    name: "Oversized Knit Sweater",
    price: 38.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Tops",
    condition: "Good",
  },
  {
    id: "6",
    name: "Leather Crossbody Bag",
    price: 42.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
    condition: "Like New",
  },
  {
    id: "7",
    name: "Pleated Midi Skirt",
    price: 27.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Bottoms",
    condition: "Excellent",
  },
  {
    id: "8",
    name: "Vintage Graphic Tee",
    price: 19.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Tops",
    condition: "Good",
    isNew: true,
  },
  {
    id: "9",
    name: "Corduroy Button-Up Shirt",
    price: 32.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Tops",
    condition: "Excellent",
  },
]

export default function ShopPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Shop All</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Category</h3>
                <div className="space-y-2">
                  {["All", "Tops", "Bottoms", "Dresses", "Outerwear", "Accessories"].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={`category-${category.toLowerCase()}`} />
                      <label
                        htmlFor={`category-${category.toLowerCase()}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Size</h3>
                <div className="space-y-2">
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <Checkbox id={`size-${size.toLowerCase()}`} />
                      <label
                        htmlFor={`size-${size.toLowerCase()}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Condition</h3>
                <div className="space-y-2">
                  {["Like New", "Excellent", "Good", "Fair"].map((condition) => (
                    <div key={condition} className="flex items-center space-x-2">
                      <Checkbox id={`condition-${condition.toLowerCase().replace(" ", "-")}`} />
                      <label
                        htmlFor={`condition-${condition.toLowerCase().replace(" ", "-")}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {condition}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Price Range</h3>
                <Slider defaultValue={[0, 100]} max={100} step={1} />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-muted-foreground">$0</span>
                  <span className="text-sm text-muted-foreground">$100+</span>
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">Showing {products.length} products</p>

              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Suspense fallback={<div>Loading products...</div>}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </Suspense>

            <div className="flex justify-center mt-12">
              <Button variant="outline">Load More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

