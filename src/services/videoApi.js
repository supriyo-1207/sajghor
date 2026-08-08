const API_URL = import.meta.env.VITE_SHEET_API_URL;

if (!API_URL) {
  throw new Error("Missing VITE_SHEET_API_URL in environment variables.");
}

export async function getVideos() {
  const response = await fetch(
    `${API_URL}?sheet=Videos`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch videos");
  }

  const data = await response.json();

  return data.filter(
    (video) =>
      video.Active === true ||
      video.Active === "TRUE"
  );
}