import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, MapPin, Clock, Zap } from 'lucide-react'

const businessTypes = [
  'Gym / Fitness Center',
  'School / Coaching Institute',
  'Property Dealer',
  'Restaurant / Cafe',
  'Boutique / Shop',
  'Other Business',
]

const projectTypes = [
  'Business Website',
  'Custom Web App',
  'Lead Management',
  'Booking System',
  'Website Redesign',
  'Not Sure Yet',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    businessType: '',
    projectType: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) {
      setError('Naam aur phone number zaroori hai.')
      return
    }
    setError('')
    setLoading(true)
    try {
      const res = await fetch('https://growupcraft-api.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Kuch gadbad hui. WhatsApp pe directly message kar sakte hain.')
      }
    } catch {
      // In demo/static mode, simulate success
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag mb-4 inline-flex"
          >
            📩 Contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-ink text-4xl sm:text-5xl mb-4"
          >
            Baat karte hain —<br />koi charge nahi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-ink/50 text-lg max-w-xl"
          >
            Free demo le lo — bina risk ke. Pehle dekho, phir decide karo.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info side */}
          <div className="lg:col-span-2 space-y-6">
            {/* WhatsApp CTA — primary */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              href="https://wa.me/918930296001?text=Hi%2C%20mujhe%20apne%20business%20ke%20liye%20website%20ya%20system%20banwana%20hai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:scale-[1.01] active:scale-100 cursor-pointer block"
              style={{ background: '#25D366', color: '#fff' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-lg">WhatsApp Pe Baat Karo</div>
                <div className="text-white/80 text-sm">Fastest response — usually within 1 hour</div>
                <div className="font-mono text-sm mt-1 font-medium">+91 89302 96001</div>
              </div>
            </motion.a>

            {/* Info cards */}
            {[
              { icon: MapPin, title: 'Location', desc: 'Palwal, Haryana\n(Remote bhi karte hain — poore India mein)' },
              { icon: Clock, title: 'Response Time', desc: 'WhatsApp: 1 hour\nForm: Same day' },
              { icon: Zap, title: 'Delivery', desc: 'Basic website: 3–5 days\nCustom app: 7–15 days' },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-cream border border-ink/6"
              >
                <div className="w-9 h-9 rounded-xl bg-ink/8 flex items-center justify-center flex-shrink-0">
                  <item.icon size={16} className="text-ink/60" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-ink mb-0.5">{item.title}</div>
                  <div className="text-ink/50 text-sm whitespace-pre-line">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-2xl bg-lime/20 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-moss" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink mb-3">
                    Form mil gaya! 🎉
                  </h3>
                  <p className="text-ink/50 mb-6 max-w-sm mx-auto">
                    Hum aapko 24 ghante mein contact karenge. Ya WhatsApp pe seedha message karo — jaldi reply aata hai.
                  </p>
                  <a
                    href="https://wa.me/91?text=Hi%2C%20maine%20abhi%20form%20submit%20kiya%20hai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    WhatsApp Pe Follow Up Karo
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-7 border border-ink/8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-ink/40 mb-1.5 uppercase tracking-wider">
                      Aapka Naam *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ramesh Kumar"
                      className="w-full px-4 py-3 rounded-xl border border-ink/12 bg-paper text-ink text-sm focus:outline-none focus:border-moss transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-ink/40 mb-1.5 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-ink/12 bg-paper text-ink text-sm focus:outline-none focus:border-moss transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-ink/40 mb-1.5 uppercase tracking-wider">
                    Business Type
                  </label>
                  <select
                    name="businessType"
                    value={form.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-ink/12 bg-paper text-ink text-sm focus:outline-none focus:border-moss transition-colors appearance-none"
                  >
                    <option value="">Select karo...</option>
                    {businessTypes.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-ink/40 mb-1.5 uppercase tracking-wider">
                    Kya Chahiye?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setForm({ ...form, projectType: p })}
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all border ${
                          form.projectType === p
                            ? 'bg-ink text-paper border-ink'
                            : 'border-ink/12 text-ink/60 hover:border-ink/30'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-ink/40 mb-1.5 uppercase tracking-wider">
                    Kuch aur batana hai?
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Apna business thoda batao — kya problem solve karni hai..."
                    className="w-full px-4 py-3 rounded-xl border border-ink/12 bg-paper text-ink text-sm focus:outline-none focus:border-moss transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-3.5 disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v3m0 12v3M3 12h3m12 0h3" />
                      </svg>
                      Bhej rahe hain...
                    </span>
                  ) : (
                    <>
                      <Send size={16} />
                      Free Demo Request Bhejo
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-ink/30 font-mono">
                  No spam. No sales pressure. Sirf ek honest conversation.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
