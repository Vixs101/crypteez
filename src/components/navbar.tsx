import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="w-full py-4 px-6 bg-[#1a1147] bg-opacity-90 text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
        <Image src="/logo.png" alt="logo" height={200} width={200} />
      </Link>
        <Button variant={"outline"} className="bg-white text-[#1a1147] hover:bg-gray-100">Get Started</Button>
      </div>
    </header>
  )
}
