"use client";

import React from "react";
import { ShieldCheck, UserCheck, CreditCard, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Map, // Changed to Map to represent 'Authentic' better
    title: "Authentic",
    description: "Escape the tourist traps. Our guides take you to the hidden gems only locals know."
  },
  {
    icon: UserCheck,
    title: "Verified Guides",
    description: "We rigorously vet every guide with ID checks and interviews to ensure your safety."
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Your money is held safely until the tour is completed. 100% secure transactions."
  },
  {
    icon: RefreshCw,
    title: "Flexible",
    description: "Plans change. Cancel up to 24 hours before your tour for a full refund."
  }
];

// Helper to fix the icon reference above since I can't import Map inside the array definition easily in some setups
import { Map } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground text-lg">
            We are redefining travel by connecting you directly with the people who know their cities best.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start md:items-center md:text-center group">
              
              {/* Icon Container */}
              <div className="mb-6 p-4 rounded-2xl bg-white dark:bg-card shadow-sm border border-border/50 group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                <feature.icon 
                  className="w-8 h-8 text-primary" 
                  strokeWidth={1.5}
                />
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}