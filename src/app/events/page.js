"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EventsPage() {
  const events = [
    {
      title: "ZK Witness Chennai",
      date: "June 21, 2024",
      time: "2:00 PM IST",
      location: "Chennai, India",
      description:
        "Deep dive into zero-knowledge proofs and their applications in Web3. Learn from industry experts and network with fellow developers.",
      image: "/events/chennai.jpg",
      tags: ["Workshop", "Technical"],
      attendees: "50+",
      status: "Open",
    },
    {
      title: "ZK Witness Bangalore",
      date: "July 10, 2024",
      time: "3:00 PM IST",
      location: "Bangalore, India",
      description:
        "Hands-on session on implementing ZK-SNARKs in your applications. Build real-world projects with guided mentorship.",
      image: "/events/bangalore.jpg",
      tags: ["Hands-on", "Development"],
      attendees: "75+",
      status: "Filling Fast",
    },
    {
      title: "ZK Witness Mumbai",
      date: "August 15, 2024",
      time: "4:00 PM IST",
      location: "Mumbai, India",
      description:
        "Advanced concepts in zero-knowledge cryptography and privacy. Explore cutting-edge research and future applications.",
      image: "/events/mumbai.jpg",
      tags: ["Advanced", "Research"],
      attendees: "100+",
      status: "Open",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-display font-bold text-[#283618] mb-6">
            Upcoming <span className="italic text-[#BC6C25]">Events</span>
          </h1>
          <p className="text-xl text-[#606C38] max-w-3xl mx-auto leading-relaxed">
            Join us for hands-on workshops, technical deep-dives, and community
            gatherings. Connect with industry experts and fellow developers in
            the ZK space.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group"
            >
              <Card className="overflow-hidden border-2 border-[#BC6C25]/20 hover:border-[#BC6C25]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#BC6C25]/10 h-full flex flex-col bg-white/80 backdrop-blur-sm">
                {/* Image Section */}
                <div className="relative h-56 bg-gradient-to-br from-[#283618] to-[#606C38] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <div className="absolute top-4 right-4 z-20">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.status === "Filling Fast"
                          ? "bg-red-500 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20 flex items-center text-white">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">
                      {event.attendees} Expected
                    </span>
                  </div>
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white/60 text-4xl font-bold">ZK</div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Tags */}
                  <div className="flex gap-2 mb-4">
                    {event.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-[#DDA15E]/20 text-[#BC6C25] border border-[#DDA15E]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#283618] mb-3 group-hover:text-[#BC6C25] transition-colors duration-300">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#606C38] mb-6 leading-relaxed flex-1">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-[#606C38]">
                      <div className="w-10 h-10 rounded-full bg-[#DDA15E]/20 flex items-center justify-center mr-3">
                        <Calendar className="w-4 h-4 text-[#BC6C25]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#283618]">
                          {event.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-[#606C38]">
                      <div className="w-10 h-10 rounded-full bg-[#DDA15E]/20 flex items-center justify-center mr-3">
                        <Clock className="w-4 h-4 text-[#BC6C25]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#283618]">
                          {event.time}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-[#606C38]">
                      <div className="w-10 h-10 rounded-full bg-[#DDA15E]/20 flex items-center justify-center mr-3">
                        <MapPin className="w-4 h-4 text-[#BC6C25]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#283618]">
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Register Button */}
                  <Button className="w-full bg-[#BC6C25] hover:bg-[#283618] text-white font-semibold py-3 rounded-lg transition-all duration-300 group-hover:shadow-lg flex items-center justify-center gap-2">
                    Register Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-[#BC6C25] to-[#283618] rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Don&apos;t Miss Out!</h2>
            <p className="text-lg mb-6 opacity-90">
              Join our community and stay updated with the latest events and
              workshops.
            </p>
            <Button
              variant="outline"
              className="bg-white text-[#283618] hover:bg-[#FEFAE0] border-white font-semibold px-8 py-3"
            >
              Join Community
            </Button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
