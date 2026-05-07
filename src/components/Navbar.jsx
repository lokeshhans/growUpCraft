import logo from "/favicon.png";
import { useEffect } from "react";

import {
  NavLink,
  useLocation,
} from "react-router-dom";

import {
  motion,
  AnimatePresence,
  useScroll,
} from "framer-motion";

import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  Moon,
  Sun,
} from "lucide-react";

import { useAppContext } from "../context/AppContext";

const navLinks = [
  {
    label: "Home",
    path: "/",
  },

  {
    label: "Services",
    path: "/services",
  },

  {
    label: "Projects",
    path: "/projects",
  },

  {
    label: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const {
    mobileMenu,
    toggleMenu,
    closeMenu,
    theme,
    toggleTheme,
  } = useAppContext();

  const {
    scrollYProgress,
  } = useScroll();

  const location =
    useLocation();

  /*
  |--------------------------------------------------------------------------
  | CLOSE MENU ON ROUTE CHANGE
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <>
      {/* TOP SCROLL LINE */}

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-black dark:bg-white origin-left z-[70]"
        style={{
          scaleX:
            scrollYProgress,
        }}
      />

      {/* NAVBAR */}

      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-2xl border-b border-black/5 dark:border-white/10 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[78px] flex items-center justify-between">
            {/* LOGO */}

            <NavLink
              to="/"
              className="flex items-center gap-3 group"
            >
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.05,
                }}
                className="w-11 h-11 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-lg"
              >
                <img
                  src={logo}
                  alt="GrowUpCraft"
                  className="w-8 h-8 object-contain"
                />
              </motion.div>

              <div>
                <h2 className="font-black text-lg tracking-tight text-black dark:text-white">
                  GrowUpCraft
                </h2>

                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Modern Web Experiences
                </p>
              </div>
            </NavLink>

            {/* DESKTOP NAV */}

            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map(
                (item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({
                      isActive,
                    }) =>
                      `relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "text-black dark:text-white"
                          : "text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                      }`
                    }
                  >
                    {({
                      isActive,
                    }) => (
                      <>
                        {isActive && (
                          <motion.div
                            layoutId="navbar-active"
                            className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full"
                          />
                        )}

                        <span className="relative z-10 flex items-center gap-2">
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                          )}

                          {item.label}
                        </span>
                      </>
                    )}
                  </NavLink>
                )
              )}
            </nav>

            {/* RIGHT SIDE */}

            <div className="hidden lg:flex items-center gap-3">
              {/* DARK MODE */}

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={
                  toggleTheme
                }
                className="w-11 h-11 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-black flex items-center justify-center transition-all duration-300"
              >
                {theme 
                !==
                "dark" ? (
                  <Sun
                    size={18}
                    className="text-yellow-400"
                  />
                ) : (
                  <Moon
                    size={18}
                    className="text-black"
                  />
                )}
              </motion.button>

              {/* CALL */}

              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                href="tel:+918930296001"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-all duration-300 text-black dark:text-white"
              >
                <Phone
                  size={16}
                />

                <span className="text-sm font-medium">
                  Call Now
                </span>
              </motion.a>

              {/* CTA */}

              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                href="https://wa.me/918930296001"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium shadow-xl"
              >
                <span>
                  Start Project
                </span>

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </motion.a>
            </div>

            {/* MOBILE BUTTON */}

            <button
              aria-label="Open Menu"
              onClick={
                toggleMenu
              }
              className="lg:hidden w-11 h-11 rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-center text-black dark:text-white"
            >
              {mobileMenu ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {mobileMenu && (
          <>
            {/* OVERLAY */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={
                closeMenu
              }
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* MENU */}

            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                damping: 24,
              }}
              className="fixed top-0 right-0 w-[85%] max-w-sm h-screen bg-white dark:bg-black z-50 p-6 shadow-2xl flex flex-col"
            >
              {/* TOP */}

              <div className="flex items-center justify-between mb-10">
                <h2 className="font-black text-xl text-black dark:text-white">
                  GrowUpCraft
                </h2>

                <button
                  onClick={
                    closeMenu
                  }
                  className="text-black dark:text-white"
                >
                  <X size={22} />
                </button>
              </div>

              {/* LINKS */}

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},

                  visible: {
                    transition:
                      {
                        staggerChildren: 0.08,
                      },
                  },
                }}
                className="flex flex-col gap-3"
              >
                {navLinks.map(
                  (item) => (
                    <motion.div
                      key={
                        item.path
                      }
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: 30,
                        },

                        visible: {
                          opacity: 1,
                          x: 0,
                        },
                      }}
                    >
                      <NavLink
                        to={
                          item.path
                        }
                        className={({
                          isActive,
                        }) =>
                          `block px-5 py-4 rounded-2xl text-base font-medium transition-all duration-300 ${
                            isActive
                              ? "bg-black text-white dark:bg-white dark:text-black"
                              : "hover:bg-neutral-100 dark:hover:bg-white/5 text-black dark:text-white"
                          }`
                        }
                      >
                        {
                          item.label
                        }
                      </NavLink>
                    </motion.div>
                  )
                )}
              </motion.div>

              {/* BOTTOM */}

              <div className="mt-auto pt-6 flex flex-col gap-3">
                <a
                  href="https://wa.me/918930296001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl bg-black text-white dark:bg-white dark:text-black text-center font-semibold"
                >
                  Start Your
                  Project
                </a>

                <a
                  href="tel:+918930296001"
                  className="w-full py-4 rounded-2xl border border-black/10 dark:border-white/10 text-center font-medium text-black dark:text-white"
                >
                  Call Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}