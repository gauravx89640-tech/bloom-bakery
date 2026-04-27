import Image from "next/image"

const testimonials = [
  {
    quote:
      "I might be addicted to Bloom Bakery's Oreo Brownies. Or maybe the Carrot cake Cupcakes. Seems no matter what treat I go to get for me and my family, I can't resist adding them to my order! No one complains when I bring home more Bloom Bakery's goodies than I said I was getting!",
    author: "Susan",
  },
  {
    quote:
      "We cannot thank you enough for providing delicious desserts for our wedding guests! Another huge thank you for creating our dream cake that we will remember forever! Every detail matters on this big day & we love that you were apart of it!",
    author: "Hailey",
  },
  {
    quote:
      "My daughter and I stopped in to try the cupcakes along with a few other treats, and wow - these are the best carrot cake cupcakes we've ever had! Everything was absolutely delicious. Bloom Bakery is by far the best bakery in our area. We can't wait to come back and try more!",
    author: "Mary",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-card py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <h2 className="mb-12 text-center font-serif text-4xl font-bold text-foreground md:text-5xl">
          What People
          <br />
          Love About Us
        </h2>

        {/* Testimonials Grid - Masonry Style */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div className="rounded-lg bg-muted p-6">
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {testimonials[0].quote}
              </p>
              <p className="font-medium text-foreground">
                {testimonials[0].author}
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#FBCACA]">
              <Image
                src="/images/bakery-display-1.jpg"
                alt="Bakery lifestyle"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#FBCACA]">
              <Image
                src="/images/bakery-display-2.jpg"
                alt="Bakery treats"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-lg bg-muted p-6">
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {testimonials[1].quote}
              </p>
              <p className="font-medium text-foreground">
                {testimonials[1].author}
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <div className="rounded-lg bg-muted p-6">
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {testimonials[2].quote}
              </p>
              <p className="font-medium text-foreground">
                {testimonials[2].author}
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#FBCACA]">
              <Image
                src="/images/bakery-display-3.jpg"
                alt="Bakery atmosphere"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
