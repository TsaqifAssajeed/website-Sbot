import Link from "next/link";

export default function HeroSection() {
  return (
    <header id="home" className="header relative z-10">
      <h1 className="text-5xl font-bold text-[#6e309b] mb-4">S-BOT</h1>
      <p className="text-xl mb-8">Your ultimate WhatsApp automation tool</p>
      <Link href="#features" className="btn-cta">
        Explore Features
      </Link>
    </header>
  );
}
