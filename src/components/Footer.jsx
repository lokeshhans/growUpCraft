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

import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

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
    <footer className="relative overflow-hidden bg-black text-white border-t border-white/5">
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* TOP CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">
                🚀 Let's Build Something
              </span>

              <h2 className="mt-6 text-3xl sm:text-5xl font-black tracking-tight leading-[1]">
                Need a modern website for your business?
              </h2>

              <p className="mt-5 text-white/60 text-lg leading-relaxed max-w-xl">
                We design clean, fast and mobile-first websites that help local
                businesses look more professional online.
              </p>
            </div>

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
              className="group h-14 px-7 rounded-2xl bg-white text-black font-semibold flex items-center gap-2 shadow-2xl"
            >
              Start a Project
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-4 gap-14 pb-16">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <NavLink to="/" className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center font-black text-lg">
                <img src={logo} alt="" />
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight">
                  GrowUpCraft
                </h2>

                <p className="text-sm text-white/40">Modern Web Experiences</p>
              </div>
            </NavLink>

            <p className="mt-6 text-white/55 leading-relaxed max-w-md">
              GrowUpCraft is a modern web development studio helping schools,
              gyms and local businesses build a stronger online presence with
              clean and practical digital solutions.
            </p>

            {/* LOCATION */}
            <div className="mt-7 flex items-center gap-3 text-white/40">
              <MapPin size={17} />

              <span className="text-sm">Palwal, Haryana • India</span>
            </div>

            {/* TAGS */}
            <div className="mt-7 flex flex-wrap gap-2">
              {industries.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full border border-white/10 text-xs text-white/50 bg-white/[0.03]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-white/30 mb-5">
              Services
            </h3>

            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-white/55 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-white/30 mb-5">
              Contact
            </h3>

            <div className="space-y-5">
              {/* PHONE */}
              <a
                href="tel:+918930296001"
                className="flex items-center gap-3 text-white/55 hover:text-white transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center">
                  <Phone size={16} />
                </div>

                <div>
                  <p className="text-xs text-white/30">Phone</p>

                  <p className="text-sm font-medium">+91 89302  96001</p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:hanswork007@gmail.com"
                className="flex items-center gap-3 text-white/55 hover:text-white transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center">
                  <Mail size={16} />
                </div>

                <div>
                  <p className="text-xs text-white/30">Email</p>

                  <p className="text-sm font-medium break-all">
                    hanswork007@gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-3 pt-3">
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
                className="w-11 h-11 rounded-2xl border border-paper/10 bg-paper/[0.03] hover:bg-paper/[0.06] flex items-center justify-center transition-all duration-300"
              >
                <Instagram size={18} className="text-paper/70" />
              </motion.a>

              {/* WHATSAPP GROUP */}
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
                className="w-11 h-11 rounded-2xl border border-paper/10 bg-paper/[0.03] hover:bg-[#25D366]/10 hover:border-[#25D366]/20 flex items-center justify-center transition-all duration-300"
              >
                <MessageCircleMore size={18} className="text-paper/70" />
              </motion.a>
            </div>
            {/* RESPONSE */}
            <div className="mt-8 rounded-2xl border border-white/5 bg-white/[0.03] p-5">
              <p className="text-sm font-medium">Usually replies within</p>

              <h4 className="mt-1 text-2xl font-black">1–2 Hours</h4>

              <p className="mt-2 text-sm text-white/40">
                Fast response on WhatsApp for project discussions and enquiries.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-white/25 text-sm">
            © 2025 GrowUpCraft. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-white/25 text-sm">
            Designed & developed by Lokesh Hans
            <Heart size={14} className="fill-red-500 text-red-500" />
          </p>
        </div>

        {/* SEO */}
        <div className="sr-only">
          Web developer in Palwal Haryana. School website developer Haryana. Gym
          management website Palwal. Custom web application developer India.
          Local business website designer Haryana. GrowUpCraft modern web design
          agency.
        </div>
      </div>
    </footer>
  );
}
