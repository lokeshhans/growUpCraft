import React from "react";

import {
  motion,
} from "framer-motion";

import {
  Sparkles,
} from "lucide-react";

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
      className="relative overflow-hidden bg-[#F7F8F4] dark:bg-[#050505] py-4 sm:py-6 transition-colors duration-500"
    >
      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px)
            `,
            backgroundSize:
              "60px 60px",
          }}
        />
      </div>

      {/* MAIN GLOW */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full bg-lime-100/40 dark:bg-lime-500/10 blur-3xl" />

      {/* EXTRA GLOW */}

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-200/20 dark:bg-blue-500/10 blur-3xl" />

      {/* TOP BORDER */}

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

      {/* BOTTOM BORDER */}

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

      <div className="relative z-10">
        {/* LABEL */}

        <div className="flex justify-center mb-3 px-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-2xl shadow-sm text-xs sm:text-sm font-medium text-black dark:text-white">
            <Sparkles
              size={
                14
              }
            />
            Technologies &
            Solutions
          </div>
        </div>

        {/* LEFT FADE */}

        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#F7F8F4] via-[#F7F8F4]/90 to-transparent dark:from-[#050505] dark:via-[#050505]/90 z-20" />

        {/* RIGHT FADE */}

        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#F7F8F4] via-[#F7F8F4]/90 to-transparent dark:from-[#050505] dark:via-[#050505]/90 z-20" />

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
              duration: 60,
              ease: "linear",
            }}
            className="flex min-w-max items-center gap-5"
          >
            {[...items, ...items].map(
              (
                item,
                index
              ) => (
                <div
                  key={
                    index
                  }
                  className="group flex items-center gap-3"
                >
                  {/* CARD */}

                  <motion.div
                    whileHover={{
                      y: -4,
                    }}
                    className="relative overflow-hidden flex items-center gap-3 px-5 sm:px-6 py-4 rounded-[24px] border border-black/6 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-2xl whitespace-nowrap transition-all duration-500 hover:shadow-[0_20px_60px_rgba(163,230,53,0.12)]"
                  >
                    {/* GRADIENT */}

                    <div className="absolute inset-0 bg-gradient-to-br from-lime-100/30 via-transparent to-blue-100/10 dark:from-lime-500/10 dark:to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                    {/* TOP LINE */}

                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

                    {/* TEXT */}

                    <span className="relative z-10 text-sm sm:text-[15px] font-medium tracking-wide text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                      {
                        item
                      }
                    </span>
                  </motion.div>

                  {/* DOT */}

                  <div className="w-1.5 h-1.5 rounded-full bg-lime-500/50 dark:bg-lime-400/50 flex-shrink-0" />
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}