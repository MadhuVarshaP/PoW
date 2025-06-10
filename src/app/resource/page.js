"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Book, FileText, Video, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResourcesPage() {
  const resources = [
    {
      category: "Documentation",
      icon: FileText,
      items: [
        {
          title: "ZK Fundamentals Guide",
          description: "Comprehensive guide to zero-knowledge proofs basics",
          link: "#",
          type: "PDF",
        },
        {
          title: "Implementation Handbook",
          description: "Step-by-step guide for implementing ZK proofs",
          link: "#",
          type: "Doc",
        },
      ],
    },
    {
      category: "Video Tutorials",
      icon: Video,
      items: [
        {
          title: "ZK-SNARKs Explained",
          description: "Visual explanation of ZK-SNARKs concepts",
          link: "#",
          type: "Video",
        },
        {
          title: "Circuit Design Workshop",
          description: "Hands-on workshop for circuit design",
          link: "#",
          type: "Workshop",
        },
      ],
    },
    {
      category: "Research Papers",
      icon: Book,
      items: [
        {
          title: "ZK Proofs: State of the Art",
          description: "Latest research in ZK proof systems",
          link: "#",
          type: "Paper",
        },
        {
          title: "Privacy in Web3",
          description: "Research on privacy-preserving protocols",
          link: "#",
          type: "Paper",
        },
      ],
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
            Learning <span className="italic text-[#BC6C25]">Resources</span>
          </h1>
          <p className="text-lg text-[#606C38] mb-12">
            Curated collection of resources to help you master zero-knowledge
            proofs.
          </p>

          {resources.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-6 h-6 text-[#BC6C25] mr-3" />
                <h2 className="text-2xl font-bold text-[#283618]">
                  {category.category}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card
                    key={itemIndex}
                    className="p-6 border-2 border-[#BC6C25]/20"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-[#283618]">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono px-2 py-1 rounded bg-[#DDA15E]/20 text-[#BC6C25]">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-[#606C38] mb-4">{item.description}</p>
                    <Button
                      className="w-full bg-[#BC6C25] hover:bg-[#283618]"
                      onClick={() => window.open(item.link, "_blank")}
                    >
                      <LinkIcon className="w-4 h-4 mr-2" />
                      Access Resource
                    </Button>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
