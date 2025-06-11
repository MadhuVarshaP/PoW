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
  Video,
  FileText,
  ExternalLink,
  Download,
  Eye,
  Github,
  Globe,
  PlayCircle,
  BookOpen,
  Terminal,
  Zap,
  Shield,
  Calendar,
  MapPin,
  Coffee,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LearnPage() {
  const learningPaths = [
    {
      title: "ZK Fundamentals",
      icon: Book,
      description: "Master the core concepts of zero-knowledge proofs with interactive tutorials and community support.",
      level: "Beginner",
      duration: "4-6 weeks",
      students: "2,847",
      rating: 4.8,
      type: "Learning Path",
      tags: ["Theory", "Fundamentals"],
    },
    {
      title: "Circuit Development",
      icon: Code,
      description: "Learn to build ZK circuits using Circom with hands-on projects and peer collaboration.",
      level: "Intermediate",
      duration: "6-8 weeks",
      students: "1,892",
      rating: 4.7,
      type: "Practical Course",
      tags: ["Circom", "Development"],
    },
    {
      title: "ZK-SNARKs Deep Dive",
      icon: Lightbulb,
      description: "Advanced exploration of zk-SNARKs protocols with community-driven research discussions.",
      level: "Advanced",
      duration: "8-10 weeks",
      students: "1,234",
      rating: 4.9,
      type: "Advanced Track",
      tags: ["SNARKs", "Research"],
    },
    {
      title: "ZK Applications",
      icon: GraduationCap,
      description: "Explore real-world ZK applications in DeFi, identity, and privacy with case studies.",
      level: "Intermediate",
      duration: "5-7 weeks",
      students: "956",
      rating: 4.6,
      type: "Application Focus",
      tags: ["DeFi", "Privacy"],
    },
    {
      title: "ZK-STARKs & Scalability",
      icon: Trophy,
      description: "Master transparent zero-knowledge proofs and post-quantum security concepts.",
      level: "Advanced",
      duration: "10-12 weeks",
      students: "567",
      rating: 4.9,
      type: "Specialized Track",
      tags: ["STARKs", "Scalability"],
    },
    {
      title: "ZK Security & Auditing",
      icon: Target,
      description: "Learn to identify vulnerabilities and conduct security audits in ZK systems.",
      level: "Expert",
      duration: "6-8 weeks",
      students: "234",
      rating: 4.8,
      type: "Security Focus",
      tags: ["Security", "Auditing"],
    },
  ];

  const resources = [
    {
      category: "Essential Guides",
      icon: BookOpen,
      items: [
        {
          title: "Zero-Knowledge Proofs: Complete Guide",
          description: "Comprehensive introduction covering mathematical foundations and practical implementations.",
          type: "Guide",
          author: "ZK Community",
          readTime: "30 min",
          difficulty: "Beginner",
          tags: ["Fundamentals", "Theory"],
        },
        {
          title: "Circom Language Documentation",
          description: "Official documentation for writing arithmetic circuits in Circom.",
          type: "Documentation",
          author: "iden3 Team",
          readTime: "25 min",
          difficulty: "Intermediate",
          tags: ["Development", "Circom"],
        },
        {
          title: "Privacy-Preserving Smart Contracts",
          description: "Best practices for building privacy applications with zero-knowledge proofs.",
          type: "Guide",
          author: "Privacy Labs",
          readTime: "20 min",
          difficulty: "Intermediate",
          tags: ["Smart Contracts", "Privacy"],
        },
      ],
    },
    {
      category: "Video Tutorials",
      icon: PlayCircle,
      items: [
        {
          title: "ZK-SNARKs Explained Visually",
          description: "Visual breakdown of ZK-SNARKs concepts with practical examples.",
          type: "Video Series",
          author: "ZK Academy",
          readTime: "45 min",
          difficulty: "Beginner",
          tags: ["SNARKs", "Visual Learning"],
        },
        {
          title: "Building Your First ZK Circuit",
          description: "Hands-on workshop covering circuit design and proof generation.",
          type: "Workshop",
          author: "Community Expert",
          readTime: "60 min",
          difficulty: "Intermediate",
          tags: ["Hands-on", "Circuits"],
        },
        {
          title: "ZK Rollups Architecture",
          description: "Technical deep dive into ZK rollup architecture and implementation.",
          type: "Webinar",
          author: "Scaling Team",
          readTime: "40 min",
          difficulty: "Advanced",
          tags: ["Rollups", "Scaling"],
        },
      ],
    },
    {
      category: "Development Tools",
      icon: Terminal,
      items: [
        {
          title: "SnarkJS - JavaScript ZK Library",
          description: "Complete JavaScript library for generating and verifying ZK proofs.",
          type: "Library",
          author: "iden3",
          readTime: "15 min",
          difficulty: "Intermediate",
          tags: ["JavaScript", "Library"],
        },
        {
          title: "ZoKrates - ZK Toolbox",
          description: "High-level language and toolbox for zkSNARKs on Ethereum.",
          type: "Toolbox",
          author: "ZoKrates Team",
          readTime: "20 min",
          difficulty: "Intermediate",
          tags: ["Ethereum", "Toolbox"],
        },
        {
          title: "Arkworks - Rust ZK Ecosystem",
          description: "Comprehensive Rust ecosystem for zero-knowledge cryptography.",
          type: "Framework",
          author: "Arkworks Team",
          readTime: "25 min",
          difficulty: "Advanced",
          tags: ["Rust", "Framework"],
        },
      ],
    },
  ];

  const workshops = [
    {
      title: "ZK Fundamentals Workshop",
      date: "Every Saturday",
      time: "2:00 PM UTC",
      duration: "2 hours",
      instructor: "Community Experts",
      level: "Beginner",
      attendees: 45,
      description: "Weekly interactive workshop covering ZK basics with Q&A sessions.",
    },
    {
      title: "Circuit Building Bootcamp",
      date: "Bi-weekly",
      time: "6:00 PM UTC",
      duration: "3 hours",
      instructor: "Senior Developers",
      level: "Intermediate",
      attendees: 32,
      description: "Hands-on circuit development with real-world project examples.",
    },
    {
      title: "ZK Research Discussions",
      date: "Monthly",
      time: "4:00 PM UTC",
      duration: "90 minutes",
      instructor: "Research Community",
      level: "Advanced",
      attendees: 28,
      description: "Deep dive into latest ZK research papers and innovations.",
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
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

  const getTypeIcon = (type) => {
    switch (type) {
      case "Video Series":
      case "Webinar":
      case "Workshop":
        return Video;
      case "Library":
      case "Framework":
      case "Toolbox":
        return Code;
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
            Learn <span className="italic text-[#BC6C25]">Zero-Knowledge</span>
          </h1>
          <p className="text-xl text-[#606C38] max-w-4xl mx-auto leading-relaxed mb-8">
            Free community-driven learning resources for mastering zero-knowledge technology.
            From fundamentals to advanced applications - everything you need to become a ZK expert.
          </p>
          <div className="flex justify-center gap-8 text-sm text-[#606C38]">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>6,000+ Learners</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Community Support</span>
            </div>
          </div>
        </motion.div>

        {/* Learning Paths Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#283618] mb-4 font-display">Learning <span className="italic text-[#BC6C25]">Paths</span></h2>

            <p className="text-lg text-[#606C38] max-w-2xl mx-auto">
              Structured learning journeys designed by the community, for the community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group"
              >
                <Card className="p-5 border-2 border-[#BC6C25]/20 h-full w-full flex flex-col bg-[#FFFBF0] backdrop-blur-sm">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#BC6C25]/10 flex items-center justify-center">
                      <path.icon className="w-5 h-5 text-[#BC6C25]" />
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getLevelColor(path.level)}`}>
                      {path.level}
                    </span>
                  </div>

                  {/* Title and Type */}
                  <h3 className="text-lg font-bold text-[#283618] group-hover:text-[#BC6C25] transition-colors duration-300">
                    {path.title}
                  </h3>
                  <p className="text-xs text-[#BC6C25] font-medium ">{path.type}</p>

                  {/* Description */}
                  <p className="text-[#606C38]leading-relaxed text-sm flex-1">
                    {path.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {path.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full bg-[#283618]/10 text-[#283618] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-[#606C38] mb-2">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{path.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{path.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500" />
                      <span>{path.rating}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full bg-[#BC6C25] hover:bg-[#283618] cursor-pointer text-white font-semibold py-2 rounded-lg transition-all duration-300 group-hover:shadow-lg flex items-center justify-center gap-2 text-sm">
                    <Play className="w-4 h-4" />
                    Start Learning
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#283618] mb-4 font-display">Learning <span className="italic text-[#BC6C25]">Resources</span></h2>
            <p className="text-lg text-[#606C38] max-w-2xl mx-auto">
              Curated collection of free resources to accelerate your ZK journey
            </p>
          </div>

          <div className="space-y-12">
            {resources.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={cardVariants}
                className="space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#BC6C25]/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-[#BC6C25]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#283618]">{category.category}</h3>
                </div>

                {/* Resources Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, itemIndex) => {
                    const TypeIcon = getTypeIcon(item.type);
                    return (
                      <motion.div
                        key={itemIndex}
                        className="group"
                      >
                        <Card className="p-4 border-2 border-[#BC6C25]/20 h-full w-full flex flex-col bg-[#FFFBF0] backdrop-blur-sm">
                          {/* Header */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-[#DDA15E]/20 flex items-center justify-center">
                                <TypeIcon className="w-4 h-4 text-[#BC6C25]" />
                              </div>
                              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[#DDA15E]/30 text-[#BC6C25]">
                                {item.type}
                              </span>
                            </div>
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${getLevelColor(item.difficulty)}`}>
                              {item.difficulty}
                            </span>
                          </div>

                          {/* Title and Author */}
                          <h4 className="text-base font-bold text-[#283618] group-hover:text-[#BC6C25] transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-xs text-[#606C38] font-medium">by {item.author}</p>

                          {/* Description */}
                          <p className="text-[#606C38] leading-relaxed flex-1 text-sm">
                            {item.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 ">
                            {item.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="text-xs px-2 py-1 rounded-full bg-[#283618]/10 text-[#283618] font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Stats and Action */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-xs text-[#606C38]">
                              <Clock className="w-3 h-3" />
                              <span>{item.readTime}</span>
                            </div>
                            <Button
                              size="sm"
                              className="bg-[#BC6C25] hover:bg-[#283618] text-white font-semibold px-3 py-1 rounded text-xs transition-all duration-300"
                            >
                              Access
                            </Button>
                          </div>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Community Workshops Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="my-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#283618] mb-4 font-display">Community <span className="italic text-[#BC6C25]">Workshops</span></h2>
            <p className="text-lg text-[#606C38] max-w-2xl mx-auto">
              Join live workshops and connect with fellow ZK enthusiasts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group"
              >
                <Card className="p-5 border-2 border-[#BC6C25]/20 h-full w-full flex flex-col bg-[#FFFBF0] backdrop-blur-sm">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#BC6C25]/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-[#BC6C25]" />
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getLevelColor(workshop.level)}`}>
                      {workshop.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#283618] group-hover:text-[#BC6C25] transition-colors duration-300">
                    {workshop.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#606C38] leading-relaxed text-sm flex-1">
                    {workshop.description}
                  </p>

                  {/* Workshop Details */}
                  <div className="space-y-1 text-sm text-[#606C38]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#BC6C25]" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#BC6C25]" />
                      <span>{workshop.time} • {workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#BC6C25]" />
                      <span>{workshop.attendees} attendees</span>
                    </div>
                  </div>

                  {/* Instructor */}
                  <p className="text-xs text-[#606C38] font-medium">
                    Led by {workshop.instructor}
                  </p>

                  {/* Action Button */}
                  <Button className="w-full bg-[#BC6C25] hover:bg-[#283618] text-white font-semibold py-2 rounded-lg transition-all duration-300 group-hover:shadow-lg flex items-center justify-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    Join Workshop
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </main>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed bottom-6 right-6 bg-[#283618] text-white p-4 rounded-xl shadow-lg z-50"
      >
        <h4 className="text-sm font-bold mb-1">🛠 Join Our Builder Hub</h4>
        <p className="text-xs opacity-80 mb-2">Get resources, support & collab on ZK ideas.</p>
        <Button className="bg-[#FEFAE0] text-[#283618] text-xs font-bold py-1 px-4 rounded-md">
          Join Now
        </Button>
      </motion.div>



      <Footer />
    </div>
  );
}