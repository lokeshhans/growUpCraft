import React from "react";

import {
  motion,
} from "framer-motion";

import {
  Star,
  Quote,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const testimonials = [
  {
    id: 1,

    name:
      "Rajesh Yadav",

    role:
      "Gym Owner • Palwal",

    emoji: "💪",

    stars: 5,

    result:
      "Members 180 → 248 in 4 months",

    text:
      "Before this system, we managed everything manually. Now payments, member tracking and enquiries are handled automatically. It saves hours every single day.",

    highlight:
      "2+ hours/day saved",

    gradient:
      "from-lime-200/30 via-lime-100/10 to-transparent dark:from-lime-500/10 dark:to-lime-400/5",
  },

  {
    id: 2,

    name:
      "Sunita Sharma",

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

    gradient:
      "from-blue-200/30 via-cyan-100/10 to-transparent dark:from-blue-500/10 dark:to-cyan-400/5",
  },

  {
    id: 3,

    name:
      "Vinod Kalra",

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

    gradient:
      "from-orange-200/30 via-yellow-100/10 to-transparent dark:from-orange-500/10 dark:to-yellow-400/5",
  },

  {
    id: 4,

    name:
      "Pooja Agarwal",

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

    gradient:
      "from-pink-200/30 via-purple-100/10 to-transparent dark:from-pink-500/10 dark:to-purple-400/5",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#F7F8F4] dark:bg-[#050505] text-black dark:text-white py-20 sm:py-28 lg:py-40 transition-colors duration-500">
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

      {/* GLOW */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-lime-100/40 dark:bg-lime-500/10 blur-3xl" />

      {/* EXTRA GLOW */}

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] text-xs sm:text-sm font-medium text-black dark:text-white shadow-sm backdrop-blur-2xl"
          >
            <Sparkles
              size={
                15
              }
            />
            Client Reviews
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
            className="mt-7 text-[2.4rem] leading-[0.96] sm:text-6xl lg:text-[88px] font-black tracking-[-0.05em] text-black dark:text-white"
          >
            Businesses
            that trusted
            us.
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
            className="mt-6 text-[15px] sm:text-xl leading-[1.8] text-black/70 dark:text-white/70 max-w-2xl"
          >
            Real feedback
            from local
            businesses
            using websites
            and systems
            built by
            GrowUpCraft.
          </motion.p>
        </div>

        {/* GRID */}

        <div className="mt-16 sm:mt-20 grid lg:grid-cols-2 gap-6">
          {testimonials.map(
            (
              item,
              index
            ) => (
              <motion.div
                key={
                  item.id
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
                className="group relative rounded-[36px] border border-black/6 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-2xl p-6 sm:p-8 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_100px_rgba(163,230,53,0.12)] transition-all duration-500"
              >
                {/* PREMIUM GRADIENT */}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none`}
                />

                {/* TOP LINE */}

                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 dark:via-white/20 to-transparent" />

                {/* QUOTE */}

                <div className="absolute top-7 right-7 text-black/[0.06] dark:text-white/[0.06]">
                  <Quote
                    size={
                      52
                    }
                  />
                </div>

                {/* STARS */}

                <div className="relative z-10 flex items-center gap-1 mb-6">
                  {[...Array(
                    item.stars
                  )].map(
                    (
                      _,
                      i
                    ) => (
                      <Star
                        key={
                          i
                        }
                        size={
                          16
                        }
                        className="fill-yellow-400 text-yellow-400"
                      />
                    )
                  )}
                </div>

                {/* TEXT */}

                <p className="relative z-10 text-black/75 dark:text-white/75 leading-[1.9] text-[15px] sm:text-[16px]">
                  "
                  {
                    item.text
                  }
                  "
                </p>

                {/* RESULT */}

                <div className="relative z-10 mt-8 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-100 dark:bg-lime-500/20 text-black dark:text-lime-300 text-sm font-semibold">
                    <TrendingUp
                      size={
                        15
                      }
                    />

                    {
                      item.result
                    }
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-sm text-black/60 dark:text-white/60 backdrop-blur-xl">
                    <CheckCircle2
                      size={
                        15
                      }
                    />

                    {
                      item.highlight
                    }
                  </div>
                </div>

                {/* USER */}

                <div className="relative z-10 mt-9 pt-6 border-t border-black/6 dark:border-white/8 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-[24px] bg-gradient-to-br from-lime-200 to-lime-100 dark:from-lime-500/20 dark:to-lime-400/10 border border-lime-200/40 dark:border-lime-500/20 flex items-center justify-center text-3xl shadow-xl">
                    {
                      item.emoji
                    }
                  </div>

                  <div>
                    <h3 className="font-black text-xl tracking-tight text-black dark:text-white">
                      {
                        item.name
                      }
                    </h3>

                    <p className="text-sm text-black/45 dark:text-white/45 mt-1">
                      {
                        item.role
                      }
                    </p>
                  </div>
                </div>

                {/* HOVER BORDER */}

                <div className="absolute inset-0 rounded-[36px] border border-lime-300/0 group-hover:border-lime-300/30 transition-all duration-500 pointer-events-none" />
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
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-[40px] border border-black/6 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-2xl p-7 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 shadow-[0_20px_80px_rgba(0,0,0,0.05)]">
            {/* GRADIENT */}

            <div className="absolute inset-0 bg-gradient-to-br from-lime-100/30 to-transparent dark:from-lime-500/5 pointer-events-none" />

            {/* LEFT */}

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-100 dark:bg-lime-500/20 text-black dark:text-lime-300 text-sm font-semibold">
                🚀 Ready to
                Start?
              </div>

              <h3 className="mt-6 text-[2rem] sm:text-5xl font-black tracking-[-0.04em] leading-[0.96] text-black dark:text-white">
                Your business
                could be the
                next success
                story.
              </h3>

              <p className="mt-5 text-black/70 dark:text-white/70 leading-[1.8] text-[15px] sm:text-lg max-w-xl">
                Whether you
                need a modern
                website,
                booking
                system or
                complete
                business
                dashboard —
                we can help
                you build it.
              </p>
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
              href="#contact"
              className="group relative z-10 w-full sm:w-auto h-14 px-7 rounded-2xl bg-gradient-to-r from-black to-neutral-800 dark:from-white dark:to-neutral-200 text-white dark:text-black font-semibold flex items-center justify-center gap-2 shadow-2xl"
            >
              Discuss Your
              Project

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