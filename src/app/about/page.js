"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & Lead Researcher",
      image: "/team/alex.jpg",
      bio: "ZK protocol researcher with 5+ years in cryptography",
    },
    {
      name: "Sarah Kumar",
      role: "Technical Lead",
      image: "/team/sarah.jpg",
      bio: "Specialized in ZK-SNARKs implementation",
    },
    {
      name: "Michael Wong",
      role: "Community Lead",
      image: "/team/michael.jpg",
      bio: "Building bridges between researchers and developers",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description:
        "We believe in building a future where privacy is a fundamental right",
    },
    {
      icon: Target,
      title: "Innovation Driven",
      description:
        "Pushing the boundaries of what's possible with zero-knowledge proofs",
    },
    {
      icon: Users,
      title: "Community Focused",
      description:
        "Growing together through collaboration and knowledge sharing",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-display font-bold text-[#283618] mb-4">
            About <span className="italic text-[#BC6C25]">Us</span>
          </h1>
          <p className="text-lg text-[#606C38] mb-12 max-w-3xl">
            Proof of Witness is a community-driven initiative focused on
            advancing zero-knowledge proof technology through education,
            collaboration, and real-world implementation.
          </p>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 border-2 border-[#BC6C25]/20">
                  <div className="w-12 h-12 rounded-lg bg-[#BC6C25] flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#283618] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#606C38]">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Team Section */}
          <h2 className="text-3xl font-display font-bold text-[#283618] mb-8">
            Our <span className="italic text-[#BC6C25]">Team</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 border-2 border-[#BC6C25]/20">
                  <div className="w-24 h-24 rounded-full bg-[#DDA15E]/20 mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-[#283618] mb-1 text-center">
                    {member.name}
                  </h3>
                  <p className="text-[#BC6C25] text-sm mb-2 text-center">
                    {member.role}
                  </p>
                  <p className="text-[#606C38] text-center">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
