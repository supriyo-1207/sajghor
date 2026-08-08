import { MessageCircle } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const WHATSAPP_NUMBER = "8609799352";

const INSTAGRAM_URL = "https://www.instagram.com/___sajghor__/";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61591904462452";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-[#FFF9F6]"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">

        {/* Small Label */}

        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#8B1E3F] font-semibold">
          Get In Touch
        </p>

        {/* Heading */}

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5A2D2D] mt-3">
          Found Something You Love?
        </h2>

        {/* Description */}

        <p className="text-gray-600 mt-4 sm:mt-5 max-w-2xl mx-auto leading-7">
          Interested in a piece or looking for a customized
          jewellery or gift? Send us a message and we'll be
          happy to help.
        </p>

        {/* Main WhatsApp CTA */}

        <div className="mt-8 sm:mt-10">

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
          >
            <MessageCircle size={20} />
            Chat with us on WhatsApp
          </a>

        </div>

        {/* Social Links */}

        <div className="mt-10 pt-8 border-t border-[#e9ddd7]">

          <p className="text-sm text-gray-500 mb-4">
            Follow us for new designs and behind-the-scenes
          </p>

          <div className="flex items-center justify-center gap-3">

            {/* Instagram */}

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white border border-[#eaded8] text-[#8B1E3F] hover:bg-[#8B1E3F] hover:text-white transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a>

            {/* Facebook */}

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white border border-[#eaded8] text-[#8B1E3F] hover:bg-[#8B1E3F] hover:text-white transition-all duration-300"
            >
              <FaFacebookF size={16} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}