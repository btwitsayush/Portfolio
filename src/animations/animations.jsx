// Animation variants for different components

// Skill Card Animations
export const skillCardVariants = {
    offscreen: { 
        y: 50,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }
};

// Skill Icon Animations
export const skillIconVariants = {
    initial: { 
        rotate: 0 
    },
    animate: { 
        rotate: 360,
        transition: {
            duration: 2,
            ease: "linear",
            repeat: Infinity
        }
    }
};

// Container Animations
export const containerVariants = {
    offscreen: { 
        opacity: 0 
    },
    onscreen: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

// Blur Text Animation
export const blurTextVariants = {
    hidden: {
        filter: "blur(5px)",
        opacity: 0
    },
    visible: {
        filter: "blur(0px)",
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: "easeInOut"
        }
    }
};

// Animated Text Variants
export const animatedTextVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    }
  }
};

export const wordVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Typing Animation Variants
export const typingContainerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5 * i,
    },
  }),
};

export const typingCharacterVariants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

// You can add more animation variants here as needed 