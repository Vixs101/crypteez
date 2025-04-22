import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="w-full py-8 bg-[#0a0521] text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center">
                    <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
                        <Image src="/logo.png" alt="logo" height={200} width={200} />
                    </Link>

                    <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Crypteez. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
