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
  {
    name: 'Poon Hill',
    image: '/Poonhll.avif',
  },
  {
    name: 'Kanchanjunga Base Camp',
    image: '/kanchanjungs.avif',
  },
  {
    name: 'Langtang Valley',
    image: '/langtang.avif',
  },
];

const stories = [
  {
    id: 1,
    title: 'Three Days Above the Clouds at Gosaikunda',
    excerpt: 'The lake appeared like a mirror dropped from the sky. I had been walking for six hours through fog so thick I could barely see my own boots, and then suddenly — there it was. Gosaikunda. Still, silver, sacred.',
    author: 'Ronast Acharya',
    date: 'June 1, 2026',
    type: 'Trek',
    trail: 'Gosaikunda',
    image: '/Gosaikunda.webp',
    readTime: '4 min read',
  },
  {
    id: 2,
    title: 'What Nobody Tells You About EBC in October',
    excerpt: 'Everyone posts the summit photos. Nobody posts the 4am alarm, the frozen boots, or the moment you seriously consider turning back at Lobuche. Here is the honest version of the world\'s most famous trek.',
    author: 'Sita Tamang',
    date: 'May 20, 2026',
    type: 'Trek',
    trail: 'Everest Base Camp',
    image: '/EBC.webp',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Mardi Himal: The Trail I Almost Missed',
    excerpt: 'I almost skipped it for the Annapurna Circuit. My guide insisted. By day two, with Machhapuchhre filling the entire skyline, I understood why this quiet trail deserves its own chapter.',
    author: 'Bikash Shrestha',
    date: 'April 14, 2026',
    type: 'Trek',
    trail: 'Mardi Himal',
    image: '/Mardi.jpg',
    readTime: '5 min read',
  },
];

export default function Home() {
  return (
    <main className="bg-stone-50">
      
      {/* 1. Hero Section */}
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
      <section className="max-w-7xl mx-auto px-8 py-20">
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

      {/* 3. Stories from the Community */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        {/* Section header */}
        <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
 
            </div>
            <h2 className="font-display text-4xl text-stone-900">
              Stories from<br />
              <span className="font-display text-4xl text-stone-900" style={{ color: '#4a5240' }}>the trail.</span>
            </h2>
            <p className="text-stone-500 mt-3 max-w-md text-sm leading-relaxed">
              Real experiences from real trekkers. Every journey is different — share yours and inspire the next one.
            </p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <Link to="/journal" className="text-sm text-stone-500 hover:text-stone-900 transition-colors underline underline-offset-4">
              View all stories →
            </Link>
            <Link to="/journal/add" style={{ background: '#1c1917' }} className="text-white px-6 py-3 text-sm tracking-wide hover:opacity-90 transition-opacity">
              Share Your Story
            </Link>
          </div>
        </div>

        {/* Stories grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <article key={story.id} className="group bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col rounded-2xl border border-stone-100">

        {/* Image */}
        <div className="h-52 overflow-hidden relative">
          <img 
            src={story.image} 
            alt={story.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span 
              style={{ background: 'rgba(28,25,23,0.85)', backdropFilter: 'blur(8px)' }}
              className="text-white text-[10px] px-2.5 py-1 font-medium tracking-widest uppercase rounded-sm"
            >
              {story.type}
            </span>
          </div>
          <div className="absolute bottom-4 left-4">
            <span className="text-white/80 text-xs font-medium tracking-wide bg-black/20 backdrop-blur-xs px-2 py-0.5 rounded">
              {story.trail}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-stone-400 text-xs font-light">{story.date}</span>
            <span className="text-stone-400 text-xs font-mono">{story.readTime}</span>
          </div>
          <h3 className="font-display text-xl font-semibold text-stone-900 leading-tight mb-3 group-hover:text-stone-700 transition-colors line-clamp-2">
            {story.title}
          </h3>
          <p className="text-stone-500 text-sm leading-relaxed mb-5 flex-grow line-clamp-3 font-light">
            {story.excerpt}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-stone-100 mt-auto">
            <span className="text-xs text-stone-400 font-light">
              By <strong className="text-stone-600 font-medium">{story.author}</strong>
            </span>
            <Link to="/journal" className="text-xs text-stone-900 font-medium hover:underline flex items-center gap-1">
              Read story <span>→</span>
            </Link>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>

      {/* 4. Why Choose Us */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl text-stone-900">
            Why Choose Us
          </h2>
          <p className="text-stone-500 mt-2 max-w-2xl mx-auto">
            Trusted trekking experiences designed for safety, sustainability, and local expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-3xl">🏔️</div>
            <h3 className="mt-4 font-semibold text-lg text-stone-900">
              Verified Trails
            </h3>
            <p className="mt-2 text-sm text-stone-500">
              All routes are carefully checked for safety and accuracy.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-3xl">🧭</div>
            <h3 className="mt-4 font-semibold text-lg text-stone-900">
              Local Expert Guides
            </h3>
            <p className="mt-2 text-sm text-stone-500">
              Experienced guides who know every trail and hidden spot.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-3xl">🌿</div>
            <h3 className="mt-4 font-semibold text-lg text-stone-900">
              Eco-Friendly Trekking
            </h3>
            <p className="mt-2 text-sm text-stone-500">
              We promote responsible travel that protects nature and culture.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-3xl">🛡️</div>
            <h3 className="mt-4 font-semibold text-lg text-stone-900">
              Safety First
            </h3>
            <p className="mt-2 text-sm text-stone-500">
              Your safety is our top priority on every journey.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}