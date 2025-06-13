"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Mail,
  MessageSquare,
  Send,
  Calendar,
  MapPin,
  Clock,
  Phone,
  ExternalLink,
  Users,
  MessageCircle,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";


export default function ContactPage() {
  const teamMembers = [
    {
      name: "Kaushik",
      role: "Founder & Community Lead",
      bio: "Blockchain developer with 3+ years of experience building dApps across EVM, Solana, Aptos, and Vee chains. Global community organizer with 50+ events and international meetups.",
      email: "kaushik@proofofwitness.com",
      linkedin: "https://www.linkedin.com/in/kaushik-k-36b871219/",
      twitter: "https://x.com/Kaushikk1704",
      github: "https://github.com/KaushikKC",
    },
    {
      name: "Madhu Varsha",
      role: "Co-Founder & Technical Lead",
      bio: "Blockchain developer with 2+ years of expertise in Solidity smart contracts and dApp development. Community advocate with experience organizing technical meetups and workshops.",
      email: "madhu@proofofwitness.com",
      linkedin: "https://www.linkedin.com/in/madhu-varsha-p-a7ba26259/",
      twitter: "https://x.com/MadhuVarshaP",
      github: "https://github.com/madhuvarshaP",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-28">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-display font-bold text-[#283618] mb-6">
            Get in <span className="italic text-[#BC6C25]">Touch</span>
          </h1>
          <p className="text-xl text-[#606C38] max-w-4xl mx-auto leading-relaxed mb-8">
            Ready to dive into zero-knowledge technology? Whether you&apos;re
            looking to collaborate, learn, or contribute to the ZK ecosystem,
            we&apos;re here to help you succeed.
          </p>
          <div className="flex justify-center gap-8 text-sm text-[#606C38]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>24h Response Time</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Expert Team</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Active Community</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="p-8 border-2 border-[#BC6C25]/20 hover:border-[#BC6C25]/40 transition-shadow duration-300 bg-[#FFFBF0] backdrop-blur-sm">
              <div className="flex items-center ">
                <div className="w-12 h-12 rounded-full bg-[#BC6C25]/10 flex items-center justify-center mr-4">
                  <Send className="w-6 h-6 text-[#BC6C25]" />
                </div>
                <h2 className="text-2xl font-bold text-[#283618]">
                  Send us a Message
                </h2>
              </div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#606C38] font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-4 rounded-lg border-2 border-[#DDA15E]/20 bg-white/70 focus:border-[#BC6C25] focus:outline-none transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#606C38] font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full p-4 rounded-lg border-2 border-[#DDA15E]/20 bg-white/70 focus:border-[#BC6C25] focus:outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#606C38] font-medium mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 rounded-lg border-2 border-[#DDA15E]/20 bg-white/70 focus:border-[#BC6C25] focus:outline-none transition-all duration-300"
                      placeholder="Your company/organization"
                    />
                  </div>
                  <div>
                    <label className="block text-[#606C38] font-medium mb-2">
                      Inquiry Type
                    </label>
                    <select className="w-full p-4 rounded-lg border-2 border-[#DDA15E]/20 bg-white/70 focus:border-[#BC6C25] focus:outline-none transition-all duration-300">
                      <option>General Inquiry</option>
                      <option>Partnership</option>
                      <option>Technical Support</option>
                      <option>Speaking Opportunity</option>
                      <option>Collaboration</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[#606C38] font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    required
                    className="w-full p-4 rounded-lg border-2 border-[#DDA15E]/20 bg-white/70 focus:border-[#BC6C25] focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, questions, or how we can help..."
                  ></textarea>
                </div>
                <Button
                  className="w-full bg-[#BC6C25] hover:bg-[#283618] text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                  size="lg"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Quick Contact & Book a Call */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Email Contact */}
            <Card className="p-6 border-2 border-[#BC6C25]/20 hover:border-[#BC6C25]/40 transition-shadow duration-300 bg-[#FFFBF0] backdrop-blur-sm">
              <div className="flex items-center ">
                <div className="w-10 h-10 rounded-full bg-[#BC6C25]/10 flex items-center justify-center mr-3">
                  <Mail className="w-5 h-5 text-[#BC6C25]" />
                </div>
                <h3 className="text-lg font-bold text-[#283618]">
                  Direct Email
                </h3>
              </div>
              <p className="text-[#606C38]">
                For detailed inquiries and partnerships
              </p>
              <a
                href="mailto:contact@proofofwitness.com"
                className="text-[#BC6C25] font-medium hover:underline"
              >
                contact@proofofwitness.com
              </a>
            </Card>

            {/* Community Chat */}
            <Card className="p-6 border-2 border-[#BC6C25]/20 hover:border-[#BC6C25]/40 transition-shadow duration-300 bg-[#FFFBF0] backdrop-blur-sm">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#BC6C25]/10 flex items-center justify-center mr-3">
                  <MessageSquare className="w-5 h-5 text-[#BC6C25]" />
                </div>
                <h3 className="text-lg font-bold text-[#283618]">
                  Community Chat
                </h3>
              </div>
              <p className="text-[#606C38]">
                Join 2,000+ ZK developers and researchers for real-time
                discussions.
              </p>
              <Button
                className="w-full bg-[#BC6C25] hover:bg-[#283618] text-white font-semibold"
                onClick={() =>
                  window.open("https://t.me/+TPdx_Fc5_ONmNGJl", "_blank")
                }
              >
                Join Telegram
              </Button>
            </Card>

            {/* Book a Call */}
            <Card className="p-6 border-2 border-[#BC6C25]/20 hover:border-[#BC6C25]/40 transition-shadow duration-300 bg-[#FFFBF0] backdrop-blur-sm">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#BC6C25]/10 flex items-center justify-center mr-3">
                  <Video className="w-5 h-5 text-[#BC6C25]" />
                </div>
                <h3 className="text-lg font-bold text-[#283618]">
                  Book a Call
                </h3>
              </div>
              <p className="text-[#606C38]">
                Schedule a 30-minute consultation with our ZK experts.
              </p>
              <div className="space-y-2 text-sm text-[#606C38]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>30 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Available Mon-Fri</span>
                </div>
              </div>
              <Button
                className="w-full bg-[#BC6C25] hover:bg-[#283618] text-white font-semibold flex items-center justify-center gap-2"
                onClick={() =>
                  window.open(
                    "https://calendly.com/proofofwitness/consultation",
                    "_blank"
                  )
                }
              >
                <Calendar className="w-4 h-4" />
                Schedule Call
                <ExternalLink className="w-4 h-4" />
              </Button>
            </Card>
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-[#283618] mb-4">
              Meet Our <span className="italic text-[#BC6C25]">Team</span>
            </h2>
            <p className="text-lg text-[#606C38] max-w-3xl mx-auto">
              Our diverse team of cryptographers, developers, and educators are
              passionate about advancing zero-knowledge technology and building
              inclusive communities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 ">
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <div className="relative group bg-white border-l-4 border-[#BC6C25] p-5 rounded-lg transition-shadow duration-300 overflow-hidden h-[240px] flex flex-col w-[400px]">
                    <div className="absolute top-3 left-3 text-xs text-[#BC6C25] font-mono bg-[#fefae0] px-2 py-0.5 rounded">
                      $ team
                    </div>

                    {/* Profile Avatar */}
                    <div className="w-12 h-12 bg-[#BC6C25] rounded-lg flex items-center justify-center mb-3 ml-auto">
                      <div className="text-white text-sm font-bold">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>

                    {/* Name and Role */}
                    <h3 className="text-base font-mono text-[#283618] mb-1 pl-5 font-semibold">
                      <span className="text-[#BC6C25]">#</span> {member.name}
                    </h3>
                    <p className="text-xs font-mono text-[#BC6C25] mb-3 pl-5">
                      {member.role}
                    </p>

                    {/* Bio - shortened and fixed height */}
                    <div className="flex-1 pl-5 mb-3">
                      <p className="text-xs font-mono text-[#606C38] leading-relaxed">
                        {member.bio.split(".")[0].substring(0, 80)}...
                      </p>
                    </div>

                    {/* Contact Links */}
                    <div className="flex gap-2 pl-5 mt-auto">
                      <a
                        href={`mailto:${member.email}`}
                        className="w-6 h-6 rounded bg-[#BC6C25]/10 hover:bg-[#BC6C25]/20 flex items-center justify-center transition-colors duration-300"
                      >
                        <Mail className="w-3 h-3 text-[#BC6C25]" />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 rounded bg-[#BC6C25]/10 hover:bg-[#BC6C25]/20 flex items-center justify-center transition-colors duration-300"
                      >
                        <FaLinkedinIn className="w-3 h-3 text-[#BC6C25]" />
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 rounded bg-[#BC6C25]/10 hover:bg-[#BC6C25]/20 flex items-center justify-center transition-colors duration-300"
                      >
                        <RiTwitterXFill className="w-3 h-3 text-[#BC6C25]" />
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 rounded bg-[#BC6C25]/10 hover:bg-[#BC6C25]/20 flex items-center justify-center transition-colors duration-300"
                      >
                        <IoLogoGithub className="w-3 h-3 text-[#BC6C25]" />
                      </a>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-[#BC6C25]/10 via-[#DDA15E]/10 to-transparent pointer-events-none rounded-lg blur-md" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
