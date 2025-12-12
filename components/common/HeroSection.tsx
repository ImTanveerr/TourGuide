"use client";

import Image from "next/image";
import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

export function HeroSection() {

    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [interest, setInterest] = useState("");

    return (
        <section className="relative w-full flex flex-col items-center">

            <div className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center">

                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/images/herobackground.png"
                        alt="Beautiful travel destination"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* The Gradient Overlay (On top of image) */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
                </div>



                {/* Text Content */}
                <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center -mt-20">

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-400 leading-tight tracking-tight drop-shadow-md">
                        Don't just visit. Live it.
                    </h1>

                    <p className="mt-4 text-lg md:text-xl text-yellow-200 max-w-2xl font-bold drop-shadow-sm">
                        Connect with local experts for authentic, off-the-beaten-path experiences.
                    </p>

                </div>

            </div>



        </section>
    );
}


//   <div className="relative z-20 w-full max-w-5xl px-4 -mt-24 mb-10">
//                 <div className="bg-white dark:bg-card rounded-full shadow-2xl p-2 md:p-3 flex flex-col md:flex-row items-center gap-2 border border-border/50">

//                     {/* Input 1: Destination */}
//                     <div className="flex-1 w-full px-6 py-2 flex items-center md:border-r border-gray-200 dark:border-gray-700">
//                         <div className="flex flex-col w-full group">
//                             <label className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
//                                 Where are you going?
//                             </label>
//                             <div className="flex items-center">
//                                 <input
//                                     type="text"
//                                     placeholder="Search destinations"
//                                     value={location}
//                                     onChange={(e) => setLocation(e.target.value)}
//                                     className="w-full bg-transparent border-none p-0 text-foreground placeholder:text-muted-foreground/50 focus:ring-0 text-sm md:text-base font-semibold outline-none"
//                                 />
//                             </div>
//                         </div>
//                         <ChevronDown className="w-4 h-4 text-muted-foreground ml-2 hidden md:block" />
//                     </div>

//                     {/* Input 2: Date */}
//                     <div className="flex-1 w-full px-6 py-2 flex items-center md:border-r border-gray-200 dark:border-gray-700">
//                         <div className="flex flex-col w-full">
//                             <label className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
//                                 Date
//                             </label>
//                             <input
//                                 type="date"
//                                 value={date}
//                                 onChange={(e) => setDate(e.target.value)}
//                                 className="w-full bg-transparent border-none p-0 text-foreground text-sm md:text-base font-semibold focus:ring-0 outline-none"
//                             />
//                         </div>
//                     </div>

//                     {/* Input 3: Interest */}
//                     <div className="flex-1 w-full px-6 py-2 flex items-center">
//                         <div className="flex flex-col w-full">
//                             <label className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
//                                 Interest
//                             </label>
//                             <select
//                                 value={interest}
//                                 onChange={(e) => setInterest(e.target.value)}
//                                 className="w-full bg-transparent border-none p-0 text-foreground focus:ring-0 text-sm md:text-base font-semibold outline-none cursor-pointer appearance-none"
//                             >
//                                 <option value="" disabled>Select Type</option>
//                                 <option value="food">Food & Drink</option>
//                                 <option value="culture">Culture</option>
//                                 <option value="nature">Nature</option>
//                             </select>
//                         </div>
//                         <ChevronDown className="w-4 h-4 text-muted-foreground ml-2 hidden md:block" />
//                     </div>

//                     {/* Search Button */}
//                     <button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-4 font-bold text-base shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2">
//                         <Search className="w-5 h-5" />
//                         <span>Search</span>
//                     </button>
//                 </div>
//             </div>