export default function HeroSection() {
  const movie = {
    title: "Interstellar",
    rating: "8.6",
    year: "2014",
    duration: "2h 49m",
    genre: ["Sci-Fi", "Adventure", "Drama"],
    desc:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival beyond Earth’s limits.",
    poster:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800",
    bg:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600",
  };

  return (
    <section className="relative w-full min-h-screen text-white">

      {/* Background (covers navbar + hero) */}
      <div className="absolute inset-0 -z-10">
        <img
          src={movie.bg}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-28 md:pt-36 flex flex-col lg:flex-row items-center gap-10">

        {/* Poster */}
        <div className="flex-shrink-0">
          <img
            src={movie.poster}
            alt="poster"
            className="w-64 md:w-80 lg:w-96 rounded-3xl shadow-2xl border border-white/10"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-5 text-center lg:text-left">

          <h1 className="text-3xl md:text-5xl font-extrabold">
            {movie.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {movie.genre.map((g) => (
              <span
                key={g}
                className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-sm"
              >
                {g}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-zinc-300 max-w-xl leading-relaxed">
            {movie.desc}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm text-zinc-300">
            <span className="text-yellow-400 font-semibold">★ {movie.rating}</span>
            <span>|</span>
            <span>{movie.year}</span>
            <span>|</span>
            <span>{movie.duration}</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center lg:justify-start mt-2">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-medium hover:scale-105 transition">
              Watch Now
            </button>

            <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
              Trailer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}