import heroBanner from "../assets/banner.jpg";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center bg-gradient-to-b from-[#FFF8F2] to-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}

        <div>
          <span className="inline-block bg-[#F7E7D6] text-[#8B1E3F] px-4 py-1 rounded-full text-sm font-medium mb-5">
            Handmade with Love ❤️
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#5A2D2D]">
            Beautiful Handmade
            <br />
            Jewellery for
            <span className="text-[#8B1E3F]"> Every Occasion</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">
            Discover unique handmade jewellery, resin art, customized gift
            boxes and beautiful accessories crafted with love. Shipping
            available all over India.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#products"
              className="flex items-center gap-2 bg-[#8B1E3F] hover:bg-[#6B2C2C] text-white px-7 py-3 rounded-full transition"
            >
              Shop Collection
              <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-[#8B1E3F] text-[#8B1E3F] hover:bg-[#8B1E3F] hover:text-white px-7 py-3 rounded-full transition"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>

          </div>

          <div className="flex flex-wrap gap-8 mt-12 text-gray-600">

            <div>
              <h3 className="text-2xl font-bold text-[#8B1E3F]">
                100%
              </h3>
              <p>Handmade</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#8B1E3F]">
                India
              </h3>
              <p>Shipping</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#8B1E3F]">
                Custom
              </h3>
              <p>Gift Orders</p>
            </div>

          </div>

        </div>

        {/* Right Image */}

        <div className="relative">

          <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F7E7D6] rounded-full blur-3xl opacity-70"></div>

          <img
            src={heroBanner}
            alt="Sajghor Handmade Jewellery"
            className="relative rounded-3xl shadow-2xl w-full object-cover"
          />

        </div>

      </div>
    </section>
  );
} 