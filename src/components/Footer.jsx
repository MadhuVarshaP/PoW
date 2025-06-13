import React from "react";
import { Button } from "@/components/ui/button";
import { LiaTelegram } from "react-icons/lia";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-[#283618] text-[#FEFAE0] py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-2xl font-bold mb-2">
            Proof of Witness
          </h3>
          <p className="italic text-[#DDA15E] mb-1">
            Proof is participation.
          </p>
          <p className="text-sm text-[#FEFAE0]/80 font-mono">
            Privacy with presence.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-center gap-4">
          <h4 className="font-inter font-semibold text-lg text-[#DDA15E]">
            Join the Community
          </h4>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: <LiaTelegram className="w-5 h-5" />, label: "Telegram", href: "https://t.me/+TPdx_Fc5_ONmNGJl" },
              { icon: <RiTwitterXFill className="w-5 h-5" />, label: "Twitter", href: "https://x.com/ProofOfWitness" },
              { icon: <IoLogoGithub className="w-5 h-5" />, label: "GitHub", href: "#" },
            ].map((btn) => (
              <Button
                key={btn.label}
                variant="ghost"
                size="sm"
                className="text-[#FEFAE0] border border-[#DDA15E]/30 px-4 py-2 hover:bg-[#DDA15E]/10 transition"
                onClick={() => window.open(btn.href, "_blank")}
              >
                {btn.icon}
                <span className="ml-2">{btn.label}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="text-right space-y-2 text-sm font-inter text-[#FEFAE0]/80">
          <a
            href="#"
            className="block hover:text-[#DDA15E] transition"
          >
            Ecosystem
          </a>
          <a
            href="#"
            className="block hover:text-[#DDA15E] transition"
          >
            Documentation
          </a>
          <a
            href="#"
            className="block hover:text-[#DDA15E] transition"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="mt-12 border-t border-[#DDA15E]/20 pt-6 text-center font-mono text-xs text-[#FEFAE0]/60">
        © 2025 Proof of Witness — Built to Build ZK
      </div>
    </footer>
  );
}

export default Footer;
