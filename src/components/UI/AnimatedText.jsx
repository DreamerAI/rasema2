'use client';

import { motion } from 'framer-motion';

export const AnimatedText = ({ duration, className, children, position }) => {
  return (
    <motion.div
      initial={{ x: position, opacity: 0 }}
      transition={{ duration: duration }}
      whileInView={{ x: 0, opacity: 100 }}
      className={`inline-block ${className}`}>
      {children}
    </motion.div>
  );
};

export const BottomAnimatedText = ({ duration, children, className }) => {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{ duration: duration }}
      className={` ${className}`}>
      {children}
    </motion.div>
  );
};
