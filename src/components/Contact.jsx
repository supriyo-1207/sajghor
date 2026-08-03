import { MessageCircle } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#FFF9F6] py-20"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="text-[#8B1E3F] font-semibold uppercase">
          Contact Us
        </span>

        <h2 className="text-4xl font-bold text-[#5A2D2D] mt-3">
          Ready to Order?
        </h2>

        <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
          Whether you're looking for a handmade gift or a customized
          jewellery piece, we'd love to hear from you.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-full flex items-center gap-2 transition"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full flex items-center gap-2"
          >
            <FaInstagram />
            Instagram
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2"
          >
            <FaFacebookF />
            Facebook
          </a>

        </div>

      </div>
    </section>
  );
}