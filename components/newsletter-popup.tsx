"use client"

import { useState, useEffect } from "react"
import type { FormEvent, ChangeEvent } from "react"
import { X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [closeTimer, setCloseTimer] = useState<number | null>(null)

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup")

    if (!hasSeenPopup) {
      const timer = window.setTimeout(() => {
        setIsOpen(true)
      }, 10000)

      return () => window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (closeTimer) {
        window.clearTimeout(closeTimer)
      }
    }
  }, [closeTimer])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("hasSeenPopup", "true")
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Submitted email:", email)
    setHasSubmitted(true)

    const timer = window.setTimeout(() => {
      setIsOpen(false)
      localStorage.setItem("hasSeenPopup", "true")
    }, 2000)

    setCloseTimer(timer)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-lg max-w-md w-full relative overflow-hidden">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 p-2 hover:bg-muted rounded-full transition-colors"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        <div className="p-6">
          <div className={cn(
            "transition-all duration-300 transform",
            hasSubmitted ? "opacity-0 scale-95 absolute pointer-events-none" : "opacity-100 scale-100"
          )}>
            <h3 className="text-xl font-playfair font-bold mb-2">Join Our Community</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for exclusive deals, styling tips, and first access to new arrivals.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
                className="w-full"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>

          <div
            className={cn(
              "text-center transition-all duration-300 transform",
              hasSubmitted ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            )}
          >
            <h3 className="text-xl font-playfair font-bold mb-2">Thank You!</h3>
            <p className="text-sm text-muted-foreground">
              You've been added to our mailing list. Get ready for sustainable style inspiration!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

