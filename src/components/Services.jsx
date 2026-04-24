import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  LayoutDashboard,
  Users,
  CalendarCheck,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Website",
    tag: "Online Presence",
    problem: "Log Google pe dhundhte hain, aap nahi milte.",
    solution:
      "Fast, mobile-friendly website jo aapko credible banaye aur customers attract kare.",
    includes: [
      "Google-ready SEO",
      "WhatsApp button",
      "Fast loading",
      "Mobile first",
    ],
    price: "From ₹8,000",
    color: "#2D5016",
    bg: "rgba(45,80,22,0.06)",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Web Application",
    tag: "Admin Panel / Dashboard",
    problem:
      "Excel aur registers se thak gaye? Data track karna mushkil ho gaya?",
    solution:
      "Custom dashboard banate hain — apna data apni screen pe, organized aur safe.",
    includes: [
      "Login system",
      "Data management",
      "Reports & analytics",
      "Role-based access",
    ],
    price: "From ₹18,000",
    color: "#1565C0",
    bg: "rgba(21,101,192,0.06)",
  },
  {
    icon: Users,
    title: "Lead Management System",
    tag: "Sales Tracker",
    problem: "Enquiries aati hain, follow-up nahi hota, lead kho jaati hai.",
    solution:
      "Sab leads ek jagah, follow-up reminder ke saath. Koi lead miss nahi hogi.",
    includes: [
      "Lead capture form",
      "WhatsApp alerts",
      "Follow-up tracker",
      "Status pipeline",
    ],
    price: "From ₹12,000",
    color: "#E65100",
    bg: "rgba(230,81,0,0.06)",
  },
  {
    icon: CalendarCheck,
    title: "Booking & Enquiry System",
    tag: "Automation",
    problem: "Phone pe booking lena time waste hai, confusion bhi hota hai.",
    solution:
      "Online booking system — customer khud book kare, aapko notification aaye.",
    includes: [
      "Online booking form",
      "Calendar view",
      "Email/WhatsApp notification",
      "Payment link",
    ],
    price: "From ₹10,000",
    color: "#6A1B9A",
    bg: "rgba(106,27,154,0.06)",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    tag: "Modernization",
    problem:
      "Purani website hai jo mobile pe kaam nahi karti, ya dikhne mein bekaar hai.",
    solution:
      "Aapki existing site ko modern, fast aur conversion-ready banate hain.",
    includes: [
      "Modern design",
      "Mobile optimization",
      "Speed improvements",
      "SEO fix",
    ],
    price: "From ₹6,000",
    color: "#00695C",
    bg: "rgba(0,105,92,0.06)",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const Icon = services[active].icon;
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag mb-4 inline-flex"
          >
            🛠 What We Build
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-ink text-4xl sm:text-5xl mb-4"
          >
            Koi ek size fit nahi karta
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-ink/60 text-lg max-w-xl"
          >
            Isliye hum generic templates nahi dete. Aapke business ki asli
            problem sunke custom solution banate hain.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-2 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 p-4 rounded-2xl text-left transition-all duration-200 min-w-[200px] lg:min-w-0 ${
                  active === i
                    ? "bg-ink text-paper shadow-lg scale-[1.02]"
                    : "bg-white border border-ink/8 text-ink hover:border-ink/20"
                }`}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: active === i ? "rgba(255,255,255,0.15)" : s.bg,
                  }}
                >
                  <s.icon
                    size={18}
                    style={{ color: active === i ? "#fff" : s.color }}
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm leading-tight">
                    {s.title}
                  </div>
                  <div
                    className={`text-[11px] mt-0.5 ${active === i ? "text-paper/60" : "text-ink/40"}`}
                  >
                    {s.tag}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-3xl p-8 h-full border border-ink/8"
              style={{ background: services[active].bg }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-5"
                style={{
                  background: services[active].color,
                  color: "#fff",
                }}
              >
                <Icon size={12} />

                {services[active].tag}
              </div>

              <h3 className="font-display font-bold text-2xl text-ink mb-6">
                {services[active].title}
              </h3>

              <div className="space-y-4 mb-8">
                <div>
                  <div className="text-xs font-mono text-ink/40 uppercase tracking-wider mb-1">
                    ❌ Problem
                  </div>
                  <p className="text-ink/70">{services[active].problem}</p>
                </div>
                <div>
                  <div className="text-xs font-mono text-ink/40 uppercase tracking-wider mb-1">
                    ✅ Our Solution
                  </div>
                  <p className="text-ink font-medium">
                    {services[active].solution}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-xs font-mono text-ink/40 uppercase tracking-wider mb-3">
                  Includes
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {services[active].includes.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-ink/70"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-moss" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-ink/40 font-mono">Starting</div>
                  <div className="font-display font-bold text-2xl text-ink">
                    {services[active].price}
                  </div>
                </div>
                <a
                  href={`https://wa.me/918930296001?text=Hi%2C%20mujhe%20${encodeURIComponent(services[active].title)}%20chahiye`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  Discuss Karo
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Custom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-2xl bg-ink text-paper flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <div className="font-display font-bold text-xl mb-1">
              Kuch alag chahiye?
            </div>
            <div className="text-paper/60 text-sm">
              Custom app ya automation tool — batao, banate hain.
            </div>
          </div>
          <a
            href="https://wa.me/918930296001?text=Hi%2C%20mujhe%20ek%20custom%20app%20banwani%20hai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp whitespace-nowrap"
          >
            Request Custom App →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
