import { Link } from "react-router";
import MovieCard from "../components/MovieCard";

export default function MovieDetails() {
  const cast = [
    {
      id: 1,
      name: "Matthew McConaughey",
      role: "Cooper",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Anne Hathaway",
      role: "Brand",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Jessica Chastain",
      role: "Murph",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      name: "Michael Caine",
      role: "Professor Brand",
      image:
        "https://randomuser.me/api/portraits/men/52.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-zinc-950 text-white py-12 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Movie Info */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Poster */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700"
              alt="Movie Poster"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
            />
          </div>

          {/* Details */}
          <div>

            <span className="bg-pink-600 px-4 py-1 rounded-full text-sm">
              Now Showing
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Interstellar
            </h1>

            <div className="flex flex-wrap gap-6 mt-6 text-gray-300">

              <div className="flex items-center gap-2">
                ⭐
                <span>8.7 / 10</span>
              </div>

              <div className="flex items-center gap-2">
                ⏰
                <span>2h 49m</span>
              </div>

              <div className="flex items-center gap-2">
                🎭
                <span>Sci-Fi • Adventure</span>
              </div>

              <div className="flex items-center gap-2">
                📅
                <span>2014</span>
              </div>

            </div>

            <p className="text-gray-400 mt-8 leading-8">
              Interstellar follows a group of astronauts who travel through
              a wormhole in search of a new home for humanity. Featuring
              breathtaking visuals, emotional storytelling, and an unforgettable
              soundtrack, it remains one of the greatest science-fiction films
              ever made.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <Link to="/movie/moviedetails/trailer" className="px-8 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-semibold">
                ▶ Watch Trailer
              </Link>

              <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 transition font-semibold">
                🎟 Book Tickets
              </button>

            </div>

          </div>
        </div>

        {/* Cast Section */}
        <div className="mt-20">

          <h2 className="text-3xl font-bold mb-8">
            Cast
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">

            {cast.map((actor) => (
              <div
                key={actor.id}
                className="text-center group"
              >
                <img
                  src={actor.image}
                  alt={actor.name}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mx-auto border-4 border-zinc-800 group-hover:border-pink-500 transition"
                />

                <h3 className="mt-4 font-semibold">
                  {actor.name}
                </h3>

                <p className="text-sm text-gray-400">
                  {actor.role}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* Story Section */}

      </div>
      <MovieCard/>
    </section>

  );
}