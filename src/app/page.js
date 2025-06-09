"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { Github, MessageCircle, Twitter, ArrowRight, Terminal, Users, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navbar from "@/components/Navbar"

export default function Component() {
  const { scrollYProgress } = useScroll({
    // Use smoother scroll tracking
    smooth: 0.1
  })
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const valuesRef = useRef(null)
  const archiveRef = useRef(null)

  // Set once:true to avoid retriggering animations when scrolling back
  // Set threshold for better control of when animations trigger
  const heroInView = useInView(heroRef, { once: true, threshold: 0.1 })
  const aboutInView = useInView(aboutRef, { once: true, threshold: 0.1 })
  const valuesInView = useInView(valuesRef, { once: true, threshold: 0.1 })
  const archiveInView = useInView(archiveRef, { once: true, threshold: 0.1 })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-[#FEFAE0] relative overflow-hidden font-inter">
      {/* Background Pattern */}
      <motion.div className="fixed inset-0 opacity-5 pointer-events-none" style={{ y: backgroundY }}>
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="zkPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20,20 Q50,10 80,20 T140,20" stroke="#283618" strokeWidth="0.5" fill="none" opacity="0.3" />
              <circle cx="30" cy="30" r="2" fill="#606C38" opacity="0.2" />
              <path d="M60,60 L80,40 L100,60 Z" stroke="#BC6C25" strokeWidth="0.5" fill="none" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#zkPattern)" />
        </svg>
      </motion.div>

     <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative pt-20">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-[#DDA15E]/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-40 left-20 w-24 h-24 bg-[#606C38]/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />

        <motion.div
          className="text-center max-w-4xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-display font-bold text-[#283618] mb-6 leading-tight italic"
            variants={itemVariants}
          >
            Proof of Witness
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-[#606C38] mb-8 italic font-display" variants={itemVariants}>
            A narrative-first zk builder community
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              className="bg-[#BC6C25] hover:bg-[#283618] text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 font-inter"
            >
              Join the Witnesses
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-[#283618]/5">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
        >
          <motion.h2 className="text-4xl md:text-5xl font-display font-bold text-[#283618] mb-8" variants={itemVariants}>
            About the <span className="italic">Community</span>
          </motion.h2>
          <motion.div className="space-y-6 text-lg text-[#606C38]" variants={itemVariants}>
            <p className="text-xl font-medium">Built for builders who prove, not pitch.</p>
            <p>We're a zk-native, IRL-first community focused on infrastructure narratives that matter.</p>
            <p>Where cryptographic proofs meet real-world impact, and privacy enables presence.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20">
        <motion.div
          className="max-w-6xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={valuesInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold text-[#283618] text-center mb-16"
            variants={itemVariants}
          >
            Why We <span className="italic">Exist</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Zero-Knowledge. Zero Fluff.",
                description:
                  "We believe in the power of cryptographic proofs over empty promises. Every claim is backed by verifiable evidence.",
                color: "bg-[#BC6C25]",
              },
              {
                icon: Zap,
                title: "Infra over Hype.",
                description:
                  "Building the foundational layers that enable privacy-preserving applications at scale. Infrastructure first, marketing second.",
                color: "bg-[#606C38]",
              },
              {
                icon: Users,
                title: "Proofs, not Promises.",
                description:
                  "Actions speak louder than words. We demonstrate value through working code and real-world implementations.",
                color: "bg-[#DDA15E]",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-8 h-full bg-white/50 backdrop-blur-sm border-2 border-transparent hover:border-[#BC6C25]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <motion.div
                    className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mb-6 mx-auto`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#283618] mb-4 text-center font-display">{value.title}</h3>
                  <p className="text-[#606C38] text-center leading-relaxed font-inter">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Event Archive Section */}
      <section ref={archiveRef} className="py-20 bg-[#283618]/5">
        <motion.div
          className="max-w-4xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={archiveInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold text-[#283618] text-center mb-16"
            variants={itemVariants}
          >
            <span className="italic">Proof</span> Logs
          </motion.h2>

          <motion.div className="bg-[#283618] rounded-lg p-8 font-mono text-sm" variants={itemVariants}>
            <div className="flex items-center mb-4">
              <Terminal className="w-5 h-5 text-[#DDA15E] mr-2" />
              <span className="text-[#DDA15E]">~/proof-of-witness/events</span>
            </div>
            <div className="space-y-2 text-[#FEFAE0]">
              <div className="flex justify-between">
                <span className="text-[#606C38]">drwxr-xr-x</span>
                <span>zk-summit-2024/</span>
                <span className="text-[#DDA15E]">Dec 15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#606C38]">drwxr-xr-x</span>
                <span>privacy-builders-meetup/</span>
                <span className="text-[#DDA15E]">Nov 28</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#606C38]">drwxr-xr-x</span>
                <span>infra-narratives-workshop/</span>
                <span className="text-[#DDA15E]">Oct 12</span>
              </div>
              <div className="mt-4 text-[#DDA15E]">
                <span className="animate-pulse">█</span> Logs coming soon...
              </div>
            </div>
          </motion.div>

          <motion.div className="text-center mt-8" variants={itemVariants}>
            <Button variant="outline" className="border-[#BC6C25] text-[#BC6C25] hover:bg-[#BC6C25] hover:text-white">
              <Github className="w-4 h-4 mr-2" />
              Follow the Trail
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Community CTA */}
      <section className="py-20">
        <motion.div
          className="max-w-2xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-12 bg-gradient-to-br from-[#BC6C25]/10 to-[#DDA15E]/10 border-2 border-[#BC6C25]/20">
            <h2 className="text-3xl font-display font-bold text-[#283618] mb-6">Ready to <span className="italic">Build ZK?</span></h2>
            <p className="text-lg text-[#606C38] mb-8">
              Join a community where proof is participation and privacy enables presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#BC6C25] hover:bg-[#283618] text-white">
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Telegram
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#606C38] text-[#606C38] hover:bg-[#606C38] hover:text-white"
              >
                <Twitter className="w-5 h-5 mr-2" />
                Follow Twitter
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-[#283618]/5">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-bold text-[#283618] mb-8">Powered by <span className="italic">Builders</span></h2>
          <p className="text-lg text-[#606C38] mb-12">
            Backed by the zk community, built for the future of privacy-preserving infrastructure.
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="w-24 h-12 bg-[#BC6C25]/20 rounded flex items-center justify-center">
              <span className="text-[#283618] font-mono text-xs">ZK Labs</span>
            </div>
            <div className="w-24 h-12 bg-[#606C38]/20 rounded flex items-center justify-center">
              <span className="text-[#283618] font-mono text-xs">Privacy Co</span>
            </div>
            <div className="w-24 h-12 bg-[#DDA15E]/20 rounded flex items-center justify-center">
              <span className="text-[#283618] font-mono text-xs">Proof Inc</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#283618] text-[#FEFAE0]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Proof of Witness</h3>
              <p className="text-[#DDA15E]">Proof is participation. Privacy with presence.</p>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="sm" className="text-[#FEFAE0] hover:bg-[#DDA15E]/20">
                <MessageCircle className="w-4 h-4 mr-2" />
                Telegram
              </Button>
              <Button variant="ghost" size="sm" className="text-[#FEFAE0] hover:bg-[#DDA15E]/20">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
              <Button variant="ghost" size="sm" className="text-[#FEFAE0] hover:bg-[#DDA15E]/20">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
          <div className="border-t border-[#DDA15E]/20 mt-8 pt-8 text-center">
            <p className="text-[#DDA15E]/80">© 2024 Proof of Witness. Built to Build ZK.</p>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <motion.div
        className="fixed bottom-8 right-8 w-4 h-4 bg-[#BC6C25] rounded-full opacity-60"
        style={{ y: floatingY }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="fixed top-1/3 left-8 w-3 h-3 bg-[#606C38] rounded-full opacity-40"
        style={{ y: floatingY }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      />
      
  
    </div>
  )
}
