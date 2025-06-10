"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-display font-bold text-[#283618] mb-4">
            Get in <span className="italic text-[#BC6C25]">Touch</span>
          </h1>
          <p className="text-lg text-[#606C38] mb-12 max-w-3xl">
            Have questions about zero-knowledge proofs or want to collaborate?
            We'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 border-2 border-[#BC6C25]/20">
                <h2 className="text-2xl font-bold text-[#283618] mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-[#606C38] mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg border-2 border-[#DDA15E]/20 bg-white/50 focus:border-[#BC6C25] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-[#606C38] mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 rounded-lg border-2 border-[#DDA15E]/20 bg-white/50 focus:border-[#BC6C25] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-[#606C38] mb-2">Message</label>
                    <textarea
                      rows="4"
                      className="w-full p-3 rounded-lg border-2 border-[#DDA15E]/20 bg-white/50 focus:border-[#BC6C25] transition"
                    ></textarea>
                  </div>
                  <Button
                    className="w-full bg-[#BC6C25] hover:bg-[#283618]"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <Card className="p-6 border-2 border-[#BC6C25]/20">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-[#BC6C25] mr-3" />
                  <h3 className="text-xl font-bold text-[#283618]">Email</h3>
                </div>
                <p className="text-[#606C38]">contact@proofofwitness.com</p>
              </Card>

              <Card className="p-6 border-2 border-[#BC6C25]/20">
                <div className="flex items-center mb-4">
                  <MessageSquare className="w-6 h-6 text-[#BC6C25] mr-3" />
                  <h3 className="text-xl font-bold text-[#283618]">
                    Community Chat
                  </h3>
                </div>
                <p className="text-[#606C38] mb-4">
                  Join our Telegram community for quick responses and updates.
                </p>
                <Button
                  className="w-full bg-[#BC6C25] hover:bg-[#283618]"
                  onClick={() =>
                    window.open("https://t.me/+TPdx_Fc5_ONmNGJl", "_blank")
                  }
                >
                  Join Telegram
                </Button>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
