"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
// import { Search, ChevronDown } from "lucide-react"; // Keep if you add search later

export function HeroSection() {

    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [interest, setInterest] = useState("");

    return (
        <section className="relative w-full flex flex-col items-center">

            <div className="relative w-full h-[85vh] min-h-[600px] flex items-center">

                {/* Background Image & Darker Overlay */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/images/herobackground.png"
                        alt="Beautiful travel destination"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* A slightly darker, more uniform overlay makes white text pop */}
                    <div className="absolute inset-0 bg-black/50" />
                    {/* Reduced height from h-32 to h-24 */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
                </div>


                {/* Text Content */}
                {/* Changed alignment: Centered on mobile, Left-aligned on medium screens+ */}
                <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center md:items-start text-center md:text-left">

                    {/* Eyebrow Text (Optional small text above title) */}
                    <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-4">
                        Discover the world
                    </p>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-none tracking-tight drop-shadow-lg max-w-4xl">
                        Don't just visit. <br className="hidden md:block" />
                        {/* Accent color only on the key phrase */}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                            Live it.
                        </span>
                    </h1>

                    <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-xl font-medium leading-relaxed drop-shadow-md">
                        Connect with local experts for unforgettable, off-the-beaten-path experiences.
                    </p>

                    {/* Placeholder for where your search bar or CTA button would go */}
                    <div className="mt-10">
                        <Link
                            href="/explore"
                            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-amber-500/30"
                        >
                            Start Exploring
                        </Link>
                    </div>

                </div>

            </div>

        </section>
    );
}