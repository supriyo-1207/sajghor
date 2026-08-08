const API_URL = import.meta.env.VITE_SHEET_API_URL;

if (!API_URL) {
  throw new Error("Missing VITE_SHEET_API_URL in environment variables.");
}

export async function getProducts() {
  const response = await fetch(
    `${API_URL}?sheet=Products`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data.filter(
    (product) =>
      product.Active === true ||
      product.Active === "TRUE"
  );
}