"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
  condition: string
  isNew?: boolean
}

export default function ProductCard({ id, name, price, image, category, condition, isNew }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
  }

  return (
    <div className="product-card group">
      <Link href={`/product/${id}`} className="block">
        <div className="product-image-container">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="product-image"
          />

          {isNew && (
            <div className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
              New Arrival
            </div>
          )}

          <button
            onClick={toggleWishlist}
            className="absolute top-2 right-2 p-2 bg-background/80 hover:bg-background rounded-full transition-colors"
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              size={18}
              className={cn(
                "transition-colors",
                isWishlisted ? "fill-accent stroke-accent" : "fill-none stroke-foreground",
              )}
            />
          </button>

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button className="w-full">Add to Cart</Button>
          </div>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium text-base line-clamp-1">{name}</h3>
            <span className="font-medium">${price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{category}</span>
            <span>{condition}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

