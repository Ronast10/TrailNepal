import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo Column */}
        <div className="col-span-1">
          <Link to="/" className="font-display text-xl text-stone-900">TrailNepal</Link>
          <p className="text-stone-500 text-sm mt-4 leading-relaxed">
            Connecting explorers with the heart of the Himalayas.
          </p>
        </div>
        
        {/* Navigation Columns */}
        {[{title: 'Company', links: ['About', 'Careers', 'Contact']}, 
          {title: 'Resources', links: ['Trails', 'Guides', 'Journal']}, 
          {title: 'Support', links: ['Help Center', 'Safety', 'Terms']}].map((section) => (
          <div key={section.title}>
            <h4 className="font-bold text-xs uppercase tracking-widest text-stone-900 mb-4">{section.title}</h4>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link}>
                  <Link to="#" className="text-stone-600 hover:text-moss-400 text-sm transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t border-stone-100 text-sm text-stone-400">
        © 2026 TrailNepal. All rights reserved.
      </div>
    </footer>
  );
}