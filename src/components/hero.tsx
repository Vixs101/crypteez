import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center text-white text-center py-20 h-screen">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/herobg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Empower Your Future
          <br />
          with Crypteez&apos;s Trading
          <br />
          Platform
        </h1>

        <p className="text-xl mb-8">Buy 250+ Cryptocurrencies in the comfort of your own phone</p>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-teal-400" />
            <span>Zero-fee via ACH and Apple Pay</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-teal-400" />
            <span>CFTC-regulated options</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-teal-400" />
            <span>Trusted by over 20 Million Users</span>
          </div>
        </div>

        <Button className="rounded-full px-8 py-3 border-2 border-white bg-[#1a1147]/90 h-auto text-lg">
          Download the APP
        </Button>
      </div>
    </section>
  )
}
