import logo from "/favicon.png";

import React from "react";

import {
  MapPin,
  Heart,
  ArrowUpRight,
  Phone,
  Mail,
  Instagram,
  MessageCircleMore,
} from "lucide-react";

import {
  motion,
} from "framer-motion";

import {
  Link,
  NavLink,
} from "react-router-dom";

const services = [
  "Business Websites",

  "School Websites",

  "Custom Web Apps",

  "Booking Systems",

  "Website Redesign",
];

const industries = [
  "Schools",

  "Gyms",

  "Clinics",

  "Restaurants",

  "Local Businesses",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f8f8f6] dark:bg-black text-black dark:text-white border-t border-black/5 dark:border-white/10 transition-colors duration-500">
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

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-lime-100/40 dark:bg-lime-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* TOP CTA */}

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
          className="mb-20"
        >
          <div className="rounded-[36px] border border-black/6 dark:border-white/10 bg-white dark:bg-neutral-950 backdrop-blur-xl p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
            {/* LEFT */}

            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-sm font-medium">
                🚀 Let's Build
                Something
              </span>

              <h2 className="mt-6 text-3xl sm:text-5xl font-black tracking-tight leading-[1] text-black dark:text-white">
                Need a modern
                website for
                your
                business?
              </h2>

              <p className="mt-5 text-black/60 dark:text-white/60 text-lg leading-relaxed max-w-xl">
                We design
                clean, fast
                and
                mobile-first
                websites that
                help local
                businesses
                look more
                professional
                online.
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
              href="https://wa.me/918930296001"
              target="_blank"
              rel="noopener noreferrer"
              className="group h-14 px-7 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-semibold flex items-center gap-2 shadow-2xl"
            >
              Start a
              Project

              <ArrowUpRight
                size={
                  18
                }
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </motion.div>

        {/* MAIN */}

        <div className="grid lg:grid-cols-4 gap-14 pb-16">
          {/* BRAND */}

          <div className="lg:col-span-2">
            <NavLink
              to="/"
              className="inline-flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src={
                    logo
                  }
                  alt="GrowUpCraft"
                  className="w-9 h-9 object-contain"
                />
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-black dark:text-white">
                  GrowUpCraft
                </h2>

                <p className="text-sm text-black/40 dark:text-white/40">
                  Modern Web
                  Experiences
                </p>
              </div>
            </NavLink>

            <p className="mt-6 text-black/60 dark:text-white/55 leading-relaxed max-w-md">
              GrowUpCraft
              is a modern
              web
              development
              studio helping
              schools,
              gyms and local
              businesses
              build a
              stronger
              online
              presence with
              clean and
              practical
              digital
              solutions.
            </p>

            {/* LOCATION */}

            <div className="mt-7 flex items-center gap-3 text-black/45 dark:text-white/40">
              <MapPin
                size={
                  17
                }
              />

              <span className="text-sm">
                Palwal,
                Haryana •
                India
              </span>
            </div>

            {/* TAGS */}

            <div className="mt-7 flex flex-wrap gap-2">
              {industries.map(
                (
                  item
                ) => (
                  <span
                    key={
                      item
                    }
                    className="px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-xs text-black/50 dark:text-white/50 bg-white dark:bg-white/[0.03]"
                  >
                    {
                      item
                    }
                  </span>
                )
              )}
            </div>
          </div>

          {/* SERVICES */}

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-black/30 dark:text-white/30 mb-5">
              Services
            </h3>

            <ul className="space-y-4">
              {services.map(
                (
                  item
                ) => (
                  <li
                    key={
                      item
                    }
                  >
                    <Link
                      to="/services"
                      className="text-black/60 dark:text-white/55 hover:text-black dark:hover:text-white transition-colors duration-300 text-sm"
                    >
                      {
                        item
                      }
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT */}

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-black/30 dark:text-white/30 mb-5">
              Contact
            </h3>

            <div className="space-y-5">
              {/* PHONE */}

              <a
                href="tel:+918930296001"
                className="flex items-center gap-3 text-black/60 dark:text-white/55 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 flex items-center justify-center">
                  <Phone
                    size={
                      16
                    }
                  />
                </div>

                <div>
                  <p className="text-xs text-black/30 dark:text-white/30">
                    Phone
                  </p>

                  <p className="text-sm font-medium">
                    +91 89302
                    96001
                  </p>
                </div>
              </a>

              {/* EMAIL */}

              <a
                href="mailto:hanswork007@gmail.com"
                className="flex items-center gap-3 text-black/60 dark:text-white/55 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 flex items-center justify-center">
                  <Mail
                    size={
                      16
                    }
                  />
                </div>

                <div>
                  <p className="text-xs text-black/30 dark:text-white/30">
                    Email
                  </p>

                  <p className="text-sm font-medium break-all">
                    hanswork007
                    @gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* SOCIALS */}

            <div className="flex items-center gap-3 pt-5">
              {/* INSTAGRAM */}

              <motion.a
                whileHover={{
                  y: -2,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                href="https://instagram.com/growupcraft"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:bg-black/[0.03] dark:hover:bg-white/[0.06] flex items-center justify-center transition-all duration-300"
              >
                <Instagram
                  size={
                    18
                  }
                  className="text-black/70 dark:text-white/70"
                />
              </motion.a>

              {/* WHATSAPP */}

              <motion.a
                whileHover={{
                  y: -2,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                href="https://chat.whatsapp.com/channel/0029Vb7zfn2HAdNZYqHlaY18"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:bg-[#25D366]/10 hover:border-[#25D366]/20 flex items-center justify-center transition-all duration-300"
              >
                <MessageCircleMore
                  size={
                    18
                  }
                  className="text-black/70 dark:text-white/70"
                />
              </motion.a>
            </div>

            {/* RESPONSE */}

            <div className="mt-8 rounded-3xl border border-black/6 dark:border-white/10 bg-white dark:bg-white/[0.03] p-5 shadow-sm">
              <p className="text-sm font-medium text-black dark:text-white">
                Usually
                replies
                within
              </p>

              <h4 className="mt-1 text-2xl font-black text-black dark:text-white">
                1–2 Hours
              </h4>

              <p className="mt-2 text-sm text-black/40 dark:text-white/40">
                Fast response
                on WhatsApp
                for project
                discussions
                and enquiries.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="pt-8 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-black/30 dark:text-white/25 text-sm">
            © 2025
            GrowUpCraft.
            All rights
            reserved.
          </p>

          <p className="flex items-center gap-2 text-black/30 dark:text-white/25 text-sm">
            Designed &
            developed by
            Lokesh Hans

            <Heart
              size={14}
              className="fill-red-500 text-red-500"
            />
          </p>
        </div>

        {/* SEO */}

        <div className="sr-only">
          Web developer
          in Palwal
          Haryana.
          School website
          developer
          Haryana. Gym
          management
          website
          Palwal. Custom
          web application
          developer
          India. Local
          business
          website
          designer
          Haryana.
          GrowUpCraft
          modern web
          design agency.
        </div>
      </div>
    </footer>
  );
}