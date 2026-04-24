import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, TrendingUp, Clock, Users } from 'lucide-react'

const projects = [
  {
    id: 'gym',
    emoji: '💪',
    title: 'FitZone Gym — Member Management App',
    location: 'Palwal, Haryana',
    type: 'Web Application',
    color: '#2D5016',
    bg: 'rgba(45,80,22,0.08)',
    problem: 'Gym owner registers aur Excel sheets pe kaam karta tha. Member ka payment track karna mushkil tha, due reminder manually dena padta tha. Kai baar payments miss ho jaati thi.',
    solution: 'Ek simple web app banaya jisme:\n• Har member ka profile aur plan\n• Payment status aur history\n• Automatic due date alert\n• New enquiry form (website se direct aaye)\n• Monthly revenue dashboard',
    result: [
      { icon: TrendingUp, text: '₹22,000/month missed payments recovered' },
      { icon: Clock, text: '2 ghante/din ka manual kaam band' },
      { icon: Users, text: 'Enquiry se member conversion 3x bada' },
    ],
    preview: (
      <div className="rounded-2xl bg-white p-5 shadow-lg border border-ink/6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="font-display font-bold text-lg text-ink">FitZone Dashboard</div>
            <div className="text-xs text-ink/40 font-mono">Member Management</div>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-lime/20 text-moss font-medium">Live</span>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: 'Members', value: '248', color: 'text-moss' },
            { label: 'Due', value: '14', color: 'text-amber-500' },
            { label: 'Enquiries', value: '9', color: 'text-blue-600' },
          ].map((s) => (
            <div key={s.label} className="bg-paper rounded-xl p-3 text-center">
              <div className={`font-display font-bold text-xl ${s.color}`}>{s.value}</div>
              <div className="text-[10px] text-ink/40">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {['Ravi Kumar — Due ⚠️', 'Sonu Sharma — Active ✅', 'Deepak — Enquiry 📩'].map((m) => (
            <div key={m} className="text-sm text-ink/60 py-1.5 px-3 rounded-lg bg-paper/60 font-mono">
              {m}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'coaching',
    emoji: '🏫',
    title: 'Star Coaching Institute — Student System',
    location: 'Palwal',
    type: 'Web Application + Website',
    color: '#1565C0',
    bg: 'rgba(21,101,192,0.08)',
    problem: 'Coaching ka koi website nahi tha, admissions phone pe hoti thi. Student records notebooks mein the. Parents ke paas koi update nahi aata tha. Competition badhne se students kho rahe the.',
    solution: 'Website + backend system banaya:\n• Professional website with courses\n• Online admission enquiry form\n• Student records database\n• Attendance & fee tracker\n• Parent update system',
    result: [
      { icon: TrendingUp, text: '40+ online enquiries first month mein' },
      { icon: Clock, text: 'Admission process 5 days → 1 day' },
      { icon: Users, text: 'Student strength 80 → 140 in 3 months' },
    ],
    preview: (
      <div className="rounded-2xl bg-white p-5 shadow-lg border border-ink/6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="font-display font-bold text-lg text-ink">Star Coaching</div>
            <div className="text-xs text-ink/40 font-mono">Student Portal</div>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">Live</span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { label: 'Students', value: '140', color: 'text-blue-600' },
            { label: 'Enquiries', value: '12', color: 'text-orange-500' },
          ].map((s) => (
            <div key={s.label} className="bg-paper rounded-xl p-3 text-center">
              <div className={`font-display font-bold text-2xl ${s.color}`}>{s.value}</div>
              <div className="text-xs text-ink/40">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {['Class 10th — 35 students', 'Class 12th — 28 students', 'Competitive — 77 students'].map((c) => (
            <div key={c} className="text-sm text-ink/60 py-1.5 px-3 rounded-lg bg-paper/60 font-mono">{c}</div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'property',
    emoji: '🏠',
    title: 'RealPal Properties — Website + Lead Tracker',
    location: 'Palwal, NCR',
    type: 'Website + CRM',
    color: '#E65100',
    bg: 'rgba(230,81,0,0.08)',
    problem: 'Property dealer ke paas koi online presence nahi thi. Leads WhatsApp pe aati thi, koi log nahi rehta tha. Follow-up miss ho jaata tha. Competitor online tha aur aage nikal raha tha.',
    solution: 'Property website + lead system:\n• Property listings with photos & filters\n• WhatsApp enquiry button on every listing\n• Lead capture with auto-response\n• Follow-up tracker (status: Hot/Warm/Cold)\n• Monthly lead report',
    result: [
      { icon: TrendingUp, text: '200+ leads in first 2 months' },
      { icon: Clock, text: 'Zero leads lost — sab tracked' },
      { icon: Users, text: '3 properties sold through website leads' },
    ],
    preview: (
      <div className="rounded-2xl bg-white p-5 shadow-lg border border-ink/6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="font-display font-bold text-lg text-ink">RealPal CRM</div>
            <div className="text-xs text-ink/40 font-mono">Lead Tracker</div>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-700 font-medium">Active</span>
        </div>
        <div className="space-y-2 mb-4">
          {[
            { name: 'Suresh Gupta', type: '2BHK Palwal', status: 'Hot 🔥', color: 'bg-red-100 text-red-700' },
            { name: 'Meena Devi', type: 'Plot 200gaj', status: 'Warm ♨️', color: 'bg-orange-100 text-orange-700' },
            { name: 'Vikram Singh', type: '3BHK NCR', status: 'Cold ❄️', color: 'bg-blue-100 text-blue-700' },
          ].map((l) => (
            <div key={l.name} className="flex items-center justify-between p-2 rounded-lg bg-paper/60">
              <div>
                <div className="text-xs font-medium text-ink">{l.name}</div>
                <div className="text-[10px] text-ink/40">{l.type}</div>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${l.color}`}>{l.status}</span>
            </div>
          ))}
        </div>
        <div className="text-xs text-ink/40 font-mono">Total leads this month: 47</div>
      </div>
    ),
  },
]

export default function Projects() {
  const [active, setActive] = useState(0)
  const proj = projects[active]

  return (
    <section id="projects" className="py-24 bg-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag mb-4 inline-flex"
          >
            📁 Real Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-ink text-4xl sm:text-5xl mb-4"
          >
            Actual businesses,<br />actual results
          </motion.h2>
          <p className="text-ink/60 text-lg max-w-xl">
            Template nahi, solutions hain ye. Har project mein real problem solve ki gayi hai.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                active === i
                  ? 'bg-ink text-paper'
                  : 'bg-white border border-ink/10 text-ink/60 hover:border-ink/30'
              }`}
            >
              <span>{p.emoji}</span>
              {p.type}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Info */}
            <div className="rounded-3xl p-8 border border-ink/8" style={{ background: proj.bg }}>
              <div className="flex items-start gap-3 mb-6">
                <span className="text-4xl">{proj.emoji}</span>
                <div>
                  <h3 className="font-display font-bold text-xl text-ink">{proj.title}</h3>
                  <div className="text-xs text-ink/40 font-mono mt-1">📍 {proj.location}</div>
                </div>
              </div>

              <div className="space-y-5 mb-8">
                <div>
                  <div className="text-xs font-mono text-ink/40 uppercase tracking-wider mb-2">❌ Problem</div>
                  <p className="text-ink/70 text-sm leading-relaxed">{proj.problem}</p>
                </div>
                <div>
                  <div className="text-xs font-mono text-ink/40 uppercase tracking-wider mb-2">✅ Solution</div>
                  <div className="text-ink text-sm leading-relaxed whitespace-pre-line">{proj.solution}</div>
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-ink/40 uppercase tracking-wider mb-3">📈 Result</div>
                <div className="space-y-2">
                  {proj.result.map((r, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-ink/80">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: proj.color + '20' }}
                      >
                        <r.icon size={14} style={{ color: proj.color }} />
                      </div>
                      {r.text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={`https://wa.me/918930296001?text=Hi%2C%20mujhe%20bhi%20aise%20solution%20chahiye%20apne%20business%20ke%20liye`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-sm"
                >
                  Aisa Solution Chahiye
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>

            {/* Preview */}
            <div className="flex flex-col gap-4">
              <div className="flex-1">
                {proj.preview}
              </div>
              <div
                className="rounded-2xl p-5 border text-sm"
                style={{ borderColor: proj.color + '30', background: proj.color + '08' }}
              >
                <div className="font-mono text-xs mb-1 opacity-50">Tech used</div>
                <div className="font-medium text-ink/70">
                  React.js + Node.js + MongoDB + Tailwind CSS 
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
