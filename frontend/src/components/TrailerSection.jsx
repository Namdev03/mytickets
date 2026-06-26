import { useState } from "react";

export default function TrailerSection() {
  const trailers = [
    {
      id: 1,
      title: "Interstellar Trailer",
      video: "https://www.youtube.com/embed/zSWdZVtXT7E",
      thumbnail:
        "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=600",
    },
    {
      id: 2,
      title: "Inception Trailer",
      video: "https://www.youtube.com/embed/YoHD9XEInc0",
      thumbnail:
        "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=600",
    },
    {
      id: 3,
      title: "Avengers Trailer",
      video: "https://www.youtube.com/embed/eOrNdBpGMv8",
      thumbnail:
        "https://images.unsplash.com/photo-1520975928311-4f5f8a0d0b7d?w=600",
    },
  ];

  // Selected trailer
  const [selectedTrailer, setSelectedTrailer] = useState(trailers[0]);

  return (
    <section className="w-full min-h-screen bg-black px-6 py-12 text-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        🎬 Latest Trailers
      </h1>

      {/* Main Trailer */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            className="w-full h-[220px] sm:h-[320px] md:h-[420px]"
            src={selectedTrailer.video}
            title={selectedTrailer.title}
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="mt-4 text-xl font-semibold">
          {selectedTrailer.title}
        </h2>
      </div>

      {/* Trailer List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {trailers.map((t) => (
          <div
            key={t.id}
            className={`bg-zinc-900/60 border rounded-2xl overflow-hidden cursor-pointer transition hover:scale-105 ${
              selectedTrailer.id === t.id
                ? "border-pink-500"
                : "border-white/10"
            }`}
            onClick={() => setSelectedTrailer(t)}
          >
            <img
              src={t.thumbnail}
              alt={t.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="font-medium">{t.title}</h3>

              <button
                className="mt-3 w-full py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click
                  setSelectedTrailer(t);
                }}
              >
                Play Trailer
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}