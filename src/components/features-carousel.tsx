"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Circle } from "lucide-react"

export default function FeaturesCarousel() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment
    const [api, setApi] = useState<any>()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api) return

        const handleSelect = () => {
            setCurrent(api.selectedScrollSnap())
        }

        api.on("select", handleSelect)

        return () => {
            api.off("select", handleSelect)
        }
    }, [api])

    const slides = [
        {
            heading: "Rewards Program",
            title: "A loyalty program that's actually Rewarding",
            buttonText: "Discover Rewards",
            image: "/slide3.png",
        },
        {
            heading: "Strike Options",

            title: "Predict where your investment will be in 20 mins",
            buttonText: "Start Trading",
            image: "/slide2.png",
        },
        {
            heading: "Up or Down Options",

            title: "Pinpoint opportunities in any market condition",
            buttonText: "Start Trading",
            image: "/slide1.png",
        },
    ]

    return (
        <section className="w-full py-20 bg-black flex justify-center items-center">
            <div className="flex py-10 justify-center items-center w-full h-full max-w-3xl aspect-square bg-gradient-to-r from-black via-[#382485] to-black">
                <Carousel
                    setApi={setApi}
                    className="w-full"
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {slides.map((slide, index) => (
                            <CarouselItem key={index} className="flex justify-center">
                                <Card className="w-full max-w-3xl bg-gradient-to-br from-[#1e184f] to-[#0d0a24] border-0 overflow-hidden rounded-2xl shadow-2xl">
                                    <CardContent className="p-0 relative">
                                        <div className="absolute inset-0 z-0">
                                            <div className="w-full h-full relative">
                                                <Image
                                                    src={slide.image || "/placeholder.svg"}
                                                    alt="Background"
                                                    fill
                                                    className="object-cover opacity-40"
                                                />
                                            </div>
                                        </div>

                                        <div className="relative z-10 p-8 md:p-10">
                                            <div className="flex items-center gap-2 mb-6">
                                                <span className="text-xs">
                                                    <svg width="47" height="54" viewBox="0 0 47 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3 20.5C9.83333 29.3333 33.8 35.5 33 3.50001L24.5 51.5M3 20.5L43 18M3 20.5L16.5 41.5L43 18M43 18L24.5 51.5M24.5 51.5C7.83335 31.1667 -1.9 -8.99999 38.5 7.00001" stroke="white" stroke-width="2" />
                                                        <path d="M45.5 22C45.5 33.2302 35.745 42.5 23.5 42.5C11.255 42.5 1.5 33.2302 1.5 22C1.5 10.7698 11.255 1.5 23.5 1.5C35.745 1.5 45.5 10.7698 45.5 22Z" stroke="white" stroke-width="3" />
                                                    </svg>
                                                </span>
                                                <h3 className="text-white text-sm font-medium">{slide.heading}</h3>
                                            </div>

                                            <h3 className="text-white text-2xl md:text-3xl font-bold mb-8 max-w-md">{slide.title}</h3>

                                            <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                                                {slide.buttonText}
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="flex justify-center mt-6">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className="mx-1 focus:outline-none"
                                aria-label={`Go to slide ${index + 1}`}
                            >
                                <Circle
                                    className={`w-2 h-2 ${current === index ? "fill-white text-white" : "fill-transparent text-white/40"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                </Carousel>
            </div>
        </section>
    )
}
