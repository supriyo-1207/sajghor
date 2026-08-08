const API_URL =
  "https://script.google.com/macros/s/AKfycbzE_h5sGUsVkSzq2TmKxjRMZR46qJFVOOfx8iDk-0qiVCGeGZzI2RlZhkfYBf-hZ1g7hQ/exec";

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