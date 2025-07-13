"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trash2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample cart items
const initialCartItems = [
  {
    id: "1",
    name: "Vintage Denim Jacket",
    price: 45.99,
    image: "/placeholder.svg?height=400&width=300",
    size: "M",
    quantity: 1,
  },
  {
    id: "3",
    name: "Classic White Tee",
    price: 15.99,
    image: "/placeholder.svg?height=400&width=300",
    size: "L",
    quantity: 2,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")
  const [promoApplied, setPromoApplied] = useState(false)

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "thrift10") {
      setPromoApplied(true)
    }
  }

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const discount = promoApplied ? subtotal * 0.1 : 0
  const shipping = subtotal > 50 ? 0 : 5.99
  const total = subtotal - discount + shipping

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="border rounded-lg overflow-hidden">
                <div className="hidden sm:grid grid-cols-12 gap-4 p-4 bg-muted text-sm font-medium">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Total</div>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 border-t first:border-t-0 items-center"
                  >
                    {/* Product */}
                    <div className="col-span-6 flex items-center gap-4">
                      <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h3 className="font-medium">
                          <Link href={`/product/${item.id}`} className="hover:text-accent">
                            {item.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-sm text-muted-foreground hover:text-destructive flex items-center mt-1 sm:hidden"
                        >
                          <Trash2 className="h-3 w-3 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-2 text-center">
                      <div className="sm:hidden text-sm text-muted-foreground mb-1">Price:</div>${item.price.toFixed(2)}
                    </div>

                    {/* Quantity */}
                    <div className="col-span-2 flex justify-center">
                      <div className="sm:hidden text-sm text-muted-foreground mb-1">Quantity:</div>
                      <Select
                        value={item.quantity.toString()}
                        onValueChange={(value) => updateQuantity(item.id, Number.parseInt(value))}
                      >
                        <SelectTrigger className="w-16">
                          <SelectValue placeholder="1" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Total */}
                    <div className="col-span-2 text-center font-medium">
                      <div className="sm:hidden text-sm text-muted-foreground mb-1">Total:</div>$
                      {(item.price * item.quantity).toFixed(2)}
                    </div>

                    {/* Remove Button (Desktop) */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="hidden sm:flex items-center justify-center text-muted-foreground hover:text-destructive"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                  <Link href="/shop">Continue Shopping</Link>
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-muted p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  {promoApplied && (
                    <div className="flex justify-between text-accent">
                      <span>Discount (10%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>

                  <div className="border-t pt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <label htmlFor="promo-code" className="block text-sm font-medium mb-2">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <Input
                      id="promo-code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={promoApplied}
                    />
                    <Button onClick={applyPromoCode} disabled={promoApplied || !promoCode} variant="outline">
                      Apply
                    </Button>
                  </div>
                  {promoApplied && <p className="text-xs text-accent mt-1">Promo code applied successfully!</p>}
                </div>

                <Button className="w-full" size="lg" asChild>
                  <Link href="/checkout">
                    Checkout <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Button asChild>
              <Link href="/shop">Start Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

