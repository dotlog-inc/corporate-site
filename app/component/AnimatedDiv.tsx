"use client";
import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

type AnimatedDivProps = {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "top" | "bottom" | "size";
};

const AnimatedDiv = ({
  children,
  className,
  direction = "bottom",
}: AnimatedDivProps) => {
  useEffect(() => {
    // ページが読み込まれた時にスクロール位置を最上部に設定
    window.scrollTo(0, 0);

    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const variants = {
    left: { opacity: 0, x: "-100%", y: 0 },
    right: { opacity: 0, x: "100%", y: 0 },
    top: { opacity: 0, x: 0, y: -50 },
    bottom: { opacity: 0, x: 0, y: 50 },
    size: { opacity: 1, scale: 1.03 },
  };
  return (
    <motion.div
      className={className}
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
      viewport={{ once: true }} // 一度だけアニメーションを適用
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
