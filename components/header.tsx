"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingBag, Heart, Search, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo and Company Name */}
        <Link href="/" className="flex items-center space-x-2 text-2xl font-playfair font-bold">
          <span>Eisenhauser Thrifts</span>
          <img
            src="/log_eisen.png" // Replace this with your actual logo path
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className={cn(
              "text-sm font-medium transition-colors relative",
              pathname === "/" 
                ? "text-[hsl(35,80%,60%)] font-semibold after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:bg-[hsl(35,80%,60%)]" 
                : "hover:text-accent"
            )}
          >
            Home
          </Link>
          <Link 
            href="/shop" 
            className={cn(
              "text-sm font-medium transition-colors relative",
              pathname === "/shop" || pathname.startsWith("/shop/") 
                ? "text-[hsl(35,80%,60%)] font-semibold after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:bg-[hsl(35,80%,60%)]" 
                : "hover:text-accent"
            )}
          >
            Shop
          </Link>
          <Link 
            href="/about" 
            className={cn(
              "text-sm font-medium transition-colors relative",
              pathname === "/about" 
                ? "text-[hsl(35,80%,60%)] font-semibold after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:bg-[hsl(35,80%,60%)]" 
                : "hover:text-accent"
            )}
          >
            About
          </Link>
          <Link 
            href="/blog" 
            className={cn(
              "text-sm font-medium transition-colors relative",
              pathname === "/blog" || pathname.startsWith("/blog/") 
                ? "text-[hsl(35,80%,60%)] font-semibold after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:bg-[hsl(35,80%,60%)]" 
                : "hover:text-accent"
            )}
          >
            Blog
          </Link>
          <Link 
            href="/contact" 
            className={cn(
              "text-sm font-medium transition-colors relative",
              pathname === "/contact" 
                ? "text-[hsl(35,80%,60%)] font-semibold after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:bg-[hsl(35,80%,60%)]" 
                : "hover:text-accent"
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <Link href="/wishlist" className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="Wishlist">
            <Heart size={20} />
          </Link>
          <Link href="/cart" className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="Cart">
            <ShoppingBag size={20} />
          </Link>
          <Link href="/account" className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="Account">
            <User size={20} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link href="/cart" className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="Cart">
            <ShoppingBag size={20} />
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 overflow-hidden",
          isSearchOpen ? "max-h-20 py-4 opacity-100" : "max-h-0 py-0 opacity-0",
        )}
      >
        <div className="container-custom">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input type="search" placeholder="Search for products..." className="pl-10 w-full" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="container-custom pt-20 pb-6">
          <nav className="flex flex-col space-y-6">
            <Link
              href="/"
              className={cn(
                "text-lg font-medium transition-colors relative",
                pathname === "/" 
                  ? "text-[hsl(35,80%,60%)] font-semibold" 
                  : "hover:text-accent"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
              {pathname === "/" && <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[hsl(35,80%,60%)]"></span>}
            </Link>
            <Link
              href="/shop"
              className={cn(
                "text-lg font-medium transition-colors relative",
                pathname === "/shop" || pathname.startsWith("/shop/") 
                  ? "text-[hsl(35,80%,60%)] font-semibold" 
                  : "hover:text-accent"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
              {(pathname === "/shop" || pathname.startsWith("/shop/")) && 
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[hsl(35,80%,60%)]"></span>}
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-lg font-medium transition-colors relative",
                pathname === "/about" 
                  ? "text-[hsl(35,80%,60%)] font-semibold" 
                  : "hover:text-accent"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              About
              {pathname === "/about" && <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[hsl(35,80%,60%)]"></span>}
            </Link>
            <Link
              href="/blog"
              className={cn(
                "text-lg font-medium transition-colors relative",
                pathname === "/blog" || pathname.startsWith("/blog/") 
                  ? "text-[hsl(35,80%,60%)] font-semibold" 
                  : "hover:text-accent"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
              {(pathname === "/blog" || pathname.startsWith("/blog/")) && 
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[hsl(35,80%,60%)]"></span>}
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-lg font-medium transition-colors relative",
                pathname === "/contact" 
                  ? "text-[hsl(35,80%,60%)] font-semibold" 
                  : "hover:text-accent"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
              {pathname === "/contact" && <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[hsl(35,80%,60%)]"></span>}
            </Link>
            <div className="pt-6 border-t border-border">
              <div className="flex space-x-4">
                <Link
                  href="/wishlist"
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Wishlist"
                >
                  <Heart size={20} />
                </Link>
                <Link
                  href="/account"
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Account"
                >
                  <User size={20} />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

