import { Link } from 'react-router-dom';

export default function Footer() {
  const sections = [
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Trails', path: '/trails' },
        { name: 'Guides', path: '/guides' },
        { name: 'Journal', path: '/journal' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Terms & Policy', path: '/terms-and-policy' }
      ]
    }
  ];

  return (
    <footer className="bg-white border-t border-stone-200 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo Column */}
        <div className="col-span-1">
          <Link to="/" className="font-display text-xl text-stone-900 font-semibold tracking-tight">
            TrailNepal
          </Link>
          <p className="text-stone-500 text-sm mt-4 leading-relaxed font-light">
            Connecting explorers with the heart of the Himalayas.
          </p>
        </div>
        
        {/* Navigation Columns */}
        {sections.map((section) => (
          <div key={section.title}>
            <h4 className="font-bold text-xs uppercase tracking-widest text-stone-900 mb-4">
              {section.title}
            </h4>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-stone-600 hover:text-stone-900 text-sm transition-colors font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Centered Copyright */}
      <div className="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t border-stone-100 text-sm text-stone-400 text-center font-light">
        © 2026 TrailNepal. All rights reserved.
      </div>
    </footer>
  );
}