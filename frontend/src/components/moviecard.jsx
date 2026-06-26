import { Link } from "react-router";

export default function MovieCard() {
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
  ];

  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">🎬 Featured Movies</h2>
          <p className="text-gray-400 text-sm mt-2">
            Watch trending movies and explore more
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-pink-500 shadow-md transition"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-3">
                <h3 className="text-white font-semibold text-sm truncate">
                  {movie.title}
                </h3>

                <p className="text-gray-400 text-xs mt-1">
                  {movie.year} • {movie.genre}
                </p>

                <div className="mt-3 flex justify-between items-center">
                  <span className="text-xs bg-yellow-500 text-black px-2 py-1 rounded-full">
                    ⭐ {movie.rating}
                  </span>

                  <button className="text-xs bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded-md">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-center mt-10">
          <Link
            to="/movies"
            className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            See All Movies →
          </Link>
        </div>

      </div>
    </section>
  );
}