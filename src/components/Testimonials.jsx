import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Yadav',
    role: 'Gym Owner, Palwal',
    emoji: '💪',
    text: 'Bhai pehle toh mujhe lagta tha website zyada kaam ki nahi hogi. Par GrowUp Craft ne jo system banaya — member tracking, payment due reminder, sab automatic — ab main 2 ghante roz bachata hun. Seedha kaam kiya, koi bakwaas nahi.',
    stars: 4,
    result: 'Members 180 → 248 in 4 months',
  },
  {
    name: 'Sunita Sharma',
    role: 'Coaching Director, Star Institute',
    emoji: '🏫',
    text: 'Pehle admissions sirf referral se aate the. Ab Google pe search karke students enquiry karte hain. Website aur admission form ek saath banaya unhone, simple aur useful. Parents bhi impressed hain. Recommend karungi zaroor.',
    stars: 5,
    result: 'Online enquiries: 0 → 40+ per month',
  },
  {
    name: 'Vinod Kalra',
    role: 'Property Dealer, Palwal',
    emoji: '🏠',
    text: 'Mera competitor online tha, main nahi tha. GrowUp ne website ke saath lead tracker bhi banaya. Ab kaun kab enquiry kiya, kisko call karna hai — sab track hota hai. 3 properties bech chuka hun website se. Paisa wasool hua.',
    stars: 4,
    result: '3 sales directly from website leads',
  },
  {
    name: 'Pooja Agarwal',
    role: 'Boutique Owner, Palwal',
    emoji: '👗',
    text: 'Maine socha tha expensive hoga ya kaam karne mein problem aayegi. Par inhoone WhatsApp pe sab samjhaya, demo pehle dikhaya. Meri online booking system ab chal rahi hai. Bahut hi easy process thi.',
    stars: 5,
    result: 'Bookings automated, zero missed appointments',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag mb-4 inline-flex"
          >
            ⭐ Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-ink text-4xl sm:text-5xl mb-4"
          >
            Inke kaam aaya,<br />aapke kaam aayega
          </motion.h2>
          <p className="text-ink/50 text-lg">
            Palwal ke local businesses jo ab digitally aage hain.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-7 border border-ink/6 card-hover relative"
            >
              <Quote size={28} className="text-ink/8 absolute top-6 right-6" />

              <div className="flex gap-0.5 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-ink/70 leading-relaxed mb-5 text-sm italic">
                "{t.text}"
              </p>

              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-5"
                style={{ background: 'rgba(45,80,22,0.1)', color: '#2D5016' }}
              >
                <span>📈</span>
                {t.result}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-ink/6">
                <div className="w-10 h-10 rounded-full bg-paper flex items-center justify-center text-xl">
                  {t.emoji}
                </div>
                <div>
                  <div className="font-semibold text-ink text-sm">{t.name}</div>
                  <div className="text-ink/40 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-ink/40 text-sm font-mono mb-4">
            Aap bhi in businesses ki tarah aage badh sakte hain
          </p>
          <a
            href="#contact"
            className="btn-primary"
          >
            Apna Project Discuss Karo →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
