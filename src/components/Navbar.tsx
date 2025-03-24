"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link href="#home" className="text-[#6e309b] text-xl font-bold">
          S-BOT
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
            aria-label="Toggle Menu"
          >
            <Menu />
          </button>
        </div>

        <ul className={`md:flex space-x-6 hidden`}>
          <li><Link href="#home" className="hover:text-[#6e309b] transition-colors">Home</Link></li>
          <li><Link href="#features" className="hover:text-[#6e309b] transition-colors">Features</Link></li>
          <li><Link href="#pricing" className="hover:text-[#6e309b] transition-colors">Pricing</Link></li>
          <li><Link href="#about" className="hover:text-[#6e309b] transition-colors">About</Link></li>
          <li><Link href="#faq" className="hover:text-[#6e309b] transition-colors">FAQ</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} bg-dark-card absolute top-full left-0 w-full shadow-md`}>
        <ul className="flex flex-col p-4">
          <li className="py-2"><Link href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6e309b] transition-colors">Home</Link></li>
          <li className="py-2"><Link href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6e309b] transition-colors">Features</Link></li>
          <li className="py-2"><Link href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6e309b] transition-colors">Pricing</Link></li>
          <li className="py-2"><Link href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6e309b] transition-colors">About</Link></li>
          <li className="py-2"><Link href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6e309b] transition-colors">FAQ</Link></li>
        </ul>
      </div>
    </nav>
  );
}
