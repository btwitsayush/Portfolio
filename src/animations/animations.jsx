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
    whileInView: { 
        rotate: 360,
        transition: {
            duration: 2,
            ease: "linear",
            repeat: 0
        }
    },
    viewport: { 
        once: false,
        amount: "some" 
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
      staggerChildren: 0.08,
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




// Project Card Animations





// Project Header Animations
export const headerVariants = {
  initial: { y: -20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

// Project Filter Button Animations
export const filterButtonVariants = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.3 },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

// Project Search Animations
export const searchVariants = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

// Project Button Animations
export const buttonVariants = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

// You can add more animation variants here as needed 