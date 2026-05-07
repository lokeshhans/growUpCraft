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

import { useAppContext } from "../../context/AppContext";import React, {
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  ArrowRight,
  TrendingUp,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const projects = [
  {
    id: "gym",

    emoji: "💪",

    category:
      "Gym Management",

    title:
      "FitZone Gym Dashboard",

    location:
      "Palwal, Haryana",

    description:
      "A complete member management system for handling memberships, fee tracking, enquiries and revenue analytics.",

    stats: [
      "₹22k+ revenue recovered",

      "3x better enquiry conversion",

      "2 hours/day manual work reduced",
    ],

    metrics: [
      {
        label:
          "Members",

        value: "248",
      },

      {
        label:
          "Revenue",

        value:
          "₹1.8L",
      },

      {
        label:
          "Enquiries",

        value: "32",
      },
    ],
  },

  {
    id: "coaching",

    emoji: "🏫",

    category:
      "Coaching Institute",

    title:
      "Star Coaching Portal",

    location:
      "Palwal",

    description:
      "A modern website and student management portal with online enquiries, attendance and fee tracking.",

    stats: [
      "40+ online enquiries",

      "Admissions process simplified",

      "80 → 140 students in 3 months",
    ],

    metrics: [
      {
        label:
          "Students",

        value: "140",
      },

      {
        label:
          "Admissions",

        value: "28",
      },

      {
        label:
          "Courses",

        value: "12",
      },
    ],
  },

  {
    id: "property",

    emoji: "🏠",

    category:
      "Property Business",

    title:
      "RealPal Lead System",

    location:
      "Palwal • NCR",

    description:
      "Property listing website with lead tracking, WhatsApp integration and follow-up management system.",

    stats: [
      "200+ leads generated",

      "3 properties sold",

      "Zero missed follow-ups",
    ],

    metrics: [
      {
        label:
          "Leads",

        value:
          "200+",
      },

      {
        label:
          "Listings",

        value: "54",
      },

      {
        label:
          "Sales",

        value: "3",
      },
    ],
  },
];

export default function Projects() {
  const [active, setActive] =
    useState(0);

  const project =
    projects[active];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white dark:bg-black py-28 lg:py-36 transition-colors duration-500"
    >
      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#000 1px, transparent 1px),
              linear-gradient(90deg, #000 1px, transparent 1px)
            `,
            backgroundSize:
              "70px 70px",
          }}
        />
      </div>

      {/* GLOW */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-lime-100/40 dark:bg-lime-500/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* HEADER */}

        <div className="max-w-3xl">
          <motion.span
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.04] shadow-sm text-sm font-medium text-black dark:text-white"
          >
            📁 Selected
            Work
          </motion.span>

          <motion.h2
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
            className="mt-7 text-4xl sm:text-6xl font-black tracking-tight leading-[0.95] text-black dark:text-white"
          >
            Real projects
            <br />
            with measurable
            results.
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-2xl"
          >
            We build
            systems and
            websites that
            solve real
            business
            problems —
            from lead
            management to
            student portals
            and gym
            dashboards.
          </motion.p>
        </div>

        {/* MAIN */}

        <div className="mt-20 grid lg:grid-cols-[320px_1fr] gap-10 items-start">
          {/* LEFT */}

          <div className="lg:sticky lg:top-28 space-y-4">
            {projects.map(
              (
                item,
                index
              ) => (
                <button
                  key={
                    item.id
                  }
                  onClick={() =>
                    setActive(
                      index
                    )
                  }
                  className={`relative w-full text-left rounded-[28px] p-5 border transition-all duration-300 ${
                    active ===
                    index
                      ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-2xl"
                      : "bg-white dark:bg-neutral-950 border-black/5 dark:border-white/10 hover:border-black/15 dark:hover:border-white/20"
                  }`}
                >
                  {active ===
                    index && (
                    <motion.div
                      layoutId="active-project"
                      className="absolute inset-0 rounded-[28px] bg-black dark:bg-white"
                    />
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${
                          active ===
                          index
                            ? "bg-white/10 dark:bg-black/10"
                            : "bg-black/5 dark:bg-white/5"
                        }`}
                      >
                        {
                          item.emoji
                        }
                      </div>

                      <div>
                        <p
                          className={`text-xs ${
                            active ===
                            index
                              ? "text-white/50 dark:text-black/50"
                              : "text-neutral-400 dark:text-neutral-500"
                          }`}
                        >
                          {
                            item.category
                          }
                        </p>

                        <h3 className="font-black text-lg tracking-tight">
                          {
                            item.title
                          }
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`mt-5 flex items-center gap-2 text-sm ${
                        active ===
                        index
                          ? "text-white/60 dark:text-black/60"
                          : "text-neutral-500 dark:text-neutral-400"
                      }`}
                    >
                      📍{" "}
                      {
                        item.location
                      }
                    </div>
                  </div>
                </button>
              )
            )}
          </div>

          {/* RIGHT */}

          <AnimatePresence mode="wait">
            <motion.div
              key={
                project.id
              }
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.35,
              }}
            >
              {/* BROWSER */}

              <div className="rounded-[36px] border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-950 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                {/* TOP BAR */}

                <div className="h-14 border-b border-black/5 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.03] flex items-center px-5 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />

                  <div className="w-3 h-3 rounded-full bg-yellow-400" />

                  <div className="w-3 h-3 rounded-full bg-green-400" />

                  <div className="ml-4 text-xs text-neutral-400 dark:text-neutral-500 font-medium">
                    growupcraft
                    .in/project
                  </div>
                </div>

                {/* CONTENT */}

                <div className="p-8 lg:p-10">
                  {/* TOP */}

                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                    <div className="max-w-2xl">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-100 dark:bg-lime-500/20 text-lime-800 dark:text-lime-300 text-sm font-semibold">
                        <CheckCircle2
                          size={
                            16
                          }
                        />

                        Live
                        Project
                      </div>

                      <h3 className="mt-6 text-4xl font-black tracking-tight leading-none text-black dark:text-white">
                        {
                          project.title
                        }
                      </h3>

                      <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {
                          project.description
                        }
                      </p>
                    </div>

                    {/* METRICS */}

                    <div className="grid grid-cols-3 gap-4 min-w-fit">
                      {project.metrics.map(
                        (
                          metric
                        ) => (
                          <div
                            key={
                              metric.label
                            }
                            className="rounded-2xl border border-black/5 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.03] px-5 py-4 text-center"
                          >
                            <h4 className="text-2xl font-black text-black dark:text-white">
                              {
                                metric.value
                              }
                            </h4>

                            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                              {
                                metric.label
                              }
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* RESULTS */}

                  <div className="mt-12 grid sm:grid-cols-3 gap-4">
                    {project.stats.map(
                      (
                        stat,
                        index
                      ) => (
                        <div
                          key={
                            index
                          }
                          className="rounded-2xl border border-black/5 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.03] p-5"
                        >
                          <div className="w-10 h-10 rounded-xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center mb-4">
                            <TrendingUp
                              size={
                                18
                              }
                            />
                          </div>

                          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                            {
                              stat
                            }
                          </p>
                        </div>
                      )
                    )}
                  </div>

                  {/* CTA */}

                  <div className="mt-12 flex flex-wrap gap-4">
                    <motion.a
                      whileHover={{
                        scale: 1.03,
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      href="https://wa.me/918930296001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group h-14 px-7 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-semibold flex items-center gap-2 shadow-xl"
                    >
                      Discuss
                      Your
                      Business

                      <ArrowRight
                        size={
                          18
                        }
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </motion.a>

                    <div className="h-14 px-6 rounded-2xl border border-black/10 dark:border-white/10 flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300 bg-white dark:bg-white/[0.03]">
                      <Clock3
                        size={
                          16
                        }
                      />

                      Typical
                      delivery:
                      5–15
                      days
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

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