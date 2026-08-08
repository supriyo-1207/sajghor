import { Star, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919XXXXXXXXX";

export default function ProductCard({ product }) {
  const {
    Name,
    Category,
    OriginalPrice,
    SalePrice,
    Rating,
    Image,
  } = product;

  const discount =
    OriginalPrice > SalePrice
      ? Math.round(
          ((OriginalPrice - SalePrice) / OriginalPrice) * 100
        )
      : 0;

  const whatsappMessage = `Hi, I'm interested in this product.

Product: ${Name}
Category: ${Category}
Price: ₹${SalePrice}
Product ID: ${product.ID}`;

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-[#eee5e0] hover:shadow-lg transition-all duration-300">

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-[#f8f5f3]">

        <img
          src={Image}
          alt={Name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Discount */}
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-[#8B1E3F] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            {discount}% OFF
          </span>
        )}

      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-5">

        {/* Category */}
        <p className="text-xs uppercase tracking-wide text-[#8B1E3F] font-medium">
          {Category}
        </p>

        {/* Name */}
        <h3 className="mt-1 text-base sm:text-lg font-semibold text-[#4d3030] line-clamp-1">
          {Name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-2">

          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={15}
                className={
                  star <= Math.round(Number(Rating))
                    ? "fill-[#EAB308] text-[#EAB308]"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          <span className="text-sm text-gray-500">
            {Number(Rating).toFixed(1)}
          </span>

        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">

          <span className="text-xl font-bold text-[#5A2D2D]">
            ₹{Number(SalePrice).toLocaleString("en-IN")}
          </span>

          {OriginalPrice > SalePrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{Number(OriginalPrice).toLocaleString("en-IN")}
            </span>
          )}

        </div>

        {/* Buy Now */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full flex items-center justify-center gap-2 bg-[#8B1E3F] hover:bg-[#6B2C2C] text-white py-2.5 rounded-xl text-sm sm:text-base font-medium transition-colors"
        >
          <MessageCircle size={17} />
          Buy Now
        </a>

      </div>
    </article>
  );
}