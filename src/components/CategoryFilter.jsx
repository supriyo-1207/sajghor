export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide justify-start md:justify-center">
      {categories.map((category) => {
        const isActive = selectedCategory === category;

        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
              isActive
                ? "bg-[#8B1E3F] text-white shadow-sm"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#8B1E3F] hover:text-[#8B1E3F]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}