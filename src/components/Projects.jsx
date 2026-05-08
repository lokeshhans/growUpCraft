import React, {
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  ArrowRight,
  TrendingUp,
  Clock3,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    id: "gym",

    emoji: "💪",

    category:
      "Gym Management",

    title:
      "FitZone Gym Dashboard",

    location:
      "Palwal, Haryana",

    description:
      "A complete member management system for handling memberships, fee tracking, enquiries and revenue analytics.",

    stats: [
      "₹22k+ revenue recovered",

      "3x better enquiry conversion",

      "2 hours/day manual work reduced",
    ],

    metrics: [
      {
        label:
          "Members",

        value: "248",
      },

      {
        label:
          "Revenue",

        value:
          "₹1.8L",
      },

      {
        label:
          "Enquiries",

        value: "32",
      },
    ],
  },

  {
    id: "coaching",

    emoji: "🏫",

    category:
      "Coaching Institute",

    title:
      "Star Coaching Portal",

    location:
      "Palwal",

    description:
      "A modern website and student management portal with online enquiries, attendance and fee tracking.",

    stats: [
      "40+ online enquiries",

      "Admissions process simplified",

      "80 → 140 students in 3 months",
    ],

    metrics: [
      {
        label:
          "Students",

        value: "140",
      },

      {
        label:
          "Admissions",

        value: "28",
      },

      {
        label:
          "Courses",

        value: "12",
      },
    ],
  },

  {
    id: "property",

    emoji: "🏠",

    category:
      "Property Business",

    title:
      "RealPal Lead System",

    location:
      "Palwal • NCR",

    description:
      "Property listing website with lead tracking, WhatsApp integration and follow-up management system.",

    stats: [
      "200+ leads generated",

      "3 properties sold",

      "Zero missed follow-ups",
    ],

    metrics: [
      {
        label:
          "Leads",

        value:
          "200+",
      },

      {
        label:
          "Listings",

        value: "54",
      },

      {
        label:
          "Sales",

        value: "3",
      },
    ],
  },
];

export default function Projects() {
  const [active, setActive] =
    useState(0);

  const project =
    projects[active];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#f8f8f6] dark:bg-[#050505] py-20 sm:py-28 lg:py-36 transition-colors duration-500"
    >
      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#000 1px, transparent 1px),
              linear-gradient(90deg, #000 1px, transparent 1px)
            `,
            backgroundSize:
              "70px 70px",
          }}
        />
      </div>

      {/* GLOW */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-lime-100/50 dark:bg-lime-500/10 blur-3xl" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl shadow-sm text-xs sm:text-sm font-medium text-black dark:text-white"
          >
            <Sparkles
              size={
                15
              }
            />
            Selected Work
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
            className="mt-6 text-[2.2rem] leading-[0.98] sm:text-6xl lg:text-7xl font-black tracking-[-0.04em] text-black dark:text-white"
          >
            Real projects
            <br />
            with measurable
            results.
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
            className="mt-6 text-[15px] sm:text-lg leading-[1.8] text-black/70 dark:text-white/70 max-w-2xl"
          >
            We build
            systems and
            websites that
            solve real
            business
            problems —
            from lead
            management to
            student portals
            and gym
            dashboards.
          </motion.p>
        </div>

        {/* MAIN */}

        <div className="mt-14 sm:mt-20 grid lg:grid-cols-[320px_1fr] gap-6 lg:gap-10 items-start">
          {/* LEFT */}

          <div className="lg:sticky lg:top-28 space-y-4 overflow-x-auto lg:overflow-visible flex lg:flex-col gap-4 lg:gap-0 pb-2 lg:pb-0">
            {projects.map(
              (
                item,
                index
              ) => (
                <button
                  key={
                    item.id
                  }
                  onClick={() =>
                    setActive(
                      index
                    )
                  }
                  className={`relative min-w-[260px] lg:min-w-0 w-full text-left rounded-[28px] p-5 border transition-all duration-300 backdrop-blur-xl ${
                    active ===
                    index
                      ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-2xl"
                      : "bg-white/80 dark:bg-white/[0.03] border-black/5 dark:border-white/10 hover:border-black/15 dark:hover:border-white/20"
                  }`}
                >
                  {active ===
                    index && (
                    <motion.div
                      layoutId="active-project"
                      className="absolute inset-0 rounded-[28px] bg-black dark:bg-white"
                    />
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${
                          active ===
                          index
                            ? "bg-white/10 dark:bg-black/10"
                            : "bg-black/5 dark:bg-white/5"
                        }`}
                      >
                        {
                          item.emoji
                        }
                      </div>

                      <div>
                        <p
                          className={`text-xs ${
                            active ===
                            index
                              ? "text-white/50 dark:text-black/50"
                              : "text-neutral-400 dark:text-neutral-500"
                          }`}
                        >
                          {
                            item.category
                          }
                        </p>

                        <h3 className="font-black text-lg tracking-tight leading-tight">
                          {
                            item.title
                          }
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`mt-5 flex items-center gap-2 text-sm ${
                        active ===
                        index
                          ? "text-white/60 dark:text-black/60"
                          : "text-neutral-500 dark:text-neutral-400"
                      }`}
                    >
                      📍{" "}
                      {
                        item.location
                      }
                    </div>
                  </div>
                </button>
              )
            )}
          </div>

          {/* RIGHT */}

          <AnimatePresence mode="wait">
            <motion.div
              key={
                project.id
              }
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.35,
              }}
            >
              {/* BROWSER */}

              <div className="rounded-[32px] sm:rounded-[36px] border border-black/5 dark:border-white/10 bg-white/80 dark:bg-neutral-950/90 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
                {/* TOP BAR */}

                <div className="h-14 border-b border-black/5 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.03] flex items-center px-5 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />

                  <div className="w-3 h-3 rounded-full bg-yellow-400" />

                  <div className="w-3 h-3 rounded-full bg-green-400" />

                  <div className="ml-4 text-xs text-neutral-400 dark:text-neutral-500 font-medium">
                    growupcraft
                    .vercel.app
                  </div>
                </div>

                {/* CONTENT */}

                <div className="p-5 sm:p-8 lg:p-10">
                  {/* TOP */}

                  <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-8">
                    <div className="max-w-2xl">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-100 dark:bg-lime-500/20 text-lime-800 dark:text-lime-300 text-sm font-semibold">
                        <CheckCircle2
                          size={
                            16
                          }
                        />

                        Live
                        Project
                      </div>

                      <h3 className="mt-6 text-[2rem] sm:text-5xl font-black tracking-[-0.04em] leading-[0.95] text-black dark:text-white">
                        {
                          project.title
                        }
                      </h3>

                      <p className="mt-5 text-[15px] sm:text-lg text-black/70 dark:text-white/70 leading-[1.8]">
                        {
                          project.description
                        }
                      </p>
                    </div>

                    {/* METRICS */}

                    <div className="grid grid-cols-3 gap-3 sm:gap-4 min-w-fit">
                      {project.metrics.map(
                        (
                          metric
                        ) => (
                          <div
                            key={
                              metric.label
                            }
                            className="rounded-2xl border border-black/5 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.03] px-4 sm:px-5 py-4 text-center backdrop-blur-xl"
                          >
                            <h4 className="text-xl sm:text-2xl font-black text-black dark:text-white">
                              {
                                metric.value
                              }
                            </h4>

                            <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                              {
                                metric.label
                              }
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* RESULTS */}

                  <div className="mt-10 sm:mt-12 grid sm:grid-cols-3 gap-4">
                    {project.stats.map(
                      (
                        stat,
                        index
                      ) => (
                        <div
                          key={
                            index
                          }
                          className="rounded-2xl border border-black/5 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.03] p-5 backdrop-blur-xl"
                        >
                          <div className="w-10 h-10 rounded-xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center mb-4">
                            <TrendingUp
                              size={
                                18
                              }
                            />
                          </div>

                          <p className="text-sm leading-[1.8] text-black/75 dark:text-white/70">
                            {
                              stat
                            }
                          </p>
                        </div>
                      )
                    )}
                  </div>

                  {/* CTA */}

                  <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4">
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
                      className="group w-full sm:w-auto h-14 px-7 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-semibold flex items-center justify-center gap-2 shadow-xl"
                    >
                      Discuss
                      Your
                      Business

                      <ArrowRight
                        size={
                          18
                        }
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </motion.a>

                    <div className="w-full sm:w-auto h-14 px-6 rounded-2xl border border-black/10 dark:border-white/10 flex items-center justify-center gap-3 text-sm text-black/70 dark:text-white/70 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl">
                      <Clock3
                        size={
                          16
                        }
                      />

                      Typical
                      delivery:
                      5–15
                      days
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}