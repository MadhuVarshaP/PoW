"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  ExternalLink,
  X,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import zkpostercbe from "../../assets/zk-cbe-poster.png";
import { useState } from "react";
import zkwitnesschennai from "../../assets/zk-witness-chennai.jpeg"
import zkwitnesspondy from "../../assets/zk-witness-pondy.jpeg"
import Link from "next/link";
export default function EventsPage() {
  const [isVisible, setIsVisible] = useState(true);

  const events = [
    {
      title: "ZK Witness Coimbatore",
      date: "August 3, 2025",
      time: "11:00 AM IST",
      location: "Coimbatore, India",
      description:
        "Deep dive into zero-knowledge proofs and their applications in Web3. Learn from industry experts and network with fellow developers.",
      image: zkpostercbe,
      tags: ["2 TALKS + 1 WORKSHOP"],
      attendees: "30+",
      status: "Open",
      register: "https://lu.ma/n3xv1n3z",
    },

    // {
    //   title: "ZK Witness Mumbai",
    //   date: "August 06, 2025",
    //   time: "4:00 PM IST",
    //   location: "Mumbai, India",
    //   description:
    //     "Advanced concepts in zero-knowledge cryptography and privacy. Explore cutting-edge research and future applications.",
    //   image: poster1,
    //   tags: ["TALKS", "DEVELOPMENT"],
    //   attendees: "100+",
    //   status: "Open",
    // },
  ];

  const pastEvents = [
       {
      title: "ZK Witness Pondicherry",
      date: "July 19, 2025",
      time: "6:00 PM IST",
      location: "Pondicherry, India",
      description:
        "A beginner-friendly introduction to the world of zero-knowledge proofs. Talk sessions, networking, and fun quizzes.",
      image: zkwitnesspondy,
      tags: ["3 TALKS + 1 WORKSHOP"],
      attendees: "20",
      poapLink: "https://poap.gallery/drops/191760",
    },
    {
      title: "ZK Witness Chennai",
      date: "June 21, 2025",
      time: "3:00 PM IST",
      location: "Chennai, India",
      description:
        "A beginner-friendly introduction to the world of zero-knowledge proofs. Talk sessions, networking, and fun quizzes.",
      image: zkwitnesschennai,
      tags: ["2 TALKS + 1 WORKSHOP"],
      attendees: "15",
      poapLink: "https://poap.gallery/drops/191075",
    }
  
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
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-28">
        {/* --- Upcoming Events Section --- */}
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
          className="flex flex-col space-y-8"
        >
          {events.map((event, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="flex flex-col md:flex-row bg-[#FFFBF0] md:h-[300px] max-w-5xl mx-auto overflow-hidden border-2 border-[#DDA15E]/30 shadow-lg hover:shadow-xl transition-shadow duration-300 p-0">
                <div className="relative w-full md:w-[300px] h-[220px] md:h-[300px]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span
                      className={`px-3 py-2 rounded-lg text-xs font-bold ${event.status === "Filling Fast"
                        ? "bg-red-500"
                        : "bg-green-500"
                        } text-white`}
                    >
                      {event.status}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6 flex-1">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {event.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-3 py-1 rounded-full bg-[#DDA15E]/20 text-[#BC6C25] border border-[#DDA15E]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-[#283618] mb-2">
                      {event.title}
                    </h3>

                    <p className="text-[#606C38] text-sm mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-[#606C38]">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-[#BC6C25]" />
                        <span className="font-semibold text-[#283618]">{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-[#BC6C25]" />
                        <span className="font-semibold text-[#283618]">{event.time}</span>
                      </div>
                      <div className="flex items-center group/map">
                        <MapPin className="w-4 h-4 mr-2 text-[#BC6C25]" />
                        <span className="font-semibold text-[#283618]">{event.location}</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-[#BC6C25]/70 group-hover/map:text-[#BC6C25] transition-colors cursor-pointer" />
                      </div>
                    </div>
                    <div className="flex items-center mt-3 text-[#606C38]">
                      <Users className="w-4 h-4 mr-2 text-[#BC6C25]" />
                      <span className="text-sm">{event.attendees} Expected</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href={event.register}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-fit"
                    >
                      <Button className="bg-[#BC6C25] hover:bg-[#283618] text-white font-semibold py-2 px-6 rounded-lg flex items-center gap-2 w-full sm:w-fit font-mono">
                        <span>&gt; Register Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Past Events Section --- */}
        <div className="text-center mt-28 mb-12">
          <h2 className="text-5xl font-bold text-[#283618] mb-4">Past Events</h2>
          <p className="text-lg text-[#606C38] max-w-xl mx-auto">
            Explore highlights from our previous ZK Witness meetups and collect POAPs.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-8"
        >
          {pastEvents.map((event, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="flex flex-col md:flex-row bg-[#FFFBF0] md:h-[300px] max-w-5xl mx-auto overflow-hidden border border-[#DDA15E]/20 shadow-md p-0">
                <div className="relative md:w-[400px] w-full h-[220px] md:h-[300px] flex-shrink-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-contain "
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                </div>


                <div className="flex flex-col justify-between p-6 flex-1">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {event.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-3 py-1 rounded-full bg-[#DDA15E]/20 text-[#BC6C25] border border-[#DDA15E]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-[#283618] mb-2">
                      {event.title}
                    </h3>

                    <p className="text-[#606C38] text-sm mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-[#606C38]">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-[#BC6C25]" />
                        <span className="font-semibold text-[#283618]">{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-[#BC6C25]" />
                        <span className="font-semibold text-[#283618]">{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-[#BC6C25]" />
                        <span className="font-semibold text-[#283618]">{event.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center mt-3 text-[#606C38]">
                      <Users className="w-4 h-4 mr-2 text-[#BC6C25]" />
                      <span className="text-sm">{event.attendees} Attended</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href={event.poapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#283618] hover:bg-[#BC6C25] text-white font-mono text-xs sm:text-sm px-5 py-2 rounded-lg transition"
                    >
                      <BadgeCheck className="w-4 h-4" />
                      View POAP Collections
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Notification Popup */}
        {isVisible && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[70vw] max-w-md sm:max-w-lg backdrop-blur-md bg-white/10 border border-white/30 px-6 py-3 rounded-full shadow-xl flex items-center justify-between gap-3 z-50">
            <span className="text-[#3A3A3A] text-sm font-semibold tracking-wide">
              🎉 Don’t miss new ZK events!
            </span>

            <Link href="https://t.me/+TPdx_Fc5_ONmNGJl">
            <Button className="bg-[#606C38] text-[#FEFAE0] px-5 py-1.5 rounded-full text-xs uppercase tracking-wide font-mono border border-[#283618] hover:bg-[#283618] hover:text-white transition">
              Join Community
            </Button>
            </Link>

            <button
              onClick={() => setIsVisible(false)}
              className="absolute -top-2 -right-2 bg-[#283618] text-[#FEFAE0] rounded-full p-1 hover:bg-[#BC6C25] transition-all"
            >
              <X size={14} />
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
