import { useEffect } from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import { useAppContext } from "../context/AppContext";

import image from "../assets/hero.webp";

const rotatingWords = [
  "schools",
  "gyms",
  "businesses",
  "brands",
];

export default function Hero() {
  const {
    activeWordIndex,
    setActiveWord,
    openModal,
  } = useAppContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord(
        (prev) =>
          (prev + 1) %
          rotatingWords.length
      );
    }, 2200);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f8f8f6] dark:bg-[#050505] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28 transition-colors duration-500">
      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* GLOW */}

        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-lime-100/50 dark:bg-lime-500/10 blur-3xl" />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(#000 1px, transparent 1px),
              linear-gradient(90deg, #000 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* LEFT */}

          <div className="relative z-10">
            {/* TOP TAG */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-4 py-2 text-[12px] sm:text-sm font-medium mb-6 bg-white/80 dark:bg-white/5 text-black dark:text-white backdrop-blur-xl shadow-sm"
            >
              <MapPin size={14} />

              Palwal, Haryana
            </motion.div>

            {/* HEADING */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
              }}
              className="max-w-2xl font-black tracking-[-0.05em] text-black dark:text-white leading-[1.02]
              text-[2rem]
              sm:text-5xl
              lg:text-7xl"
            >
              Modern websites
              for{" "}
              <span className="relative inline-flex min-w-[140px] sm:min-w-[180px] text-lime-700 dark:text-lime-400">
                {
                  rotatingWords[
                    activeWordIndex
                  ]
                }
              </span>
            </motion.h1>

            {/* SUBTEXT */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
              }}
              className="mt-6 max-w-xl text-[12px] sm:text-lg leading-[1.9] text-black/70 dark:text-white/75"
            >
              We design clean,
              fast and
              mobile-first
              websites that help
              local businesses
              build trust,
              increase enquiries
              and grow online.
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              {/* PRIMARY */}

              <motion.button
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() =>
                  openModal({
                    title:
                      "Free Project Discussion",
                  })
                }
                className="group w-full sm:w-auto min-h-[52px] px-7 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-semibold flex items-center justify-center gap-2 shadow-xl shadow-black/10 transition-all duration-300"
              >
                Book Free Call

                <ArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>

              {/* SECONDARY */}

              <a
                href="#projects"
                className="w-full sm:w-auto min-h-[52px] px-7 rounded-2xl border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-all duration-300 flex items-center justify-center font-semibold text-black dark:text-white bg-white/60 dark:bg-white/5 backdrop-blur-xl"
              >
                View Projects
              </a>
            </motion.div>

            {/* TRUST */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
            >
              {[
                "Mobile First Design",
                "Fast Delivery",
                "WhatsApp Support",
              ].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-lime-700 dark:text-lime-400 shrink-0"
                    />

                    <span>
                      {item}
                    </span>
                  </div>
                )
              )}
            </motion.div>

            {/* STATS */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
              }}
              className="mt-10 grid grid-cols-3 gap-4 sm:gap-8"
            >
              {[
                {
                  value: "15+",
                  label:
                    "Projects Delivered",
                },

                {
                  value: "100%",
                  label:
                    "Responsive Design",
                },

                {
                  value: "3-7",
                  label:
                    "Days Delivery",
                },
              ].map(
                (item) => (
                  <div
                    key={
                      item.label
                    }
                  >
                    <h3 className="text-xl sm:text-3xl font-black text-black dark:text-white">
                      {
                        item.value
                      }
                    </h3>

                    <p className="mt-1 text-[8px] sm:text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                      {
                        item.label
                      }
                    </p>
                  </div>
                )
              )}
            </motion.div>
          </div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative"
          >
            {/* BROWSER */}

            <div className="overflow-hidden rounded-[28px] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-950/90 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
              {/* TOP BAR */}

              <div className="h-14 border-b border-black/5 dark:border-white/10 flex items-center px-5 gap-2 bg-neutral-50 dark:bg-white/5">
                <div className="w-3 h-3 rounded-full bg-red-400" />

                <div className="w-3 h-3 rounded-full bg-yellow-400" />

                <div className="w-3 h-3 rounded-full bg-green-400" />

                <div className="ml-4 text-xs text-neutral-400 dark:text-neutral-500 font-medium truncate">
                  growupcraft.com
                </div>
              </div>

              {/* PREVIEW */}

              <div className="p-4 sm:p-6">
                <div className="overflow-hidden rounded-3xl border border-black/5 dark:border-white/10">
                  <img
                    src={image}
                    alt="Project Preview"
                    className="w-full h-[240px] sm:h-[360px] object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-lg text-black dark:text-white">
                      School Website
                    </h3>

                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Modern
                      admission-focused
                      UI
                    </p>
                  </div>

                  <div className="shrink-0 px-4 py-2 rounded-full bg-lime-100 dark:bg-lime-500/20 text-lime-800 dark:text-lime-300 text-sm font-semibold whitespace-nowrap">
                    Live Project
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat:
                  Infinity,
                duration: 4,
              }}
              className="absolute bottom-1 left-1 sm:-bottom-6 sm:-left-6 bg-black text-white dark:bg-white dark:text-black p-2 sm:p-3 rounded-3xl shadow-2xl"
            >
              <p className="text-[11px] sm:text-xs opacity-70">
                Delivered in
              </p>

              <h4 className="text-xs sm:text-xl font-bold   ">
                5 Days 🚀
              </h4>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}