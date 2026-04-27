import Link from "next/link"
import { Cake } from "lucide-react"

export function OrderOnlineSection() {
  return (
    <section className="bg-[#FBCACA] py-16">
      <div className="mx-auto max-w-2xl px-4 text-center">
        {/* Icon */}
        <div className="mb-4 flex justify-center">
          <Cake className="h-8 w-8 text-foreground" />
        </div>

        {/* Heading */}
        <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Order Online
        </h2>
        <p className="mb-6 text-muted-foreground">
          Get your favorites delivered fast.
        </p>

        {/* DoorDash Button */}
        <Link
          href="https://doordash.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-[#FF3008] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#E02B07]"
        >
          <svg
            className="mr-2 h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23.071 8.409a6.09 6.09 0 00-5.396-3.228H.584A.589.589 0 00.17 6.184L3.894 9.93a1.752 1.752 0 001.242.516h12.049a1.554 1.554 0 11.031 3.108H8.91a.589.589 0 00-.415 1.003l3.725 3.747a1.75 1.75 0 001.242.516h3.757c4.887 0 8.584-5.225 5.852-10.411z" />
          </svg>
          Order on DoorDash
        </Link>
      </div>
    </section>
  )
}
