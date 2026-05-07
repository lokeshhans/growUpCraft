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
  },

  {
    number: "03",

    icon: Code2,

    title:
      "Development",

    description:
      "After approval, we build the complete website or system with clean code, mobile-first optimization and smooth animations.",

    time:
      "5–15 days",
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
  },
];

export default function HowWeWork() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#f8f8f6] dark:bg-black text-black dark:text-white py-28 lg:py-36 transition-colors duration-500"
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

      {/* GLOW */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full bg-lime-100/40 dark:bg-lime-500/10 blur-3xl" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.03] backdrop-blur-xl text-sm font-medium shadow-sm"
          >
            ⚡ Our Process
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
            className="mt-7 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]"
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
            className="mt-6 text-lg leading-relaxed text-black/60 dark:text-white/55 max-w-2xl"
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

        <div className="mt-20 grid lg:grid-cols-4 gap-6">
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
                  <div className="hidden lg:block absolute top-14 left-full w-full border-t border-dashed border-black/10 dark:border-white/10" />
                )}

                {/* CARD */}

                <div className="relative h-full rounded-[32px] border border-black/6 dark:border-white/10 bg-white dark:bg-neutral-950 backdrop-blur-xl p-7 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
                  {/* TOP GLOW */}

                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 dark:via-white/20 to-transparent" />

                  {/* NUMBER */}

                  <div className="absolute top-6 right-6 text-black/5 dark:text-white/5 text-6xl font-black">
                    {
                      step.number
                    }
                  </div>

                  {/* ICON */}

                  <div className="relative z-10 w-16 h-16 rounded-3xl bg-lime-100 dark:bg-lime-500/15 border border-lime-200/40 dark:border-lime-500/20 flex items-center justify-center">
                    <step.icon
                      size={
                        28
                      }
                      className="text-black dark:text-lime-300"
                    />
                  </div>

                  {/* CONTENT */}

                  <div className="relative z-10 mt-8">
                    <h3 className="text-2xl font-black tracking-tight">
                      {
                        step.title
                      }
                    </h3>

                    <p className="mt-4 text-black/60 dark:text-white/55 leading-relaxed text-sm">
                      {
                        step.description
                      }
                    </p>
                  </div>

                  {/* TIME */}

                  <div className="relative z-10 mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-sm text-black/60 dark:text-white/60">
                    ⏱{" "}
                    {
                      step.time
                    }
                  </div>

                  {/* HOVER BORDER */}

                  <div className="absolute inset-0 rounded-[32px] border border-lime-300/0 group-hover:border-lime-300/30 transition-all duration-500 pointer-events-none" />
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
          <div className="rounded-[36px] border border-black/6 dark:border-white/10 bg-white dark:bg-neutral-950 backdrop-blur-xl p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
            {/* LEFT */}

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-100 dark:bg-lime-500/15 text-black dark:text-lime-300 text-sm font-semibold">
                <Sparkles
                  size={
                    15
                  }
                />

                Simple &
                Transparent
              </div>

              <h3 className="mt-6 text-3xl sm:text-4xl font-black tracking-tight leading-[1]">
                No technical
                knowledge
                needed.
              </h3>

              <p className="mt-5 text-black/60 dark:text-white/55 leading-relaxed text-lg">
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

              <div className="mt-7 flex flex-wrap gap-4">
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
                      className="inline-flex items-center gap-2 text-sm text-black/60 dark:text-white/55"
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
              className="group h-14 px-7 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-semibold flex items-center gap-2 shadow-2xl"
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