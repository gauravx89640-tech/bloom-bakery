import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="bg-[#F8A5A5] pb-0 pt-8">
      <div className="mx-auto max-w-7xl px-4">
        {/* Main Heading */}
        <div className="mb-4 text-center">
          <h1 className="font-serif text-5xl font-bold italic leading-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="block">Life&apos;s Too Short</span>
            <span className="block">For Bad Cake!</span>
          </h1>
        </div>

        {/* Shop Text and Buttons */}
        <div className="mb-8 text-center">
          <p className="mb-4 text-xs uppercase tracking-widest text-foreground/80">
            Shop at Bloom Bakery
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/order"
              className="rounded-full border-2 border-foreground bg-transparent px-6 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-[#F8A5A5]"
            >
              Order Request Form
            </Link>
            <Link
              href="/about"
              className="rounded-full border-2 border-foreground bg-transparent px-6 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-[#F8A5A5]"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Hero Images */}
        <div className="flex items-end justify-center gap-4 md:gap-6">
          <div className="relative h-48 w-32 md:h-64 md:w-44 lg:h-72 lg:w-48">
            <Image
              src="/images/cupcake-hero-1.jpg"
              alt="Colorful cupcake with sprinkles"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="relative h-56 w-36 md:h-72 md:w-48 lg:h-80 lg:w-56">
            <Image
              src="/images/cupcake-hero-2.jpg"
              alt="Vanilla cupcake with candy toppings"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="relative h-48 w-32 md:h-64 md:w-44 lg:h-72 lg:w-48">
            <Image
              src="/images/cupcake-hero-3.jpg"
              alt="Red velvet cupcake"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
