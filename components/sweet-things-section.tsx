import Image from "next/image"
import Link from "next/link"

const products = [
  {
    name: "Cupcakes",
    image: "/images/cupcakes-product.jpg",
    href: "/cupcakes",
  },
  {
    name: "Desserts",
    image: "/images/desserts-product.jpg",
    href: "/desserts",
  },
  {
    name: "Custom Cakes",
    image: "/images/custom-cakes-product.jpg",
    href: "/custom-cakes",
  },
  {
    name: "Wedding Cakes",
    image: "/images/wedding-cakes-product.jpg",
    href: "/wedding-cakes",
  },
]

export function SweetThingsSection() {
  return (
    <section className="bg-card py-16">
      <div className="mx-auto max-w-5xl px-4">
        {/* Section Header */}
        <h2 className="mb-12 text-center font-serif text-4xl font-bold italic text-foreground md:text-5xl">
          Sweet Things
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group flex flex-col items-center"
            >
              <div className="relative mb-4 aspect-square w-full max-w-[180px] overflow-hidden rounded-full bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-center font-serif text-lg font-medium text-[#D64545] md:text-xl">
                {product.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
