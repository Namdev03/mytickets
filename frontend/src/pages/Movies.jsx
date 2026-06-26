export default function Movies() {
  const movies = [
    {
      id: 1,
      title: "Interstellar",
      year: "2014",
      genre: "Sci-Fi",
      rating: "8.7",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600",
    },
    {
      id: 2,
      title: "Inception",
      year: "2010",
      genre: "Action",
      rating: "8.8",
      image:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600",
    },
    {
      id: 3,
      title: "Avengers",
      year: "2019",
      genre: "Superhero",
      rating: "8.4",
      image:
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600",
    },
    {
      id: 4,
      title: "The Batman",
      year: "2022",
      genre: "Action",
      rating: "8.0",
      image:
        "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=600",
    },
    {
      id: 5,
      title: "Joker",
      year: "2019",
      genre: "Drama",
      rating: "8.5",
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600",
    },
    {
      id: 6,
      title: "Dune",
      year: "2021",
      genre: "Adventure",
      rating: "8.2",
      image:
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600",
    },
  ];

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">🎬 Now Showing</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Discover the latest blockbuster movies and book your tickets.
          </p>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-pink-500 shadow-md transition duration-300"
            >
              {/* Poster */}
              <div className="w-full h-60 overflow-hidden">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Details */}
              <div className="p-3">
                <h3 className="text-sm font-semibold text-white truncate">
                  {movie.title}
                </h3>

                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>{movie.year}</span>
                  <span>{movie.genre}</span>
                </div>

                <div className="flex justify-between items-center mt-3">
                  <span className="bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded-full">
                    ⭐ {movie.rating}
                  </span>

                  <button className="bg-pink-600 hover:bg-pink-700 text-white text-xs px-3 py-1 rounded-md transition">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}