"use client"

import { Heart, Leaf, Cake, Calendar, Sparkles, Users } from "lucide-react"

const tickerItems = [
  { icon: Users, text: "Family Owned" },
  { icon: Cake, text: "Small Batch" },
  { icon: Leaf, text: "Many Vegan Options" },
  { icon: Sparkles, text: "Daily Treats" },
  { icon: Calendar, text: "Rotating Seasonal Menu" },
  { icon: Cake, text: "Custom Cakes" },
  { icon: Heart, text: "Weddings & Events" },
]

export function MarqueeTicker() {
  return (
    <div className="overflow-hidden bg-[#FBCACA] py-3">
      <div className="flex animate-marquee items-center gap-8">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center gap-2 text-foreground"
          >
            <item.icon className="h-4 w-4" />
            <span className="text-sm font-medium">{item.text}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
