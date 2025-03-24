import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-background py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-3">© 2025 S-BOT. All Rights Reserved.</p>
        <div className="space-x-2">
          <Link href="#home" className="text-[#6e309b] hover:opacity-80 transition-colors">Home</Link> |
          <Link href="#features" className="text-[#6e309b] hover:opacity-80 transition-colors">Features</Link> |
          <Link href="#pricing" className="text-[#6e309b] hover:opacity-80 transition-colors">Pricing</Link> |
          <Link href="#about" className="text-[#6e309b] hover:opacity-80 transition-colors">About</Link> |
          <Link href="#faq" className="text-[#6e309b] hover:opacity-80 transition-colors">FAQ</Link>
        </div>
      </div>
    </footer>
  );
}
