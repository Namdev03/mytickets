import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              My<span className="text-pink-500">Tickets</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Book your favorite movies with ease. Enjoy a seamless and secure
              ticket booking experience anytime, anywhere.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Hosted by{" "}
              <span className="text-white font-medium">
                Your Hosting Name
              </span>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Navigation
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-pink-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/movies" className="hover:text-pink-500 transition">
                  Movies
                </Link>
              </li>

              <li>
                <Link to="/trailers" className="hover:text-pink-500 transition">
                  Trailers
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-pink-500 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-pink-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-gray-400">
              <p>📍 123 Movie Street, Cinema City, India</p>
              <p>📧 support@mytickets.com</p>
              <p>📞 +91 98765 43210</p>
              <p>🕒 Mon - Sun : 9:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">MyTickets</span>. All
            rights reserved.
          </p>

          <p className="text-center">
            Made with <span className="text-red-500">❤</span> for Movie Lovers
          </p>
        </div>
      </div>
    </footer>
  );
}