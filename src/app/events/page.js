"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EventsPage() {
  const events = [
    {
      title: "ZK Witness Chennai",
      date: "June 21, 2024",
      time: "2:00 PM IST",
      location: "Chennai, India",
      description:
        "Deep dive into zero-knowledge proofs and their applications in Web3.",
      image: "/events/chennai.jpg",
      tags: ["Workshop", "Technical"],
    },
    {
      title: "ZK Witness Bangalore",
      date: "July 10, 2024",
      time: "3:00 PM IST",
      location: "Bangalore, India",
      description:
        "Hands-on session on implementing ZK-SNARKs in your applications.",
      image: "/events/bangalore.jpg",
      tags: ["Hands-on", "Development"],
    },
    {
      title: "ZK Witness Mumbai",
      date: "August 15, 2024",
      time: "4:00 PM IST",
      location: "Mumbai, India",
      description:
        "Advanced concepts in zero-knowledge cryptography and privacy.",
      image: "/events/mumbai.jpg",
      tags: ["Advanced", "Research"],
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
            Upcoming <span className="italic text-[#BC6C25]">Events</span>
          </h1>
          <p className="text-lg text-[#606C38] mb-12">
            Join us for hands-on workshops, technical deep-dives, and community
            gatherings.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-2 border-[#BC6C25]/20">
                  <div className="h-48 bg-[#283618]/10" />
                  <div className="p-6">
                    <div className="flex gap-2 mb-4">
                      {event.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono px-2 py-1 rounded bg-[#DDA15E]/20 text-[#BC6C25]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-[#283618] mb-2">
                      {event.title}
                    </h3>
                    <p className="text-[#606C38] mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm text-[#606C38]">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    <Button className="w-full mt-6 bg-[#BC6C25] hover:bg-[#283618]">
                      Register Now
                    </Button>
                  </div>
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
