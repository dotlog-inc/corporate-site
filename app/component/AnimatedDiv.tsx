"use client";
import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

type AnimatedDivProps = {
  direction?: "left" | "right" | "top" | "bottom" | "size";
  children: ReactNode;
  className?: string;
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

type AniMatediVProps = {
  children: ReactNode;
  className?: string;
};

const AniMatediV = ({ children, className }: AniMatediVProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        width: "937.6px", // 枠のサイズを固定
        height: "393px", // 枠のサイズを固定
        overflow: "hidden", // 枠からはみ出さないようにする
        borderRadius: "24px", // 枠の角を丸くする
        position: "relative", // 子要素を位置決めするため
      }}
    >
      {children}
    </motion.div>
  );
};

type AnimatedivProps = {
  className?: string;
};

const Animatediv = ({ className }: AnimatedivProps) => {
  return (
    <motion.img
      className={className}
      src="/media.jpg" // 画像のソース
      alt="media-img"
      initial={{ width: "150%", height: "150%" }} // 初期状態で画像が枠いっぱいに収まる
      whileInView={{
        width: "100%",
        height: "100%",
      }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        objectFit: "cover", // 画像が枠内に収まるようにする
        position: "absolute", // 画像の位置を絶対に設定
        top: "0",
        left: "0",
      }}
    />
  );
};

export { AnimatedDiv, AniMatediV, Animatediv };
