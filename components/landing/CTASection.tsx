"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Map, Wallet } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* --- Card 1: For Tourists --- */}
          <div className="relative group overflow-hidden rounded-3xl h-[400px] md:h-[500px]">
            {/* Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop"
              alt="Traveler looking at mountains"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <div className="mb-4 bg-white/20 backdrop-blur-md w-fit px-4 py-1.5 rounded-full border border-white/30">
                <span className="flex items-center text-white text-sm font-bold tracking-wide uppercase">
                  <Map className="w-4 h-4 mr-2" />
                  For Travelers
                </span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Ready to explore the unknown?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-md">
                Find authentic tours, skip the tourist traps, and create memories that last a lifetime.
              </p>
              
              <Link 
                href="/explore"
                className="w-fit bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold flex items-center transition-all duration-300 group-hover:translate-x-2"
              >
                Start Your Journey <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* --- Card 2: For Guides --- */}
          <div className="relative group overflow-hidden rounded-3xl h-[400px] md:h-[500px]">
            {/* Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2669&auto=format&fit=crop"
              alt="Local guide showing city"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Dark Overlay (Different tint for distinction, e.g. slightly orange/warm) */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <div className="mb-4 bg-accent/80 backdrop-blur-md w-fit px-4 py-1.5 rounded-full border border-white/10">
                <span className="flex items-center text-white text-sm font-bold tracking-wide uppercase">
                  <Wallet className="w-4 h-4 mr-2" />
                  For Locals
                </span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
               Know your city better than anyone?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-md">
                Become a guide, set your own rates, and meet people from all over the world.
              </p>
              
              <Link 
                href="/register?role=guide"
                className="w-fit bg-white hover:bg-gray-100 text-foreground px-8 py-4 rounded-xl font-bold flex items-center transition-all duration-300 group-hover:translate-x-2"
              >
                Become a Guide <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}