import {
  Gem,
  Gift,
  Sparkles,
  Flower2,
  Heart,
  Stars,
} from "lucide-react";

const categories = [
  {
    name: "Resin Jewellery",
    icon: Gem,
  },
  {
    name: "Gift Boxes",
    icon: Gift,
  },
  {
    name: "Handmade Jewellery",
    icon: Sparkles,
  },
  {
    name: "Hair Accessories",
    icon: Flower2,
  },
  {
    name: "Customized Gifts",
    icon: Heart,
  },
  {
    name: "New Arrivals",
    icon: Stars,
  },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="py-20 bg-[#FFF9F6]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-[#8B1E3F] font-semibold uppercase tracking-wider">
            Categories
          </span>

          <h2 className="text-4xl font-bold text-[#5A2D2D] mt-3">
            Shop by Category
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our handcrafted collections made with love for every
            occasion.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-14">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-transparent hover:border-[#8B1E3F]"
              >
                <div className="w-16 h-16 rounded-full bg-[#F8E6DF] flex items-center justify-center mx-auto group-hover:bg-[#8B1E3F] transition">

                  <Icon
                    size={30}
                    className="text-[#8B1E3F] group-hover:text-white transition"
                  />

                </div>

                <h3 className="mt-5 font-semibold text-[#5A2D2D]">
                  {category.name}
                </h3>
              </button>
            );
          })}

        </div>

      </div>
    </section>
  );
}