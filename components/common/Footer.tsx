"use client";

import React from "react";
import Link from "next/link";
import { Compass, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        {/* --- Top Section: Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Compass className="w-6 h-6 text-primary" strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-bold text-foreground tracking-tight">
                TourGuide
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Connecting curious travelers with passionate local experts. Experience the world authentically, one story at a time.
            </p>
            
            {/* Newsletter Input */}
            <div className="flex flex-col sm:flex-row gap-2 max-w-sm">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary/50 border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                />
              </div>
              <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-bold text-foreground text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Press'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="font-bold text-foreground text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'Safety Information', 'Cancellation Options', 'Report a Concern'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="font-bold text-foreground text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Accessibility'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* --- Divider --- */}
        <div className="border-t border-border my-8"></div>

        {/* --- Bottom Section: Copyright & Socials --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-medium">
            © {currentYear} TourGuide Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}