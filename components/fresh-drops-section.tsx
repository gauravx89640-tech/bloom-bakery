import Image from "next/image"
import { Leaf, Cake, Users, Heart } from "lucide-react"

const features = [
  { icon: Leaf, text: "Vegan Friendly Options" },
  { icon: Cake, text: "Custom Made Cakes" },
  { icon: Users, text: "Community Focused" },
  { icon: Heart, text: "Family Run" },
]

export function FreshDropsSection() {
  return (
    <section className="bg-card py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="mb-6 font-serif text-4xl font-bold italic leading-tight text-[#D64545] md:text-5xl">
              Fresh Drops.
              <br />
              Sweet Bites.
              <br />
              Local Love.
            </h2>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              At Bloom Bakery, love goes into every batch and every interaction
              — you can taste it in every bite. We&apos;re all about creating an
              experience, with a crave-worthy menu of rotating flavors that
              keeps you coming back for more.
            </p>

            {/* Feature Icons - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.text} className="flex flex-col items-center text-center">
                  <div className="mb-2 rounded-full border border-[#D64545] p-3">
                    <feature.icon className="h-5 w-5 text-[#D64545]" />
                  </div>
                  <span className="text-sm font-medium text-[#D64545]">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/images/bakery-display-1.jpg"
                alt="Bakery interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/bakery-display-2.jpg"
                  alt="Cupcake decorating"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/bakery-display-3.jpg"
                  alt="Cupcake display"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
