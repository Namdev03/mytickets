import React, { useState } from "react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("addShow");
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { key: "addShow", label: "Add Show" },
    { key: "showList", label: "Show List" },
    { key: "bookingList", label: "Booking List" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 bg-transparent backdrop-blur-md">
        <nav className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="text-xl font-extrabold bg-[linear-gradient(90deg,#4FD1FF,#8B5CF6,#FF00C8)] bg-clip-text text-transparent">
              Admin Panel
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1">
                {menu.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setActiveTab(item.key)}
                    className={`px-5 py-2 rounded-full text-sm transition ${
                      activeTab === item.key
                        ? "bg-white/10 text-white"
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-4">
              <div className="flex flex-col gap-2">
                {menu.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => {
                      setActiveTab(item.key);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-3 rounded-2xl text-left transition ${
                      activeTab === item.key
                        ? "bg-white/10 text-white"
                        : "text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}

        </nav>
      </header>

      {/* CONTENT */}
      <div className="pt-28 p-4 md:p-8 max-w-5xl mx-auto">

        {/* Add Show */}
        {activeTab === "addShow" && (
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl">
            <h2 className="text-xl font-bold mb-4">Add Show</h2>

            <div className="grid gap-3">
              <input
                className="p-3 rounded-xl bg-black/40 border border-white/10 outline-none"
                placeholder="Movie Name"
              />
              <input
                className="p-3 rounded-xl bg-black/40 border border-white/10 outline-none"
                placeholder="Time"
              />
              <input
                className="p-3 rounded-xl bg-black/40 border border-white/10 outline-none"
                placeholder="Price"
              />

              <button className="bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-xl font-medium hover:scale-[1.02] transition">
                Add Show
              </button>
            </div>
          </div>
        )}

        {/* Show List */}
        {activeTab === "showList" && (
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl">
            <h2 className="text-xl font-bold mb-4">Show List</h2>

            <div className="space-y-3">
              {["Interstellar", "Inception", "Batman"].map((movie, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-black/40 border border-white/10 p-3 rounded-xl"
                >
                  <span>{movie}</span>
                  <button className="text-red-400 hover:text-red-300">
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Booking List */}
        {activeTab === "bookingList" && (
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl">
            <h2 className="text-xl font-bold mb-4">Booking List</h2>

            <div className="space-y-3">
              {[
                { name: "Interstellar", seats: 4 },
                { name: "Inception", seats: 2 },
              ].map((b, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-black/40 border border-white/10 p-3 rounded-xl"
                >
                  <span>{b.name}</span>
                  <span className="text-pink-400">{b.seats} seats</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}