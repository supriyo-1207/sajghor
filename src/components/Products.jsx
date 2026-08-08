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
        const data = await getProducts();

        setProducts(data);
      } catch (err) {
        console.error("Product loading error:", err);
        setError("Unable to load products.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  // Get categories directly from Google Sheets
  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        products
          .map((product) => product.Category?.trim())
          .filter(Boolean)
      ),
    ];

    return ["All", ...uniqueCategories];
  }, [products]);

  // Filter products
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products;
    }

    return products.filter(
      (product) =>
        product.Category?.trim() === selectedCategory
    );
  }, [products, selectedCategory]);

  // Loading
  if (loading) {
    return (
      <section
        id="products"
        className="py-20 bg-[#FFF9F6]"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-10">
            <div className="h-8 w-48 bg-gray-200 animate-pulse rounded mx-auto" />
            <div className="h-4 w-64 bg-gray-200 animate-pulse rounded mx-auto mt-4" />
          </div>

          <div className="flex justify-center gap-3 mb-10">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-10 w-24 bg-gray-200 animate-pulse rounded-full"
              />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7">

            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl overflow-hidden animate-pulse"
              >
                <div className="aspect-square bg-gray-200" />

                <div className="p-4 space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-1/3" />
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                  <div className="h-6 bg-gray-200 rounded w-1/2" />
                  <div className="h-10 bg-gray-200 rounded" />
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>
    );
  }

  // Error
  if (error) {
    return (
      <section
        id="products"
        className="py-20 text-center"
      >
        <p className="text-gray-600">
          {error}
        </p>
      </section>
    );
  }

  return (
    <section
      id="products"
      className="py-20 bg-[#FFF9F6]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">

          <p className="text-sm uppercase tracking-[0.2em] text-[#8B1E3F] font-medium">
            Handmade Collection
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#5A2D2D] mt-2">
            Our Products
          </h2>

          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Discover beautiful handmade pieces made with love.
          </p>

        </div>

        {/* Category Filter */}
        <div className="mb-10">

          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 justify-start md:justify-center scrollbar-hide">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-[#8B1E3F] text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#8B1E3F] hover:text-[#8B1E3F]"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.ID}
                product={product}
              />
            ))}

          </div>

        ) : (

          <div className="text-center py-16">

            <p className="text-gray-500">
              No products available in this category.
            </p>

          </div>

        )}

      </div>
    </section>
  );
}