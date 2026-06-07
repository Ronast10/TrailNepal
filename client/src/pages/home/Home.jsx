import { Link } from 'react-router-dom';

const treks = [
  {
    name: 'Annapurna Base Camp',
    image: '/ABC.webp',
  },
  {
    name: 'Everest Base Camp',
    image: '/EBC.webp',
  },
  {
    name: 'Gosaikunda',
    image: '/Gosaikunda.webp',
  },
];
const guides = [
  {
    name: 'Ronast Acharya',
    image: '/guide1.HEIC',
  },
  {
    name: 'Ismarika Bista',
    image: '/guide2.jpg',
  },
  {
    name: 'Nima Tamang',
    image: '/guide3.avif',
  },
];

export default function Home() {
  return (
    <main className="bg-stone-50">
      
      {/* 1. Hero Section: Fixed to 90vh so it feels "full screen" 
          but doesn't break the vertical flow of the page */}
      <section className="relative w-full h-[90vh] bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/public/Nep.avif" 
            alt="Nepal Himalayas" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-stone-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <span className="text-stone-100/80 text-xs font-bold tracking-[0.25em] uppercase">
              Adventure Awaits
            </span>
            <h1 className="font-display text-7xl md:text-8xl text-white mt-6 leading-[0.9]">
              Every trail<br />
              <span className="font-display text-7xl md:text-8xl text-white mt-6 leading-[0.9]">tells a story.</span>
            </h1>
            <p className="mt-8 text-stone-100 text-lg leading-relaxed max-w-lg">
              Discover the hidden paths of the Himalayas. Expertly curated routes, 
              local insights, and sustainable trekking guides for your next journey.
            </p>
            
            <div className="mt-10 ">
              <Link to="/trails" className="bg-white text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-moss-400 hover:text-white transition-all duration-300">
                Explore Trails
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Categories Grid */}
      <section className="max-w-7xl mx-auto px-8 py-24">
  <h2 className="font-display text-4xl text-stone-900 mb-12">
    Popular Treks in Nepal
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    {treks.map((trek) => (
      <div
        key={trek.name}
        className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-sm"
      >
        {/* Image */}
        <img
          src={trek.image}
          alt={trek.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Title */}
        <div className="absolute bottom-8 left-8">
          <h3 className="font-display text-2xl text-white">
            {trek.name}
          </h3>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* 3. Our Guides */}
<section className="max-w-7xl mx-auto px-8 pb-24">
  <div className="mb-12">
    <h2 className="font-display text-4xl text-stone-900">
      Meet Our Guides
    </h2>
    <p className="text-stone-500 mt-2">
      Experienced local guides who know every trail, village, and hidden viewpoint.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-6">
    {guides.map((guide) => (
      <div
        key={guide.name}
        className="group relative h-96 rounded-2xl overflow-hidden shadow-sm cursor-pointer"
      >
        {/* Guide Image */}
        <img
          src={guide.image}
          alt={guide.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Guide Name */}
        <div className="absolute bottom-8 left-8">
          <h3 className="font-display text-2xl text-white">
            {guide.name}
          </h3>
        </div>
      </div>
    ))}
  </div>
</section>
    
    </main>
  );
}