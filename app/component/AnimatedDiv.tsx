import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedDivProps = {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "top" | "bottom" | "size";
};

const AnimatedDiv = ({ children, className, direction = "bottom" }: AnimatedDivProps) => {
    const variants = {
        left: { opacity: 0, x: "-100%", y: 0 },
        right: { opacity: 0, x: "100%", y: 0 },
        top: { opacity: 0, x: 0, y: -50 },
        bottom: {opacity: 0, x:0, y: 50},
        size :{opacity: 1, scale :1.03}
    };
  return (
    <motion.div
      className={className}
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 ,scale: 1}}
      transition={{ duration: 0.5, ease: "easeOut",delay:0.5 }}
      viewport={{ once: true }} // 一度だけアニメーションを適用
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
