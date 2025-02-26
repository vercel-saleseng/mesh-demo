import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20(2)-XShQxsya6pRskKl6A0tKWmNpR02dYF.png"
            alt="Mesh Connect"
            width={120}
            height={40}
            className="w-32"
          />
          <div className="hidden md:flex items-center gap-8 text-gray-300">
            <a href="#" className="hover:text-white transition-colors">
              Products
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Use Cases
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Resources
            </a>
            <a href="#" className="hover:text-white transition-colors">
              About us
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Pricing
            </a>
          </div>
        </div>
        <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">
          Log in
        </Button>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">Crypto connectivity reimagined</h1>
            <p className="text-lg text-gray-300 max-w-xl">
              Mesh securely enables safer and easier crypto deposits, payments, and on-ramping from 300+ leading
              exchanges and wallets, all without leaving your platform.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md">
              Contact Sales
            </Button>
          </div>

          <div className="relative">
            <div className="bg-[#1A1A1A] rounded-2xl p-4 shadow-2xl">
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-600" />
                    <span>Coinbase</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-600" />
                    <span>Pistachio</span>
                  </div>
                </div>
                <h3 className="font-semibold mb-4">Transfer preview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Network</span>
                    <span className="font-medium">Ethereum</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Funding with</span>
                    <span className="font-medium">ETH balance + 2 others</span>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-gray-600 text-sm">Total</span>
                      <div className="text-right">
                        <div className="font-semibold">0.027434 ETH ~ $100.00</div>
                        <div className="text-xs text-gray-500">All fees included</div>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-black/90">Proceed</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Lines */}
        <div className="absolute bottom-0 left-0 right-0 h-1">
          <div className="h-px bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0" />
          <div className="h-px mt-1 bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0" />
          <div className="h-px mt-1 bg-gradient-to-r from-blue-700/0 via-blue-700 to-blue-700/0" />
        </div>
      </div>

      {/* Trust Section */}
      <div className="text-center py-16 px-6">
        <h2 className="text-white text-lg mb-8">TRUSTED BY 100+ OF THE WORLD'S LEADING COMPANIES</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto opacity-75">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v0_by_Vercel_logo-zMkp24Od1xIMHZBLsHczUuKjNYVG8Y.png"
            alt="v0"
            width={100}
            height={40}
            className="h-8 w-auto invert"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v0_by_Vercel_logo-zMkp24Od1xIMHZBLsHczUuKjNYVG8Y.png"
            alt="v0"
            width={100}
            height={40}
            className="h-8 w-auto invert"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v0_by_Vercel_logo-zMkp24Od1xIMHZBLsHczUuKjNYVG8Y.png"
            alt="v0"
            width={100}
            height={40}
            className="h-8 w-auto invert"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v0_by_Vercel_logo-zMkp24Od1xIMHZBLsHczUuKjNYVG8Y.png"
            alt="v0"
            width={100}
            height={40}
            className="h-8 w-auto invert"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v0_by_Vercel_logo-zMkp24Od1xIMHZBLsHczUuKjNYVG8Y.png"
            alt="v0"
            width={100}
            height={40}
            className="h-8 w-auto invert"
          />
        </div>
      </div>
      {/* Pricing Section */}
      <div className="bg-[#1A1A1A] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Simple, transparent pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$99",
                description: "Perfect for small businesses and startups",
                features: ["Up to 1,000 transactions/month", "24/7 support", "Basic analytics", "API access"],
              },
              {
                name: "Pro",
                price: "$299",
                description: "Ideal for growing businesses",
                features: [
                  "Up to 10,000 transactions/month",
                  "Priority 24/7 support",
                  "Advanced analytics",
                  "Customizable API",
                  "Dedicated account manager",
                ],
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large-scale operations",
                features: [
                  "Unlimited transactions",
                  "White-glove support",
                  "Custom analytics",
                  "Fully customizable solution",
                  "On-premise deployment option",
                ],
              },
            ].map((tier) => (
              <div key={tier.name} className="bg-[#222222] rounded-lg p-8 flex flex-col">
                <h3 className="text-2xl font-semibold text-white mb-4">{tier.name}</h3>
                <div className="text-4xl font-bold text-white mb-4">{tier.price}</div>
                <p className="text-gray-400 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

