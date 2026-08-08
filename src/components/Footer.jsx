import { MessageCircle, ArrowUp } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const WHATSAPP_NUMBER = "8609799352";

const INSTAGRAM_URL =
  "https://www.instagram.com/___sajghor__/";

const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61591904462452";

const YOUTUBE_URL =
  "https://www.youtube.com/@Kousinasartandcrafts";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#4A2525] text-white" id="footer">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}

          <div>

            <a
              href="#home"
              className="inline-block text-2xl sm:text-3xl font-bold tracking-tight"
            >
              Sajghor
            </a>

            <p className="mt-4 text-sm sm:text-base text-white/70 leading-7 max-w-sm">
              Handmade jewellery and thoughtful creations,
              crafted with love for your special moments.
            </p>

            {/* WhatsApp */}

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-medium transition-all duration-300"
            >
              <MessageCircle size={17} />
              Chat on WhatsApp
            </a>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h3>

            <nav className="mt-5 flex flex-col gap-3">

              <a
                href="#home"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Home
              </a>

              <a
                href="#products"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Products
              </a>

              <a
                href="#videos"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                See How It's Made
              </a>

              <a
                href="#contact"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Contact
              </a>

            </nav>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Follow Us
            </h3>

            <p className="mt-4 text-sm text-white/70 leading-6 max-w-xs">
              Follow us for new designs, handmade creations
              and behind-the-scenes videos.
            </p>

            <div className="flex items-center gap-3 mt-5">

              {/* Instagram */}

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8B1E3F] transition-all duration-300"
              >
                <FaInstagram size={17} />
              </a>

              {/* Facebook */}

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300"
              >
                <FaFacebookF size={16} />
              </a>

              {/* YouTube */}

              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF0000] transition-all duration-300"
              >
                <FaYoutube size={17} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs sm:text-sm text-white/50 text-center sm:text-left">
            © {year} Sajghor. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
          >
            Back to Top
            <ArrowUp size={16} />
          </button>

        </div>

      </div>

    </footer>
  );
}