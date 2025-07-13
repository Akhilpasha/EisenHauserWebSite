"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

// Mock wishlist data
const mockWishlistItems = [
  {
    id: "1",
    name: "Vintage Denim Jacket",
    price: 45.99,
    image: "/placeholder.svg",
    category: "Outerwear",
    condition: "Excellent",
  },
  {
    id: "2",
    name: "Floral Summer Dress",
    price: 29.99,
    image: "/placeholder.svg",
    category: "Dresses",
    condition: "Like New",
  },
  {
    id: "3",
    name: "Classic White Tee",
    price: 15.99,
    image: "/placeholder.svg",
    category: "Tops",
    condition: "Good",
  },
]

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(mockWishlistItems)
  const { toast } = useToast()

  const removeFromWishlist = (itemId: string) => {
    setWishlistItems((items) => items.filter((item) => item.id !== itemId))
    toast({
      title: "Item Removed",
      description: "Item has been removed from your wishlist",
    })
  }

  const moveToCart = (itemId: string) => {
    // In a real app, this would add to cart and remove from wishlist
    toast({
      title: "Added to Cart",
      description: "Item has been moved to your cart",
    })
    removeFromWishlist(itemId)
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-xl font-medium mb-4">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-8">
              Start exploring our collection to find items you love!
            </p>
            <Link href="/shop">
              <Button>Browse Shop</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="group relative">
                <div className="aspect-[4/5] relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <Link href={`/product/${item.id}`}>
                      <h3 className="font-medium hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <span className="font-medium">${item.price.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{item.category}</span>
                    <span>{item.condition}</span>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button
                      onClick={() => moveToCart(item.id)}
                      className="flex-1"
                      variant="default"
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Move to Cart
                    </Button>
                    <Button
                      onClick={() => removeFromWishlist(item.id)}
                      variant="outline"
                      size="icon"
                      className="shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}