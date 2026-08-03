import { useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../services/sheetApi";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  // Generate categories dynamically from Google Sheets
  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(products.map((product) => product.category)),
    ];

    return ["All", ...uniqueCategories];
  }, [products]);

  // Filter products
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products;
    }

    return products.filter(
      (product) => product.category === selectedCategory
    );
  }, [products, selectedCategory]);

  // Loading UI
  if (loading) {
    return (
      <section id="products" className="py-20 bg-[#FFF9F6]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#5A2D2D]">
              Our Collection
            </h2>

            <p className="text-gray-600 mt-3">
              Loading products...
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-white rounded-2xl overflow-hidden shadow"
              >
                <div className="aspect-square bg-gray-200"></div>

                <div className="p-4 space-y-3">

                  <div className="h-3 bg-gray-200 rounded w-1/3"></div>

                  <div className="h-5 bg-gray-200 rounded"></div>

                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>

                  <div className="h-10 bg-gray-200 rounded"></div>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>
    );
  }

  // Error UI
  if (error) {
    return (
      <section className="py-20 text-center">
        <p className="text-red-500 text-lg">{error}</p>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-[#FFF9F6]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-[#5A2D2D]">
            Our Collection
          </h2>

          <p className="text-gray-600 mt-3">
            Discover our handmade creations.
          </p>

        </div>

        {/* Category Filters */}

        <div className="flex flex-wrap justify-center gap-3 mb-10">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#8B1E3F] text-white shadow-lg"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-[#8B1E3F] hover:text-[#8B1E3F]"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Product Grid */}

        {filteredProducts.length > 0 ? (

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        ) : (

          <div className="text-center py-20">

            <h3 className="text-xl font-semibold text-gray-700">
              No Products Found
            </h3>

            <p className="text-gray-500 mt-2">
              Please check another category.
            </p>

          </div>

        )}

      </div>
    </section>
  );
}