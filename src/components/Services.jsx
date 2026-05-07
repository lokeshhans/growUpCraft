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
    icon: LayoutDashboard,

    title:
      "Custom Web Application",

    tag:
      "Dashboard System",

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
    icon: CalendarCheck,

    title:
      "Booking System",

    tag: "Automation",

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
  className="relative overflow-hidden bg-[#f8f8f6] text-black py-32 lg:py-40 [transform-style:preserve-3d] perspective-[2000px]"
>
  {/* BACKGROUND GRID */}
  <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,.06) 1px, transparent 1px)
        `,
        backgroundSize: "70px 70px",
      }}
    />
  </div>

  {/* HERO GLOW */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[850px] rounded-full bg-lime-200/40 blur-3xl" />

  {/* EXTRA GLOW */}
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-black/[0.03] blur-3xl" />

  {/* NOISE */}
  <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />

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
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white/80 backdrop-blur-xl text-sm font-medium shadow-sm"
      >
        🛠 Services
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
        className="mt-8 text-5xl sm:text-7xl lg:text-[88px] font-black tracking-[-0.04em] leading-[0.9]"
      >
        Solutions built
        <br />
        for real businesses.
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
        className="mt-7 text-xl leading-relaxed text-black/60 max-w-2xl"
      >
        We create websites, systems and
        digital products that improve
        operations, generate leads and help
        businesses grow online.
      </motion.p>
    </div>

    {/* MAIN */}
    <div className="mt-24 grid lg:grid-cols-[340px_1fr] gap-10 items-start">
      {/* LEFT */}
      <div className="space-y-4 lg:sticky lg:top-28">
        {services.map(
          (item, index) => (
            <button
              key={item.title}
              onClick={() =>
                setActive(index)
              }
              className={`group relative w-full rounded-[32px] p-5 text-left border transition-all duration-300 overflow-hidden ${
                active === index
                  ? "border-lime-300/40 bg-white shadow-[0_20px_60px_rgba(163,230,53,0.12)]"
                  : "border-black/6 bg-white/70 hover:bg-white hover:border-black/10"
              }`}
            >
              {active === index && (
                <motion.div
                  layoutId="active-service"
                  className="absolute inset-0 bg-gradient-to-b from-lime-100/40 to-transparent"
                />
              )}

              <div className="relative z-10 flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                    active === index
                      ? "bg-black text-white"
                      : "bg-black/[0.04] text-black"
                  }`}
                >
                  <item.icon size={24} />
                </div>

                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-black/35 mb-2">
                    {item.tag}
                  </p>

                  <h3 className="font-black text-xl tracking-tight">
                    {item.title}
                  </h3>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-black/40">
                      Starting
                    </span>

                    <span className="text-lg font-black">
                      {item.price}
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
          whileHover={{
            y: -4,
          }}
          className="rounded-[40px] border border-black/6 bg-white/80 backdrop-blur-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.06)]"
        >
          {/* BROWSER TOP */}
          <div className="h-14 border-b border-black/6 bg-black/[0.02] flex items-center px-5 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />

            <div className="ml-4 text-xs text-black/30 font-medium">
              growupcraft.in/services
            </div>
          </div>

          {/* TOP */}
          <div className="border-b border-black/6 p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-100 text-black text-sm font-semibold">
                  <Sparkles size={15} />
                  {service.tag}
                </div>

                <h3 className="mt-7 text-5xl font-black tracking-tight leading-none">
                  {service.title}
                </h3>

                <p className="mt-6 text-xl leading-relaxed text-black/60">
                  {service.description}
                </p>
              </div>

              {/* PRICE */}
              <div className="rounded-[32px] bg-black text-white px-8 py-7 min-w-fit shadow-2xl">
                <p className="text-sm text-white/50">
                  Starting from
                </p>

                <h4 className="mt-2 text-5xl font-black tracking-tight">
                  {service.price}
                </h4>
              </div>
            </div>
          </div>

          {/* BODY */}
          <div className="p-8 lg:p-10">
            {/* RESULT */}
            <div className="rounded-[32px] bg-lime-100 p-7">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>

                <div>
                  <p className="text-sm font-medium text-black/50">
                    Expected Result
                  </p>

                  <h4 className="mt-2 text-3xl font-black tracking-tight">
                    {service.result}
                  </h4>
                </div>
              </div>
            </div>

            {/* FEATURES */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {service.includes.map(
                (item, index) => (
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
                      delay:
                        index * 0.05,
                    }}
                    className="rounded-2xl border border-black/6 bg-black/[0.02] px-5 py-4 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-lime-500" />

                    <span className="text-black/70 text-sm">
                      {item}
                    </span>
                  </motion.div>
                )
              )}
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-4">
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
                className="group h-14 px-8 rounded-2xl bg-black text-white font-semibold flex items-center gap-2 shadow-2xl"
              >
                Discuss Your Project

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              <div className="h-14 px-6 rounded-2xl border border-black/8 bg-white/80 backdrop-blur-xl flex items-center text-sm text-black/50">
                Typical delivery:
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