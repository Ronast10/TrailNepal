import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/40">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo Left */}
        <Link
          to="/"
          className="font-display text-2xl text-stone-900 tracking-tight"
        >
          TrailNepal
        </Link>

        {/* Middle Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
          >
            Home
          </Link>

          <Link
            to="/trails"
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
          >
            Trails
          </Link>

          <Link
            to="/guides"
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
          >
            Guides
          </Link>

          <Link
            to="/journal"
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
          >
            Journal
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Right Auth Buttons */}
        <div className="flex items-center gap-3">

          {/* Login */}
          <Link
            to="/login"
            className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors px-4 py-2 rounded-full"
          >
            Login
          </Link>

          {/* Sign Up (CTA Button) */}
          <Link
            to="/register"
            className="text-sm font-medium bg-stone-900 text-white px-5 py-2 rounded-full hover:bg-stone-800 transition-colors"
          >
            Sign Up
          </Link>

        </div>
      </div>
    </nav>
  );
}