import React from "react";

import {
  motion,
} from "framer-motion";

const items = [
  "⚡ React.js Development",

  "🛠 Node.js + Express",

  "🗄 MongoDB Database",

  "🎨 Modern UI/UX Design",

  "📱 Mobile-First Websites",

  "🚀 Fast Performance",

  "🔒 Secure Systems",

  "📍 Based in Haryana",

  "🏫 School Websites",

  "💪 Gym Management Systems",

  "🏠 Property Business Solutions",

  "📊 Custom Dashboards",

  "🤖 Business Automation",

  "📩 WhatsApp Integration",

  "🌐 SEO Optimized",

  "⚙ Admin Panels",

  "📈 Lead Management",

  "🧩 Custom Web Applications",
];

export default function TrustBar() {
  return (
    <section
      aria-label="Technologies and business solutions"
      className="relative overflow-hidden border-y border-white/6 bg-black py-5"
    >
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* LEFT FADE */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/90 to-transparent z-10" />

      {/* TOP HIGHLIGHT */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* MARQUEE */}
      <div className="relative flex overflow-hidden">
        <motion.div
          initial={{
            x: 0,
          }}
          animate={{
            x: "-50%",
          }}
          transition={{
            repeat: Infinity,
            duration: 32,
            ease: "linear",
          }}
          className="flex min-w-max items-center gap-5"
        >
          {[...items, ...items].map(
            (item, index) => (
              <div
                key={index}
                className="group flex items-center gap-5"
              >
                {/* ITEM */}
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/6 bg-white/[0.03] backdrop-blur-xl whitespace-nowrap transition-all duration-300 hover:bg-white/[0.05] hover:border-white/12">
                  <span className="text-sm font-medium tracking-wide text-white/70 group-hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                </div>

                {/* DOT */}
                <div className="w-1.5 h-1.5 rounded-full bg-lime-300/50 flex-shrink-0" />
              </div>
            )
          )}
        </motion.div>
      </div>

      {/* BOTTOM HIGHLIGHT */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}