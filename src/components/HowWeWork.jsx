import React from "react";

import { motion } from "framer-motion";

import {
  MessageCircle,
  Monitor,
  Code2,
  Headphones,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",

    icon: MessageCircle,

    title:
      "Project Discussion",

    description:
      "We first understand your business goals, audience and requirements in simple language without technical confusion.",

    time:
      "30 min discussion",

    gradient:
      "from-lime-200/40 via-lime-100/20 to-transparent dark:from-lime-500/10 dark:to-lime-400/5",
  },

  {
    number: "02",

    icon: Monitor,

    title:
      "UI Demo & Planning",

    description:
      "Before development starts, we create a modern UI demo so you can review the layout, structure and experience first.",

    time:
      "2–3 days",

    gradient:
      "from-blue-200/30 via-cyan-100/10 to-transparent dark:from-blue-500/10 dark:to-cyan-400/5",
  },

  {
    number: "03",

    icon: Code2,

    title:
      "Development Phase",

    description:
      "After approval, we build the complete website or system with clean code, mobile-first optimization and smooth animations.",

    time:
      "5–15 days",

    gradient:
      "from-orange-200/30 via-yellow-100/10 to-transparent dark:from-orange-500/10 dark:to-yellow-400/5",
  },

  {
    number: "04",

    icon: Headphones,

    title:
      "Launch & Support",

    description:
      "After launch, we continue helping with updates, fixes and direct WhatsApp support whenever needed.",

    time:
      "3 months support",

    gradient:
      "from-pink-200/30 via-purple-100/10 to-transparent dark:from-pink-500/10 dark:to-purple-400/5",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#F7F8F4] dark:bg-[#050505] text-black dark:text-white py-4 sm:py-10 lg:py-20 transition-colors duration-500"
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
              "70px 70px",
          }}
        />
      </div>

      {/* MAIN GLOW */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full bg-lime-100/40 dark:bg-lime-500/10 blur-3xl" />

      {/* EXTRA COLOR GLOW */}

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-200/20 dark:bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* HEADER */}

        <div className="max-w-3xl">
          <motion.span
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-2xl text-xs sm:text-sm font-medium shadow-sm"
          >
            <Sparkles
              size={
                15
              }
            />
            Our Process
          </motion.span>

          <motion.h2
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
            className="mt-2 text-[2rem] leading-[1.02] sm:text-6xl lg:text-[88px] font-black tracking-[-0.05em]"
          >
            A smooth process
            <br />
            from idea to
            launch.
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            className="mt-4 text-[12px] sm:text-xl leading-[1.8] text-black/70 dark:text-white/70 max-w-2xl"
          >
            Everything stays
            transparent,
            simple and easy
            to understand —
            even if you are
            not technical.
          </motion.p>
        </div>

        {/* STEPS */}

        <div className="mt-10 sm:mt-20 grid lg:grid-cols-4 gap-2">
          {steps.map(
            (
              step,
              index
            ) => (
              <motion.div
                key={
                  step.number
                }
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay:
                    index *
                    0.08,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="relative group"
              >
                {/* CONNECTOR */}

                {index <
                  steps.length -
                    1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full border-t border-dashed border-black/10 dark:border-white/10" />
                )}

                {/* CARD */}

                <div className="relative h-full rounded-[36px] border border-black/6 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-2xl p-7 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_30px_100px_rgba(163,230,53,0.12)]">
                  {/* PREMIUM GRADIENT */}

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none`}
                  />

                  {/* TOP BORDER */}

                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 dark:via-white/20 to-transparent" />

                  {/* BIG NUMBER */}

                  <div className="absolute top-5 right-6 text-black/[0.04] dark:text-white/[0.04] text-7xl font-black tracking-tight">
                    {
                      step.number
                    }
                  </div>

                  {/* ICON */}

                  <div className="relative z-10 w-16 h-16 rounded-[24px] bg-gradient-to-br from-lime-200 to-lime-100 dark:from-lime-500/20 dark:to-lime-400/10 border border-lime-200/40 dark:border-lime-500/20 flex items-center justify-center shadow-xl">
                    <step.icon
                      size={
                        28
                      }
                      className="text-lime-700 dark:text-lime-300"
                    />
                  </div>

                  {/* CONTENT */}

                  <div className="relative z-10 mt-6">
                    <h3 className="text-2xl font-black tracking-tight leading-[1]">
                      {
                        step.title
                      }
                    </h3>

                    <p className="mt-4 text-black/70 dark:text-white/70 leading-[1.8] text-sm">
                      {
                        step.description
                      }
                    </p>
                  </div>

                  {/* TIME */}

                  <div className="relative z-10 mt-4  inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 dark:bg-white border border-black/5 dark:border-white/5 text-sm text-white/60 dark:text-black/60 backdrop-blur-xl">
                    ⏱{" "}
                    {
                      step.time
                    }
                  </div>

                  {/* HOVER BORDER */}

                  <div className="absolute inset-0 rounded-[36px] border border-lime-300/0 group-hover:border-lime-300/30 transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-[40px] border border-black/6 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-2xl p-7 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 shadow-[0_20px_80px_rgba(0,0,0,0.05)]">
            {/* GRADIENT */}

            <div className="absolute inset-0 bg-gradient-to-br from-lime-100/30 to-transparent dark:from-lime-500/5 pointer-events-none" />

            {/* LEFT */}

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-lime-100 dark:bg-lime-500/15 text-white dark:text-lime-300 text-sm font-semibold">
                <Sparkles
                  size={
                    15
                  }
                />
                Simple &
                Transparent
              </div>

              <h3 className="mt-4 text-[2rem] sm:text-5xl font-black tracking-[-0.04em] leading-[0.96]">
                No technical
                knowledge
                needed.
              </h3>

              <p className="mt-4 text-black/70 dark:text-white/70 leading-[1.8] text-[12px] sm:text-lg max-w-xl">
                We guide you
                through
                planning,
                design,
                development
                and launch —
                step by step
                in a simple
                and practical
                way.
              </p>

              {/* FEATURES */}

              <div className="mt-4 flex flex-wrap gap-5">
                {[
                  "Fast Delivery",

                  "WhatsApp Support",

                  "Mobile First",
                ].map(
                  (
                    item
                  ) => (
                    <div
                      key={
                        item
                      }
                      className="inline-flex items-center gap-2 text-sm text-black/70 dark:text-white/70"
                    >
                      <CheckCircle2
                        size={
                          15
                        }
                        className="text-lime-600 dark:text-lime-400"
                      />

                      {
                        item
                      }
                    </div>
                  )
                )}
              </div>
            </div>

            {/* BUTTON */}

            <motion.a
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="https://wa.me/918930296001"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative z-10 w-full sm:w-auto h-14 px-3 rounded-2xl bg-gradient-to-r from-black to-neutral-800 dark:from-white dark:to-neutral-200 text-white dark:text-black font-semibold flex items-center justify-center gap-2 shadow-2xl"
            >
              Book a Free
              Discussion

              <ArrowRight
                size={
                  18
                }
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}