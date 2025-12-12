"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const guides = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Rome, Italy",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop",
    rating: 4.9,
    reviews: 124,
    bio: "Art historian and pizza lover. I'll show you the Rome tourists never see.",
  },
  {
    id: 2,
    name: "Kenji T.",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop",
    rating: 5.0,
    reviews: 89,
    bio: "Street photographer and night owl. Let's explore Shinjuku's hidden alleys.",
  },
  {
    id: 3,
    name: "Elena R.",
    location: "Mexico City",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
    rating: 4.8,
    reviews: 210,
    bio: "Culinary expert. Come hungry, because we are eating our way through CDMX.",
  },
  
];

export function TopGuides() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        
        {/* --- Header --- */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Super Guides
          </h2>
          <p className="text-muted-foreground text-lg">
            Passionate locals ready to share their city's secrets, history, and culture with you.
          </p>
        </div>

        {/* --- Carousel / Grid --- */}
        <div className="relative">
          
          {/* Navigation Arrows (Visual only for this layout) */}
          {/* <div className="hidden lg:block absolute top-1/2 -left-12 -translate-y-1/2">
            <button className="p-3 rounded-full bg-white dark:bg-card shadow-lg text-foreground hover:text-primary transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden lg:block absolute top-1/2 -right-12 -translate-y-1/2">
            <button className="p-3 rounded-full bg-white dark:bg-card shadow-lg text-foreground hover:text-primary transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div> */}

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <div 
                key={guide.id} 
                className="group bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
              >
                {/* Image Section */}
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={guide.image}
                    alt={guide.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Heart/Wishlist Button */}
                  <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Name and Rating Row */}
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {guide.name}
                      </h3>
                      <div className="flex items-center text-muted-foreground text-sm mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {guide.location}
                      </div>
                    </div>
                    
                    {/* Rating Badge */}
                    <div className="flex items-center bg-secondary px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 text-orange-400 fill-orange-400 mr-1" />
                      <span className="font-bold text-foreground text-sm">
                        {guide.rating}
                      </span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                    "{guide.bio}"
                  </p>

                  {/* View Profile Button */}
                  <Link 
                    href={`/profile/${guide.id}`}
                    className="block w-full text-center py-3 rounded-xl border border-border font-semibold text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Dots (Visual) */}
          {/* <div className="flex justify-center gap-2 mt-10">
            <span className="w-3 h-3 rounded-full bg-primary"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700"></span>
          </div> */}

        </div>
      </div>
    </section>
  );
}