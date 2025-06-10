"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Book, Code, Lightbulb, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LearnPage() {
  const learningPaths = [
    {
      title: "ZK Fundamentals",
      icon: Book,
      description:
        "Start your journey with the basics of zero-knowledge proofs.",
      modules: ["Introduction to ZK", "Basic Cryptography", "ZK-SNARKs Basics"],
      level: "Beginner",
    },
    {
      title: "Advanced Topics",
      icon: Lightbulb,
      description: "Dive deep into advanced ZK concepts and implementations.",
      modules: ["ZK-STARKs", "Recursive SNARKs", "Performance Optimization"],
      level: "Advanced",
    },
    {
      title: "Implementation",
      icon: Code,
      description: "Hands-on guide to implementing ZK proofs in your projects.",
      modules: ["Circuit Design", "Proof Generation", "Verification Systems"],
      level: "Intermediate",
    },
    {
      title: "Use Cases",
      icon: GraduationCap,
      description: "Explore real-world applications of ZK technology.",
      modules: ["Privacy Solutions", "Scaling Solutions", "Identity Systems"],
      level: "All Levels",
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
            Learning <span className="italic text-[#BC6C25]">Paths</span>
          </h1>
          <p className="text-lg text-[#606C38] mb-12">
            Structured learning paths to master zero-knowledge proofs and their
            applications.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 border-2 border-[#BC6C25]/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#BC6C25] flex items-center justify-center">
                      <path.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-[#283618]">
                        {path.title}
                      </h3>
                      <span className="text-sm text-[#606C38]">
                        {path.level}
                      </span>
                    </div>
                  </div>
                  <p className="text-[#606C38] mb-4">{path.description}</p>
                  <div className="space-y-2 mb-6">
                    {path.modules.map((module, i) => (
                      <div
                        key={i}
                        className="flex items-center text-sm text-[#606C38]"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#DDA15E] mr-2" />
                        {module}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-[#BC6C25] hover:bg-[#283618]">
                    Start Learning
                  </Button>
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
