import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface AnimatedPriceProps {
  from: number;
  to: number;
}

const AnimatedPrice: React.FC<AnimatedPriceProps> = ({ from, to }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration: 1.2, ease: "easeOut" });
    return controls.stop;
  }, [to]);

  return (
    <motion.span className="text-xl font-bold text-yellow-600">
      ₹{/* Bind to `rounded` with Motion’s dynamic text */}
      <motion.span>{rounded}</motion.span>
    </motion.span>
  );
};

export default AnimatedPrice;
