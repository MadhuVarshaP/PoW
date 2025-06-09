import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LiaTelegram } from "react-icons/lia";
import { RiMenu3Fill, RiTwitterXFill, RiSearchLine } from "react-icons/ri";
import logo from "../assets/logo.png";
import Image from "next/image";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [scrolled]);

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: scrolled ? "100%" : "90%",
    backgroundColor: "#DDA15E",
    boxShadow: scrolled
      ? "0 4px 20px rgba(221, 161, 94, 0.3)"
      : "0 8px 32px rgba(221, 161, 94, 0.3)",
    borderRadius: scrolled ? "0rem" : "2rem",
    marginTop: scrolled ? "0rem" : "1rem",
    zIndex: 50,
    border: "none",
  };

  const fixedHeight = "64px";

  if (!mounted) {
    return (
      <div style={{ ...navbarStyle, height: fixedHeight }}>
        <div className="px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="PoW Logo" className="h-10 w-auto" />
            <span className="text-xl md:text-2xl font-murqas text-[#283618]">
              PoW
            </span>
          </div>

          <div className="hidden md:flex">
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-[#283618] hover:bg-[#283618]/10 border border-transparent hover:border-[#606C38] font-poppins font-extrabold"
              >
                <LiaTelegram className="w-4 h-4" />
                Telegram
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-[#283618] hover:bg-[#283618]/10 border border-transparent hover:border-[#606C38] font-poppins font-extrabold"
              >
                <RiTwitterXFill className="w-4 h-4" />
                Twitter
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button className="p-2 rounded-lg text-[#283618] hover:bg-[#283618]/10">
              <RiMenu3Fill className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="fixed z-50 mx-auto"
      initial={false}
      animate={navbarStyle}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        width: { type: "spring", stiffness: 200, damping: 30 },
        borderRadius: { type: "spring", stiffness: 250, damping: 25 },
      }}
      style={{ height: fixedHeight }}
    >
      <div className="px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="PoW Logo" className="h-10 w-auto" />
        </div>

        <div className="hidden md:flex">
          <div className="flex gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-[#283618] hover:bg-[#283618]/10 border border-transparent hover:border-[#606C38] font-poppins transition-all duration-300 font-extrabold"
            >
              <LiaTelegram className="w-4 h-4 " />
              Telegram
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-[#283618] hover:bg-[#283618]/10 border border-transparent hover:border-[#606C38] font-poppins transition-all duration-300 font-extrabold"
            >
              <RiTwitterXFill className="w-4 h-4 " />
              Twitter
            </Button>
          </div>
        </div>

        <div className="md:hidden">
          <button
            className="p-2 rounded-lg text-[#283618] hover:bg-[#283618]/10 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <RiTwitterXFill className="w-6 h-6" />
            ) : (
              <RiMenu3Fill className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden border-t border-[#FEFAE0]/20"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              opacity: { duration: 0.2 },
              height: { type: "spring", stiffness: 400, damping: 35 },
            }}
            style={{
              backgroundColor: "#DDA15E",
              borderRadius: scrolled ? "0 0 0 0" : "0 0 2rem 2rem",
            }}
          >
            <div className="p-4 space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start text-[#283618] hover:bg-[#283618]/10 font-poppins transition-colors duration-300 font-extrabold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LiaTelegram className="w-4 h-4 " />
                Telegram
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start text-[#283618] hover:bg-[#283618]/10 font-poppins transition-colors duration-300 font-extrabold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <RiTwitterXFill className="w-4 h-4" />
                Twitter
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Navbar;
