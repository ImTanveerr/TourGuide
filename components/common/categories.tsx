// components/home/categories.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Utensils, Landmark, Camera, Mountain, ShoppingBag } from "lucide-react";

const categories = [
  { id: 1, name: "Food & Drink", icon: Utensils, slug: "FOOD" },
  { id: 2, name: "History & Culture", icon: Landmark, slug: "HISTORY" },
  { id: 3, name: "Photography", icon: Camera, slug: "PHOTOGRAPHY" },
  { id: 4, name: "Nature & Adventure", icon: Mountain, slug: "ADVENTURE" },
  { id: 5, name: "Shopping", icon: ShoppingBag, slug: "SHOPPING" },
];

export function Categories() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Find Your Vibe
        </h2>
        
        {/* Divider */}
        <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-12"></div>

        {/* Categories Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              href={`/explore?category=${cat.slug}`}
              className="group flex flex-col items-center gap-4"
            >
              {/* Icon Circle - UPDATED STYLES */}
              {/* - Changed bg-secondary/50 to bg-primary/10 for the colored fill style 
                  - Removed 'border-border'
                  - Added hover effect to fill with solid primary color
              */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:shadow-xl group-hover:-translate-y-2">
                <cat.icon 
                  /* - Changed strokeWidth to 2 for bolder icons 
                     - Changed text color to text-foreground (dark) for contrast
                  */
                  className="w-8 h-8 md:w-10 md:h-10 text-foreground transition-colors duration-300 group-hover:text-primary-foreground" 
                  strokeWidth={2} 
                />
              </div>
              
              {/* Label */}
              <span className="text-sm md:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}