import { Play } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

const videos = [
  {
    id: 1,
    title: "Resin Jewellery Collection",
    youtubeId: "YOUR_VIDEO_ID",
  },
  {
    id: 2,
    title: "Handmade Earrings",
    youtubeId: "YOUR_VIDEO_ID",
  },
  {
    id: 3,
    title: "Gift Collection",
    youtubeId: "YOUR_VIDEO_ID",
  },
];

function VideoCard({ video }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">

      {/* Video */}

      <div className="relative aspect-[4/5] bg-black">

        {!play ? (
          <>
            <img
              src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover"
            />

            <button
              onClick={() => setPlay(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition"
            >
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition">

                <Play
                  size={34}
                  className="text-red-600 fill-red-600 ml-1"
                />

              </div>
            </button>
          </>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

      </div>

      {/* Content */}

      <div className="p-5">

        <h3 className="font-semibold text-lg text-[#5A2D2D]">
          {video.title}
        </h3>

        <div className="flex items-center gap-2 mt-3 text-red-600">

          <FaYoutube size={18} />

          <span className="text-sm font-medium">
            Watch on YouTube
          </span>

        </div>

      </div>

    </div>
  );
}

export default function VideoSection() {
  return (
    <section
      id="videos"
      className="py-20 bg-[#FFF9F6]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <span className="uppercase tracking-widest text-[#8B1E3F] font-semibold">
            Videos
          </span>

          <h2 className="text-4xl font-bold text-[#5A2D2D] mt-3">
            Our Collection in Motion
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Watch how our handmade jewellery looks in real life and get inspired before placing your order.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
            />
          ))}

        </div>

      </div>
    </section>
  );
}