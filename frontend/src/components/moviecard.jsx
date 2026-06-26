export default function MovieCard() {
  const movies = [
    {
      id: 1,
      title: "Interstellar",
      rating: 8.6,
      genre: ["Sci-Fi", "Drama"],
      desc: "A team of explorers travel through a wormhole in space.",
      image:
        "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=600",
    },
    {
      id: 2,
      title: "Inception",
      rating: 8.8,
      genre: ["Action", "Sci-Fi"],
      desc: "A thief enters dreams to steal secrets.",
      image:
        "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=600",
    },
    {
      id: 3,
      title: "Avengers",
      rating: 8.0,
      genre: ["Action", "Hero"],
      desc: "Earth’s mightiest heroes save the world.",
      image:
        "https://images.unsplash.com/photo-1520975928311-4f5f8a0d0b7d?w=600",
    },
    {
      id: 4,
      title: "Batman",
      rating: 8.2,
      genre: ["Action", "Dark"],
      desc: "A hero fights crime in Gotham city.",
      image:
        "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=600",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-10">

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-white mb-10 text-center">
        🎬 Popular Movies
      </h1>

      {/* GRID */}
      <div className="flex flex-wrap justify-center gap-5">

        {movies.map((movie) => (
          <div
            key={movie.id}
            className="w-52 bg-zinc-900/70 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >

            {/* IMAGE (FULL COVER POSTER) */}
            <div className="relative w-full h-72">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover"
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="p-3 flex flex-col gap-2">

              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-white truncate">
                  {movie.title}
                </h2>

                <span className="text-yellow-400 text-xs font-semibold">
                  ★ {movie.rating}
                </span>
              </div>

              {/* GENRES */}
              <div className="flex gap-1 flex-wrap">
                {movie.genre.map((g) => (
                  <span
                    key={g}
                    className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-zinc-300"
                  >
                    {g}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <button className="mt-1 w-full py-1.5 text-xs rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition">
                Book Now
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}