import React from 'react'
import { MapPin, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink text-paper py-14 border-t border-paper/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-paper rounded-lg flex items-center justify-center">
                <span className="text-ink font-display font-bold text-sm">G</span>
              </div>
              <span className="font-display font-bold text-xl">
                GrowUp<span className="text-lime">Craft</span>
              </span>
            </div>
            <p className="text-paper/40 text-sm leading-relaxed">
              Full stack web development agency for local businesses in Palwal, Haryana.
            </p>
            <div className="flex items-center gap-1.5 mt-3 text-paper/30 text-xs">
              <MapPin size={11} />
              Palwal, Haryana — 121102
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-xs font-mono text-paper/30 uppercase tracking-wider mb-4">Services</div>
            <ul className="space-y-2">
              {[
                'Business Website', 'Custom Web App',
                'Lead Management System', 'Booking System',
                'Website Redesign',
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-paper/50 text-sm hover:text-paper transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-mono text-paper/30 uppercase tracking-wider mb-4">Contact</div>
            <div className="space-y-3">
              <a
                href="https://wa.me/918930296001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-paper/50 hover:text-paper transition-colors"
              >
                <span>📱</span>
                +91 89302 96001
              </a>
              <a
                href="mailto:hanswork007@gmail.com"
                className="flex items-center gap-2 text-sm text-paper/50 hover:text-paper transition-colors"
              >
                <span>✉️</span>
                hanswork007@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm text-paper/50">
                <span>📍</span>
                Palwal, Haryana
              </div>
            </div>

            <div className="mt-5">
              <div className="text-xs font-mono text-paper/30 mb-2">We work with</div>
              <div className="flex flex-wrap gap-2">
                {['Schools', 'Gyms', 'Property Dealers','Local Shops','clothes shops'].map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-full border border-paper/10 text-paper/40">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-paper/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-paper/20 text-xs font-mono">
            © 2025 GrowUp Craft. All rights reserved.
          </p>
          <p className="text-paper/20 text-xs flex items-center gap-1.5 font-mono">
            Made with lokesh hans<Heart size={10} className="text-red-400 fill-red-400" /> in Palwal, Haryana
          </p>
        </div>

        {/* SEO keywords (hidden visually, for crawlers) */}
        <div className="sr-only">
          Full stack developer Palwal Haryana. Web application developer Haryana.
          Website development for local business Palwal. Custom web app development NCR.
          Software development for schools gyms property dealers Palwal.
          GrowUp Craft — web developer near me Palwal.
        </div>
      </div>
    </footer>
  )
}
