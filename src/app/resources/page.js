"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Book,
  FileText,
  Video,
  Code,
  ExternalLink,
  Download,
  Clock,
  Eye,
  Star,
  Github,
  Globe,
  PlayCircle,
  BookOpen,
  Terminal,
  Zap,
  Shield,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResourcesPage() {
  const resourceCategories = [
    {
      category: "Documentation & Guides",
      icon: BookOpen,
      description: "Comprehensive guides and documentation for ZK development",
      items: [
        {
          title: "Zero-Knowledge Proofs: A Complete Guide",
          description:
            "Comprehensive introduction to ZK proofs covering mathematical foundations, practical implementations, and real-world applications.",
          link: "https://zkproof.org/",
          type: "Guide",
          author: "ZKProof Community",
          readTime: "45 min",
          views: "12.5K",
          rating: 4.9,
          tags: ["Fundamentals", "Theory"],
          difficulty: "Beginner",
        },
        {
          title: "Circom Language Documentation",
          description:
            "Official documentation for Circom - the domain-specific language for writing arithmetic circuits for zero-knowledge proofs.",
          link: "https://docs.circom.io/",
          type: "Documentation",
          author: "iden3 Team",
          readTime: "30 min",
          views: "8.7K",
          rating: 4.8,
          tags: ["Development", "Circom"],
          difficulty: "Intermediate",
        },
        {
          title: "ZK-SNARKs Implementation Guide",
          description:
            "Step-by-step guide for implementing ZK-SNARKs from scratch, including trusted setup and verification processes.",
          link: "#",
          type: "Tutorial",
          author: "Dr. Sarah Chen",
          readTime: "60 min",
          views: "6.2K",
          rating: 4.7,
          tags: ["SNARKs", "Implementation"],
          difficulty: "Advanced",
        },
        {
          title: "Privacy-Preserving Smart Contracts",
          description:
            "Best practices for building privacy-preserving applications using zero-knowledge proofs in smart contract environments.",
          link: "#",
          type: "Guide",
          author: "Privacy Labs",
          readTime: "35 min",
          views: "4.8K",
          rating: 4.6,
          tags: ["Smart Contracts", "Privacy"],
          difficulty: "Intermediate",
        },
      ],
    },
    {
      category: "Video Tutorials & Workshops",
      icon: PlayCircle,
      description: "Visual learning resources and hands-on workshops",
      items: [
        {
          title: "ZK-SNARKs Explained: From Theory to Practice",
          description:
            "Comprehensive video series breaking down ZK-SNARKs concepts with visual explanations and practical examples.",
          link: "#",
          type: "Video Series",
          author: "ZK Academy",
          readTime: "120 min",
          views: "25.3K",
          rating: 4.9,
          tags: ["SNARKs", "Visual Learning"],
          difficulty: "Beginner",
        },
        {
          title: "Building Your First ZK Circuit",
          description:
            "Hands-on workshop covering circuit design, constraint systems, and proof generation using modern ZK frameworks.",
          link: "#",
          type: "Workshop",
          author: "Alex Thompson",
          readTime: "90 min",
          views: "18.7K",
          rating: 4.8,
          tags: ["Hands-on", "Circuits"],
          difficulty: "Intermediate",
        },
        {
          title: "ZK Rollups Architecture Deep Dive",
          description:
            "Technical deep dive into ZK rollup architecture, covering sequencers, provers, and state management.",
          link: "#",
          type: "Webinar",
          author: "Scaling Solutions",
          readTime: "75 min",
          views: "14.2K",
          rating: 4.7,
          tags: ["Rollups", "Scaling"],
          difficulty: "Advanced",
        },
        {
          title: "Privacy in DeFi: ZK Applications",
          description:
            "Exploring real-world applications of zero-knowledge proofs in decentralized finance protocols.",
          link: "#",
          type: "Case Study",
          author: "DeFi Research",
          readTime: "45 min",
          views: "11.5K",
          rating: 4.6,
          tags: ["DeFi", "Applications"],
          difficulty: "Intermediate",
        },
      ],
    },
    {
      category: "Development Tools & Libraries",
      icon: Terminal,
      description: "Essential tools and libraries for ZK development",
      items: [
        {
          title: "SnarkJS - JavaScript ZK Library",
          description:
            "Complete JavaScript library for generating and verifying ZK proofs, with support for Groth16 and PLONK protocols.",
          link: "https://github.com/iden3/snarkjs",
          type: "Library",
          author: "iden3",
          readTime: "15 min",
          views: "32.1K",
          rating: 4.9,
          tags: ["JavaScript", "Library"],
          difficulty: "Intermediate",
        },
        {
          title: "Arkworks - Rust ZK Ecosystem",
          description:
            "Comprehensive Rust ecosystem for zero-knowledge cryptography, including curve implementations and proof systems.",
          link: "https://arkworks.rs/",
          type: "Framework",
          author: "Arkworks Team",
          readTime: "25 min",
          views: "15.8K",
          rating: 4.8,
          tags: ["Rust", "Framework"],
          difficulty: "Advanced",
        },
        {
          title: "ZoKrates - ZK Toolbox",
          description:
            "High-level language and toolbox for zkSNARKs on Ethereum, making ZK development more accessible.",
          link: "https://zokrates.github.io/",
          type: "Toolbox",
          author: "ZoKrates Team",
          readTime: "20 min",
          views: "19.4K",
          rating: 4.7,
          tags: ["Ethereum", "Toolbox"],
          difficulty: "Intermediate",
        },
        {
          title: "Halo2 - Advanced ZK Framework",
          description:
            "Next-generation ZK proof system with universal setup and advanced optimization techniques.",
          link: "#",
          type: "Framework",
          author: "Electric Coin Co.",
          readTime: "40 min",
          views: "9.3K",
          rating: 4.8,
          tags: ["Advanced", "Framework"],
          difficulty: "Expert",
        },
      ],
    },
    {
      category: "Research Papers & Publications",
      icon: Book,
      description:
        "Latest research and academic publications in ZK cryptography",
      items: [
        {
          title: "PLONK: Permutations over Lagrange-bases",
          description:
            "Groundbreaking paper introducing PLONK - a universal SNARK construction with significant efficiency improvements.",
          link: "#",
          type: "Research Paper",
          author: "Gabizon, Williamson, Ciobotaru",
          readTime: "90 min",
          views: "7.8K",
          rating: 4.9,
          tags: ["PLONK", "Research"],
          difficulty: "Expert",
        },
        {
          title: "Bulletproofs: Short Proofs for Confidential Transactions",
          description:
            "Efficient range proofs for confidential transactions without trusted setup, enabling privacy in blockchain systems.",
          link: "#",
          type: "Research Paper",
          author: "Bünz, Bootle, Boneh, et al.",
          readTime: "75 min",
          views: "6.4K",
          rating: 4.8,
          tags: ["Bulletproofs", "Privacy"],
          difficulty: "Advanced",
        },
        {
          title: "ZK-STARKs: Transparent Succinct Arguments",
          description:
            "Introduction to transparent zero-knowledge proofs with post-quantum security and no trusted setup requirements.",
          link: "#",
          type: "Research Paper",
          author: "Ben-Sasson, Bentov, Horesh, Riabzev",
          readTime: "85 min",
          views: "5.9K",
          rating: 4.7,
          tags: ["STARKs", "Post-Quantum"],
          difficulty: "Expert",
        },
        {
          title: "Scalable Zero Knowledge via Cycles of Elliptic Curves",
          description:
            "Novel approach to recursive proof composition enabling infinite scalability in zero-knowledge systems.",
          link: "#",
          type: "Research Paper",
          author: "Chiesa, Tromer",
          readTime: "70 min",
          views: "4.2K",
          rating: 4.6,
          tags: ["Recursion", "Scalability"],
          difficulty: "Expert",
        },
      ],
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

  const categoryVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
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

  const getTypeIcon = (type) => {
    switch (type) {
      case "Video Series":
      case "Webinar":
      case "Workshop":
      case "Case Study":
        return Video;
      case "Library":
      case "Framework":
      case "Toolbox":
        return Code;
      case "Research Paper":
        return Book;
      default:
        return FileText;
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
            ZK <span className="italic text-[#BC6C25]">Resources</span>
          </h1>
          <p className="text-xl text-[#606C38] max-w-4xl mx-auto leading-relaxed mb-8">
            Curated collection of the best resources for mastering
            zero-knowledge technology. From beginner guides to cutting-edge
            research papers.
          </p>
          <div className="flex justify-center gap-8 text-sm text-[#606C38]">
            <div className="flex items-center gap-2">
              <Book className="w-4 h-4" />
              <span>50+ Resources</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Community Curated</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Updated Weekly</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {resourceCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#BC6C25]/10 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-[#BC6C25]" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-[#283618]">
                      {category.category}
                    </h2>
                    <p className="text-[#606C38] mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="text-sm text-[#606C38] font-medium">
                  {category.items.length} Resources
                </div>
              </div>

              {/* Resources Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => {
                  const TypeIcon = getTypeIcon(item.type);
                  return (
                    <motion.div
                      key={itemIndex}
                      variants={cardVariants}
                      whileHover={{
                        y: -6,
                        transition: { duration: 0.2, ease: "easeOut" },
                      }}
                      className="group"
                    >
                      <Card className="p-6 border-2 border-[#BC6C25]/20 hover:border-[#BC6C25]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#BC6C25]/10 h-full flex flex-col bg-white/90 backdrop-blur-sm">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#DDA15E]/20 flex items-center justify-center">
                              <TypeIcon className="w-5 h-5 text-[#BC6C25]" />
                            </div>
                            <div>
                              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[#DDA15E]/30 text-[#BC6C25]">
                                {item.type}
                              </span>
                            </div>
                          </div>
                          <span
                            className={`text-xs font-semibold px-2 py-1 rounded-full border ${getDifficultyColor(
                              item.difficulty
                            )}`}
                          >
                            {item.difficulty}
                          </span>
                        </div>

                        {/* Title and Author */}
                        <h3 className="text-xl font-bold text-[#283618] mb-2 group-hover:text-[#BC6C25] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#606C38] font-medium mb-3">
                          by {item.author}
                        </p>

                        {/* Description */}
                        <p className="text-[#606C38] mb-4 leading-relaxed flex-1 text-sm">
                          {item.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs px-2 py-1 rounded-full bg-[#283618]/10 text-[#283618] font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-between text-xs text-[#606C38] mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{item.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              <span>{item.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500" />
                              <span>{item.rating}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Button */}
                        <Button
                          className="w-full bg-[#BC6C25] hover:bg-[#283618] text-white font-semibold py-3 rounded-lg transition-all duration-300 group-hover:shadow-lg flex items-center justify-center gap-2"
                          onClick={() => window.open(item.link, "_blank")}
                        >
                          {item.type === "Library" ||
                          item.type === "Framework" ||
                          item.type === "Toolbox" ? (
                            <>
                              <Github className="w-4 h-4" />
                              View on GitHub
                            </>
                          ) : item.type === "Research Paper" ? (
                            <>
                              <Download className="w-4 h-4" />
                              Download Paper
                            </>
                          ) : (
                            <>
                              <ExternalLink className="w-4 h-4" />
                              Access Resource
                            </>
                          )}
                        </Button>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-[#BC6C25] to-[#283618] rounded-2xl p-8 text-white text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">
              Contribute to Our Resource Library
            </h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Know of a great ZK resource we're missing? Help us build the most
              comprehensive zero-knowledge learning library by submitting your
              recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="bg-white text-[#283618] hover:bg-[#FEFAE0] border-white font-semibold px-8 py-3"
              >
                Submit Resource
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 border border-white/30 font-semibold px-8 py-3"
              >
                Join Community
              </Button>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
