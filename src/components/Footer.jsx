import React from "react";
import { Button } from "@/components/ui/button";
import { LiaTelegram } from "react-icons/lia";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";

function Footer() {
  return (
    <footer className="py-12 bg-[#283618] text-[#FEFAE0] ">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 font-display">
            <h3 className="text-2xl font-bold mb-2">Proof of Witness</h3>
            <p className="text-[#DDA15E] font-display italic">
              Proof is participation. Privacy with presence.
            </p>
          </div>
          <div className="flex space-x-6 font-inter">
            <Button
              variant="ghost"
              size="sm"
              className="text-[#FEFAE0] hover:bg-[#DDA15E]/20"
              onClick={() =>
                window.open("https://t.me/+TPdx_Fc5_ONmNGJl", "_blank")
              }
            >
              <LiaTelegram className="w-4 h-4 mr-2" />
              Telegram
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-[#FEFAE0] hover:bg-[#DDA15E]/20"
              onClick={() =>
                window.open("https://x.com/ProofOfWitness", "_blank")
              }
            >
              <RiTwitterXFill className="w-4 h-4 mr-2" />
              Twitter
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-[#FEFAE0] hover:bg-[#DDA15E]/20"
            >
              <IoLogoGithub className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
        <div className="border-t border-[#DDA15E]/20 mt-8 pt-8 text-center font-mono">
          <p className="text-[#DDA15E]/80">
            © 2025 Proof of Witness. Built to Build ZK.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
