import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { name: "Home", href: "home" },
  { name: "Products", href: "products" },
  { name: "Videos", href: "videos" },
  { name: "Contact", href: "contact" },
];

const WHATSAPP_NUMBER = "918609799352"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Smooth scroll function
  const handleNavClick = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (!section) return;

    const navbarHeight = 80;

    const sectionPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between">

          {/* Logo */}

          <a
            href="#home"
            onClick={(event) =>
              handleNavClick(event, "home")
            }
            className="text-2xl sm:text-3xl font-bold text-[#6B2C2C] tracking-tight"
          >
            Sajghor
          </a>

          {/* Desktop Navigation */}

          <nav className="hidden md:flex items-center gap-7 lg:gap-9">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(event) =>
                  handleNavClick(event, link.href)
                }
                className="text-sm lg:text-base font-medium text-gray-700 hover:text-[#8B1E3F] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

          </nav>

          {/* Desktop WhatsApp */}

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#8B1E3F] hover:bg-[#6B2C2C] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200"
          >
            <MessageCircle size={17} />
            Order Now
          </a>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-[#5A2D2D] hover:bg-[#FFF9F6] transition-colors"
          >
            {isOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-3 invisible pointer-events-none"
        }`}
      >

        <nav className="px-5 py-4">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(event) =>
                handleNavClick(event, link.href)
              }
              className="flex items-center py-3.5 text-gray-700 font-medium border-b border-gray-100 hover:text-[#8B1E3F] transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile WhatsApp */}

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 bg-[#8B1E3F] hover:bg-[#6B2C2C] text-white py-3.5 rounded-full font-medium transition-colors"
          >
            <MessageCircle size={18} />
            Order on WhatsApp
          </a>

        </nav>

      </div>
    </header>
  );
}