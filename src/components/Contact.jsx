import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  MapPin,
  Clock3,
  Sparkles,
  Phone,
  Mail,
  Globe,
  ShieldCheck,
} from "lucide-react";

import { useAppContext } from "../context/AppContext";

export default function Contact() {
  const {
    contactForm,
    contactLoading,
    contactSuccess,
    contactError,

    updateContactForm,
    resetContactForm,

    setContactLoading,
    setContactSuccess,
    setContactError,

    showToast,
  } = useAppContext();

  /*
  |--------------------------------------------------------------------------
  | HANDLE CHANGE
  |--------------------------------------------------------------------------
  */

  const handleChange = (e) => {
    updateContactForm(
      e.target.name,
      e.target.value
    );
  };

  /*
  |--------------------------------------------------------------------------
  | HANDLE SUBMIT
  |--------------------------------------------------------------------------
  */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !contactForm.name.trim() ||
      !contactForm.phone.trim()
    ) {
      setContactError(
        "Please enter your full name and phone number."
      );

      return;
    }

    setContactError("");

    setContactLoading(true);

    const message = `
🚀 New Website Development Enquiry

👤 Full Name:
${contactForm.name}

📱 Phone Number:
${contactForm.phone}

🏢 Company:
${contactForm.company || "Not provided"}

🌐 Website:
${contactForm.website || "Not provided"}

💰 Budget:
${contactForm.budget || "Not provided"}

📝 Website Requirements:
${contactForm.message || "Not provided"}

Interested In:
• React Website Development
• SEO Optimization
• UI/UX Design
• Business Growth

— GrowUpCraft
https://growupcraft.com
`;

    const whatsappURL = `https://wa.me/918930296001?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappURL,
      "_blank"
    );

    setTimeout(() => {
      setContactLoading(false);

      setContactSuccess(true);

      resetContactForm();

      showToast(
        "Redirecting to WhatsApp...",
        "success"
      );

      setTimeout(() => {
        setContactSuccess(false);
      }, 4000);
    }, 800);
  };

  return (
    <>
      {/* SEO STRUCTURED DATA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context":
              "https://schema.org",
            "@type":
              "Organization",
            name: "GrowUpCraft",
            url: "https://growupcraft.com",
            telephone:
              "+91-8930296001",
            email: [
              "hello@growupcraft.com",
              "support@growupcraft.com",
              "projects@growupcraft.com",
            ],
            areaServed:
              "India",
          }),
        }}
      />

      <section
        id="contact"
        className="relative overflow-hidden py-14 sm:py-24 lg:py-36 bg-[#f8f8f6] dark:bg-[#050505] transition-colors duration-500"
      >
        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px)
              `,
              backgroundSize:
                "70px 70px",
            }}
          />
        </div>

        {/* MAIN GLOW */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[850px] rounded-full bg-lime-200/40 dark:bg-lime-500/10 blur-3xl" />

        {/* EXTRA GLOW */}

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-200/20 dark:bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
            {/* LEFT */}

            <div className="max-w-xl">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
              >
                {/* TAG */}

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl shadow-sm text-xs sm:text-sm font-medium text-black dark:text-white">
                  <Sparkles
                    size={15}
                  />

                  Build Your
                  Business Online
                </div>

                {/* HEADING */}

                <h2 className="mt-5 text-[2.3rem] leading-[1] sm:text-6xl lg:text-7xl font-black tracking-[-0.05em] text-black dark:text-white">
                  Hire React
                  Developers &
                  Build High-
                  Converting
                  Websites.
                </h2>

                {/* DESCRIPTION */}

                <p className="mt-5 text-sm sm:text-lg leading-[1.9] text-black/70 dark:text-white/70 max-w-xl">
                  GrowUpCraft
                  helps
                  businesses,
                  startups,
                  schools,
                  gyms and
                  brands build
                  fast,
                  SEO-optimized,
                  mobile-friendly
                  React websites
                  with premium
                  UI/UX,
                  modern
                  animations,
                  and
                  conversion-focused
                  design systems.

                  <span className="block mt-4">
                    Serving
                    clients
                    across
                    Haryana,
                    Delhi NCR,
                    and all
                    over India.
                  </span>
                </p>
              </motion.div>

              {/* INFO CARDS */}

              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: Clock3,

                    title:
                      "Quick Response",

                    desc:
                      "Usually replies within 1–2 hours",
                  },

                  {
                    icon: MapPin,

                    title:
                      "Based in Haryana",

                    desc:
                      "Working remotely across India",
                  },

                  {
                    icon: ShieldCheck,

                    title:
                      "SEO Optimized Websites",

                    desc:
                      "Fast, mobile responsive & Google-friendly",
                  },

                  {
                    icon: Phone,

                    title:
                      "Direct WhatsApp Support",

                    desc:
                      "+91 89302 96001",
                  },
                ].map(
                  (
                    item,
                    index
                  ) => (
                    <motion.div
                      key={
                        item.title
                      }
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay:
                          index *
                          0.08,
                      }}
                      viewport={{
                        once: true,
                      }}
                      whileHover={{
                        y: -3,
                      }}
                      className="group relative overflow-hidden rounded-[28px] border border-black/6 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-2xl p-5 sm:p-6 transition-all duration-500 shadow-sm"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-lime-100/30 to-transparent dark:from-lime-500/5 pointer-events-none" />

                      <div className="relative flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center shadow-xl">
                          <item.icon
                            size={16}
                          />
                        </div>

                        <div>
                          <h3 className="font-black text-sm text-black dark:text-white">
                            {
                              item.title
                            }
                          </h3>

                          <p className="mt-1 text-xs leading-relaxed text-black/55 dark:text-white/55">
                            {
                              item.desc
                            }
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                )}
              </div>

              {/* CONTACT DETAILS */}

              <div className="mt-8 rounded-[28px] border border-black/6 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-2xl p-6 space-y-4">
                <a
                  href="tel:+918930296001"
                  className="flex items-center gap-3 text-sm text-black dark:text-white hover:text-lime-600 transition"
                >
                  <Phone size={16} />

                  +91 89302
                  96001
                </a>

                <a
                  href="mailto:hello@growupcraft.com"
                  className="flex items-center gap-3 text-sm text-black dark:text-white hover:text-lime-600 transition"
                >
                  <Mail size={16} />

                  hello@growupcraft.com
                </a>

                <a
                  href="mailto:support@growupcraft.com"
                  className="flex items-center gap-3 text-sm text-black dark:text-white hover:text-lime-600 transition"
                >
                  <Mail size={16} />

                  support@growupcraft.com
                </a>

                <a
                  href="mailto:projects@growupcraft.com"
                  className="flex items-center gap-3 text-sm text-black dark:text-white hover:text-lime-600 transition"
                >
                  <Mail size={16} />

                  projects@growupcraft.com
                </a>

                <a
                  href="https://growupcraft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-black dark:text-white hover:text-lime-600 transition"
                >
                  <Globe size={16} />

                  growupcraft.com
                </a>
              </div>

              {/* CTA */}

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
                className="group mt-8 w-full sm:w-auto h-14 px-7 rounded-2xl bg-[#25D366] text-white font-semibold flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(37,211,102,0.25)]"
              >
                <MessageCircle
                  size={18}
                />

                Chat on
                WhatsApp

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
            </div>

            {/* RIGHT */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[34px] sm:rounded-[40px] border border-black/6 dark:border-white/10 bg-white/80 dark:bg-neutral-950/90 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
                {/* TOP BAR */}

                <div className="relative h-14 border-b border-black/6 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] flex items-center px-5 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />

                  <div className="w-3 h-3 rounded-full bg-yellow-400" />

                  <div className="w-3 h-3 rounded-full bg-green-400" />

                  <div className="ml-4 text-xs text-black/30 dark:text-white/30 font-medium">
                    growupcraft.com
                  </div>
                </div>

                {/* FORM */}

                <div className="relative p-5 sm:p-8 lg:p-10">
                  <AnimatePresence mode="wait">
                    {contactSuccess ? (
                      <motion.div
                        key="success"
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
                        }}
                        className="py-16 text-center"
                      >
                        <div className="w-24 h-24 rounded-full bg-lime-100 dark:bg-lime-500/20 flex items-center justify-center mx-auto shadow-xl">
                          <CheckCircle2
                            size={42}
                            className="text-lime-700 dark:text-lime-300"
                          />
                        </div>

                        <h3 className="mt-7 text-3xl sm:text-4xl font-black tracking-tight text-black dark:text-white">
                          Request Sent
                        </h3>

                        <p className="mt-4 text-black/55 dark:text-white/55 max-w-sm mx-auto leading-[1.8]">
                          We received
                          your
                          details and
                          will contact
                          you shortly
                          on WhatsApp.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        onSubmit={
                          handleSubmit
                        }
                        className="space-y-6"
                      >
                        {/* NAME */}

                        <div>
                          <label className="text-sm font-semibold text-black dark:text-white">
                            Full Name
                          </label>

                          <input
                            type="text"
                            name="name"
                            required
                            autoComplete="name"
                            aria-label="Full Name"
                            value={
                              contactForm.name
                            }
                            onChange={
                              handleChange
                            }
                            placeholder="Rohit Sharma"
                            className="mt-3 w-full h-14 px-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white text-black dark:text-white outline-none transition-all"
                          />
                        </div>

                        {/* PHONE */}

                        <div>
                          <label className="text-sm font-semibold text-black dark:text-white">
                            Phone Number
                          </label>

                          <input
                            type="tel"
                            name="phone"
                            required
                            autoComplete="tel"
                            aria-label="Phone Number"
                            value={
                              contactForm.phone
                            }
                            onChange={
                              handleChange
                            }
                            placeholder="+91 98765 43210"
                            className="mt-3 w-full h-14 px-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white text-black dark:text-white outline-none transition-all"
                          />
                        </div>

                        {/* COMPANY */}

                        <div>
                          <label className="text-sm font-semibold text-black dark:text-white">
                            Company /
                            Brand
                          </label>

                          <input
                            type="text"
                            name="company"
                            placeholder="Your company name"
                            className="mt-3 w-full h-14 px-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white text-black dark:text-white outline-none transition-all"
                          />
                        </div>

                        {/* WEBSITE */}

                        <div>
                          <label className="text-sm font-semibold text-black dark:text-white">
                            Website URL
                          </label>

                          <input
                            type="url"
                            name="website"
                            placeholder="https://example.com"
                            className="mt-3 w-full h-14 px-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white text-black dark:text-white outline-none transition-all"
                          />
                        </div>

                        {/* BUDGET */}

                        <div>
                          <label className="text-sm font-semibold text-black dark:text-white">
                            Project
                            Budget
                          </label>

                          <select
                            name="budget"
                            className="mt-3 w-full h-14 px-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white text-black dark:text-white outline-none transition-all"
                          >
                            <option>
                              Select
                              Budget
                            </option>

                            <option>
                              ₹10k -
                              ₹25k
                            </option>

                            <option>
                              ₹25k -
                              ₹50k
                            </option>

                            <option>
                              ₹50k -
                              ₹1L
                            </option>

                            <option>
                              ₹1L+
                            </option>
                          </select>
                        </div>

                        {/* MESSAGE */}

                        <div>
                          <label className="text-sm font-semibold text-black dark:text-white">
                            Website or
                            Project
                            Requirements
                          </label>

                          <textarea
                            rows={5}
                            name="message"
                            value={
                              contactForm.message
                            }
                            onChange={
                              handleChange
                            }
                            placeholder="Tell us about your business, goals, website idea or project requirements..."
                            className="mt-3 w-full px-5 py-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white text-black dark:text-white outline-none transition-all resize-none"
                          />
                        </div>

                        {/* ERROR */}

                        {contactError && (
                          <p className="text-red-500 text-sm">
                            {
                              contactError
                            }
                          </p>
                        )}

                        {/* BUTTON */}

                        <motion.button
                          whileHover={{
                            scale: 1.01,
                          }}
                          whileTap={{
                            scale: 0.98,
                          }}
                          disabled={
                            contactLoading
                          }
                          className="group w-full h-14 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-semibold flex items-center justify-center gap-2 shadow-2xl disabled:opacity-60"
                        >
                          {contactLoading ? (
                            <span>
                              Sending
                              Request...
                            </span>
                          ) : (
                            <>
                              Send
                              Project
                              Request

                              <ArrowRight
                                size={
                                  18
                                }
                                className="transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </>
                          )}
                        </motion.button>

                        {/* TRUST */}

                        <div className="grid grid-cols-2 gap-3 text-xs text-black/55 dark:text-white/55">
                          <div>
                            ✔ SEO
                            Optimized
                          </div>

                          <div>
                            ✔ Fast
                            Delivery
                          </div>

                          <div>
                            ✔ Mobile
                            Responsive
                          </div>

                          <div>
                            ✔ Premium
                            UI/UX
                          </div>
                        </div>

                        {/* NOTE */}

                        <p className="text-center text-sm leading-relaxed text-black/40 dark:text-white/40">
                          No spam.
                          Just a
                          genuine
                          discussion
                          about your
                          business,
                          website and
                          growth.
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}