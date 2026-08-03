import { MessageCircle, ArrowUp } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#5A2D2D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top */}

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold">
              Sajghor
            </h2>

            <p className="mt-4 text-gray-300 leading-7">
              Handmade jewellery crafted with love for every
              special occasion. Discover unique collections and
              customized gifts made just for you.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#home" className="hover:text-pink-300 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#products" className="hover:text-pink-300 transition">
                  Products
                </a>
              </li>

              <li>
                <a href="#videos" className="hover:text-pink-300 transition">
                  Videos
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-pink-300 transition">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition"
              >
                <MessageCircle size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition"
              >
                <FaYoutube size={18} />
              </a>

            </div>

            <p className="text-gray-300 mt-5">
              Follow us to see our latest handmade creations and festive collections.
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-300 text-center md:text-left">
            © {year} Sajghor. All Rights Reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center gap-2 text-sm hover:text-pink-300 transition"
          >
            Back to Top

            <ArrowUp size={18} />
          </button>

        </div>

      </div>
    </footer>
  );
}