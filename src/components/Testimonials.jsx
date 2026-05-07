import React from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Star,
  Quote,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const testimonials = [
  {
    id: 1,

    name: "Rajesh Yadav",

    role: "Gym Owner • Palwal",

    emoji: "💪",

    stars: 5,

    result:
      "Members 180 → 248 in 4 months",

    text:
      "Before this system, we managed everything manually. Now payments, member tracking and enquiries are handled automatically. It saves hours every single day.",

    highlight:
      "2+ hours/day saved",
  },

  {
    id: 2,

    name: "Sunita Sharma",

    role:
      "Coaching Director • Star Institute",

    emoji: "🏫",

    stars: 5,

    result:
      "40+ online enquiries monthly",

    text:
      "Students now discover us online through Google searches. The website and admission system made the whole process look much more professional.",

    highlight:
      "Admissions simplified",
  },

  {
    id: 3,

    name: "Vinod Kalra",

    role:
      "Property Dealer • NCR",

    emoji: "🏠",

    stars: 5,

    result:
      "3 property sales from website leads",

    text:
      "We never had proper lead tracking before. Now every enquiry is organized properly and follow-ups are much easier to manage.",

    highlight:
      "Zero missed leads",
  },

  {
    id: 4,

    name: "Pooja Agarwal",

    role:
      "Boutique Owner • Palwal",

    emoji: "👗",

    stars: 5,

    result:
      "Bookings fully automated",

    text:
      "The process was surprisingly simple. Everything was explained clearly and the booking system now handles appointments automatically.",

    highlight:
      "Smooth customer experience",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-28 lg:py-36">
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-lime-300/10 blur-3xl" />

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
            ⭐ Client Reviews
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
            Businesses that
            <br />
            trusted us.
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
            Real feedback from local businesses
            using websites and systems built by
            GrowUpCraft.
          </motion.p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="mt-20 grid lg:grid-cols-2 gap-6">
          {testimonials.map(
            (item, index) => (
              <motion.div
                key={item.id}
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
                className="group relative rounded-[32px] border border-white/8 bg-white/[0.03] backdrop-blur-xl p-7 lg:p-8 overflow-hidden"
              >
                {/* TOP GRADIENT */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* QUOTE */}
                <div className="absolute top-7 right-7 text-white/10">
                  <Quote size={42} />
                </div>

                {/* STARS */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(item.stars)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    )
                  )}
                </div>

                {/* TEXT */}
                <p className="text-white/70 leading-relaxed text-[15px]">
                  "{item.text}"
                </p>

                {/* RESULT */}
                <div className="mt-7 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-100 text-black text-sm font-semibold">
                    <TrendingUp
                      size={15}
                    />

                    {item.result}
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/5 text-sm text-white/60">
                    <CheckCircle2
                      size={15}
                    />

                    {
                      item.highlight
                    }
                  </div>
                </div>

                {/* USER */}
                <div className="mt-8 pt-6 border-t border-white/8 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-2xl">
                    {item.emoji}
                  </div>

                  <div>
                    <h3 className="font-bold text-lg tracking-tight">
                      {item.name}
                    </h3>

                    <p className="text-sm text-white/40">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* HOVER EFFECT */}
                <div className="absolute inset-0 rounded-[32px] border border-lime-300/0 group-hover:border-lime-300/20 transition-all duration-500 pointer-events-none" />
              </motion.div>
            )
          )}
        </div>

        {/* BOTTOM CTA */}
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
          className="mt-20"
        >
          <div className="rounded-[36px] border border-white/8 bg-white/[0.03] backdrop-blur-xl p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-100 text-black text-sm font-semibold">
                🚀 Ready to Start?
              </div>

              <h3 className="mt-6 text-3xl sm:text-4xl font-black tracking-tight leading-[1]">
                Your business could be
                the next success story.
              </h3>

              <p className="mt-5 text-white/55 leading-relaxed text-lg">
                Whether you need a modern website,
                booking system or complete business
                dashboard — we can help you build it.
              </p>
            </div>

            {/* CTA */}
            <motion.a
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="#contact"
              className="group h-14 px-7 rounded-2xl bg-white text-black font-semibold flex items-center gap-2 shadow-2xl"
            >
              Discuss Your Project

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}