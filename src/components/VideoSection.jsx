import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
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

    // YouTube Shorts
    if (url.pathname.startsWith("/shorts/")) {
      return url.pathname
        .split("/shorts/")[1]
        .split("/")[0];
    }

    // Regular YouTube video
    if (url.searchParams.get("v")) {
      return url.searchParams.get("v");
    }

    // youtu.be
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
      className="py-20 bg-[#FFF9F6] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-2xl mx-auto mb-10">

          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#8B1E3F] font-semibold">
            Behind The Scenes
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#5A2D2D] mt-2">
            See How It's Made
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            From the first idea to the final piece, discover
            how our handmade jewellery comes to life.
          </p>

        </div>

        {/* Loading */}

        {loading && (
          <div className="flex gap-5 overflow-hidden">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="shrink-0 w-[250px] sm:w-[280px] aspect-[9/16] bg-gray-200 rounded-2xl animate-pulse"
              />
            ))}

          </div>
        )}

        {/* Videos */}

        {!loading && videos.length > 0 && (
          <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">

            {videos.map((video) => {
              const videoId = getYouTubeId(video.YouTubeID);

              if (!videoId) return null;

              return (
                <div
                  key={video.ID}
                  className="shrink-0 w-[245px] sm:w-[270px] snap-start"
                >

                  {/* Video */}

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

                  {/* Title */}

                  <h3 className="mt-3 text-sm sm:text-base font-semibold text-[#5A2D2D] line-clamp-2">
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
              No videos available right now.
            </p>
          </div>
        )}

        {/* YouTube CTA */}

        <div className="mt-10 text-center">

          <p className="text-sm text-gray-500 mb-4">
            Love watching our creations come to life?
          </p>

          <a
            href="https://www.youtube.com/@Kousinasartandcrafts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#8B1E3F] hover:bg-[#6B2C2C] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
          >
            <FaYoutube size={19} />
            Subscribe on YouTube
            <ArrowRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
}