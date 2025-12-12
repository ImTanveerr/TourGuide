"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const destinations = [
  {
    id: 1,
    city: "Kyoto",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2670&auto=format&fit=crop",
    guides: "50+",
    slug: "kyoto"
  },
  {
    id: 2,
    city: "New York City",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2670&auto=format&fit=crop",
    guides: "120+",
    slug: "new-york"
  },
  {
    id: 3,
    city: "Dhaka",
    image: "https://images.unsplash.com/photo-1564034503-e7c9edcb420c?q=80&w=1074&auto=format&fit=crop",
    guides: "30+",
    slug: "dhaka"
  },
  {
    id: 4,
    city: "Barcelona",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2670&auto=format&fit=crop",
    guides: "85+",
    slug: "barcelona"
  },
];

export function TrendingDestinations() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Trending Destinations
            </h2>
            <p className="text-muted-foreground mt-2 text-lg">
              Most loved cities by our community
            </p>
          </div>
          
          {/* Desktop "View All" Link */}
          <Link 
            href="/explore" 
            className="hidden md:flex items-center text-primary font-bold hover:text-primary/80 transition-colors"
          >
            View all cities <ChevronRight className="w-5 h-5 ml-1" />
          </Link>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <Link 
              key={dest.id} 
              href={`/explore?city=${dest.slug}`}
              className="group relative h-[420px] w-full overflow-hidden rounded-3xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* 1. Background Image (with Zoom Effect) */}
              <Image
                src={dest.image}
                alt={dest.city}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              
              {/* 2. Gradient Overlay (Bottom Fade) */}
              {/* Makes text readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* 3. Badge (Top Left) */}
              {/* Matches the white pill style from your design */}
              <div className="absolute top-5 left-5 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10">
                {dest.guides} Guides Available
              </div>

              {/* 4. City Name (Bottom Left) */}
              <div className="absolute bottom-0 left-0 p-6 w-full z-10">
                <h3 className="text-2xl font-bold text-white tracking-wide drop-shadow-md group-hover:text-accent transition-colors duration-300">
                  {dest.city}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile "View All" Button (Only visible on small screens) */}
        <div className="mt-8 text-center md:hidden">
           <Link 
            href="/explore" 
            className="inline-flex items-center text-primary font-bold hover:text-primary/80"
          >
            View all cities <ChevronRight className="w-5 h-5 ml-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}