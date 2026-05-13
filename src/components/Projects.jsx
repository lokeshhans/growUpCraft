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
  Globe,
  MapPin,
  Layers3,
  ExternalLink,
  Star,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

const projects = [
  {
    id: "gym",

    emoji: "💪",

    category:
      "Gym Management Software",

    title:
      "FitZone Gym Management System",

    location:
      "Palwal, Haryana",

    industry:
      "Fitness & Gym Industry",

    duration:
      "12 Days",

    technologies: [
      "React.js",

      "Node.js",

      "MongoDB",

      "Tailwind CSS",

      "WhatsApp API",
    ],

    liveUrl:
      "/projects/fitzone-gym-management-system",

    seoKeywords:
      "Gym management software India, React gym dashboard, membership management system",

    problem:
      "The gym was handling memberships, fee tracking and enquiries manually, causing missed renewals and slow follow-ups.",

    solution:
      "GrowUpCraft built a fast SEO-optimized React dashboard with automated WhatsApp reminders, revenue analytics and enquiry management.",

    description:
      "Custom React.js gym management software built for fitness businesses to manage memberships, payments, enquiries and member engagement from one dashboard.",

    testimonial:
      "GrowUpCraft completely transformed our workflow and helped us automate everything from memberships to WhatsApp follow-ups.",

    client:
      "FitZone Gym",

    stats: [
      "42% increase in gym enquiries",

      "3.2s → 0.9s website load speed",

      "2+ hours/day manual work reduced",
    ],

    metrics: [
      {
        label:
          "Members",

        value: "248+",
      },

      {
        label:
          "Monthly Leads",

        value: "120+",
      },

      {
        label:
          "Renewals",

        value: "92%",
      },
    ],
  },

  {
    id: "school",

    emoji: "🏫",

    category:
      "School Website Development",

    title:
      "Panchwati Paradise School Website",

    location:
      "Palwal, Haryana",

    industry:
      "Education Industry",

    duration:
      "9 Days",

    technologies: [
      "React.js",

      "Framer Motion",

      "Tailwind CSS",

      "Node.js",
    ],

    liveUrl:
      "/projects/panchwati-school-website",

    seoKeywords:
      "School website development Haryana, preschool website design, React school website",

    problem:
      "The school lacked a modern online presence and parents were unable to access admission details easily.",

    solution:
      "We designed a premium mobile-friendly school website with admission enquiry forms, WhatsApp integration and SEO optimization.",

    description:
      "Modern preschool and school website designed for better admissions, parent engagement and local SEO visibility.",

    testimonial:
      "Admissions became easier and parents now find all information online instantly.",

    client:
      "Panchwati Paradise Play School",

    stats: [
      "3x increase in online enquiries",

      "Improved Google visibility",

      "Higher parent engagement",
    ],

    metrics: [
      {
        label:
          "Admissions",

        value: "60+",
      },

      {
        label:
          "Visitors",

        value: "5k+",
      },

      {
        label:
          "Bounce Rate",

        value: "-38%",
      },
    ],
  },

  {
    id: "property",

    emoji: "🏠",

    category:
      "Property Lead System",

    title:
      "Real Estate Lead Management Platform",

    location:
      "Delhi NCR",

    industry:
      "Real Estate Industry",

    duration:
      "15 Days",

    technologies: [
      "React.js",

      "Node.js",

      "MongoDB",

      "Cloudinary",

      "WhatsApp Integration",
    ],

    liveUrl:
      "/projects/property-lead-management-system",

    seoKeywords:
      "Property website development India, real estate CRM, lead management software",

    problem:
      "The business was losing leads due to delayed responses and no centralized enquiry tracking system.",

    solution:
      "GrowUpCraft created a real estate lead management platform with instant WhatsApp follow-ups and centralized lead tracking.",

    description:
      "SEO-friendly property listing and lead management platform built to improve conversions and automate follow-ups.",

    testimonial:
      "We started converting more property leads because follow-ups became instant and organized.",

    client:
      "RealPal Properties",

    stats: [
      "200+ monthly property leads",

      "Zero missed enquiries",

      "Faster lead conversion process",
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

        value: "54+",
      },

      {
        label:
          "Conversions",

        value: "18%",
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
    <>
      {/* SEO SCHEMA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context":
              "https://schema.org",

            "@type":
              "ItemList",

            itemListElement:
              projects.map(
                (
                  item,
                  index
                ) => ({
                  "@type":
                    "CreativeWork",

                  position:
                    index + 1,

                  name:
                    item.title,

                  description:
                    item.description,

                  creator: {
                    "@type":
                      "Organization",

                    name:
                      "GrowUpCraft",
                  },
                })
              ),
          }),
        }}
      />

      <section
        id="projects"
        className="relative overflow-hidden bg-[#f8f8f6] dark:bg-[#050505] py-12 sm:py-24 lg:py-32 transition-colors duration-500"
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

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-lime-100/50 dark:bg-lime-500/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0 overflow-hidden">
          {/* HEADER */}

          <div className="max-w-4xl">
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
                size={12}
              />

              Real Client
              Projects
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
              className="mt-5 text-[1.9rem] leading-[1] xs:text-[2.2rem] sm:text-5xl lg:text-6xl font-black tracking-[-0.05em] text-black dark:text-white"
            >
              Real business
              websites &
              software with
              measurable
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
              className="mt-5 text-sm sm:text-lg leading-[1.7] sm:leading-[1.9] text-black/70 dark:text-white/70 max-w-3xl"
            >
              GrowUpCraft
              builds SEO-
              optimized
              React.js
              websites,
              dashboards and
              business
              systems for
              schools, gyms,
              startups and
              local
              businesses
              across Haryana
              and India.
            </motion.p>
          </div>

          {/* MAIN */}

          <div className="mt-10 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-5 lg:gap-6 items-start min-w-0">
            {/* LEFT */}

            <div
              className="
              lg:sticky
              lg:top-20
              flex
              lg:flex-col
              gap-3
              overflow-x-auto
              scrollbar-hide
              pb-2
              snap-x
              snap-mandatory
              lg:overflow-visible
            "
            >
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
                    className={`relative snap-start flex-shrink-0 min-w-[85vw] sm:min-w-[320px] lg:min-w-0 w-full text-left rounded-[28px] p-5 border transition-all duration-300 backdrop-blur-xl ${
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

                    <div className="relative z-10 min-w-0">
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-12 h-12 flex-shrink-0 rounded-2xl flex items-center justify-center text-2xl ${
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

                        <div className="min-w-0">
                          <p
                            className={`text-xs ${
                              active ===
                              index
                                ? "text-white/60 dark:text-black/60"
                                : "text-neutral-400 dark:text-neutral-500"
                            }`}
                          >
                            {
                              item.category
                            }
                          </p>

                          <h3 className="font-black text-sm leading-tight break-words">
                            {
                              item.title
                            }
                          </h3>
                        </div>
                      </div>

                      <div
                        className={`mt-4 flex items-center gap-2 text-sm ${
                          active ===
                          index
                            ? "text-white/60 dark:text-black/60"
                            : "text-neutral-500 dark:text-neutral-400"
                        }`}
                      >
                        <MapPin
                          size={14}
                          className="flex-shrink-0"
                        />

                        <span className="break-words">
                          {
                            item.location
                          }
                        </span>
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
                className="w-full min-w-0 overflow-hidden"
              >
                <div className="rounded-[28px] sm:rounded-[34px] border border-black/5 dark:border-white/10 bg-white/80 dark:bg-neutral-950/90 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
                  {/* TOP BAR */}

                  <div className="h-14 border-b border-black/5 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.03] flex items-center px-4 sm:px-5 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />

                    <div className="w-3 h-3 rounded-full bg-yellow-400" />

                    <div className="w-3 h-3 rounded-full bg-green-400" />

                    <div className="ml-2 text-xs text-neutral-400 dark:text-neutral-500 font-medium truncate">
                      growupcraft.com
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="p-4 xs:p-5 sm:p-8 lg:p-10">
                    {/* BADGE */}

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-100 dark:bg-lime-500/20 text-lime-800 dark:text-lime-300 text-xs sm:text-sm font-semibold">
                      <CheckCircle2
                        size={14}
                      />

                      Verified
                      Client
                      Project
                    </div>

                    {/* TITLE */}

                    <h3 className="mt-5 text-[1.8rem] leading-[1] sm:text-5xl font-black tracking-[-0.05em] text-black dark:text-white break-words">
                      {
                        project.title
                      }
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-5 text-sm sm:text-lg text-black/70 dark:text-white/70 leading-[1.7] sm:leading-[1.9] max-w-3xl">
                      {
                        project.description
                      }
                    </p>

                    {/* INFO */}

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="rounded-2xl border border-black/5 dark:border-white/10 p-5 bg-neutral-50 dark:bg-white/[0.03]">
                        <div className="flex items-center gap-2 text-sm text-black/55 dark:text-white/55">
                          <Layers3
                            size={15}
                          />

                          Industry
                        </div>

                        <h4 className="mt-2 text-lg font-bold text-black dark:text-white break-words">
                          {
                            project.industry
                          }
                        </h4>
                      </div>

                      <div className="rounded-2xl border border-black/5 dark:border-white/10 p-5 bg-neutral-50 dark:bg-white/[0.03]">
                        <div className="flex items-center gap-2 text-sm text-black/55 dark:text-white/55">
                          <Clock3
                            size={15}
                          />

                          Duration
                        </div>

                        <h4 className="mt-2 text-lg font-bold text-black dark:text-white">
                          {
                            project.duration
                          }
                        </h4>
                      </div>

                      <div className="rounded-2xl border border-black/5 dark:border-white/10 p-5 bg-neutral-50 dark:bg-white/[0.03]">
                        <div className="flex items-center gap-2 text-sm text-black/55 dark:text-white/55">
                          <Globe
                            size={15}
                          />

                          Location
                        </div>

                        <h4 className="mt-2 text-lg font-bold text-black dark:text-white break-words">
                          {
                            project.location
                          }
                        </h4>
                      </div>
                    </div>

                    {/* PROBLEM */}

                    <div className="mt-10">
                      <h4 className="text-xl font-black text-black dark:text-white">
                        Business
                        Problem
                      </h4>

                      <p className="mt-3 text-black/70 dark:text-white/70 leading-[1.7] sm:leading-[1.9]">
                        {
                          project.problem
                        }
                      </p>
                    </div>

                    {/* SOLUTION */}

                    <div className="mt-8">
                      <h4 className="text-xl font-black text-black dark:text-white">
                        GrowUpCraft
                        Solution
                      </h4>

                      <p className="mt-3 text-black/70 dark:text-white/70 leading-[1.7] sm:leading-[1.9]">
                        {
                          project.solution
                        }
                      </p>
                    </div>

                    {/* TECH */}

                    <div className="mt-8">
                      <h4 className="text-xl font-black text-black dark:text-white">
                        Technologies
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-3">
                        {project.technologies.map(
                          (
                            item
                          ) => (
                            <span
                              key={
                                item
                              }
                              className="px-3 sm:px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs sm:text-sm font-medium"
                            >
                              {
                                item
                              }
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    {/* METRICS */}

                    <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                      {project.metrics.map(
                        (
                          metric
                        ) => (
                          <div
                            key={
                              metric.label
                            }
                            className="rounded-2xl border border-black/5 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.03] p-4 sm:p-5 text-center"
                          >
                            <h4 className="text-2xl sm:text-3xl font-black text-black dark:text-white break-words">
                              {
                                metric.value
                              }
                            </h4>

                            <p className="mt-2 text-xs sm:text-sm text-black/50 dark:text-white/50">
                              {
                                metric.label
                              }
                            </p>
                          </div>
                        )
                      )}
                    </div>

                    {/* RESULTS */}

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      {project.stats.map(
                        (
                          stat,
                          index
                        ) => (
                          <div
                            key={
                              index
                            }
                            className="flex gap-4 rounded-2xl border border-black/5 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.03] p-5"
                          >
                            <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center">
                              <TrendingUp
                                size={18}
                              />
                            </div>

                            <p className="text-sm leading-[1.7] text-black/75 dark:text-white/70 break-words">
                              {
                                stat
                              }
                            </p>
                          </div>
                        )
                      )}
                    </div>

                    {/* TESTIMONIAL */}

                    <div className="mt-10 rounded-3xl border border-black/5 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.03] p-5 sm:p-6">
                      <div className="flex items-center gap-1">
                        {Array.from({
                          length: 5,
                        }).map(
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

                      <p className="mt-4 text-base sm:text-lg leading-[1.8] text-black/80 dark:text-white/75">
                        "
                        {
                          project.testimonial
                        }
                        "
                      </p>

                      <p className="mt-4 text-sm font-semibold text-black dark:text-white">
                        —{" "}
                        {
                          project.client
                        }
                      </p>
                    </div>

                    {/* CTA */}

                    <div className="mt-12 flex flex-col lg:flex-row gap-4">
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
                        className="group w-full lg:w-auto h-14 px-8 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-semibold flex items-center justify-center gap-3 shadow-xl"
                      >
                        Start Your
                        Project

                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </motion.a>

                      <Link
                        to={
                          project.liveUrl
                        }
                        className="w-full lg:w-auto h-14 px-8 rounded-2xl border border-black/10 dark:border-white/10 flex items-center justify-center gap-3 text-sm text-black/70 dark:text-white/70 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl"
                      >
                        View Case
                        Study

                        <ExternalLink
                          size={16}
                        />
                      </Link>
                    </div>

                    {/* SEO */}

                    <div className="sr-only">
                      {
                        project.seoKeywords
                      }
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </section>
    </>
  );
}