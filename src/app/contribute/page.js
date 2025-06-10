"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Code,
  BookOpen,
  Users,
  Lightbulb,
  MessageCircle,
  GitBranch,
  Award,
  Target,
  Zap,
  Heart,
  Globe,
  Calendar,
  FileText,
  Video,
  Mic,
  PenTool,
  Search,
  Shield,
  Rocket,
  Coffee,
  Star,
  CheckCircle,
  ArrowRight,
  Github,
  ExternalLink,
  Mail,
  Clock,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContributePage() {
  const contributionAreas = [
    {
      title: "Content Creation",
      icon: PenTool,
      description: "Help expand our knowledge base with high-quality educational content and documentation.",
      color: "from-blue-500 to-blue-600",
      opportunities: [
        {
          title: "Technical Documentation",
          description: "Write comprehensive guides on ZK protocols, implementation patterns, and best practices.",
          skills: ["Technical Writing", "ZK Knowledge", "Documentation"],
          timeCommitment: "5-10 hours/week",
          impact: "High",
          difficulty: "Intermediate",
        },
        {
          title: "Tutorial Creation",
          description: "Develop step-by-step tutorials for beginners and intermediate developers.",
          skills: ["Teaching", "ZK Development", "Content Design"],
          timeCommitment: "3-8 hours/week",
          impact: "High",
          difficulty: "Beginner",
        },
        {
          title: "Blog Articles",
          description: "Write insightful articles about ZK trends, research, and real-world applications.",
          skills: ["Writing", "Research", "ZK Understanding"],
          timeCommitment: "2-5 hours/week",
          impact: "Medium",
          difficulty: "Beginner",
        },
      ],
    },
    {
      title: "Code Development",
      icon: Code,
      description: "Contribute to open-source tools, libraries, and educational projects that benefit the entire community.",
      color: "from-green-500 to-green-600",
      opportunities: [
        {
          title: "Open Source Libraries",
          description: "Develop and maintain ZK libraries, tools, and frameworks for the community.",
          skills: ["Programming", "ZK Protocols", "Software Architecture"],
          timeCommitment: "10-20 hours/week",
          impact: "Very High",
          difficulty: "Advanced",
        },
        {
          title: "Educational Tools",
          description: "Build interactive learning tools, visualizations, and educational applications.",
          skills: ["Frontend Development", "UX Design", "Educational Design"],
          timeCommitment: "5-15 hours/week",
          impact: "High",
          difficulty: "Intermediate",
        },
        {
          title: "Code Examples",
          description: "Create practical code examples and sample implementations for learning purposes.",
          skills: ["Programming", "Documentation", "ZK Development"],
          timeCommitment: "3-6 hours/week",
          impact: "Medium",
          difficulty: "Intermediate",
        },
      ],
    },
    {
      title: "Community Building",
      icon: Users,
      description: "Foster connections, organize events, and help create an inclusive environment for all members.",
      color: "from-purple-500 to-purple-600",
      opportunities: [
        {
          title: "Event Organization",
          description: "Plan and coordinate workshops, meetups, hackathons, and online events.",
          skills: ["Event Planning", "Communication", "Project Management"],
          timeCommitment: "5-12 hours/week",
          impact: "Very High",
          difficulty: "Intermediate",
        },
        {
          title: "Mentorship Program",
          description: "Guide newcomers and provide support to community members on their ZK journey.",
          skills: ["Teaching", "ZK Expertise", "Patience", "Communication"],
          timeCommitment: "3-8 hours/week",
          impact: "High",
          difficulty: "Advanced",
        },
        {
          title: "Community Moderation",
          description: "Help maintain a positive and productive environment in our communication channels.",
          skills: ["Communication", "Conflict Resolution", "Community Guidelines"],
          timeCommitment: "2-5 hours/week",
          impact: "Medium",
          difficulty: "Beginner",
        },
      ],
    },
    {
      title: "Research & Innovation",
      icon: Lightbulb,
      description: "Advance the field through research, experimentation, and sharing cutting-edge insights.",
      color: "from-orange-500 to-orange-600",
      opportunities: [
        {
          title: "Research Papers",
          description: "Conduct original research and publish findings that advance ZK technology.",
          skills: ["Research", "Academic Writing", "Advanced Mathematics", "Cryptography"],
          timeCommitment: "15-25 hours/week",
          impact: "Very High",
          difficulty: "Expert",
        },
        {
          title: "Protocol Analysis",
          description: "Analyze existing protocols, identify improvements, and propose optimizations.",
          skills: ["Protocol Design", "Security Analysis", "Performance Optimization"],
          timeCommitment: "8-15 hours/week",
          impact: "High",
          difficulty: "Advanced",
        },
        {
          title: "Experimental Projects",
          description: "Explore novel applications and use cases for zero-knowledge technology.",
          skills: ["Innovation", "Prototyping", "ZK Applications"],
          timeCommitment: "5-12 hours/week",
          impact: "Medium",
          difficulty: "Advanced",
        },
      ],
    },
    {
      title: "Media & Outreach",
      icon: Mic,
      description: "Spread awareness and knowledge through various media channels and public engagement.",
      color: "from-red-500 to-red-600",
      opportunities: [
        {
          title: "Podcast Hosting",
          description: "Host or co-host podcasts discussing ZK technology, interviews, and industry insights.",
          skills: ["Public Speaking", "Audio Production", "Interview Skills"],
          timeCommitment: "4-8 hours/week",
          impact: "High",
          difficulty: "Intermediate",
        },
        {
          title: "Video Content",
          description: "Create educational videos, tutorials, and explainer content for various platforms.",
          skills: ["Video Production", "Teaching", "Content Creation"],
          timeCommitment: "6-12 hours/week",
          impact: "High",
          difficulty: "Intermediate",
        },
        {
          title: "Social Media",
          description: "Manage social media presence and engage with the broader crypto and tech community.",
          skills: ["Social Media Marketing", "Content Strategy", "Community Engagement"],
          timeCommitment: "2-6 hours/week",
          impact: "Medium",
          difficulty: "Beginner",
        },
      ],
    },
    {
      title: "Quality Assurance",
      icon: Shield,
      description: "Ensure the quality and security of community resources through testing and review processes.",
      color: "from-teal-500 to-teal-600",
      opportunities: [
        {
          title: "Code Review",
          description: "Review community-contributed code for quality, security, and best practices.",
          skills: ["Code Review", "Security Analysis", "Best Practices"],
          timeCommitment: "4-10 hours/week",
          impact: "High",
          difficulty: "Advanced",
        },
        {
          title: "Content Review",
          description: "Review educational content for accuracy, clarity, and pedagogical effectiveness.",
          skills: ["Technical Knowledge", "Educational Assessment", "Attention to Detail"],
          timeCommitment: "3-7 hours/week",
          impact: "Medium",
          difficulty: "Intermediate",
        },
        {
          title: "Testing & Validation",
          description: "Test tools, tutorials, and resources to ensure they work as intended.",
          skills: ["Testing", "Quality Assurance", "Problem Solving"],
          timeCommitment: "2-6 hours/week",
          impact: "Medium",
          difficulty: "Beginner",
        },
      ],
    },
  ];

  const contributionProcess = [
    {
      step: 1,
      title: "Explore Opportunities",
      description: "Browse available contribution areas and find what matches your skills and interests.",
      icon: Search,
    },
    {
      step: 2,
      title: "Join Our Community",
      description: "Connect with us on Discord, GitHub, and other platforms to get started.",
      icon: Users,
    },
    {
      step: 3,
      title: "Start Contributing",
      description: "Begin with small contributions and gradually take on larger responsibilities.",
      icon: Rocket,
    },
    {
      step: 4,
      title: "Grow & Lead",
      description: "Develop expertise, mentor others, and help shape the community's future.",
      icon: TrendingUp,
    },
  ];

  const recognitionProgram = [
    {
      title: "Contributor Badge",
      description: "Recognition for consistent valuable contributions to the community.",
      icon: Award,
      criteria: "5+ meaningful contributions",
      benefits: ["Community recognition", "Special Discord role", "Contributor profile"],
    },
    {
      title: "Expert Contributor",
      description: "Advanced recognition for significant technical contributions and leadership.",
      icon: Star,
      criteria: "20+ contributions + leadership",
      benefits: ["Expert badge", "Mentorship opportunities", "Speaking opportunities"],
    },
    {
      title: "Community Champion",
      description: "Highest recognition for exceptional dedication and impact on the community.",
      icon: Trophy,
      criteria: "Sustained excellence + community impact",
      benefits: ["Champion status", "Advisory role", "Conference speaking", "Special perks"],
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

  const getImpactColor = (impact) => {
    switch (impact) {
      case "Very High":
        return "bg-red-100 text-red-800";
      case "High":
        return "bg-orange-100 text-orange-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
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
            Contribute to <span className="italic text-[#BC6C25]">Our Community</span>
          </h1>
          <p className="text-xl text-[#606C38] max-w-4xl mx-auto leading-relaxed mb-8">
            Join thousands of passionate individuals building the future of zero-knowledge technology. 
            Your expertise, creativity, and dedication can help shape the next generation of privacy-preserving solutions.
          </p>
          <div className="flex justify-center gap-8 text-sm text-[#606C38]">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Global Community</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>High Impact</span>
            </div>
          </div>
        </motion.div>

        {/* Contribution Areas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#283618] mb-4">Ways to Contribute</h2>
            <p className="text-lg text-[#606C38] max-w-2xl mx-auto">
              Discover how your unique skills can make a meaningful impact on our community
            </p>
          </div>

          <div className="space-y-16">
            {contributionAreas.map((area, areaIndex) => (
              <motion.div
                key={areaIndex}
                variants={cardVariants}
                className="space-y-8"
              >
                {/* Area Header */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${area.color} flex items-center justify-center`}>
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#283618]">{area.title}</h3>
                    <p className="text-[#606C38] mt-1">{area.description}</p>
                  </div>
                </div>

                {/* Opportunities Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {area.opportunities.map((opportunity, oppIndex) => (
                    <motion.div
                      key={oppIndex}
                      whileHover={{
                        y: -6,
                        transition: { duration: 0.2, ease: "easeOut" },
                      }}
                      className="group"
                    >
                      <Card className="p-5 border-2 border-[#BC6C25]/20 hover:border-[#BC6C25]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#BC6C25]/10 h-full flex flex-col bg-white/90 backdrop-blur-sm">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(opportunity.difficulty)}`}>
                            {opportunity.difficulty}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getImpactColor(opportunity.impact)}`}>
                            {opportunity.impact} Impact
                          </span>
                        </div>

                        {/* Title and Description */}
                        <h4 className="text-lg font-bold text-[#283618] mb-2 group-hover:text-[#BC6C25] transition-colors duration-300">
                          {opportunity.title}
                        </h4>
                        <p className="text-[#606C38] mb-4 leading-relaxed text-sm flex-1">
                          {opportunity.description}
                        </p>

                        {/* Skills Required */}
                        <div className="mb-4">
                          <h5 className="text-xs font-semibold text-[#283618] mb-2">Skills Required:</h5>
                          <div className="flex flex-wrap gap-1">
                            {opportunity.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="text-xs px-2 py-1 rounded-full bg-[#283618]/10 text-[#283618] font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Time Commitment */}
                        <div className="flex items-center justify-between text-xs text-[#606C38] mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{opportunity.timeCommitment}</span>
                          </div>
                        </div>

                        {/* Action Button */}
                        <Button className="w-full bg-[#BC6C25] hover:bg-[#283618] text-white font-semibold py-2 rounded-lg transition-all duration-300 group-hover:shadow-lg flex items-center justify-center gap-2 text-sm">
                          <ArrowRight className="w-4 h-4" />
                          Get Started
                        </Button>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contribution Process */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#283618] mb-4">How to Get Started</h2>
            <p className="text-lg text-[#606C38] max-w-2xl mx-auto">
              Follow these simple steps to begin your contribution journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contributionProcess.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="group"
              >
                <Card className="p-6 border-2 border-[#BC6C25]/20 hover:border-[#BC6C25]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#BC6C25]/10 h-full flex flex-col bg-white/90 backdrop-blur-sm text-center">
                  {/* Step Number */}
                  <div className="w-12 h-12 rounded-full bg-[#BC6C25] text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-[#BC6C25]/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-[#BC6C25]" />
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-lg font-bold text-[#283618] mb-2 group-hover:text-[#BC6C25] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#606C38] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recognition Program */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#283618] mb-4">Recognition Program</h2>
            <p className="text-lg text-[#606C38] max-w-2xl mx-auto">
              We celebrate and recognize outstanding contributors to our community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recognitionProgram.map((recognition, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="group"
              >
                <Card className="p-6 border-2 border-[#BC6C25]/20 hover:border-[#BC6C25]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#BC6C25]/10 h-full flex flex-col bg-white/90 backdrop-blur-sm text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#BC6C25] to-[#283618] flex items-center justify-center mx-auto mb-4">
                    <recognition.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-[#283618] mb-2 group-hover:text-[#BC6C25] transition-colors duration-300">
                    {recognition.title}
                  </h3>
                  <p className="text-[#606C38] mb-4 leading-relaxed text-sm flex-1">
                    {recognition.description}
                  </p>

                  {/* Criteria */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#283618] mb-2">Criteria:</h4>
                    <span className="text-xs px-3 py-1 rounded-full bg-[#DDA15E]/30 text-[#BC6C25] font-medium">
                      {recognition.criteria}
                    </span>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#283618] mb-2">Benefits:</h4>
                    <div className="space-y-1">
                      {recognition.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center justify-center text-xs text-[#606C38]">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-[#BC6C25] to-[#283618] rounded-2xl p-8 text-white text-center">
            <Rocket className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Join our vibrant community of contributors and help shape the future of zero-knowledge technology. 
              Every contribution, no matter how small, makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="bg-white text-[#283618] hover:bg-[#FEFAE0] border-white font-semibold px-8 py-3 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 border border-white/30 font-semibold px-8 py-3 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Join Discord
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 border border-white/30 font-semibold px-8 py-3 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}