"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/location", label: "Location" },
  { href: "/offerings", label: "Offerings" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#F8A5A5] py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4">
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-12 md:flex">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Logo */}
          <Link href="/" className="mx-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-6 w-6 text-foreground"
              >
                <path d="M12 2C13.5 2 15 3.5 15 5.5C15 7 14 8 13 8.5V10H11V8.5C10 8 9 7 9 5.5C9 3.5 10.5 2 12 2Z" />
                <path d="M8 10H16V12C16 14 14.5 16 12 16C9.5 16 8 14 8 12V10Z" />
                <path d="M10 16V20M14 16V20" />
                <path d="M8 20H16" />
              </svg>
            </div>
          </Link>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex w-full items-center justify-between md:hidden">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5 text-foreground"
              >
                <path d="M12 2C13.5 2 15 3.5 15 5.5C15 7 14 8 13 8.5V10H11V8.5C10 8 9 7 9 5.5C9 3.5 10.5 2 12 2Z" />
                <path d="M8 10H16V12C16 14 14.5 16 12 16C9.5 16 8 14 8 12V10Z" />
                <path d="M10 16V20M14 16V20" />
                <path d="M8 20H16" />
              </svg>
            </div>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-foreground/10 bg-[#F8A5A5] md:hidden">
          <div className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
