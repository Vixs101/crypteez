import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AppShowcase from "@/components/app-showcase"
import FeaturesCarousel from "@/components/features-carousel"
import CryptoPrices from "@/components/crypto-prices"
import FeaturesGrid from "@/components/features-grid"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AppShowcase />
      <FeaturesCarousel />
      <CryptoPrices />
      <FeaturesGrid />
      <Footer />
    </main>
  )
}
