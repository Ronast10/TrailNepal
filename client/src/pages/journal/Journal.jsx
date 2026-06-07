import { useState } from 'react'
import { Link } from 'react-router-dom'

const allStories = [
  {
    id: 1,
    title: 'Three Days Above the Clouds at Gosaikunda',
    excerpt: 'The lake appeared like a mirror dropped from the sky. I had been walking for six hours through fog so thick I could barely see my own boots, and then suddenly — there it was. Gosaikunda. Still, silver, sacred.',
    content: `The journey to Gosaikunda isn't just a physical trek; it feels like a vertical ascent into another realm entirely. Leaving the bustling trails behind, the climb through Cholangpaty tests your resolve with relentless, steep switchbacks wrapped in dense alpine mist. 

For six long hours, my world was reduced to the immediate three feet of rocky trail directly in front of my muddy boots. The damp chill seeped through my layers, and altitude whispered heavy rhythms into my breathing.

And then, as if the mountains decided I had paid my dues, the fog abruptly split open. 

There it sat. Gosaikunda. A massive, deep-azure mirror reflecting an impossibly crisp sky, completely cradled by stark, jagged ridges. The absolute stillness of the water at 4,380 meters is deeply spiritual. Standing on its shores as twilight cast long violet shadows across the surface, the exhaustion vanished. I spent three days wandering the smaller surrounding lakes, watching the clouds roll below our lodge like a restless white ocean. It remains a sacred sanctuary where time simply stops.`,
    author: 'Ronast Acharya',
    date: 'June 1, 2026',
    type: 'Trek',
    trail: 'Gosaikunda',
    image: '/Gosaikunda.webp',
    readTime: '4 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'What Nobody Tells You About EBC in October',
    excerpt: 'Everyone posts the summit photos. Nobody posts the 4am alarm, the frozen boots, or the moment you seriously consider turning back at Lobuche. Here is the honest version of the world\'s most famous trek.',
    content: `Don't get me wrong — standing before Mount Everest as the morning sun ignites its peak is a core memory I will cherish forever. But the glossy brochures conveniently leave out the gritty reality of peak trekking season in the Khumbu region.

October means pristine weather windows, but it also means sharing the rugged paths with thousands of trekkers, long yak trains clanging their bells, and thin air that turns simple conversations into endurance tasks. 

The real test begins past Dingboche. Nobody warns you about waking up at 4:00 AM in a tea house where the indoor temperature has plummeted below freezing, forcing you to use your body heat just to unfreeze your stiff leather boots. By the time I reached the raw, gray landscape of Lobuche, a lingering altitude headache had settled behind my eyes, and every fiber of my being wanted to turn around. 

Pushing through that mental barrier to reach Base Camp requires grit over glamour. It is dusty, exhausting, crowded, and bitterly cold — but when you look up at the cascading Khumbu Icefall, you realize that the struggle is exactly what makes the triumph taste so sweet.`,
    author: 'Sita Tamang',
    date: 'May 20, 2026',
    type: 'Trek',
    trail: 'Everest Base Camp',
    image: '/EBC.webp',
    readTime: '6 min read',
    featured: true,
  },
  {
    id: 3,
    title: 'Mardi Himal: The Trail I Almost Missed',
    excerpt: 'I almost skipped it for the Annapurna Circuit. My guide insisted. By day two, with Machhapuchhre filling the entire skyline, I understood why this quiet trail deserves its own chapter.',
    content: `I originally had my heart completely set on the iconic Annapurna Circuit. However, over a cup of hot milk tea in Pokhara, my guide looked at my timeline and said, 'Trust me. Let's go up Mardi Himal instead.' 

It was the best pivot I could have ever made. While other routes can feel highly developed, Mardi Himal still retains a rustic, intimate ridge-line trek personality. 

The first day is an enchanting, silent climb through mossy rhododendron forests where light filters through the trees in golden shafts. But the real magic happens on day two when you break past the tree line. Suddenly, you are walking along a knife-edge ridge, and the sacred, unclimbed peak of Machhapuchhre (Fishtail) stands right in front of you — filling up your entire field of view. It feels so close you could reach out and touch the ice. 

Staying at High Camp and watching the sunrise turn the Annapurna range from cold blue to blazing gold without the roaring crowds of larger base camps was an unforgettable, meditative experience.`,
    author: 'Bikash Shrestha',
    date: 'April 14, 2026',
    type: 'Trek',
    trail: 'Mardi Himal',
    image: '/Mardi.jpg',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'Panch Pokhari in the Rain: A Different Kind of Beautiful',
    excerpt: 'We set off knowing the forecast was bad. What we found was something the sunny-day photos never capture — the five lakes shrouded in mist, the trail empty, the mountains hidden but somehow more present.',
    content: `The locals at the trailhead looked at our heavy packs and warned us that the monsoon was lingering late into the season. We decided to press on anyway, swapping our sun hats for heavy-duty rain capes and waterproof pack covers. 

Hiking up to Panch Pokhari (The Five Lakes) in continuous, soft mountain rain is a lesson in patience and awareness. 

The panoramic Himalayan views were completely gone, swallowed by an endless, swirling sea of white mist. Yet, the environment became hyper-vivid. The green valleys smelled deeply of wet earth and pine, water cascaded off mossy boulders in spontaneous waterfalls, and we didn't see another single trekker for three days. 

When we finally reached the sacred five lakes at 4,100 meters, the fog would dramatically part for just a few seconds at a time, revealing glimpses of dark water before swallowing them whole again. It felt deeply mysterious, raw, and wildly beautiful in a way that a clear blue sky could never replicate.`,
    author: 'Priya Gurung',
    date: 'March 30, 2026',
    type: 'Trek',
    trail: 'Panch Pokhari',
    image: '/PanchPokhari.webp',
    readTime: '5 min read',
    featured: false,
  },
]

const types = ['All', 'Trek', 'Ride', 'Travel', 'Guide']

export default function Journal() {
  const [activeType, setActiveType] = useState('All')
  const [selectedStory, setSelectedStory] = useState(null)

  const filtered = activeType === 'All'
    ? allStories
    : allStories.filter(s => s.type === activeType)

  const featured = filtered.filter(s => s.featured)
  const rest = filtered.filter(s => !s.featured)

  return (
    <main className="pt-16 min-h-screen bg-stone-50">

      {/* Header */}
      <section className="px-8 pt-18 pb-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-px bg-stone-700" />
              <span className="text-xs tracking-[0.25em] uppercase text-stone-500 font-medium">Community Stories</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-stone-900 tracking-tight leading-none">
              Stories from<br />
              <span className=" text-stone-700 font-light">the trail.</span>
            </h1>
            <p className="text-stone-500 text-sm max-w-sm leading-relaxed mt-4 font-light">
              Real experiences from real trekkers. Every journey is different — read theirs, then share yours.
            </p>
          </div>
          <Link to="/journal/add" className="bg-stone-900 text-stone-50 px-7 py-3 text-sm tracking-wide font-medium rounded hover:bg-stone-800 transition-colors">
            + Share Your Story
          </Link>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="px-8 pb-10 max-w-7xl mx-auto">
        <div className="flex gap-1 border-b border-stone-200">
          {types.map(t => (
            <button 
              key={t} 
              onClick={() => setActiveType(t)} 
              className={`px-5 py-2 text-xs tracking-wider uppercase font-sans border-b-2 transition-all duration-200 ${
                activeType === t 
                  ? 'text-stone-900 border-stone-900 font-medium' 
                  : 'text-stone-400 border-transparent hover:text-stone-600 font-light'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Featured stories Grid */}
      {featured.length > 0 && (
        <section className="px-8 pb-12 max-w-7xl mx-auto">
          <div className={`grid gap-0.5 ${featured.length > 1 ? 'md:grid-cols-[1.4fr_1fr]' : 'grid-cols-1'}`}>
            {featured.map(story => (
              <div 
                key={story.id} 
                onClick={() => setSelectedStory(story)}
                className="group relative h-[460px] overflow-hidden cursor-pointer"
              >
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="bg-stone-50/10 backdrop-blur-md border border-stone-50/20 text-white text-[10px] px-2.5 py-1 tracking-widest uppercase font-medium rounded-sm">
                    {story.type}
                  </span>
                </div>
                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[11px] text-stone-300/80 mb-2 font-mono">{story.trail} · {story.readTime}</p>
                  <h2 className="font-serif text-xl md:text-3xl text-white font-light leading-snug mb-3">
                    {story.title}
                  </h2>
                  <p className="text-xs text-stone-300/70 leading-relaxed mb-4 font-light max-w-xl">
                    {story.excerpt.slice(0, 110)}...
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-stone-50/10">
                    <span className="text-[11px] text-stone-400">{story.author} · {story.date}</span>
                    <span className="text-[11px] text-stone-200 group-hover:translate-x-1 transition-transform">Read story →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Rest of stories */}
      {rest.length > 0 && (
        <section className="px-8 pb-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {rest.map(story => (
              <div 
                key={story.id} 
                onClick={() => setSelectedStory(story)}
                className="bg-white overflow-hidden cursor-pointer group border border-stone-100 flex flex-col h-full"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-stone-900/85 text-white text-[9px] px-2.5 py-1 tracking-widest uppercase font-medium">
                      {story.type}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3 text-[10px] text-stone-400 font-mono tracking-wider">
                    <span>{story.trail}</span>
                    <span>{story.readTime}</span>
                  </div>
                  <h3 className="font-serif text-lg text-stone-900 leading-snug mb-2 font-medium">
                    {story.title}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed mb-6 font-light line-clamp-3">
                    {story.excerpt}
                  </p>
                  <div className="flex justify-between items-center pt-3 border-t border-stone-100 mt-auto">
                    <span className="text-[11px] text-stone-400 font-light">{story.author} · {story.date}</span>
                    <span className="text-xs text-stone-900 font-medium group-hover:text-stone-600 transition-colors">Read →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* OPTIMIZED POPUP MODAL SCREEN */}
      {selectedStory && (
        <div 
          onClick={() => setSelectedStory(null)} 
          className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-md flex items-center justify-center p-4 md:p-6 transition-opacity duration-300"
        >
          <div 
            onClick={e => e.stopPropagation()} 
            className="bg-white w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded shadow-2xl relative flex flex-col scrollbar-thin"
          >
            {/* Top Bar Fix: Pinned absolute white close button circle */}
            <button 
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 z-50 bg-white hover:bg-stone-100 text-stone-900 w-9 h-9 rounded-full flex items-center justify-center shadow-md border border-stone-100 cursor-pointer text-sm font-semibold transition-all hover:scale-105"
            >
              ✕
            </button>

            {/* Content Container to handle neat layout pacing */}
            <div>
              {/* Header Banner Image */}
              <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden relative">
                <img 
                  src={selectedStory.image} 
                  alt={selectedStory.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Main Typography Article Container */}
              <div className="px-6 py-8 sm:px-10 sm:py-10 md:px-12 max-w-2xl mx-auto">
                
                {/* Categorization & Metadata */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-stone-900 text-white text-[9px] px-2.5 py-0.5 font-medium tracking-widest uppercase rounded-sm">
                    {selectedStory.type}
                  </span>
                  <span className="text-xs text-stone-400 font-mono">
                    {selectedStory.trail} · {selectedStory.readTime}
                  </span>
                </div>

                {/* Main Headline */}
                <h2 className="font-serif text-2xl sm:text-4xl text-stone-900 leading-tight mb-4 tracking-tight">
                  {selectedStory.title}
                </h2>

                {/* Author Info block */}
                <div className="flex items-center justify-between text-xs text-stone-400 pb-5 mb-8 border-b border-stone-200/80 font-light">
                  <span>By <strong className="text-stone-800 font-medium">{selectedStory.author}</strong></span>
                  <span>Published on {selectedStory.date}</span>
                </div>

                {/* Long-form Content Block with custom paragraph margins */}
                <div className="text-stone-700 text-sm sm:text-base leading-relaxed font-light space-y-6 whitespace-pre-wrap pb-12">
                  {selectedStory.content}
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

    </main>
  )
}