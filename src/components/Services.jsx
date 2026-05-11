import React, {
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Globe,
  LayoutDashboard,
  Users,
  CalendarCheck,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Globe,

    title:
      "Business Website",

    tag: "Online Presence",

    gradient:
      "from-blue-500/20 via-cyan-500/10 to-transparent",

    description:
      "Modern websites that help your business look professional and generate more enquiries online.",

    includes: [
      "SEO optimized",
      "WhatsApp integration",
      "Mobile-first design",
      "Fast loading performance",
    ],

    price: "₹8k+",

    result:
      "Build stronger trust online",
  },

  {
    icon:
      LayoutDashboard,

    title:
      "Custom Web Application",

    tag:
      "Dashboard System",

    gradient:
      "from-lime-500/20 via-green-500/10 to-transparent",

    description:
      "Custom admin panels and business systems for managing data, operations and workflows efficiently.",

    includes: [
      "Login system",
      "Analytics dashboard",
      "Role-based access",
      "Secure database",
    ],

    price: "₹18k+",

    result:
      "Save hours of manual work",
  },

  {
    icon: Users,

    title:
      "Lead Management System",

    tag: "Sales Tracking",

    gradient:
      "from-orange-500/20 via-yellow-500/10 to-transparent",

    description:
      "Track leads, follow-ups and enquiries from one organized dashboard without losing potential customers.",

    includes: [
      "Lead pipeline",
      "WhatsApp alerts",
      "Follow-up reminders",
      "Status tracking",
    ],

    price: "₹12k+",

    result:
      "Never miss important leads",
  },

  {
    icon:
      CalendarCheck,

    title:
      "Booking System",

    tag: "Automation",

    gradient:
      "from-pink-500/20 via-purple-500/10 to-transparent",

    description:
      "Online booking and enquiry systems that automate appointments and customer scheduling.",

    includes: [
      "Booking calendar",
      "Automated notifications",
      "WhatsApp updates",
      "Payment integration",
    ],

    price: "₹10k+",

    result:
      "Reduce manual coordination",
  },

  {
    icon: RefreshCw,

    title:
      "Website Redesign",

    tag: "Modern Upgrade",

    gradient:
      "from-neutral-500/20 via-zinc-500/10 to-transparent",

    description:
      "Upgrade outdated websites into modern, responsive and conversion-focused digital experiences.",

    includes: [
      "Modern UI redesign",
      "Performance optimization",
      "Responsive layout",
      "SEO improvements",
    ],

    price: "₹6k+",

    result:
      "Improve credibility instantly",
  },
];

export default function Services() {
  const [active, setActive] =
    useState(0);

  const service =
    services[active];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f8f8f6] dark:bg-[#050505] text-black dark:text-white py-2 sm:py-10 lg:py-20 transition-colors duration-500"
    >
      {/* BACKGROUND GRID */}

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

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[850px] rounded-full bg-lime-200/40 dark:bg-lime-500/10 blur-3xl" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl text-xs sm:text-sm font-medium shadow-sm"
          >
            <Sparkles
              size={
                15
              }
            />
            Services
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
            className="mt-6 text-[2rem] leading-[1.02] sm:text-5xl lg:text-[80px] font-black tracking-[-0.05em]"
          >
            Solutions built
            <br />
            for modern
            businesses.
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
            We create
            websites,
            dashboards and
            automation
            systems that
            help local
            businesses
            operate faster,
            look more
            professional and
            grow online.
          </motion.p>
        </div>

        {/* MAIN */}

        <div className="mt-6 sm:mt-10 grid lg:grid-cols-[340px_1fr] gap-6 lg:gap-10 items-start">
          {/* LEFT */}

          <div className="space-y-2 lg:sticky lg:top-28 overflow-x-auto lg:overflow-visible flex lg:flex-col gap-2 lg:gap-0 pb-2 lg:pb-0">
            {services.map(
              (
                item,
                index
              ) => (
                <button
                  key={
                    item.title
                  }
                  onClick={() =>
                    setActive(
                      index
                    )
                  }
                  className={`group relative min-w-[220px] lg:min-w-0 w-full rounded-[30px] p-2 text-left border transition-all duration-500 overflow-hidden backdrop-blur-2xl ${
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
                      layoutId="active-service"
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                    />
                  )}

                  <div className="relative z-10 flex items-start gap-2">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
                        active ===
                        index
                          ? "bg-black text-white dark:bg-white dark:text-black shadow-xl"
                          : "bg-black/[0.04] dark:bg-white/[0.06]"
                      }`}
                    >
                      <item.icon
                        size={
                          20
                        }
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-[8px] uppercase tracking-[0.25em] text-black/35 dark:text-white/40 mb-1">
                        {
                          item.tag
                        }
                      </p>

                      <h3 className="font-black text-sm tracking-tight leading-tight">
                        {
                          item.title
                        }
                      </h3>

                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-sm text-black/40 dark:text-white/40">
                          Starting
                        </span>

                        <span className="text-lg font-black">
                          {
                            item.price
                          }
                        </span>
                      </div>
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
                service.title
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
              className="relative rounded-[34px] sm:rounded-[40px] border border-black/6 dark:border-white/10 bg-white/80 dark:bg-neutral-950/90 backdrop-blur-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.06)]"
            >
              {/* COLOR BG */}

              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40 pointer-events-none`}
              />

              {/* TOP BAR */}

              <div className="relative h-10 border-b border-black/6 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] flex items-center px-5 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />

                <div className="w-3 h-3 rounded-full bg-yellow-400" />

                <div className="w-3 h-3 rounded-full bg-green-400" />

                <div className="ml-4 text-xs text-black/30 dark:text-white/30 font-medium">
                  growupcraft.com
                </div>
              </div>

              {/* TOP */}

              <div className="relative border-b border-black/6 dark:border-white/10 p-5 sm:p-8 lg:p-10">
                <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-2">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/[0.06] border border-black/5 dark:border-white/10 backdrop-blur-xl text-xs font-semibold">
                      <Sparkles
                        size={
                          12
                        }
                      />

                      {
                        service.tag
                      }
                    </div>

                    <h3 className="mt-4 text-[1.7rem] sm:text-5xl lg:text-6xl font-black tracking-[-0.05em] leading-[0.95]">
                      {
                        service.title
                      }
                    </h3>

                    <p className="mt-4 text-[12px] sm:text-xl leading-[1.2] text-black/70 dark:text-white/70">
                      {
                        service.description
                      }
                    </p>
                  </div>

                  {/* PRICE */}

                  <div className="rounded-[30px] bg-black text-white dark:bg-white dark:text-black px-7 py-2 sm:px-6 sm:py-7 min-w-fit shadow-2xl">
                    <p className="text-xs opacity-60">
                      Starting
                      from
                    </p>

                    <h4 className="mt-1 text-2xl sm:text-4xl font-black tracking-tight">
                      {
                        service.price
                      }
                    </h4>
                  </div>
                </div>
              </div>

              {/* BODY */}

              <div className="relative p-5 sm:p-8 lg:p-10">
                {/* RESULT */}

                <div className="rounded-[28px] bg-lime-100/80 dark:bg-lime-500/10 border border-lime-300/20 dark:border-lime-500/10 p-4 sm:p-7 backdrop-blur-xl">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center shadow-xl">
                      <CheckCircle2
                        size={
                          20
                        }
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-black/50 dark:text-white/50">
                        Expected
                        Result
                      </p>

                      <h4 className="mt-1 text-xl sm:text-3xl font-black tracking-tight leading-tight">
                        {
                          service.result
                        }
                      </h4>
                    </div>
                  </div>
                </div>

                {/* FEATURES */}

                <div className="mt-4 sm:mt-6 grid sm:grid-cols-2 gap-2">
                  {service.includes.map(
                    (
                      item,
                      index
                    ) => (
                      <motion.div
                        key={
                          item
                        }
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay:
                            index *
                            0.05,
                        }}
                        className="rounded-2xl border border-black/6 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl px-5 py-2 flex items-center gap-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-lime-500" />

                        <span className="text-black/75 dark:text-white/75 text-sm leading-relaxed">
                          {
                            item
                          }
                        </span>
                      </motion.div>
                    )
                  )}
                </div>

                {/* CTA */}

                <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-2">
                  <motion.a
                    whileHover={{
                      scale: 1.03,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    href={`https://wa.me/918930296001?text=Hi%2C%20I%20want%20${encodeURIComponent(
                      service.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full sm:w-auto h-14 px-8 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-semibold flex items-center justify-center gap-2 shadow-2xl"
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

                  <div className="w-full sm:w-auto h-14 px-6 rounded-2xl border border-black/8 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-sm text-black/55 dark:text-white/55">
                    Typical
                    delivery:
                    5–15 days
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