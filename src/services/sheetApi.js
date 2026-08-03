const API_URL =
  "";

export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data
    .map((item) => ({
      id: item.id,
      name: item.name,
      category: item.category,

      // Handle your current Google Sheet headers with spaces
      originalPrice: item["  originalPrice  "],
      salePrice: item["  salePrice  "],
      rating: item["  rating  "],
      reviews: item["  reviews  "],
      image: item["  image  "],
      whatsappMessage: item["  whatsappMessage  "],
      active: item["  active  "],
    }))
    .filter((item) => item.active);
}