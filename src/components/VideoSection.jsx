import { useEffect, useState } from "react";
import { getVideos } from "../services/videoApi";

function getYouTubeId(value) {
  if (!value) return "";

  const input = String(value).trim();

  // Already a video ID
  if (
    !input.includes("youtube.com") &&
    !input.includes("youtu.be")
  ) {
    return input;
  }

  try {
    const url = new URL(input);

    // youtube.com/shorts/VIDEO_ID
    if (url.pathname.startsWith("/shorts/")) {
      return url.pathname.split("/shorts/")[1].split("/")[0];
    }

    // youtube.com/watch?v=VIDEO_ID
    if (url.searchParams.get("v")) {
      return url.searchParams.get("v");
    }

    // youtu.be/VIDEO_ID
    if (url.hostname === "youtu.be") {
      return url.pathname.substring(1).split("/")[0];
    }

  } catch (error) {
    console.error("Invalid YouTube URL:", input);
  }

  return "";
}

export default function VideoSection() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVideos() {
      try {
        const data = await getVideos();

        console.log("Videos from Google Sheets:", data);

        setVideos(data);
      } catch (error) {
        console.error("Video loading error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadVideos();
  }, []);

  return (
    <section
      id="videos"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-10">

          <p className="text-sm uppercase tracking-[0.2em] text-[#8B1E3F] font-medium">
            Watch & Discover
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#5A2D2D] mt-2">
            See Our Jewellery in Action
          </h2>

          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Take a closer look at our handmade creations
            and see how they look in real life.
          </p>

        </div>

        {/* Loading */}

        {loading && (
          <div className="flex gap-5 overflow-hidden">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="shrink-0 w-[260px] aspect-[9/16] bg-gray-200 rounded-2xl animate-pulse"
              />
            ))}

          </div>
        )}

        {/* Videos */}

        {!loading && videos.length > 0 && (
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">

            {videos.map((video) => {
              const videoId = getYouTubeId(video.YouTubeID);

              if (!videoId) {
                return null;
              }

              return (
                <div
                  key={video.ID}
                  className="shrink-0 w-[260px] sm:w-[280px] snap-start"
                >

                  <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-md">

                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={video.Title}
                      className="w-full h-full border-0"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />

                  </div>

                  <h3 className="mt-3 font-semibold text-[#5A2D2D]">
                    {video.Title}
                  </h3>

                </div>
              );
            })}

          </div>
        )}

        {/* No videos */}

        {!loading && videos.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">
              No videos available.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}