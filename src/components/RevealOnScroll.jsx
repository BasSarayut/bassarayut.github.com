import React from 'react';
import { motion } from 'framer-motion';

const RevealOnScroll = ({ children, delay = 0, width = "100%" }) => {
  return (
    <div style={{ width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Reveals when 30% visible
        transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.25, 0.25, 0.75] }} // Smooth Apple-like eaasing
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealOnScroll;
