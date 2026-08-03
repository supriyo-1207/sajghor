import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Categories", href: "#categories" },
  { name: "Products", href: "#products" },
  { name: "Videos", href: "#videos" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-bold text-[#6B2C2C]"
        >
          Sajghor
        </a>

        {/* Desktop Menu */}

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-[#8B1E3F] transition font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}

        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#8B1E3F] text-white px-5 py-2 rounded-full hover:bg-[#6B2C2C] transition"
        >
          <MessageCircle size={18} />
          Order Now
        </a>

        {/* Mobile Button */}

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col px-5 py-4">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 border-b text-gray-700"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="mt-5 bg-[#8B1E3F] text-white text-center py-3 rounded-full"
            >
              Order on WhatsApp
            </a>

          </div>
        </div>
      )}
    </header>
  );
}