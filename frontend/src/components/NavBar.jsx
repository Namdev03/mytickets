import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const visibleLinks = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "Favorite", path: "/favorite" },
    { name: "Contact", path: "/contact" },
  ];

  const moreLinks = [
    { name: "Tickets", path: "/tickets" },
    { name: "Theaters", path: "/theaters" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 bg-transparent backdrop-blur-md">
      <nav className="max-w-7xl mx-auto">
        
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-extrabold bg-[linear-gradient(90deg,#4FD1FF_0%,#8B5CF6_50%,#FF00C8_100%)] bg-clip-text text-transparent">
              mytickets
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1">
              {visibleLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-5 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-3">
            <button className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
              <Search size={18} className="text-white" />
            </button>

            <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:scale-105 transition">
              Login
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <Menu size={20} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-4">
            <div className="flex flex-col gap-2">
              {[...visibleLinks, ...moreLinks].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-4 py-3 rounded-2xl text-white/70 hover:bg-white/10 hover:text-white transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex gap-3 mt-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-white/10 rounded-2xl py-3 text-white">
                  <Search size={18} />
                  Search
                </button>

                <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl py-3 text-white font-medium">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}