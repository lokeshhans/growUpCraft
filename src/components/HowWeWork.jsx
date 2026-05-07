import React from "react";
import { motion } from "framer-motion";

import {
  MessageCircle,
  Monitor,
  Code2,
  Headphones,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Project Discussion",
    description:
      "We first understand your business, goals and what you actually need — in simple language without technical confusion.",

    time: "30 min discussion",
  },

  {
    number: "02",
    icon: Monitor,
    title: "UI Demo & Planning",
    description:
      "Before development starts, we create a clean demo so you can review the structure and design first.",

    time: "2–3 days",
  },

  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "After approval, we build the full website or system with regular updates and mobile-first optimization.",

    time: "5–15 days",
  },

  {
    number: "04",
    icon: Headphones,
    title: "Launch & Support",
    description:
      "After launch, we continue helping with updates, fixes and support directly on WhatsApp.",

    time: "3 months support",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-black text-white py-28 lg:py-36"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

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
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm font-medium"
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
            viewport={{ once: true }}
            className="mt-7 text-4xl sm:text-6xl font-black tracking-tight leading-[0.95]"
          >
            A simple process
            <br />
            from idea to launch.
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
            viewport={{ once: true }}
            className="mt-6 text-lg leading-relaxed text-white/55 max-w-2xl"
          >
            We keep everything transparent,
            fast and easy to understand —
            even if you are not technical.
          </motion.p>
        </div>

        {/* STEPS */}
        <div className="mt-20 grid lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="relative"
            >
              {/* CONNECTOR */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full border-t border-dashed border-white/10" />
              )}

              <div className="relative rounded-[32px] border border-white/8 bg-white/[0.03] backdrop-blur-xl p-7 h-full transition-all duration-300 hover:border-white/15">
                {/* TOP */}
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-lime-100 text-black flex items-center justify-center">
                    <step.icon size={24} />
                  </div>

                  <span className="text-4xl font-black text-white/10">
                    {step.number}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="mt-7">
                  <h3 className="text-2xl font-black tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-white/55 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {/* TIME */}
                <div className="mt-7 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/5 text-sm text-white/60">
                  ⏱ {step.time}
                </div>
              </div>
            </motion.div>
          ))}
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
          viewport={{ once: true }}
          className="mt-20 rounded-[36px] border border-lime-200/10 bg-lime-100/[0.04] p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
          <div className="max-w-2xl">
            <h3 className="text-3xl font-black tracking-tight">
              No technical knowledge needed.
            </h3>

            <p className="mt-4 text-white/55 leading-relaxed">
              We guide you through everything —
              planning, design, development and
              launch — in a simple and transparent
              way.
            </p>
          </div>

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
            className="group h-14 px-7 rounded-2xl bg-white text-black font-semibold flex items-center gap-2 shadow-2xl"
          >
            Book a Free Discussion

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}