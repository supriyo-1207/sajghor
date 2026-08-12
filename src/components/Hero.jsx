import heroBanner from "../assets/banner.jpg";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "918609799352"; 

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FFF9F6] pt-28 pb-14 sm:pt-32 sm:pb-20 lg:min-h-screen lg:flex lg:items-center"
    >
      {/* Background decoration */}

      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#F7E7D6] blur-3xl opacity-60 pointer-events-none" />

      <div className="absolute bottom-0 -left-32 w-72 h-72 rounded-full bg-[#F3DDE2] blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Content */}

          <div className="max-w-xl">

            {/* Small label */}

            <div className="inline-flex items-center gap-2 bg-[#F7E7D6] text-[#8B1E3F] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B1E3F]" />
              Handmade with Love
            </div>

            {/* Heading */}

            <h1 className="text-[2.6rem] leading-[1.08] sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#5A2D2D]">
              Jewellery Made
              <br className="hidden sm:block" />
              <span className="text-[#8B1E3F]">
                {" "}Beautifully Unique
              </span>
            </h1>

            {/* Description */}

            <p className="mt-5 sm:mt-6 text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 max-w-lg">
              Discover handcrafted jewellery, beautiful gift boxes
              and unique creations made specially for your
              memorable moments.
            </p>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-7 sm:mt-9">

              {/* Primary */}

              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-[#8B1E3F] hover:bg-[#6B2C2C] text-white px-6 sm:px-7 py-3.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
              >
                Explore Collection
                <ArrowRight size={18} />
              </a>

              {/* WhatsApp */}

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#8B1E3F] text-[#8B1E3F] hover:bg-[#8B1E3F] hover:text-white px-6 sm:px-7 py-3.5 rounded-full font-medium transition-all duration-300 active:scale-[0.98]"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>

            </div>

            {/* Small trust message */}

            <div className="flex items-center gap-3 mt-7 text-sm text-gray-500">

              <div className="flex -space-x-2">
                <span className="w-7 h-7 rounded-full bg-[#E8C8B8] border-2 border-[#FFF9F6]" />
                <span className="w-7 h-7 rounded-full bg-[#DDB6A5] border-2 border-[#FFF9F6]" />
                <span className="w-7 h-7 rounded-full bg-[#CFA08E] border-2 border-[#FFF9F6]" />
              </div>

              <p>
                Handcrafted with care
              </p>

            </div>

          </div>

          {/* Image */}

          <div className="relative">

            {/* Decorative circle */}

            <div className="absolute -top-5 -left-5 sm:-top-8 sm:-left-8 w-24 h-24 sm:w-36 sm:h-36 bg-[#F7E7D6] rounded-full blur-2xl opacity-70" />

            <div className="absolute -bottom-5 -right-5 sm:-bottom-8 sm:-right-8 w-28 h-28 sm:w-40 sm:h-40 bg-[#EED7DC] rounded-full blur-2xl opacity-60" />

            {/* Image container */}

            <div className="relative">

              <img
                src={heroBanner}
                alt="Handmade jewellery collection by Sajghor"
                className="w-full h-auto max-h-[620px] object-cover rounded-[1.5rem] sm:rounded-[2rem] shadow-xl"
              />

              {/* Floating badge */}

              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                <p className="text-xs text-gray-500">
                  Crafted with care
                </p>

                <p className="text-sm font-semibold text-[#5A2D2D]">
                  Made for every occasion
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}