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

    gradient:
      "from-lime-200/30 via-lime-100/10 to-transparent dark:from-lime-500/10 dark:to-lime-400/5",
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

    gradient:
      "from-blue-200/30 via-cyan-100/10 to-transparent dark:from-blue-500/10 dark:to-cyan-400/5",
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

    gradient:
      "from-orange-200/30 via-yellow-100/10 to-transparent dark:from-orange-500/10 dark:to-yellow-400/5",
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
      className="relative overflow-hidden bg-[#F7F8F4] dark:bg-[#050505] py-20 sm:py-28 lg:py-40 transition-colors duration-500"
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

      {/* MAIN GLOW */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[850px] rounded-full bg-lime-100/40 dark:bg-lime-500/10 blur-3xl" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-2xl shadow-sm text-xs sm:text-sm font-medium text-black dark:text-white"
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
            className="mt-7 text-[2.4rem] leading-[0.96] sm:text-6xl lg:text-[88px] font-black tracking-[-0.05em] text-black dark:text-white"
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
            className="mt-6 text-[15px] sm:text-xl leading-[1.8] text-black/70 dark:text-white/70 max-w-2xl"
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

        <div className="mt-16 sm:mt-20 grid lg:grid-cols-[340px_1fr] gap-6 lg:gap-10 items-start">
          {/* LEFT */}

          <div className="space-y-4 lg:sticky lg:top-28 overflow-x-auto lg:overflow-visible flex lg:flex-col gap-4 lg:gap-0 pb-2 lg:pb-0">
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
                  className={`group relative min-w-[280px] lg:min-w-0 w-full rounded-[32px] p-5 text-left border transition-all duration-500 overflow-hidden backdrop-blur-2xl ${
                    active ===
                    index
                      ? "border-lime-300/30 bg-white dark:bg-neutral-950 shadow-[0_20px_80px_rgba(163,230,53,0.12)]"
                      : "border-black/6 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] hover:bg-white dark:hover:bg-white/[0.05]"
                  }`}
                >
                  {/* ACTIVE GLOW */}

                  {active ===
                    index && (
                    <motion.div
                      layoutId="active-project"
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                    />
                  )}

                  <div className="relative z-10 flex items-start gap-4">
                    {/* ICON */}

                    <div
                      className={`w-14 h-14 rounded-[22px] flex items-center justify-center text-3xl transition-all ${
                        active ===
                        index
                          ? "bg-black text-white dark:bg-white dark:text-black shadow-2xl"
                          : "bg-gradient-to-br from-lime-200 to-lime-100 dark:from-lime-500/20 dark:to-lime-400/10 border border-lime-200/40 dark:border-lime-500/20"
                      }`}
                    >
                      {
                        item.emoji
                      }
                    </div>

                    {/* CONTENT */}

                    <div className="flex-1">
                      <p
                        className={`text-[11px] uppercase tracking-[0.22em] ${
                          active ===
                          index
                            ? "text-black/50 dark:text-white/50"
                            : "text-black/35 dark:text-white/35"
                        }`}
                      >
                        {
                          item.category
                        }
                      </p>

                      <h3 className="mt-2 font-black text-xl tracking-tight leading-tight text-black dark:text-white">
                        {
                          item.title
                        }
                      </h3>

                      <div
                        className={`mt-5 flex items-center gap-2 text-sm ${
                          active ===
                          index
                            ? "text-black/60 dark:text-white/60"
                            : "text-black/45 dark:text-white/45"
                        }`}
                      >
                        📍{" "}
                        {
                          item.location
                        }
                      </div>
                    </div>
                  </div>

                  {/* BORDER */}

                  <div className="absolute inset-0 rounded-[32px] border border-lime-300/0 group-hover:border-lime-300/30 transition-all duration-500 pointer-events-none" />
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
              className="relative"
            >
              {/* BROWSER */}

              <div className="relative overflow-hidden rounded-[40px] border border-black/6 dark:border-white/10 bg-white/80 dark:bg-neutral-950/90 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
                {/* GRADIENT */}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 pointer-events-none`}
                />

                {/* TOP BAR */}

                <div className="relative h-14 border-b border-black/6 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] flex items-center px-5 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />

                  <div className="w-3 h-3 rounded-full bg-yellow-400" />

                  <div className="w-3 h-3 rounded-full bg-green-400" />

                  <div className="ml-4 text-xs text-black/30 dark:text-white/30 font-medium">
                    growupcraft.com
                  </div>
                </div>

                {/* CONTENT */}

                <div className="relative p-5 sm:p-8 lg:p-10">
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

                      <h3 className="mt-6 text-[2rem] sm:text-5xl lg:text-6xl font-black tracking-[-0.05em] leading-[0.95] text-black dark:text-white">
                        {
                          project.title
                        }
                      </h3>

                      <p className="mt-6 text-[15px] sm:text-xl leading-[1.8] text-black/70 dark:text-white/70">
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
                            className="rounded-[24px] border border-black/6 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl px-4 sm:px-5 py-4 text-center"
                          >
                            <h4 className="text-2xl sm:text-3xl font-black tracking-tight text-black dark:text-white">
                              {
                                metric.value
                              }
                            </h4>

                            <p className="text-[11px] sm:text-xs text-black/45 dark:text-white/45 mt-2">
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
                        <motion.div
                          key={
                            index
                          }
                          whileHover={{
                            y: -4,
                          }}
                          className="group relative overflow-hidden rounded-[28px] border border-black/6 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl p-5 transition-all duration-500"
                        >
                          {/* GRADIENT */}

                          <div className="absolute inset-0 bg-gradient-to-br from-lime-100/30 via-transparent to-blue-100/10 dark:from-lime-500/10 dark:to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                          <div className="relative z-10">
                            <div className="w-11 h-11 rounded-2xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center shadow-xl mb-5">
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
                        </motion.div>
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
                      className="group w-full sm:w-auto h-14 px-8 rounded-2xl bg-gradient-to-r from-black to-neutral-800 dark:from-white dark:to-neutral-200 text-white dark:text-black font-semibold flex items-center justify-center gap-2 shadow-2xl"
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

                    <div className="w-full sm:w-auto h-14 px-6 rounded-2xl border border-black/8 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl flex items-center justify-center gap-3 text-sm text-black/55 dark:text-white/55">
                      <Clock3
                        size={
                          16
                        }
                      />

                      Typical
                      delivery:
                      5–15 days
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