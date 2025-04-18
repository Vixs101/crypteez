import { Button } from "@/components/ui/button"
import { LineChart } from "lucide-react"

export default function CryptoPrices() {
  const cryptoData = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "$42,728.54",
      change: "+2.21%",
      marketCap: "$838,300,907,585.17",
      trending: "up",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "$2,728.54",
      change: "+1.74%",
      marketCap: "$328,900,907,585.17",
      trending: "up",
    },
    {
      name: "Cardano",
      symbol: "ADA",
      price: "$0.72854",
      change: "-3.55%",
      marketCap: "$25,300,907,585.17",
      trending: "down",
    },
    {
      name: "Polkadot",
      symbol: "DOT",
      price: "$6.7909",
      change: "-3.55%",
      marketCap: "$8,307,585.17",
      trending: "down",
    },
  ]

  return (
    <section className="w-full py-20 bg-black text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Buy Bitcoin, ETH, Polygon &<br />
            250+ Cryptocurrencies
          </h2>

          <Button variant="outline" className="rounded-full px-8 py-2 border-2 border-white bg-[#1a1147]/90 h-auto text-lg">
            <LineChart className="w-4 h-4 mr-2" />
            Check Prices
          </Button>
        </div>

        <div className="space-y-4">
          {cryptoData.map((crypto, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-white/10">
              <div className="w-24 md:w-32 font-medium">{crypto.name}</div>

              <div className="w-28 md:w-32 text-right">{crypto.price}</div>

              <div className={`w-20 text-right ${crypto.trending === "up" ? "text-green-500" : "text-red-500"}`}>
                {crypto.change}
              </div>

              <div className="hidden md:block w-48 text-white/60 text-xs text-right">{crypto.marketCap}</div>

              <div className="w-16 flex justify-center">
                {crypto.trending === "up" ? (
                  <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 15L10 8L20 12L30 5L40 10L50 3L59 7" stroke="#22C55E" strokeWidth="2" />
                  </svg>
                ) : (
                  <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L10 12L20 8L30 15L40 10L50 17L59 13" stroke="#EF4444" strokeWidth="2" />
                  </svg>
                )}
              </div>

              <div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-full px-4"
                >
                  Trade
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
