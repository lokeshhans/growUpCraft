import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Monitor, Code2, Headphones } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageCircle,
    title: 'Business Samjhte Hain',
    desc: 'Pehle aapki problem sunते hain. Kya chahiye, kyun chahiye, kaun use karega — sab discuss karte hain. Koi pressure nahi.',
    duration: '30 min call / WhatsApp pe',
    color: '#2D5016',
  },
  {
    num: '02',
    icon: Monitor,
    title: 'Demo Dikhate Hain',
    desc: 'Aapke liye ek basic working demo banate hain — pehle approve karo, tab aage badhte hain. Bina payment ke.',
    duration: '2–3 days',
    color: '#1565C0',
  },
  {
    num: '03',
    icon: Code2,
    title: 'System Banate Hain',
    desc: 'Approval ke baad full development hoti hai. Aapko regular update milta hai. Final delivery mein training bhi dete hain.',
    duration: '5–15 days',
    color: '#E65100',
  },
  {
    num: '04',
    icon: Headphones,
    title: 'Support Dete Hain',
    desc: 'Launch ke baad bhi hum hain. Bugs ho ya kuch change karna ho — WhatsApp pe message karo, fix ho jaata hai.',
    duration: '3 months free support',
    color: '#6A1B9A',
  },
]

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 bg-ink text-paper relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(139,195,74,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,195,74,1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-4"
            style={{ background: 'rgba(139,195,74,0.15)', color: '#8BC34A', border: '1px solid rgba(139,195,74,0.3)' }}
          >
            🔄 Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl mb-4"
          >
            Seedha kaam,<br />
            koi chakkar nahi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-paper/50 text-lg max-w-xl"
          >
            Hum aise kaam karte hain jaise aapka koi jaanpehchaan karta ho — honest, simple, aur results pe focus.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px border-t border-dashed border-paper/10 z-0" style={{ width: 'calc(100% - 2rem)' }} />
              )}

              <div className="rounded-2xl p-6 border border-paper/8 transition-all duration-300 group-hover:border-paper/20 group-hover:bg-paper/5 relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: step.color + '25' }}
                  >
                    <step.icon size={22} style={{ color: step.color }} />
                  </div>
                  <span className="font-mono font-bold text-3xl text-paper/10">{step.num}</span>
                </div>

                <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-paper/50 text-sm leading-relaxed mb-4">{step.desc}</p>

                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                  style={{ background: step.color + '20', color: step.color }}
                >
                  <span>⏱</span>
                  {step.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-2xl border border-lime/20 p-6 flex flex-col sm:flex-row items-center gap-4 justify-between"
          style={{ background: 'rgba(139,195,74,0.07)' }}
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl">🤝</span>
            <div>
              <div className="font-display font-bold text-xl mb-1">Hamaari guarantee</div>
              <div className="text-paper/50 text-sm">
                Demo approve karne ke baad agar kaam pasand nahi aaya, toh advance wapas. Simple.
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/918930296001?text=Hi%2C%20mujhe%20apna%20project%20discuss%20karna%20hai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp whitespace-nowrap"
          >
            Free Demo Le Lo →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
