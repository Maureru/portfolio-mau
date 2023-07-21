const Duration = {
    veryFast: 0.3,
    fast: 0.6,
    normal: 0.8,
    slow: 1.2,
    verySlow: 1.8
}
const easing = [0.6, -0.05, 0.01, 0.99]

export const rotateProfession = {
  initial: {
   
    rotate: 0
  },
  animate: {
    rotate: -30,
    y: [200, 0],
    transition: {
      delay: Duration.slow,
      duration: Duration.fast,
      ease: easing,
    }
  }
}

const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: Duration.fast,
        ease: easing,
      },
    },
  }
  
  const fadeInUpSlower = {
    initial: {
      y: 80,
      opacity: 0,
    },
    exit: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: Duration.normal,
        ease: easing,
      },
    },
  }

  const animateEmo = {
    animate: {
      rotate: [-45, 45, -45, 45, -45, 45, 0],
      y: [0,0,0,0,0,0, -10, 0, -10, 0, -10, 0, -10, 0, -10, 0],
      scale: [1, 1.2, 1.2, 1.4, 1],
      transition: {
        duration: 3,
        ease: easing,
      },
    }
  }
  
  const letterSpace = {
    initial: {
      opacity: 0,
    },
    animate: {
      letterSpacing: ['0px', '-20px', '0px'],
      opacity: 1,
      transition: {
        duration: Duration.slow,
        ease: easing,
      },
    },
  }
  
  const simpleOpacity = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: Duration.fast,
        ease: easing,
      },
    },
  }
  
  const scaleUp = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      opacity: [0, 1],
      scale: [1, 1.05, 1],
      transition: {
        duration: Duration.verySlow,
        ease: easing,
      },
    },
    lightMode: {
      opacity: [0, 1],
      scale: [0.99, 1.05, 1],
      transition: {
        duration: Duration.verySlow,
        ease: easing,
      },
    },
  }

export const roundBorder = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    scale: [0.8, 1.08, 1],
    transition: {
      ease: easing,
      duration: Duration.slow
    }
  }
}
  
  const menuAnim = {
    hide: {
      
      y: -60,
      transition: {
        ease: 'linear',
        duration: 0.05,
      },
    },
    show: {
      y: 0,
      transition: {
        ease: 'linear',
        duration: 0.05,
      },
    },
  }

export const menuAnimSide = {
    hide: {
      
      y: 500,
      transition: {
        ease: 'linear',
        duration: 0.05,
      },
    },
    show: {
      
      y: 40,
      transition: {
        ease: 'linear',
        duration: 0.05,
      },
    },
  }

export const hero = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    y: [300, 0],

    transition: {
      duration: Duration.slow,
      ease: easing,
    },
  }
}
  
  const avatarAnimation = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: Duration.fast,
        ease: easing,
      },
    },
    exit: {
      opacity: 0,
    },
  }
  
  const stagger = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  const galleryStagger = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  
  export {
    animateEmo,
    Duration,
    easing,
    fadeInUp,
    fadeInUpSlower,
    letterSpace,
    stagger,
    galleryStagger,
    simpleOpacity,
    menuAnim,
    scaleUp,
    avatarAnimation,
  }