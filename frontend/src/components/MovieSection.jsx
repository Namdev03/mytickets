import React from "react";
import MovieCard from "./moviecard";

function MovieSection() {
  const bgImage =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600";

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <img
          src={bgImage}
          alt="background"
          className="w-full h-full object-cover scale-105 opacity-50"
        />

        {/* DARK OVERLAY (for readability) */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <MovieCard />
      </div>

    </div>
  );
}

export default MovieSection;