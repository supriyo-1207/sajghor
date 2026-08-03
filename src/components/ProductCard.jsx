import { MessageCircle, Star } from "lucide-react";

export default function ProductCard({ product }) {
  const {
    name,
    category,
    image,
    originalPrice,
    salePrice,
    rating,
    reviews,
    whatsappMessage,
  } = product;

  const discount =
    originalPrice > salePrice
      ? Math.round(
          ((originalPrice - salePrice) / originalPrice) * 100
        )
      : 0;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={name}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {discount}% OFF
          </span>
        )}

      </div>

      {/* Content */}

      <div className="p-4">

        <p className="text-sm text-[#8B1E3F] font-medium">
          {category}
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-1 line-clamp-2">
          {name}
        </h3>

        {/* Rating */}

        <div className="flex items-center mt-3">

          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              className={
                index < Math.round(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}

          <span className="ml-2 text-sm text-gray-500">
            ({reviews})
          </span>

        </div>

        {/* Price */}

        <div className="flex items-center gap-3 mt-4">

          <span className="text-2xl font-bold text-[#5A2D2D]">
            ₹{salePrice}
          </span>

          {discount > 0 && (
            <span className="line-through text-gray-400">
              ₹{originalPrice}
            </span>
          )}

        </div>

        {/* WhatsApp */}

        <a
          href={`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
            `Hi, I'm interested in ${whatsappMessage}`
          )}`}
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex items-center justify-center gap-2 bg-[#8B1E3F] hover:bg-[#6B2C2C] text-white rounded-xl py-3 transition"
        >
          <MessageCircle size={18} />

          Order on WhatsApp
        </a>

      </div>
    </div>
  );
}