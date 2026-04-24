import React from "react";

const items = [
  "⚡ React.js",
  "🛠 Node.js + Express",
  "🗄 MongoDB",
  "🎨 Tailwind CSS",
  "📱 Mobile First",
  "🔒 Secure & Fast",
  "📍 Palwal, Haryana",
  "🏫 Schools & Institutes",
  "💪 Gym Management",
  "🏠 Property Dealers",
  "📊 Custom Dashboards",
  "🤖 Automation",
  "📩 WhatsApp Integration",
];

export default function TrustBar() {
  return (
    <section
      className="relative border-y border-ink/10 bg-ink py-3 overflow-hidden"
      aria-label="Technologies and services"
    >
      {/* Gradient Fade (premium look) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-ink to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ink to-transparent z-10" />

      {/* Marquee */}
      <div className="group flex whitespace-nowrap">
        <div className="flex gap-10 animate-marquee group-hover:[animation-play-state:paused]">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="text-paper/70 text-sm font-mono font-medium tracking-wide transition hover:text-paper"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}