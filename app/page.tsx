import { AnnouncementBar } from "@/components/announcement-bar"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MarqueeTicker } from "@/components/marquee-ticker"
import { SweetThingsSection } from "@/components/sweet-things-section"
import { FreshDropsSection } from "@/components/fresh-drops-section"
import { OrderOnlineSection } from "@/components/order-online-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navigation />
      <HeroSection />
      <MarqueeTicker />
      <SweetThingsSection />
      <FreshDropsSection />
      <OrderOnlineSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
