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

  const handleChange = (
    e
  ) => {
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

  const handleSubmit = (
    e
  ) => {
    e.preventDefault();

    /*
    |--------------------------------------------------------------------------
    | VALIDATION
    |--------------------------------------------------------------------------
    */

    if (
      !contactForm.name.trim() ||
      !contactForm.phone.trim()
    ) {
      setContactError(
        "Please enter your name and phone number."
      );

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | RESET ERROR
    |--------------------------------------------------------------------------
    */

    setContactError("");

    setContactLoading(
      true
    );

    /*
    |--------------------------------------------------------------------------
    | WHATSAPP MESSAGE
    |--------------------------------------------------------------------------
    */

    const message = `
🚀 New Project Enquiry

👤 Name:
${contactForm.name}

📱 Phone:
${contactForm.phone}

📝 Project Details:
${contactForm.message || "Not provided"}

— GrowUpCraft Website
`;

    /*
    |--------------------------------------------------------------------------
    | WHATSAPP URL
    |--------------------------------------------------------------------------
    */

    const whatsappURL = `https://wa.me/918930296001?text=${encodeURIComponent(
      message
    )}`;

    /*
    |--------------------------------------------------------------------------
    | OPEN WHATSAPP
    |--------------------------------------------------------------------------
    */

    window.open(
      whatsappURL,
      "_blank"
    );

    /*
    |--------------------------------------------------------------------------
    | SUCCESS UI
    |--------------------------------------------------------------------------
    */

    setTimeout(() => {
      setContactLoading(
        false
      );

      setContactSuccess(
        true
      );

      resetContactForm();

      showToast(
        "Redirecting to WhatsApp...",
        "success"
      );

      setTimeout(() => {
        setContactSuccess(
          false
        );
      }, 4000);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="relative py-28 lg:py-36 overflow-hidden bg-white dark:bg-black transition-colors duration-500"
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10">
        {/* GLOW */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-lime-100/40 dark:bg-lime-500/10 blur-3xl" />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
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

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}

          <div className="max-w-lg">
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
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

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 text-sm font-medium bg-white dark:bg-white/[0.03] text-black dark:text-white shadow-sm backdrop-blur-xl">
                <MessageCircle
                  size={
                    15
                  }
                />

                Let's Talk
              </span>

              {/* HEADING */}

              <h2 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] text-black dark:text-white">
                Tell us what
                you want to
                build.
              </h2>

              {/* DESCRIPTION */}

              <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                We build
                modern,
                practical and
                conversion-focused
                websites for
                schools,
                gyms and
                local
                businesses
                that want a
                stronger
                digital
                presence.
              </p>
            </motion.div>

            {/* INFO */}

            <div className="mt-12 space-y-5">
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
              ].map(
                (
                  item
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
                    viewport={{
                      once: true,
                    }}
                    className="group flex items-start gap-4 p-4 rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center">
                      <item.icon
                        size={
                          18
                        }
                        className="text-black dark:text-white"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-black dark:text-white">
                        {
                          item.title
                        }
                      </h3>

                      <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">
                        {
                          item.desc
                        }
                      </p>
                    </div>
                  </motion.div>
                )
              )}
            </div>

            {/* WHATSAPP */}

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
              className="mt-10 inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-[#25D366] text-white font-semibold shadow-2xl shadow-green-200/40"
            >
              <MessageCircle
                size={
                  18
                }
              />

              Chat on
              WhatsApp
            </motion.a>
          </div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="relative"
          >
            {/* CARD */}

            <div className="rounded-[36px] border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-950 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
              {/* TOP BAR */}

              <div className="h-14 border-b border-black/5 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.03] flex items-center px-5 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />

                <div className="w-3 h-3 rounded-full bg-yellow-400" />

                <div className="w-3 h-3 rounded-full bg-green-400" />

                <div className="ml-4 text-xs text-neutral-400 dark:text-neutral-500 font-medium">
                  growupcraft
                  .in/contact
                </div>
              </div>

              {/* FORM */}

              <div className="p-7 sm:p-9">
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
                      <div className="w-20 h-20 rounded-full bg-lime-100 dark:bg-lime-500/20 flex items-center justify-center mx-auto">
                        <CheckCircle2
                          size={
                            40
                          }
                          className="text-lime-700 dark:text-lime-300"
                        />
                      </div>

                      <h3 className="mt-6 text-3xl font-black text-black dark:text-white">
                        Request
                        Sent
                      </h3>

                      <p className="mt-3 text-neutral-500 dark:text-neutral-400 max-w-sm mx-auto leading-relaxed">
                        We
                        received
                        your
                        details
                        and will
                        contact
                        you
                        shortly.
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
                        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          Your
                          Name
                        </label>

                        <input
                          type="text"
                          name="name"
                          value={
                            contactForm.name
                          }
                          onChange={
                            handleChange
                          }
                          placeholder="Rohit Sharma"
                          className="mt-2 w-full h-14 px-5 rounded-2xl border border-black/10 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.03] focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white text-black dark:text-white outline-none transition-all"
                        />
                      </div>

                      {/* PHONE */}

                      <div>
                        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          Phone
                          Number
                        </label>

                        <input
                          type="text"
                          name="phone"
                          value={
                            contactForm.phone
                          }
                          onChange={
                            handleChange
                          }
                          placeholder="+91 98765 43210"
                          className="mt-2 w-full h-14 px-5 rounded-2xl border border-black/10 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.03] focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white text-black dark:text-white outline-none transition-all"
                        />
                      </div>

                      {/* MESSAGE */}

                      <div>
                        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          Project
                          Details
                        </label>

                        <textarea
                          rows={
                            5
                          }
                          name="message"
                          value={
                            contactForm.message
                          }
                          onChange={
                            handleChange
                          }
                          placeholder="Tell us a little about your business or project..."
                          className="mt-2 w-full px-5 py-4 rounded-2xl border border-black/10 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.03] focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white text-black dark:text-white outline-none transition-all resize-none"
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
                        className="w-full h-14 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-semibold flex items-center justify-center gap-2 disabled:opacity-60 shadow-xl"
                      >
                        {contactLoading ? (
                          <span>
                            Sending
                            Request...
                          </span>
                        ) : (
                          <>
                            Send
                            Request

                            <ArrowRight
                              size={
                                18
                              }
                            />
                          </>
                        )}
                      </motion.button>

                      <p className="text-center text-sm text-neutral-400 dark:text-neutral-500">
                        No spam.
                        Just a
                        genuine
                        conversation
                        about
                        your
                        project.
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
  );
}