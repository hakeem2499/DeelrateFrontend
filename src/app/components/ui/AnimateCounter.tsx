import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  initialValue: number;
  targetValue: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  shouldAnimate?: boolean;
  className?: string;
}

export  const AnimatedCounter = ({
  initialValue = 0,
  targetValue,
  duration = 2,
  prefix = "",
  suffix = "",
  shouldAnimate = true,
  className = ""
}: AnimatedCounterProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "0px 0px -100px 0px",
    amount: 0.1 // Trigger when 10% visible
  });
  const [displayValue, setDisplayValue] = useState(initialValue);

  useEffect(() => {
    if (!shouldAnimate) {
      setDisplayValue(targetValue);
      return;
    }

    if (isInView) {
      controls.start({
        value: targetValue,
        transition: {
          duration: duration,
          ease: "easeOut",
        }
      });
    }
  }, [isInView, targetValue, duration, controls, shouldAnimate]);

  return (
    <motion.span
      ref={ref}
      initial={{ value: initialValue }}
      animate={controls}
      onUpdate={(latest) => {
        if (typeof latest.value === "number") {
          setDisplayValue(Math.round(latest.value));
        }
      }}
      className={className}
    >
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </motion.span>
  );
};