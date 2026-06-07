import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-stone-50/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo Left */}
        <Link to="/" className="font-display text-2xl text-stone-900 tracking-tight">
          TrailNepal
        </Link>

        {/* Links Right */}
        <div className="flex items-center gap-8">
          <Link to="/trails" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Trails</Link>
          <Link to="/guides" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Guides</Link>
          <Link to="/journal" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Journal</Link>
          <Link to="/login" className="text-sm font-medium text-stone-900 hover:text-moss-400 transition-colors">Sign in</Link>
        </div>
      </div>
    </nav>
  );
}