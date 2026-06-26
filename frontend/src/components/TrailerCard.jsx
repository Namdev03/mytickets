import React from "react";
import ReactPlayer from "react-player";

export default function TrailerCard() {
  const player = {
    name: "Virat Kohli",
    role: "Batsman",
    team: "India",
    rating: "9.5",
    video: "https://www.youtube.com/watch?v=VQtonf1fv_s",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:border-pink-500 transition">

        {/* Video */}
        <div className="aspect-video bg-black">
          <ReactPlayer
            url={player.video}
            width="100%"
            height="100%"
            controls
          />
        </div>

        {/* Content */}
        <div className="p-4 text-center">
          <h2 className="text-white text-xl font-bold">{player.name}</h2>

          <p className="text-gray-400 text-sm mt-1">
            {player.role} • {player.team}
          </p>

          {/* Rating */}
          <div className="mt-3">
            <span className="inline-block bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
              ⭐ {player.rating}
            </span>
          </div>

          {/* Button */}
          <button className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white text-sm py-2 rounded-lg transition">
           Book
          </button>
        </div>

      </div>
    </div>
  );
}