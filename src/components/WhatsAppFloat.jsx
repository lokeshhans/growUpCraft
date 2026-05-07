import React, {
  useEffect,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  X,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function WhatsAppFloat() {
  const [showButton, setShowButton] =
    useState(false);

  const [showBubble, setShowBubble] =
    useState(false);

  const [hideBubble, setHideBubble] =
    useState(false);

  useEffect(() => {
    const buttonTimer = setTimeout(
      () => {
        setShowButton(true);
      },
      1200
    );

    const bubbleTimer = setTimeout(
      () => {
        setShowBubble(true);
      },
      3200
    );

    return () => {
      clearTimeout(buttonTimer);

      clearTimeout(bubbleTimer);
    };
  }, []);

  const whatsappLink =
    "https://wa.me/918930296001?text=Hi%20GrowUpCraft%2C%20I%20want%20to%20discuss%20a%20website%20or%20web%20application.";

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[90] flex flex-col items-end gap-4">
      {/* CHAT BUBBLE */}
      <AnimatePresence>
        {showBubble &&
          !hideBubble && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 10,
                scale: 0.9,
              }}
              transition={{
                type: "spring",
                damping: 20,
              }}
              className="relative w-[290px] rounded-[28px] border border-white/10 bg-black/95 backdrop-blur-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden"
            >
              {/* GLOW */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime-300/10 blur-3xl rounded-full" />

              {/* TOP BORDER */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* CLOSE */}
              <button
                onClick={() =>
                  setHideBubble(true)
                }
                className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all"
              >
                <X
                  size={14}
                  className="text-white/50"
                />
              </button>

              {/* CONTENT */}
              <div className="relative z-10">
                {/* ICON */}
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-lg shadow-green-500/20">
                  <MessageCircle
                    size={24}
                    className="text-white"
                  />
                </div>

                {/* TEXT */}
                <div className="mt-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/6 text-xs font-medium text-white/70">
                    <Sparkles size={12} />
                    Usually replies quickly
                  </div>

                  <h3 className="mt-4 text-xl font-black tracking-tight text-white">
                    Need a website or
                    dashboard?
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    Chat directly on
                    WhatsApp for demo,
                    pricing or project
                    discussion.
                  </p>
                </div>

                {/* CTA */}
                <motion.a
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 h-12 rounded-2xl bg-white text-black font-semibold flex items-center justify-center gap-2 shadow-xl"
                >
                  Start Conversation

                  <MessageCircle
                    size={16}
                  />
                </motion.a>
              </div>
            </motion.div>
          )}
      </AnimatePresence>

      {/* FLOAT BUTTON */}
      <AnimatePresence>
        {showButton && (
          <motion.a
            initial={{
              opacity: 0,
              scale: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
            transition={{
              type: "spring",
              damping: 16,
            }}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.92,
            }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            {/* PING */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

            {/* BUTTON */}
            <div className="relative w-16 h-16 rounded-full bg-[#25D366] shadow-[0_15px_40px_rgba(37,211,102,0.35)] flex items-center justify-center border border-white/10 overflow-hidden">
              {/* SHINE */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0" />

              {/* ICON */}
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="white"
                className="relative z-10"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
            </div>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}