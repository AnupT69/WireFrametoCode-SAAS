"use client";

import { motion } from "framer-motion";

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
    },
  }),
};

export default function HeroSection() {
  const line1 = "Bridge the Gap Between";
  const line2 = "Design and Development.";

  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <motion.div
          className="mt-5 max-w-6xl text-center mx-auto"
          initial="hidden"
          animate="visible"
        >
          {/* Line 1 - Black */}
          <h1 className="font-bold text-gray-800 text-5xl md:text-6xl lg:text-7xl dark:text-neutral-200 tracking-wide">
            {line1.split("").map((char, i) => (
              <motion.span
                key={`l1-${i}`}
                className="inline-block"
                variants={letterAnimation}
                custom={i}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          {/* Line 2 - Gradient */}
          <h1 className="font-bold bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent text-5xl md:text-6xl lg:text-7xl tracking-wide">
            {line2.split("").map((char, i) => (
              <motion.span
                key={`l2-${i}`}
                className="inline-block"
                variants={letterAnimation}
                custom={i}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          className="mt-5 max-w-3xl text-center mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-lg text-gray-600 dark:text-neutral-400">
            Revolutionize your content creation with our AI-powered app,
            delivering engaging and high-quality apps in seconds.
          </p>
        </motion.div>
        {/* Button */}
        <motion.div
          className="mt-8 gap-3 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <a
            href="/dashboard"
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md py-3 px-5 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get started
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
