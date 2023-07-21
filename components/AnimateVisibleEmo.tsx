import { motion, useAnimationControls } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { animateEmo } from '../data/animation';

function AnimateVisibleEmo({
  children,
  classN = '',
}: {
  children: React.ReactNode;
  classN: string;
}) {
  const control = useAnimationControls();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      control.start('animate');
    }
  }, [inView, control]);

  return (
    <div className=" p-2">
      <motion.h1
        className={`${classN}`}
        ref={ref}
        variants={animateEmo}
        animate={control}
      >
        {children}
      </motion.h1>
    </div>
  );
}

export default AnimateVisibleEmo;
