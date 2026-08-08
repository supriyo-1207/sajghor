import { Star, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "8609799352";

export default function ProductCard({ product }) {
  const {
    ID,
    Name,
    Category,
    OriginalPrice,
    SalePrice,
    Rating,
    Image,
  } = product;

  const originalPrice = Number(OriginalPrice);
  const salePrice = Number(SalePrice);
  const rating = Number(Rating);

  const discount =
    originalPrice > salePrice
      ? Math.round(
          ((originalPrice - salePrice) / originalPrice) * 100
        )
      : 0;

  const whatsappMessage = `Hi, I'm interested in this product.

Product: ${Name}
Category: ${Category}
Price: ₹${salePrice}
Product ID: ${ID}`;

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-[#eee7e3] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* Product Image */}

      <div className="relative aspect-square overflow-hidden bg-[#f8f5f3]">

        <img
          src={Image}
          alt={Name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount Badge */}

        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-[#8B1E3F] text-white text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1.5 rounded-full shadow-sm">
            {discount}% OFF
          </span>
        )}

      </div>

      {/* Product Information */}

      <div className="p-3.5 sm:p-5">

        {/* Category */}

        <p className="text-[10px] sm:text-xs uppercase tracking-[0.12em] text-[#8B1E3F] font-semibold">
          {Category}
        </p>

        {/* Product Name */}

        <h3 className="mt-1 text-sm sm:text-lg font-semibold text-[#4d3030] line-clamp-1">
          {Name}
        </h3>

        {/* Rating */}

        <div className="flex items-center gap-1.5 mt-2">

          <div className="flex items-center gap-[1px]">

            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={13}
                className={
                  star <= Math.round(rating)
                    ? "fill-[#EAB308] text-[#EAB308]"
                    : "text-gray-300"
                }
              />
            ))}

          </div>

          <span className="text-xs sm:text-sm text-gray-500">
            {rating.toFixed(1)}
          </span>

        </div>

        {/* Price */}

        <div className="flex items-baseline gap-2 mt-2.5">

          <span className="text-lg sm:text-xl font-bold text-[#5A2D2D]">
            ₹{salePrice.toLocaleString("en-IN")}
          </span>

          {originalPrice > salePrice && (
            <span className="text-xs sm:text-sm text-gray-400 line-through">
              ₹{originalPrice.toLocaleString("en-IN")}
            </span>
          )}

        </div>

        {/* Buy Now */}

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 sm:mt-4 w-full min-h-[42px] flex items-center justify-center gap-1.5 bg-[#8B1E3F] hover:bg-[#6B2C2C] active:scale-[0.98] text-white rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200"
        >
          <MessageCircle size={16} />
          Buy Now
        </a>

      </div>
    </article>
  );
}