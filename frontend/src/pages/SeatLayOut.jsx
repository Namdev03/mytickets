import React, { useState } from "react";

export default function SeatLayout() {
  const movie = {
    name: "Interstellar",
    pricePerSeat: 150,
  };

  const rows = 5;
  const cols = 8;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState("Today");

  const dates = ["Today", "Tomorrow", "Sat 28", "Sun 29"];

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  const totalPrice = selectedSeats.length * movie.pricePerSeat;

  return (
    <div className="min-h-screen bg-black text-white px-4 py-25 md:px-10">

      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-xl md:text-3xl font-bold">
          {movie.name}
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Select your seats & book tickets
        </p>
      </div>
      {/* Date Selector */}
      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {dates.map((date) => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            className={`px-3 py-2 text-xs md:text-sm rounded-lg border transition ${
              selectedDate === date
                ? "bg-pink-600 border-pink-600"
                : "border-zinc-700 hover:border-pink-500"
            }`}
          >
            {date}
          </button>
        ))}
      </div>

      {/* Screen */}
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-md md:max-w-lg h-2 bg-gray-600 rounded-full shadow-md"></div>
      </div>

      {/* Seats */}
      <div className="flex justify-center">
        <div className="grid grid-cols-8 gap-2 md:gap-3">
          {Array.from({ length: rows * cols }).map((_, index) => {
            const seatId = index + 1;
            const isSelected = selectedSeats.includes(seatId);
            return (
              <button
                key={seatId}
                onClick={() => toggleSeat(seatId)}
                className={`w-6 h-6 md:w-8 md:h-8 rounded-md transition duration-200 ${
                  isSelected
                    ? "bg-green-500"
                    : "bg-zinc-700 hover:bg-pink-500"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Summary */}
      <div className="mt-10 max-w-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        <div className="text-center md:text-left">
          <p className="text-gray-400 text-sm">Selected Seats</p>
          <p className="font-bold text-white">
            {selectedSeats.length > 0
              ? selectedSeats.join(", ")
              : "None"}
          </p>
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-sm">Total Price</p>
          <p className="text-pink-500 font-bold text-lg">
            ₹{totalPrice}
          </p>
        </div>

        <button
          disabled={selectedSeats.length === 0}
          className={`px-6 py-2 rounded-lg font-semibold w-full md:w-auto transition ${
            selectedSeats.length === 0
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-pink-600 hover:bg-pink-700"
          }`}
        >
          Book Tickets
        </button>

      </div>
    </div>
  );
}