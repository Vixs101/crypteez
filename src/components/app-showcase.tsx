import Image from "next/image"

export default function AppShowcase() {
    return (
        <section className="w-full bg-black flex justify-center items-center">
            <div className="flex justify-center items-center w-full h-full bg-[radial-gradient(circle,#382485_0%,transparent_50%)]">
                <Image
                    src="/phone.png"
                    alt="App Showcase"
                    width={500}
                    height={300}
                />
            </div>

        </section>
    )
}
