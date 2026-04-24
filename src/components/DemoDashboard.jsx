import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Users, IndianRupee, Bell, TrendingUp, Plus, CheckCircle } from 'lucide-react'

const initialMembers = [
  { id: 1, name: 'Ravi Kumar', plan: 'Monthly ₹800', joined: '1 Apr', status: 'Active', due: false },
  { id: 2, name: 'Sonu Sharma', plan: 'Quarterly ₹2100', joined: '15 Mar', status: 'Due', due: true },
  { id: 3, name: 'Amit Singh', plan: 'Monthly ₹800', joined: '3 Apr', status: 'Active', due: false },
  { id: 4, name: 'Priya Gupta', plan: 'Monthly ₹800', joined: '20 Mar', status: 'Due', due: true },
  { id: 5, name: 'Deepak Yadav', plan: 'Half-yearly ₹4200', joined: '1 Jan', status: 'Active', due: false },
]

const enquiries = [
  { name: 'Rohit Verma', phone: '98765xxxxx', interest: 'Monthly Plan', time: '2h ago' },
  { name: 'Neha Singh', phone: '97654xxxxx', interest: 'Ladies Batch', time: '5h ago' },
  { name: 'Suresh Kumar', phone: '99887xxxxx', interest: 'Personal Training', time: '1d ago' },
]

export default function DemoDashboard({ show, onClose }) {
  const [members, setMembers] = useState(initialMembers)
  const [activeTab, setActiveTab] = useState('overview')
  const [newName, setNewName] = useState('')
  const [adding, setAdding] = useState(false)
  const [addedMsg, setAddedMsg] = useState(false)

  const handleAddMember = () => {
    if (!newName.trim()) return
    const newM = {
      id: members.length + 1,
      name: newName,
      plan: 'Monthly ₹800',
      joined: 'Today',
      status: 'Active',
      due: false,
    }
    setMembers([newM, ...members])
    setNewName('')
    setAdding(false)
    setAddedMsg(true)
    setTimeout(() => setAddedMsg(false), 2500)
  }

  const activeCount = members.filter((m) => !m.due).length
  const dueCount = members.filter((m) => m.due).length

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(13,13,13,0.7)', backdropFilter: 'blur(4px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            className="bg-paper rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-ink/8 bg-ink text-paper">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-lime/20 flex items-center justify-center text-lg">💪</div>
                <div>
                  <div className="font-display font-bold">FitZone Gym — Live Demo</div>
                  <div className="text-xs text-paper/40 font-mono">Member Management System</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs px-2 py-1 rounded-full bg-lime/20 text-lime font-mono">Interactive Demo</span>
                <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-paper/10 transition-colors">
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-64px)]">
              {/* Tabs */}
              <div className="flex gap-1 px-6 pt-5 pb-0">
                {['overview', 'members', 'enquiries'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all ${
                      activeTab === tab
                        ? 'bg-ink text-paper'
                        : 'text-ink/50 hover:text-ink hover:bg-ink/5'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {/* Overview tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[
                        { icon: Users, label: 'Total Members', value: members.length, color: '#2D5016', bg: 'rgba(45,80,22,0.08)' },
                        { icon: CheckCircle, label: 'Active', value: activeCount, color: '#2D5016', bg: 'rgba(139,195,74,0.12)' },
                        { icon: Bell, label: 'Fee Due', value: dueCount, color: '#E65100', bg: 'rgba(230,81,0,0.08)' },
                        { icon: IndianRupee, label: 'Monthly Rev', value: '₹' + (activeCount * 800).toLocaleString('en-IN'), color: '#1565C0', bg: 'rgba(21,101,192,0.08)' },
                      ].map((s) => (
                        <div key={s.label} className="rounded-2xl p-4 border border-ink/6" style={{ background: s.bg }}>
                          <div className="flex items-center gap-2 mb-2">
                            <s.icon size={14} style={{ color: s.color }} />
                            <span className="text-xs text-ink/40 font-mono">{s.label}</span>
                          </div>
                          <div className="font-display font-bold text-2xl text-ink">{s.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Recent activity */}
                    <div>
                      <div className="text-xs font-mono text-ink/40 uppercase tracking-wider mb-3">Recent Activity</div>
                      <div className="space-y-2">
                        {[
                          { text: 'Rohit Verma ne enquiry ki — Monthly plan', time: '2h ago', dot: 'bg-blue-400' },
                          { text: 'Sonu Sharma ka fee due — ₹800', time: '1d ago', dot: 'bg-amber-400' },
                          { text: 'Deepak Yadav ne membership renew ki', time: '2d ago', dot: 'bg-lime' },
                          { text: 'Priya Gupta ka fee due — ₹800', time: '3d ago', dot: 'bg-amber-400' },
                        ].map((a, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm py-2 px-3 rounded-xl hover:bg-ink/4 transition-colors">
                            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${a.dot}`} />
                            <span className="text-ink/70 flex-1">{a.text}</span>
                            <span className="text-ink/30 text-xs font-mono">{a.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl border border-ink/8 bg-ink/3 text-center">
                      <p className="text-sm text-ink/50 mb-3">
                        Ye sirf demo hai — aapke gym ke liye custom system banate hain
                      </p>
                      <a
                        href="https://wa.me/919999999999?text=Hi%2C%20mujhe%20gym%20management%20system%20chahiye"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp text-sm"
                      >
                        Apne Gym Ke Liye Banwao →
                      </a>
                    </div>
                  </div>
                )}

                {/* Members tab */}
                {activeTab === 'members' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-ink/60">{members.length} members total</div>
                      <button
                        onClick={() => setAdding(!adding)}
                        className="flex items-center gap-1.5 text-sm font-medium text-moss hover:text-ink transition-colors"
                      >
                        <Plus size={14} />
                        Add Member
                      </button>
                    </div>

                    <AnimatePresence>
                      {adding && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex gap-2 overflow-hidden"
                        >
                          <input
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAddMember()}
                            placeholder="Member ka naam..."
                            className="flex-1 px-4 py-2 rounded-xl border border-ink/15 bg-white text-sm focus:outline-none focus:border-moss"
                          />
                          <button onClick={handleAddMember} className="btn-primary text-xs px-4 py-2">Add</button>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <AnimatePresence>
                      {addedMsg && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-sm text-moss font-medium flex items-center gap-2 bg-lime/10 px-3 py-2 rounded-xl"
                        >
                          <CheckCircle size={14} />
                          Member add ho gaya!
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="space-y-2">
                      {members.map((m) => (
                        <motion.div
                          key={m.id}
                          layout
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center justify-between p-3 rounded-2xl bg-white border border-ink/6"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-paper flex items-center justify-center font-display font-bold text-sm text-ink">
                              {m.name[0]}
                            </div>
                            <div>
                              <div className="font-medium text-sm text-ink">{m.name}</div>
                              <div className="text-xs text-ink/40 font-mono">{m.plan} · Joined {m.joined}</div>
                            </div>
                          </div>
                          <span
                            className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                              m.due
                                ? 'bg-amber-100 text-amber-700'
                                : 'bg-lime/15 text-moss'
                            }`}
                          >
                            {m.status}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Enquiries tab */}
                {activeTab === 'enquiries' && (
                  <div className="space-y-4">
                    <div className="text-sm text-ink/50">{enquiries.length} new enquiries</div>
                    {enquiries.map((e, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-white border border-ink/6 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center font-bold text-blue-600">
                            {e.name[0]}
                          </div>
                          <div>
                            <div className="font-medium text-sm text-ink">{e.name}</div>
                            <div className="text-xs text-ink/40 font-mono">{e.phone} · {e.interest}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-ink/30 font-mono">{e.time}</span>
                          <a
                            href={`https://wa.me/91${e.phone.replace('xxxxx', '00000')}?text=Hi%20${e.name}%2C%20FitZone%20Gym%20se%20bol%20raha%20hun`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs px-3 py-1.5 rounded-xl font-medium transition-all"
                            style={{ background: '#25D36620', color: '#128C7E' }}
                          >
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    ))}

                    <div className="p-4 rounded-2xl border border-dashed border-ink/15 text-center">
                      <p className="text-sm text-ink/40 mb-2">Naya enquiry form aapki website pe hoga</p>
                      <p className="text-xs text-ink/30 font-mono">Lead aata hai → aapko WhatsApp notification → aap directly call karo</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
