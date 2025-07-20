"use client";

import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

// Counter animation hook
const useCounter = (
  end: number,
  duration: number = 2,
  shouldStart: boolean = false
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, shouldStart]);

  return count;
};

// Individual Statistic Card Component
const StatisticCard = ({
  value,
  suffix = "",
  label,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const animatedValue = useCounter(value, 2.5, isInView);

  return (
    <motion.div
      ref={ref}
      className="text-center group cursor-pointer"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 17,
        },
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Number with animated background */}
      <motion.div
        className="relative mb-2 sm:mb-3 lg:mb-4"
        initial={{ rotateX: -15 }}
        whileInView={{ rotateX: 0 }}
        transition={{ duration: 1, delay: delay + 0.2 }}
      >
        {/* Animated background circle */}
        <motion.div
          className="absolute inset-0 bg-white/10 rounded-full blur-2xl"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: delay + 0.5 }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          style={{
            transition: "all 3s ease-in-out",
            animationIterationCount: "infinite",
          }}
        />

        <motion.p
          className="relative font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, rotateY: -90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: delay + 0.3, ease: "backOut" }}
        >
          <motion.span
            key={animatedValue}
            initial={{ filter: "blur(0px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
          >
            {isInView ? animatedValue : 0}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.8 }}
          >
            {suffix}
          </motion.span>
        </motion.p>
      </motion.div>

      {/* Label with underline animation */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.6 }}
      >
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl relative z-10">
          {label}
        </p>
      </motion.div>

      {/* Floating particles effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#2E2C2C]/20 rounded-full"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-5, -15, -5],
              opacity: [0.5, 1, 0.5],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default function Statistic() {
  const containerRef = useRef(null);

  return (
    <motion.div
      ref={containerRef}
      className="w-full bg-[#C7B6A7] mt-16 sm:mt-20 md:mt-24 lg:mt-32 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52 py-12 sm:py-16 md:py-20 lg:py-0 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="grid h-full grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-0 place-items-center text-[#2E2C2C] lg:h-80 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {/* Statistics with individual animations */}
        <StatisticCard
          value={1500}
          suffix="+"
          label="Task Completed"
          delay={0}
        />

        <StatisticCard value={4.9} label="Average Rating" delay={0.3} />

        <StatisticCard
          value={98}
          suffix="%"
          label="Satisfaction Rate"
          delay={0.6}
        />
      </motion.div>

      {/* Animated bottom wave */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-100%" }}
        whileInView={{ x: "100%" }}
        transition={{
          duration: 2,
          delay: 1.5,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
