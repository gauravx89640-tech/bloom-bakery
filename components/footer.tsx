"use client"

import Link from "next/link"
import { Heart, Leaf, Cake, Calendar, Sparkles, Users, Instagram, ArrowUp } from "lucide-react"

const tickerItems = [
  { icon: Users, text: "Family Owned" },
  { icon: Cake, text: "Small Batch" },
  { icon: Leaf, text: "Many Vegan Options" },
  { icon: Sparkles, text: "Daily Treats" },
  { icon: Calendar, text: "Rotating Seasonal Menu" },
  { icon: Cake, text: "Custom Cakes" },
  { icon: Heart, text: "Weddings & Events" },
]

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Location", href: "/location" },
  { label: "Offerings", href: "/offerings" },
]

const offeringsLinks = [
  { label: "Cupcakes", href: "/cupcakes" },
  { label: "Desserts", href: "/desserts" },
  { label: "Custom Cakes", href: "/custom-cakes" },
  { label: "Wedding Cakes", href: "/wedding-cakes" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Footer Ticker */}
      <div className="overflow-hidden border-b border-white/10 py-3">
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {tickerItems.map((item, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center gap-2 text-white/80"
            >
              <item.icon className="h-4 w-4" />
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo & Contact */}
          <div>
            <div className="mb-4">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6"
                >
                  <path d="M12 2C13.5 2 15 3.5 15 5.5C15 7 14 8 13 8.5V10H11V8.5C10 8 9 7 9 5.5C9 3.5 10.5 2 12 2Z" />
                  <path d="M8 10H16V12C16 14 14.5 16 12 16C9.5 16 8 14 8 12V10Z" />
                  <path d="M10 16V20M14 16V20" />
                  <path d="M8 20H16" />
                </svg>
              </div>
              <p className="font-serif text-lg italic text-white/80">
                Life&apos;s Too Short
                <br />
                For Bad Cake
              </p>
            </div>
            <div className="space-y-1 text-sm text-white/60">
              <p>+1 (555) 123-4567</p>
              <p>hello@bloombakery.com</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-white/40">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offerings */}
          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-white/40">
              Offerings
            </h3>
            <ul className="space-y-2">
              {offeringsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Back to Top */}
          <div className="flex flex-col items-end justify-between">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 transition-colors hover:text-white"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Large Footer Text */}
      <div className="border-t border-white/10 py-8">
        <h2 className="text-center font-serif text-4xl font-bold tracking-wide text-white/20 md:text-6xl lg:text-8xl">
          Bloom Bakery
        </h2>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-4 text-center">
        <p className="text-xs text-white/40">
          2024 Bloom Bakery
        </p>
        <p className="mt-2 text-xs text-white/30">
          designed by forge studio
        </p>
      </div>
    </footer>
  )
}
