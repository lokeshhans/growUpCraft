import React from "react";
import {
  X,
  Users,
  IndianRupee,
  Bell,
  Plus,
  CheckCircle2,
  TrendingUp,
  MessageCircle,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useAppContext } from "../../context/AppContext";

const enquiries = [
  {
    name: "Rohit Verma",
    phone: "98765xxxxx",
    interest: "Monthly Plan",
    time: "2h ago",
  },

  {
    name: "Neha Singh",
    phone: "97654xxxxx",
    interest: "Ladies Batch",
    time: "5h ago",
  },

  {
    name: "Suresh Kumar",
    phone: "99887xxxxx",
    interest: "Personal Training",
    time: "1d ago",
  },
];

export default function DemoDashboard() {
  const {
    dashboard,

    closeDashboard,

    setDashboardTab,

    setNewMemberName,

    toggleAddMember,

    addMember,
  } = useAppContext();

  const {
    show,
    activeTab,
    addingMember,
    addedMessage,
    newMemberName,
    members,
  } = dashboard;

  const activeCount = members.filter(
    (m) => !m.due
  ).length;

  const dueCount = members.filter(
    (m) => m.due
  ).length;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeDashboard}
        >
          {/* MODAL */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              type: "spring",
              damping: 24,
            }}
            onClick={(e) =>
              e.stopPropagation()
            }
            className="relative w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.12)]"
          >
            {/* HEADER */}
            <div className="h-20 border-b border-black/5 px-7 flex items-center justify-between bg-white">
              {/* LEFT */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-lime-100 flex items-center justify-center text-2xl">
                  💪
                </div>

                <div>
                  <h2 className="font-black text-xl tracking-tight">
                    FitZone Gym
                  </h2>

                  <p className="text-sm text-neutral-500">
                    Member Management Dashboard
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-lime-100 text-lime-800 text-sm font-semibold">
                  <TrendingUp size={16} />
                  Live Demo
                </div>

                <button
                  onClick={closeDashboard}
                  className="w-11 h-11 rounded-2xl hover:bg-black/5 flex items-center justify-center transition-all"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* CONTENT */}
            <div className="overflow-y-auto max-h-[calc(92vh-80px)]">
              {/* TABS */}
              <div className="px-7 pt-7">
                <div className="inline-flex p-1 rounded-2xl bg-black/5">
                  {[
                    "overview",
                    "members",
                    "enquiries",
                  ].map((tab) => (
                    <button
                      key={tab}
                      onClick={() =>
                        setDashboardTab(tab)
                      }
                      className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all ${
                        activeTab === tab
                          ? "text-black"
                          : "text-neutral-500"
                      }`}
                    >
                      {activeTab === tab && (
                        <motion.div
                          layoutId="active-dashboard-tab"
                          className="absolute inset-0 rounded-xl bg-white shadow-sm"
                        />
                      )}

                      <span className="relative z-10">
                        {tab}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* BODY */}
              <div className="p-7">
                {/* OVERVIEW */}
                {activeTab === "overview" && (
                  <div className="space-y-7">
                    {/* STATS */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                      {[
                        {
                          icon: Users,
                          label:
                            "Total Members",
                          value:
                            members.length,
                        },

                        {
                          icon: CheckCircle2,
                          label: "Active",
                          value: activeCount,
                        },

                        {
                          icon: Bell,
                          label: "Fee Due",
                          value: dueCount,
                        },

                        {
                          icon: IndianRupee,
                          label:
                            "Monthly Revenue",
                          value: `₹${(
                            activeCount *
                            800
                          ).toLocaleString(
                            "en-IN"
                          )}`,
                        },
                      ].map((item) => (
                        <motion.div
                          key={item.label}
                          whileHover={{
                            y: -4,
                          }}
                          className="rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
                        >
                          <div className="w-11 h-11 rounded-2xl bg-black/5 flex items-center justify-center">
                            <item.icon
                              size={18}
                            />
                          </div>

                          <h3 className="mt-5 text-4xl font-black tracking-tight">
                            {item.value}
                          </h3>

                          <p className="mt-2 text-sm text-neutral-500">
                            {item.label}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* ACTIVITY */}
                    <div className="rounded-[32px] border border-black/5 bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                      <div className="flex items-center justify-between mb-7">
                        <div>
                          <h3 className="font-black text-2xl">
                            Recent Activity
                          </h3>

                          <p className="text-sm text-neutral-500 mt-1">
                            Latest member &
                            payment updates
                          </p>
                        </div>

                        <div className="hidden sm:flex items-center gap-2 text-sm text-lime-700 font-semibold">
                          <div className="w-2 h-2 rounded-full bg-lime-500" />
                          Live Updates
                        </div>
                      </div>

                      <div className="space-y-3">
                        {[
                          "Rohit Verma joined monthly membership",
                          "Priya Gupta payment pending",
                          "Deepak renewed 6 month plan",
                          "2 new enquiries received today",
                        ].map(
                          (activity, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between rounded-2xl border border-black/5 p-4 hover:bg-black/[0.02] transition-all"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-lime-500" />

                                <span className="text-sm text-neutral-700">
                                  {
                                    activity
                                  }
                                </span>
                              </div>

                              <span className="text-xs text-neutral-400">
                                2h ago
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* MEMBERS */}
                {activeTab === "members" && (
                  <div>
                    {/* TOP */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
                      <div>
                        <h3 className="text-2xl font-black">
                          Members
                        </h3>

                        <p className="text-neutral-500 text-sm mt-1">
                          Manage gym
                          members
                        </p>
                      </div>

                      <button
                        onClick={
                          toggleAddMember
                        }
                        className="h-12 px-5 rounded-2xl bg-black text-white font-semibold flex items-center gap-2"
                      >
                        <Plus size={16} />
                        Add Member
                      </button>
                    </div>

                    {/* ADD MEMBER */}
                    <AnimatePresence>
                      {addingMember && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="rounded-[28px] border border-black/5 bg-white p-5 mb-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                            <div className="flex gap-3">
                              <input
                                value={
                                  newMemberName
                                }
                                onChange={(e) =>
                                  setNewMemberName(
                                    e.target
                                      .value
                                  )
                                }
                                placeholder="Member name..."
                                className="flex-1 h-14 px-5 rounded-2xl border border-black/10 bg-neutral-50 focus:bg-white focus:border-black outline-none transition-all"
                              />

                              <button
                                onClick={
                                  addMember
                                }
                                className="h-14 px-6 rounded-2xl bg-black text-white font-semibold"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* SUCCESS */}
                    <AnimatePresence>
                      {addedMessage && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: -10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                          }}
                          className="mb-5 rounded-2xl bg-lime-100 text-lime-800 px-5 py-4 flex items-center gap-2 text-sm font-semibold"
                        >
                          <CheckCircle2
                            size={18}
                          />
                          Member added
                          successfully
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* LIST */}
                    <div className="space-y-4">
                      {members.map((m) => (
                        <motion.div
                          layout
                          key={m.id}
                          className="rounded-[28px] border border-black/5 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex items-center justify-between"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center font-black text-lg">
                              {m.name[0]}
                            </div>

                            <div>
                              <h4 className="font-semibold">
                                {m.name}
                              </h4>

                              <p className="text-sm text-neutral-500 mt-1">
                                {m.plan}
                                {" • "}
                                Joined{" "}
                                {
                                  m.joined
                                }
                              </p>
                            </div>
                          </div>

                          <div
                            className={`px-4 py-2 rounded-full text-sm font-semibold ${
                              m.due
                                ? "bg-orange-100 text-orange-700"
                                : "bg-lime-100 text-lime-700"
                            }`}
                          >
                            {m.status}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ENQUIRIES */}
                {activeTab ===
                  "enquiries" && (
                  <div>
                    <div className="mb-7">
                      <h3 className="text-2xl font-black">
                        New Enquiries
                      </h3>

                      <p className="text-sm text-neutral-500 mt-1">
                        Leads coming from
                        website forms
                      </p>
                    </div>

                    <div className="space-y-4">
                      {enquiries.map(
                        (item, index) => (
                          <motion.div
                            key={index}
                            whileHover={{
                              y: -3,
                            }}
                            className="rounded-[28px] border border-black/5 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-5"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-14 h-14 rounded-2xl bg-lime-100 flex items-center justify-center font-black text-lime-700">
                                {
                                  item.name[0]
                                }
                              </div>

                              <div>
                                <h4 className="font-semibold">
                                  {
                                    item.name
                                  }
                                </h4>

                                <p className="text-sm text-neutral-500 mt-1">
                                  {
                                    item.interest
                                  }
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <span className="text-xs text-neutral-400">
                                {
                                  item.time
                                }
                              </span>

                              <a
                                href={`https://wa.me/91${item.phone}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-11 px-5 rounded-2xl bg-[#25D366] text-white font-semibold flex items-center gap-2"
                              >
                                <MessageCircle
                                  size={16}
                                />
                                WhatsApp
                              </a>
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}