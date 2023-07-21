import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUpSlower } from '../data/animation';

function FadeVisible({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('exit');
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUpSlower}
      initial="initial"
      animate={controls}
    >
      {children}
    </motion.div>
  );
}

export default FadeVisible;
