"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Terminal, Users, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IoLogoGithub } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { LiaTelegram } from "react-icons/lia";
import { TypingLine } from "@/components/TypingLine";

export default function Component() {
  const { scrollYProgress } = useScroll({
    // Use smoother scroll tracking
    smooth: 0.1,
  });
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const valuesRef = useRef(null);
  const archiveRef = useRef(null);

  // Set once:true to avoid retriggering animations when scrolling back
  // Set threshold for better control of when animations trigger
  const heroInView = useInView(heroRef, { once: true, threshold: 0.1 });
  const aboutInView = useInView(aboutRef, { once: true, threshold: 0.1 });
  const valuesInView = useInView(valuesRef, { once: true, threshold: 0.1 });
  const archiveInView = useInView(archiveRef, { once: true, threshold: 0.1 });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

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
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#FEFAE0] relative overflow-hidden font-poppins">
      {/* Background Pattern */}
      <motion.div
        className="fixed inset-0 opacity-5 popoppins-events-none"
        style={{ y: backgroundY }}
      >
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern
              id="zkPattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M20,20 Q50,10 80,20 T140,20"
                stroke="#283618"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
              <circle cx="30" cy="30" r="2" fill="#606C38" opacity="0.2" />
              <path
                d="M60,60 L80,40 L100,60 Z"
                stroke="#BC6C25"
                strokeWidth="0.5"
                fill="none"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#zkPattern)" />
        </svg>
      </motion.div>

      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative pt-20"
      >
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
          <motion.p
            className="text-xl md:text-2xl text-[#606C38] mb-8 italic font-display"
            variants={itemVariants}
          >
            A narrative-first zk builder community
          </motion.p>
          <motion.div variants={itemVariants}>
            {/* <Button
              size="lg"
              className="bg-[#BC6C25] hover:bg-[#283618] text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 font-poppins"
            >
              Join the Witnesses
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button> */}
            <div className="relative inline-block group">
              <Button
                size="lg"
                className="bg-[#BC6C25] hover:bg-[#283618] text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 font-poppins"
                onClick={() =>
                  window.open("https://t.me/+TPdx_Fc5_ONmNGJl", "_blank")
                }
              >
                {" "}
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

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-[#283618]">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold text-[#FEFAE0] mb-8"
            variants={itemVariants}
          >
            About the <span className="italic text-[#DDA15E]">Community</span>
          </motion.h2>
          <motion.div
            className="space-y-6 text-lg text-[#FEFAE0]/90"
            variants={itemVariants}
          >
            <p className="text-xl font-medium">
              Welcome to Proof of Witness (PoW), where builders, researchers,
              and protocols converge to transform zero-knowledge theory into
              tangible reality.
            </p>
            <p>
              Our community thrives on deeply technical meetups, workshops, and
              proof-driven sessions, ensuring that every interaction is
              meaningful and impactful.
            </p>
            <p>
              Here, cryptographic proofs meet real-world applications, fostering
              an environment where privacy empowers presence and every witness
              truly counts.
            </p>
            <p>
              Join us in a space where noise is filtered out, leaving only the
              pure signal of innovation and collaboration.
            </p>
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
            Why We <span className="italic text-[#BC6C25]">Exist</span>
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
                  <h3 className="text-xl font-bold text-[#283618] mb-4 text-center font-display">
                    {value.title}
                  </h3>
                  <p className="text-[#606C38] text-center leading-relaxed font-poppins">
                    {value.description}
                  </p>
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
            <span className="italic text-[#BC6C25]">Proof</span> Logs
          </motion.h2>

          <motion.div
            className="bg-[#283618] rounded-lg p-8 font-mono text-sm"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <Terminal className="w-5 h-5 text-[#DDA15E] mr-2" />
              <span className="text-[#DDA15E]">~/proof-of-witness/events</span>
            </div>
            <div className="space-y-2 text-[#FEFAE0] ">
              {archiveInView && (
                <div className="">
                  <div className="flex justify-between">
                    <span className="text-[#606C38]">
                      <TypingLine text="drwxr-xr-x" delay={0} speed={100} />
                    </span>
                    <span>
                      <TypingLine
                        text="zk-summit-2024/"
                        delay={400}
                        speed={100}
                      />
                    </span>
                    <span className="text-[#DDA15E]">
                      <TypingLine text="Dec 15" delay={900} speed={100} />
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#606C38]">
                      <TypingLine text="drwxr-xr-x" delay={2400} speed={100} />
                    </span>
                    <span>
                      <TypingLine
                        text="privacy-builders-meetup/"
                        delay={2800}
                        speed={100}
                      />
                    </span>
                    <span className="text-[#DDA15E]">
                      <TypingLine text="Nov 28" delay={3400} speed={100} />
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#606C38]">
                      <TypingLine text="drwxr-xr-x" delay={5700} speed={100} />
                    </span>
                    <span>
                      <TypingLine
                        text="infra-narratives-workshop/"
                        delay={6100}
                        speed={100}
                      />
                    </span>
                    <span className="text-[#DDA15E]">
                      <TypingLine text="Oct 12" delay={6700} speed={100} />
                    </span>
                  </div>
                </div>
              )}
              <div className="mt-4 text-[#DDA15E]">
                <span className="animate-pulse">█</span> Logs coming soon...
              </div>
            </div>
          </motion.div>

          <motion.div className="text-center mt-8" variants={itemVariants}>
            <Button
              variant="outline"
              className="border-[#BC6C25] text-[#BC6C25] bg-transparent hover:bg-[#BC6C25] hover:text-white"
            >
              <IoLogoGithub className="w-4 h-4 mr-2" />
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
            <h2 className="text-3xl font-display font-bold text-[#283618] mb-6">
              Ready to <span className="italic text-[#BC6C25]">Build ZK?</span>
            </h2>
            <p className="text-lg text-[#606C38] mb-8">
              Join a community where proof is participation and privacy enables
              presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#BC6C25] hover:bg-[#283618] text-white"
                onClick={() =>
                  window.open("https://t.me/+TPdx_Fc5_ONmNGJl", "_blank")
                }
              >
                <LiaTelegram className="w-5 h-5 mr-2" />
                Join Telegram
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#606C38] text-[#606C38] hover:bg-[#606C38] hover:text-white bg-transparent"
                onClick={() =>
                  window.open("https://x.com/ProofOfWitness", "_blank")
                }
              >
                <RiTwitterXFill className="w-5 h-5 mr-2" />
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
          <h2 className="text-3xl font-display font-bold text-[#283618] mb-8">
            Powered by <span className="italic text-[#BC6C25]">Builders</span>
          </h2>
          <p className="text-lg text-[#606C38] mb-12">
            Backed by the zk community, built for the future of
            privacy-preserving infrastructure.
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {/* Placeholder for future partners */}
            <div className="w-54 h-12 bg-[#BC6C25]/20 px-3 rounded flex items-center justify-center">
              <span className="text-[#283618] font-mono text-xs">
                Partnerships Coming Soon
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />

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
  );
}
