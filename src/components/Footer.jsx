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
  Sparkles,
  Globe,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  Link,
  NavLink,
} from "react-router-dom";

const services = [
  "React Website Development",

  "Business Websites",

  "School Websites",

  "Custom Web Applications",

  "SEO Optimization",

  "Booking Systems",

  "Website Redesign",

  "Landing Page Design",
];

const industries = [
  "Schools",

  "Gyms",

  "Clinics",

  "Restaurants",

  "Startups",

  "Local Businesses",
];

export default function Footer() {
  return (
    <>
      {/* SEO STRUCTURED DATA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context":
              "https://schema.org",

            "@type":
              "Organization",

            name: "GrowUpCraft",

            url: "https://growupcraft.com",

            logo: "https://growupcraft.com/favicon.png",

            telephone:
              "+91-8930296001",

            email: [
              "hello@growupcraft.com",

              "support@growupcraft.com",

              "projects@growupcraft.com",
            ],

            address: {
              "@type":
                "PostalAddress",

              addressLocality:
                "Palwal",

              addressRegion:
                "Haryana",

              addressCountry:
                "India",
            },

            sameAs: [
              "https://instagram.com/growupcraft",
            ],

            areaServed:
              "India",

            description:
              "GrowUpCraft is a modern React web development and SEO agency helping businesses build fast, mobile-friendly, SEO-optimized websites.",
          }),
        }}
      />

      <footer className="relative overflow-hidden bg-[#f8f8f6] dark:bg-[#050505] text-black dark:text-white border-t border-black/5 dark:border-white/10 transition-colors duration-500">
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

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-lime-100/50 dark:bg-lime-500/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 sm:pt-1 pb-4">
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
            className="mb-16 sm:mb-20"
          >
            <div className="relative overflow-hidden rounded-[36px] border border-black/6 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-2xl p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
              {/* BG */}

              <div className="absolute inset-0 bg-gradient-to-br from-lime-100/30 to-transparent dark:from-lime-500/5 pointer-events-none" />

              {/* LEFT */}

              <div className="relative z-10 max-w-2xl">
                <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-xs sm:text-sm font-medium backdrop-blur-xl">
                  <Sparkles
                    size={15}
                  />

                  Build Your
                  Business Online
                </span>

                <h2 className="mt-3 text-[2rem] leading-[0.98] sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] text-black dark:text-white">
                  Need a Fast
                  SEO-Optimized
                  Website for
                  Your
                  Business?
                </h2>

                <p className="mt-4 text-black/70 dark:text-white/70 text-[15px] sm:text-lg leading-[1.8] max-w-xl">
                  GrowUpCraft
                  designs fast,
                  mobile-friendly,
                  high-converting
                  React websites
                  for schools,
                  startups,
                  local
                  businesses,
                  gyms and
                  brands that
                  want stronger
                  online growth,
                  better Google
                  rankings and
                  modern digital
                  experiences.
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
                className="relative z-10 w-full sm:w-auto h-14 px-7 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-semibold flex items-center justify-center gap-2 shadow-2xl"
              >
                Start a
                Project

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </motion.a>
            </div>
          </motion.div>

          {/* MAIN */}

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-14 pb-14 sm:pb-16">
            {/* BRAND */}

            <div className="lg:col-span-2">
              <NavLink
                to="/"
                className="inline-flex items-center gap-3"
              >
                <motion.div
                  whileHover={{
                    rotate: 5,
                    scale: 1.04,
                  }}
                  className="w-12 h-12 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center overflow-hidden shadow-xl"
                >
                  <img
                    src={logo}
                    alt="GrowUpCraft Logo"
                    className="w-9 h-9 object-contain"
                  />
                </motion.div>

                <div>
                  <h2 className="text-xl font-black tracking-tight text-black dark:text-white">
                    GrowUpCraft
                  </h2>

                  <p className="text-sm text-black/45 dark:text-white/40">
                    React Web
                    Development
                    & SEO
                    Solutions
                  </p>
                </div>
              </NavLink>

              <p className="mt-5 text-black/70 dark:text-white/65 leading-[1.9] max-w-md text-[15px]">
                GrowUpCraft
                is a modern
                web
                development
                and SEO
                studio helping
                schools,
                startups,
                gyms and local
                businesses
                build a
                stronger
                online
                presence with
                fast React
                websites,
                premium UI/UX,
                SEO
                optimization
                and
                conversion-focused
                digital
                solutions.
              </p>

              {/* LOCATION */}

              <div className="mt-7 flex items-center gap-3 text-black/50 dark:text-white/45">
                <MapPin
                  size={17}
                />

                <span className="text-sm">
                  Palwal,
                  Haryana •
                  India
                </span>
              </div>

              {/* TRUST */}

              <div className="mt-5 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-xs text-black/60 dark:text-white/55">
                  <ShieldCheck
                    size={14}
                  />

                  SEO Optimized
                </div>

                <div className="flex items-center gap-2 text-xs text-black/60 dark:text-white/55">
                  <Clock3
                    size={14}
                  />

                  Fast Delivery
                </div>

                <div className="flex items-center gap-2 text-xs text-black/60 dark:text-white/55">
                  <Globe
                    size={14}
                  />

                  Mobile
                  Responsive
                </div>
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
                      className="px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-xs text-black/60 dark:text-white/55 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl"
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
              <h3 className="text-sm font-semibold tracking-wide uppercase text-black/35 dark:text-white/30 mb-5">
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
                        className="group inline-flex items-center gap-2 text-black/70 dark:text-white/65 hover:text-black dark:hover:text-white transition-all duration-300 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-600 dark:bg-lime-400 opacity-60 group-hover:opacity-100" />

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
              <h3 className="text-sm font-semibold tracking-wide uppercase text-black/35 dark:text-white/30 mb-5">
                Contact
              </h3>

              <div className="space-y-5">
                {/* PHONE */}

                <motion.a
                  whileHover={{
                    x: 3,
                  }}
                  href="tel:+918930296001"
                  className="flex items-center gap-3 text-black/70 dark:text-white/65 hover:text-black dark:hover:text-white transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 flex items-center justify-center backdrop-blur-xl">
                    <Phone
                      size={16}
                    />
                  </div>

                  <div>
                    <p className="text-xs text-black/35 dark:text-white/35">
                      Phone
                    </p>

                    <p className="text-sm font-medium">
                      +91 89302
                      96001
                    </p>
                  </div>
                </motion.a>

                {/* HELLO */}

                <motion.a
                  whileHover={{
                    x: 3,
                  }}
                  href="mailto:hello@growupcraft.com"
                  className="flex items-center gap-3 text-black/70 dark:text-white/65 hover:text-black dark:hover:text-white transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 flex items-center justify-center backdrop-blur-xl">
                    <Mail
                      size={16}
                    />
                  </div>

                  <div>
                    <p className="text-xs text-black/35 dark:text-white/35">
                      General
                    </p>

                    <p className="text-sm font-medium break-all">
                      hello@growupcraft.com
                    </p>
                  </div>
                </motion.a>

                {/* SUPPORT */}

                <motion.a
                  whileHover={{
                    x: 3,
                  }}
                  href="mailto:support@growupcraft.com"
                  className="flex items-center gap-3 text-black/70 dark:text-white/65 hover:text-black dark:hover:text-white transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 flex items-center justify-center backdrop-blur-xl">
                    <Mail
                      size={16}
                    />
                  </div>

                  <div>
                    <p className="text-xs text-black/35 dark:text-white/35">
                      Support
                    </p>

                    <p className="text-sm font-medium break-all">
                      support@growupcraft.com
                    </p>
                  </div>
                </motion.a>

                {/* PROJECTS */}

                <motion.a
                  whileHover={{
                    x: 3,
                  }}
                  href="mailto:projects@growupcraft.com"
                  className="flex items-center gap-3 text-black/70 dark:text-white/65 hover:text-black dark:hover:text-white transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 flex items-center justify-center backdrop-blur-xl">
                    <Mail
                      size={16}
                    />
                  </div>

                  <div>
                    <p className="text-xs text-black/35 dark:text-white/35">
                      Projects
                    </p>

                    <p className="text-sm font-medium break-all">
                      projects@growupcraft.com
                    </p>
                  </div>
                </motion.a>
              </div>

              {/* SOCIALS */}

              <div className="flex items-center gap-3 pt-6">
                {/* INSTAGRAM */}

                <motion.a
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  href="https://instagram.com/growupcraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] hover:bg-black/[0.03] dark:hover:bg-white/[0.06] flex items-center justify-center transition-all duration-300 backdrop-blur-xl"
                >
                  <Instagram
                    size={18}
                    className="text-black/75 dark:text-white/75"
                  />
                </motion.a>

                {/* WHATSAPP */}

                <motion.a
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  href="https://wa.me/918930296001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] hover:bg-[#25D366]/10 hover:border-[#25D366]/20 flex items-center justify-center transition-all duration-300 backdrop-blur-xl"
                >
                  <MessageCircleMore
                    size={18}
                    className="text-black/75 dark:text-white/75"
                  />
                </motion.a>
              </div>

              {/* RESPONSE */}

              <div className="mt-5 rounded-[28px] border border-black/6 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-2xl p-5 shadow-sm">
                <p className="text-sm font-medium text-black dark:text-white">
                  Usually
                  replies
                  within
                </p>

                <h4 className="mt-1 text-2xl font-black text-black dark:text-white">
                  1–2 Hours
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-black/45 dark:text-white/45">
                  Fast response
                  on WhatsApp
                  and email for
                  project
                  discussions,
                  SEO services
                  and website
                  enquiries.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM */}

          <div className="pt-4 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-black/35 dark:text-white/25 text-sm text-center md:text-left">
              © 2026
              GrowUpCraft.
              All rights
              reserved.
            </p>

            <p className="flex items-center gap-2 text-black/35 dark:text-white/25 text-sm text-center">
              Designed &
              developed by
              GrowUpCraft

              <Heart
                size={14}
                className="fill-red-500 text-red-500"
              />
            </p>
          </div>

          {/* SEO CONTENT */}

          <div className="sr-only">
            GrowUpCraft
            React web
            development
            company in
            Haryana India.
            SEO optimized
            website
            development
            services.
            Modern business
            websites.
            School website
            development.
            Gym management
            website.
            React developer
            in India.
            Mobile-friendly
            business
            websites.
            High-converting
            landing pages.
            UI UX design
            agency.
            Fast loading
            websites.
            Local business
            web design
            company.
          </div>
        </div>
      </footer>
    </>
  );
}