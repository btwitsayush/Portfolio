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

// Add these new variants
export const profileImageVariants = {
    initial: { rotate: 0 },
    animate: {
        rotate: [0, -1, 1, -1, 1, 0],  
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export const socialIconVariants = {
    initial: { 
        scale: 1,
        color: "#007AFF"
    },
    hover: {
        scale: 1.25,
        color: "#ffffff",
        transition: {
            duration: 0.2
        }
    }
};

// You can add more animation variants here as needed 