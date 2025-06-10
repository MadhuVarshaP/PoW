"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Book,
  Code,
  Lightbulb,
  GraduationCap,
  Clock,
  Users,
  Star,
  Play,
  CheckCircle,
  ArrowRight,
  Trophy,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LearnPage() {
  const learningPaths = [
    {
      title: "Zero-Knowledge Fundamentals",
      icon: Book,
      description:
        "Master the mathematical foundations and core concepts of zero-knowledge proofs. Perfect for beginners entering the ZK space.",
      modules: [
        "Introduction to Zero-Knowledge Proofs",
        "Mathematical Foundations",
        "Interactive vs Non-Interactive Proofs",
        "Commitment Schemes",
        "Basic Circuit Construction",
      ],
      level: "Beginner",
      duration: "6 weeks",
      students: "2,847",
      rating: 4.8,
      progress: 0,
      price: "Free",
      instructor: "Dr. Sarah Chen",
      completionRate: "89%",
      prerequisites: "Basic Mathematics",
      image: "/courses/fundamentals.jpg",
    },
    {
      title: "ZK-SNARKs Deep Dive",
      icon: Lightbulb,
      description:
        "Advanced exploration of zk-SNARKs, from Groth16 to PLONK. Learn to build production-ready zero-knowledge applications.",
      modules: [
        "Groth16 Protocol Deep Dive",
        "PLONK and Universal Setup",
        "Trusted Setup Ceremonies",
        "Circuit Optimization Techniques",
        "Security Analysis & Auditing",
      ],
      level: "Advanced",
      duration: "10 weeks",
      students: "1,234",
      rating: 4.9,
      progress: 0,
      price: "$299",
      instructor: "Prof. Michael Rodriguez",
      completionRate: "76%",
      prerequisites: "ZK Fundamentals",
      image: "/courses/snarks.jpg",
    },
    {
      title: "Practical ZK Development",
      icon: Code,
      description:
        "Hands-on development course covering Circom, SnarkJS, and building full-stack ZK applications with real-world projects.",
      modules: [
        "Circom Circuit Development",
        "SnarkJS Integration",
        "Frontend ZK Integration",
        "Smart Contract Verification",
        "Full-Stack ZK dApp Project",
      ],
      level: "Intermediate",
      duration: "8 weeks",
      students: "1,892",
      rating: 4.7,
      progress: 0,
      price: "$199",
      instructor: "Alex Thompson",
      completionRate: "82%",
      prerequisites: "JavaScript, Solidity Basics",
      image: "/courses/development.jpg",
    },
    {
      title: "ZK Applications & Use Cases",
      icon: GraduationCap,
      description:
        "Explore cutting-edge applications: privacy-preserving DeFi, identity solutions, and scaling technologies like zkRollups.",
      modules: [
        "Privacy-Preserving DeFi",
        "Zero-Knowledge Identity Systems",
        "zkRollups and Layer 2 Scaling",
        "Private Voting Systems",
        "Compliance and Regulatory Aspects",
      ],
      level: "Intermediate",
      duration: "7 weeks",
      students: "956",
      rating: 4.6,
      progress: 0,
      price: "$149",
      instructor: "Emma Wilson",
      completionRate: "85%",
      prerequisites: "ZK Fundamentals",
      image: "/courses/applications.jpg",
    },
    {
      title: "ZK-STARKs & Scalability",
      icon: Trophy,
      description:
        "Master transparent zero-knowledge proofs with ZK-STARKs. Learn about post-quantum security and massive scalability solutions.",
      modules: [
        "STARK Protocol Fundamentals",
        "FRI (Fast Reed-Solomon IOP)",
        "Cairo Programming Language",
        "StarkNet Development",
        "Post-Quantum Cryptography",
      ],
      level: "Advanced",
      duration: "12 weeks",
      students: "567",
      rating: 4.9,
      progress: 0,
      price: "$399",
      instructor: "Dr. Vitalik Chen",
      completionRate: "71%",
      prerequisites: "Advanced Mathematics, ZK-SNARKs",
      image: "/courses/starks.jpg",
    },
    {
      title: "ZK Security & Auditing",
      icon: Target,
      description:
        "Learn to identify vulnerabilities in ZK systems, conduct security audits, and implement best practices for production deployments.",
      modules: [
        "Common ZK Vulnerabilities",
        "Circuit Security Analysis",
        "Trusted Setup Security",
        "Formal Verification Methods",
        "Production Deployment Best Practices",
      ],
      level: "Expert",
      duration: "6 weeks",
      students: "234",
      rating: 4.8,
      progress: 0,
      price: "$499",
      instructor: "Security Team",
      completionRate: "68%",
      prerequisites: "ZK Development Experience",
      image: "/courses/security.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Advanced":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Expert":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-display font-bold text-[#283618] mb-6">
            Master <span className="italic text-[#BC6C25]">Zero-Knowledge</span>
          </h1>
          <p className="text-xl text-[#606C38] max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive learning paths designed by industry experts. From
            mathematical foundations to production deployments, master every
            aspect of zero-knowledge technology.
          </p>
          <div className="flex justify-center gap-8 text-sm text-[#606C38]">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>6,000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>4.8 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              <span>Industry Certified</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {learningPaths.map((path, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group"
            >
              <Card className="overflow-hidden border-2 border-[#BC6C25]/20 hover:border-[#BC6C25]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#BC6C25]/10 h-full flex flex-col bg-white/90 backdrop-blur-sm">
                {/* Course Image/Header */}
                <div className="relative h-48 bg-gradient-to-br from-[#283618] via-[#606C38] to-[#BC6C25] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

                  {/* Level Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(
                        path.level
                      )}`}
                    >
                      {path.level}
                    </span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        path.price === "Free"
                          ? "bg-green-500 text-white"
                          : "bg-[#DDA15E] text-[#283618]"
                      }`}
                    >
                      {path.price}
                    </span>
                  </div>

                  {/* Course Icon */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <path.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Stats at bottom */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center text-white text-xs">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{path.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{path.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title and Instructor */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#283618] mb-2 group-hover:text-[#BC6C25] transition-colors duration-300">
                      {path.title}
                    </h3>
                    <p className="text-sm text-[#606C38] font-medium">
                      by {path.instructor}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[#606C38] mb-4 leading-relaxed text-sm flex-1">
                    {path.description}
                  </p>

                  {/* Course Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-[#606C38]">
                        <Clock className="w-4 h-4 mr-2 text-[#BC6C25]" />
                        <span>{path.duration}</span>
                      </div>
                      <div className="flex items-center text-[#606C38]">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>{path.completionRate}</span>
                      </div>
                    </div>
                    <div className="text-xs text-[#606C38]">
                      <span className="font-semibold">Prerequisites:</span>{" "}
                      {path.prerequisites}
                    </div>
                  </div>

                  {/* Modules Preview */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#283618] mb-2">
                      Course Modules:
                    </h4>
                    <div className="space-y-1">
                      {path.modules.slice(0, 3).map((module, i) => (
                        <div
                          key={i}
                          className="flex items-center text-xs text-[#606C38]"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#DDA15E] mr-2 flex-shrink-0" />
                          <span className="truncate">{module}</span>
                        </div>
                      ))}
                      {path.modules.length > 3 && (
                        <div className="text-xs text-[#BC6C25] font-medium">
                          +{path.modules.length - 3} more modules
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Button className="w-full bg-[#BC6C25] hover:bg-[#283618] text-white font-semibold py-3 rounded-lg transition-all duration-300 group-hover:shadow-lg flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Start Learning
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-[#BC6C25]/30 text-[#BC6C25] hover:bg-[#BC6C25]/10 font-medium"
                    >
                      View Curriculum
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Path Recommendation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-[#BC6C25] to-[#283618] rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Take our personalized assessment to get a customized learning path
              based on your background and goals in zero-knowledge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="bg-white text-[#283618] hover:bg-[#FEFAE0] border-white font-semibold px-8 py-3"
              >
                Take Assessment
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 border border-white/30 font-semibold px-8 py-3"
              >
                Browse All Courses
              </Button>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
