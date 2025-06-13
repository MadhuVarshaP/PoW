import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Animation variants
const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function HeroSection({ heroRef, heroInView = true }) {
  return (
    <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative pt-20 bg-[#FEFAE0]"
      >
        {/* Background floating shapes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-[#DDA15E]/30 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-40 left-20 w-24 h-24 bg-[#606C38]/40 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-16 h-16 bg-[#BC6C25]/25 rounded-full blur-lg"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />

        {/* Hero Content */}
        <motion.div
          className="text-center max-w-4xl mx-auto px-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-display font-bold text-[#283618] mb-6 leading-tight italic"
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Proof of Witness
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-[#606C38] mb-8 italic font-display"
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A narrative-first zk builder community
          </motion.p>
          <motion.div 
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative inline-block group">
              <Button
                size="lg"
                className="bg-[#BC6C25] hover:bg-[#283618] text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 font-poppins"
                onClick={() =>
                  window.open("https://t.me/+TPdx_Fc5_ONmNGJl", "_blank")
                }
              >
                Join the Witness
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-xs font-mono bg-[#DDA15E] text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                $ rsvp --proof
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>
  )
}

export default HeroSection
