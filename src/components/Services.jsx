import React, { useState } from "react";
import newdeep from "../assets/newdeep.webp";
import vidyadham from "../assets/vidyadham.webp";

import { motion, AnimatePresence } from "framer-motion";

import {
  Globe,
  LayoutDashboard,
  Users,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const services = [
  {
    icon: Globe,

    title: "School Website",

    tag: "Admission Focused",

    gradient: "from-lime-500/20 via-green-500/10 to-transparent",

    description:
      "Modern school websites designed to increase admissions, build trust and provide a better experience for parents and students.",

    includes: [
      "Admission enquiry forms",
      "Mobile responsive design",
      "Gallery & notice board",
      "WhatsApp integration",
    ],

    price: "₹14k+",

    result: "Increase school enquiries online",
  },

  {
    icon: Globe,

    title: "Business Website",

    tag: "Online Presence",

    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",

    description:
      "Professional business websites that help brands build trust and generate more customers online.",

    includes: [
      "SEO optimized",
      "Fast loading speed",
      "Modern UI/UX",
      "Mobile-first layout",
    ],

    price: "₹8k+",

    result: "Build stronger trust online",
  },

  {
    icon: Users,

    title: "Gym & Fitness Website",

    tag: "Fitness Brand",

    gradient: "from-orange-500/20 via-yellow-500/10 to-transparent",

    description:
      "Modern fitness websites for gyms, trainers and fitness brands with premium visuals and lead generation features.",

    includes: [
      "Membership plans",
      "Trainer showcase",
      "Transformation gallery",
      "WhatsApp CTA",
    ],

    price: "₹10k+",

    result: "Generate more memberships",
  },

  {
    icon: LayoutDashboard,

    title: "Admin Dashboard",

    tag: "Management System",

    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",

    description:
      "Custom dashboards and management systems for handling business operations, records and analytics efficiently.",

    includes: [
      "Secure login system",
      "Analytics dashboard",
      "Role management",
      "Database integration",
    ],

    price: "₹18k+",

    result: "Save time with automation",
  },

  {
    icon: RefreshCw,

    title: "Website Redesign",

    tag: "Modern Upgrade",

    gradient: "from-neutral-500/20 via-zinc-500/10 to-transparent",

    description:
      "Transform outdated websites into modern, responsive and conversion-focused digital experiences.",

    includes: [
      "Modern UI redesign",
      "Performance optimization",
      "Responsive layout",
      "SEO improvements",
    ],

    price: "₹6k+",

    result: "Improve credibility instantly",
  },
];

const projects = [
  {
    title: "New Deep School",

    category: "School Website",

    link: "https://newdeepschool.vercel.app",

    image: newdeep,

    description:
      "Modern admission-focused school website with responsive design and WhatsApp integration.",

    features: [
      "Responsive Design",
      "WhatsApp Integration",
      "Gallery & Notice Board",
      "Fast Performance",
    ],
  },

  {
    title: "Vidya Dham Mandir",

    category: "Educational Website",

    link: "https://vidyadhammandir.vercel.app",

    image: vidyadham,

    description:
      "Professional school website designed for better branding, communication and parent engagement.",

    features: [
      "Modern UI/UX",
      "Mobile Optimized",
      "Fast Loading",
      "Admission Focused",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  const service = services[active];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f8f8f6] dark:bg-[#050505] text-black dark:text-white py-16 sm:py-20 lg:py-28 transition-colors duration-500"
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
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* GLOW */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-lime-200/30 dark:bg-lime-500/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}

        <div className="max-w-3xl">
          <motion.div
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
            <Sparkles size={14} />
            Our Services
          </motion.div>

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
            className="mt-6 text-[2.4rem] sm:text-5xl lg:text-7xl font-black tracking-[-0.05em] leading-[0.95]"
          >
            Modern digital solutions for schools & businesses.
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
            className="mt-5 text-sm sm:text-lg leading-[1.9] text-black/70 dark:text-white/70 max-w-2xl"
          >
            We build modern websites, dashboards and digital systems that help
            brands look professional, generate leads and grow online.
          </motion.p>
        </div>

        {/* MAIN */}

        <div className="mt-12 grid lg:grid-cols-[320px_1fr] gap-6 lg:gap-10">
          {/* LEFT */}

          <div className="space-y-3 lg:sticky lg:top-28 overflow-x-auto lg:overflow-visible flex lg:flex-col gap-3 lg:gap-0 pb-2 lg:pb-0">
            {services.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActive(index)}
                className={`group relative min-w-[240px] lg:min-w-0 w-full rounded-[28px] p-5 text-left border transition-all duration-300 overflow-hidden backdrop-blur-2xl ${
                  active === index
                    ? "border-lime-300/30 bg-white dark:bg-neutral-950 shadow-[0_20px_80px_rgba(163,230,53,0.12)]"
                    : "border-black/6 dark:border-white/10 bg-white/70 dark:bg-white/[0.03]"
                }`}
              >
                {active === index && (
                  <motion.div
                    layoutId="active-service"
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                  />
                )}

                <div className="relative z-10 flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      active === index
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "bg-black/[0.04] dark:bg-white/[0.06]"
                    }`}
                  >
                    <item.icon size={22} />
                  </div>

                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
                      {item.tag}
                    </p>

                    <h3 className="mt-2 font-black text-lg leading-tight">
                      {item.title}
                    </h3>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm text-black/45 dark:text-white/45">
                        Starting
                      </span>

                      <span className="text-xl font-black">{item.price}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT */}

          <AnimatePresence mode="wait">
            <motion.div
              key={service.title}
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
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40`}
              />

              <div className="relative p-6 sm:p-10 border-b border-black/6 dark:border-white/10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/[0.06] border border-black/5 dark:border-white/10 text-xs font-semibold">
                  <Sparkles size={12} />

                  {service.tag}
                </div>

                <h3 className="mt-5 text-[2rem] sm:text-5xl lg:text-6xl font-black tracking-[-0.05em] leading-[0.95]">
                  {service.title}
                </h3>

                <p className="mt-5 text-sm sm:text-lg leading-[1.9] text-black/70 dark:text-white/70 max-w-2xl">
                  {service.description}
                </p>

                <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-black text-white dark:bg-white dark:text-black px-6 py-4">
                  <span className="text-sm opacity-70">Starting from</span>

                  <span className="text-3xl font-black">{service.price}</span>
                </div>
              </div>

              <div className="relative p-6 sm:p-10">
                <div className="rounded-[28px] bg-lime-100/80 dark:bg-lime-500/10 border border-lime-300/20 dark:border-lime-500/10 p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center">
                      <CheckCircle2 size={22} />
                    </div>

                    <div>
                      <p className="text-sm text-black/50 dark:text-white/50">
                        Expected Result
                      </p>

                      <h4 className="mt-2 text-2xl sm:text-4xl font-black leading-tight">
                        {service.result}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {service.includes.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                      className="rounded-2xl border border-black/6 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] px-5 py-4 flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-lime-500" />

                      <span className="text-sm sm:text-base text-black/75 dark:text-white/75">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <motion.a
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    href={`https://wa.me/918930296001?text=Hi%2C%20I%20want%20${encodeURIComponent(
                      service.title,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full sm:w-auto h-14 px-8 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-semibold flex items-center justify-center gap-2"
                  >
                    Discuss Your Project
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.a>

                  <div className="w-full sm:w-auto h-14 px-6 rounded-2xl border border-black/8 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] flex items-center justify-center text-sm text-black/55 dark:text-white/55">
                    Typical delivery: 5–15 days
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PROJECTS */}

        <div className="mt-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] text-xs sm:text-sm font-medium">
              <Sparkles size={14} />
              Featured Projects
            </span>

            <h3 className="mt-5 text-[2.2rem] sm:text-5xl lg:text-6xl font-black tracking-[-0.05em] leading-[0.95]">
              Real projects built for real clients.
            </h3>

            <p className="mt-5 text-sm sm:text-lg leading-[1.9] text-black/70 dark:text-white/70 max-w-2xl">
              We create modern, responsive and conversion-focused digital
              experiences for schools and growing businesses.
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{
                  y: -6,
                }}
                className="group rounded-[34px] overflow-hidden border border-black/6 dark:border-white/10 bg-white/80 dark:bg-neutral-950/90 backdrop-blur-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[240px] sm:h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-black text-white text-xs font-semibold">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h4 className="text-2xl sm:text-4xl font-black tracking-[-0.04em] leading-tight">
                    {project.title}
                  </h4>

                  <p className="mt-4 text-sm sm:text-lg leading-[1.9] text-black/70 dark:text-white/70">
                    {project.description}
                  </p>

                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {project.features.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2
                          size={18}
                          className="text-lime-600 dark:text-lime-400"
                        />

                        <span className="text-sm sm:text-base text-black/75 dark:text-white/75">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 h-14 px-8 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-semibold"
                  >
                    View Live Project
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
