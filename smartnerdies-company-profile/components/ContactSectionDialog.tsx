import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

const ContactSectionDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const admins = [
    {
      href: "https://wa.me/6289684572757",
      label: "Jeni",
      image: "/jeni.png",
      color: "from-blue-500 to-cyan-500",
      available: true,
    },
    {
      href: "https://wa.me/6283840128692",
      label: "Rhae",
      image: "/rhae.png",
      color: "from-purple-500 to-pink-500",
      available: true,
    },
    {
      href: "https://wa.me/6281572975183",
      label: "Cuna",
      image: "/cuna.png",
      color: "from-green-500 to-emerald-500",
      available: false,
    },
    {
      href: "https://wa.me/6281388224829",
      label: "Cheesya",
      image: "/cheesya.png",
      color: "from-orange-500 to-red-500",
      available: true,
    },
    {
      href: "https://wa.me/6287781846811",
      label: "Poet",
      role: "Customer Support",
      image: "/poet.png",
      color: "from-indigo-500 to-purple-500",
      isCS: true,
      available: true,
    },
  ];

  return (
    <div className="flex justify-center items-center ">
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Main CTA Button */}
        <motion.button
          onClick={() => setIsOpen(true)}
          className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white font-bold rounded-2xl px-10 py-4 shadow-xl transition-all duration-300"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full"
            animate={{ translateX: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />

          <div className="relative flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              💬
            </motion.div>
            <span className="text-lg">Talk with us</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </div>
        </motion.button>

        {/* Secondary CTA */}
        <motion.button
          onClick={() => window.open("https://wa.me/6287781846811", "_blank")}
          className="group bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 font-semibold rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl hover:border-blue-300 hover:bg-white transition-all duration-300"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-2">
            <span>Quick Support</span>
            <motion.div
              className="text-green-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📞
            </motion.div>
          </div>
        </motion.button>
      </motion.div>

      {/* Dialog Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Dialog Content */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[100vh] overflow-hidden"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Header */}
                <motion.div
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 p-6 text-white relative overflow-hidden"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-50"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">
                          Smart Tutor, Smart Student 🎓
                        </h2>
                        <p className="text-white/90 text-sm leading-relaxed">
                          Pilih konsultan terbaik untuk membantu perjalanan
                          akademik Anda
                        </p>
                      </div>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="font-bold text-gray-800 mb-6 text-center text-lg">
                    Choose Your Learning Partner
                  </h3>

                  <motion.div
                    className="space-y-4 max-h-80 overflow-y-auto px-3 py-1"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    {admins.map((admin, index) => (
                      <motion.div
                        key={index}
                        variants={{
                          hidden: { opacity: 0, x: -30 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <motion.a
                          href={admin.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div
                            className={`relative overflow-hidden bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 group ${
                              admin.available
                                ? "hover:border-blue-300"
                                : "opacity-75"
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              {/* Avatar with gradient ring */}
                              <div className="relative">
                                <div
                                  className={`absolute -inset-1 bg-gradient-to-r ${admin.color} rounded-full opacity-75 group-hover:opacity-100 transition-opacity`}
                                />
                                {/* <div className="relative w-14 h-14 bg-gray-200 rounded-full overflow-hidden">
                                  <div
                                    className={`w-full h-full bg-gradient-to-br ${admin.color} flex items-center justify-center text-white font-bold text-lg`}
                                  >
                                    {admin.label.charAt(0)}
                                  </div>
                                </div> */}
                                <Avatar>
                                  <AvatarImage
                                    className="w-14 h-14 relative"
                                    src={admin.image}
                                  />
                                  <AvatarFallback>{admin.label}</AvatarFallback>
                                </Avatar>
                              </div>

                              {/* Info */}
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <h4 className="font-semibold text-gray-800">
                                    {admin.label}
                                  </h4>
                                  {admin.isCS && (
                                    <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">
                                      CS
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-gray-500">
                                  {admin.role}
                                </p>
                              </div>

                              {/* Arrow */}
                              <motion.div
                                className="text-gray-400 group-hover:text-blue-500 transition-colors"
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </motion.div>
                            </div>

                            {/* Hover effect */}
                            <motion.div
                              className={`absolute inset-0 bg-gradient-to-r ${admin.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                              initial={false}
                            />
                          </div>
                        </motion.a>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Footer */}
                  <motion.div
                    className="mt-6 pt-4 border-t border-gray-100 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-xs text-gray-500">
                      💡 Tip: Klik admin yang tersedia untuk chat langsung via
                      WhatsApp
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactSectionDialog;
