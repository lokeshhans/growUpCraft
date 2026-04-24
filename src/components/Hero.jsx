import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, MapPin } from 'lucide-react'

const rotatingWords = ['grow kare', 'leads laye', 'save time', 'go ahead']

export default function Hero({ onShowDemo }) {
  const [wordIdx, setWordIdx] = useState(0)
  const [display, setDisplay] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const word = rotatingWords[wordIdx]
    let timeout
    if (typing) {
      if (display.length < word.length) {
        timeout = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), 50)
      } else {
        setWordIdx((i) => (i + 1) % rotatingWords.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [display, typing, wordIdx])

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden grain-overlay">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #8BC34A 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #2D5016 0%, transparent 70%)',
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(#0D0D0D 1px, transparent 1px),
              linear-gradient(90deg, #0D0D0D 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="section-tag">
                <MapPin size={10} />
                Palwal, Haryana
              </span>
              <span className="section-tag">
                <Zap size={10} />
                Local Business Specialist
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-ink leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
            >
              Aapka business online{' '}
              <span className="relative">
                <span className="text-moss">{display}</span>
                <span className="cursor-blink text-moss">|</span>
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xl font-display font-semibold text-ink mb-4"
            >
              We build websites & web apps that actually grow your business
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-ink/60 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Simple solutions for local businesses — websites se lekar full systems tak.
              School, gym, property dealer — sabke liye custom solution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button
                onClick={onShowDemo}
                className="btn-primary"
              >
                <Zap size={16} />
                Free Demo Dekho
              </button>
              <a
                href="https://wa.me/918930296001?text=Hi%2C%20mujhe%20apna%20project%20discuss%20karna%20hai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Idea Batao
              </a>
              <a href="#projects" className="btn-outline flex items-center gap-2">
                Projects Dekho
                <ArrowRight size={14} />
              </a>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { num: '15+', label: 'Projects Delivered' },
                { num: '100%', label: 'Mobile First' },
                { num: '3–7', label: 'Days Delivery' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-bold text-2xl text-moss">{s.num}</div>
                  <div className="text-xs text-ink/50 font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — floating UI preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div
                className="rounded-2xl p-6 border border-ink/8 shadow-2xl"
                style={{ background: '#fff' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs font-mono text-ink/30">gym-dashboard.growupcraft.com</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-paper">
                    <div>
                      <div className="text-xs text-ink/40 font-mono">Total Members</div>
                      <div className="font-display font-bold text-2xl text-ink">248</div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-lime/20 flex items-center justify-center">
                      <span className="text-lg">💪</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-moss/5">
                      <div className="text-xs text-ink/40 font-mono">Due Payments</div>
                      <div className="font-display font-bold text-lg text-rust">₹8,400</div>
                    </div>
                    <div className="p-3 rounded-xl bg-lime/5">
                      <div className="text-xs text-ink/40 font-mono">New Enquiries</div>
                      <div className="font-display font-bold text-lg text-moss">12</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: 'Ravi Kumar', plan: 'Monthly', status: 'Active', color: 'bg-lime' },
                      { name: 'Sonu Sharma', plan: 'Quarterly', status: 'Due', color: 'bg-amber-400' },
                      { name: 'Amit Singh', plan: 'Monthly', status: 'Active', color: 'bg-lime' },
                    ].map((m) => (
                      <div key={m.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-paper transition-colors">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-ink/10 flex items-center justify-center text-xs font-bold text-ink">
                            {m.name[0]}
                          </div>
                          <div>
                            <div className="text-xs font-medium text-ink">{m.name}</div>
                            <div className="text-[10px] text-ink/40">{m.plan}</div>
                          </div>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${m.color} text-ink`}>
                          {m.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 bg-ink text-paper rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="text-[10px] font-mono text-paper/50 mb-0.5">Delivered in</div>
                <div className="font-display font-bold text-sm">5 days 🚀</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -right-4 bg-lime text-ink rounded-xl px-3 py-2 shadow-xl"
              >
                <div className="text-[10px] font-mono">New Enquiry!</div>
                <div className="font-display font-bold text-xs">Rohit - Palwal 📍</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
