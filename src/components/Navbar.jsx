import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { MessageCircle, Twitter, Menu, X } from "lucide-react"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  // Handle initial mounting and scrolling
  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    // Check initial scroll position
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }, [scrolled])

  // Static styles without animation on initial render
  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: scrolled ? '100%' : '90%',
    backgroundColor: "#DDA15E",
    boxShadow: scrolled 
      ? '0 4px 20px rgba(221, 161, 94, 0.3)'
      : '0 8px 32px rgba(221, 161, 94, 0.3)',
    borderRadius: scrolled ? '0rem' : '2rem',
    marginTop: scrolled ? '0rem' : '1rem',
    height: 'auto',
    padding: scrolled ? '0.5rem 0' : '0',
    zIndex: 50,
    border: 'none'
  }

  // Static fallback for initial render (no animation)
  if (!mounted) {
    return (
      <div 
        style={navbarStyle}
      >
        <div className="px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold font-display text-[#283618]">
            <span className="italic">Proof</span> of Witness
          </div>
          
          <div className='hidden md:flex'>
            <div className="flex gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-[#283618] hover:bg-[#283618]/10 font-inter"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Telegram
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-[#283618] hover:bg-[#283618]/10 font-inter"
              >
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button className="p-2 rounded-lg text-[#283618]">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Animated version after mount
  return (
    <motion.div 
      className="fixed z-50 mx-auto"
      initial={false}
      animate={navbarStyle}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div 
        className="px-4 md:px-6 py-3 md:py-4 flex justify-between items-center"
        animate={{ 
          padding: scrolled ? '0.75rem 1.5rem' : '0.75rem 1rem',
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <motion.div
          className={`text-xl md:text-2xl font-bold font-display text-[#283618]`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.span 
            className="italic"
          >
            Proof
          </motion.span> 
          <span className="ml-1">of Witness</span>
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className='hidden md:flex'>
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-[#283618] hover:bg-[#283618]/10 border border-transparent hover:border-[#606C38] font-inter transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Telegram
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-[#283618] hover:bg-[#283618]/10 border border-transparent hover:border-[#606C38] font-inter transition-all duration-300"
              >
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            className="p-2 rounded-lg text-[#283618]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -180, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden border-t border-[#FEFAE0]/20"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ 
              backgroundColor: "#DDA15E",
              borderRadius: scrolled ? "0 0 0 0" : "0 0 2rem 2rem"
            }}
          >
            <motion.div 
              className="p-4 space-y-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-[#283618] hover:bg-[#283618]/10 font-inter transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4 mr-3" />
                  Telegram
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-[#283618] hover:bg-[#283618]/10 font-inter transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Twitter className="w-4 h-4 mr-3" />
                  Twitter
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar