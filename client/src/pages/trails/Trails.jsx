import { useState } from 'react'
import { Link } from 'react-router-dom'

const trails = [
  {
    id: 1,
    title: 'Annapurna Base Camp',
    slug: 'annapurna-base-camp',
    region: 'Gandaki Province',
    difficulty: 'Moderate',
    duration: '5-7 Days',
    elevation: '4,130m',
    distance: '110 km',
    season: 'Mar-May, Sep-Nov',
    image: '/ABC.webp',
    description: 'One of Nepal\'s most iconic treks, leading through terraced fields, rhododendron forests, and dramatic mountain scenery to the base of the Annapurna massif.',
    highlights: ['Annapurna Sanctuary', 'Machhapuchhre Base Camp', 'Rhododendron Forests', 'Hot Springs at Jhinu'],
    startPoint: 'Nayapul',
    endPoint: 'Nayapul',
    category: 'trek',
  },
  {
    id: 2,
    title: 'Everest Base Camp',
    slug: 'everest-base-camp',
    region: 'Koshi Province',
    difficulty: 'Challenging',
    duration: '12-14 Days',
    elevation: '5,364m',
    distance: '130 km',
    season: 'Mar-May, Sep-Nov',
    image: '/EBC.webp',
    description: 'The world\'s most famous trek. Walk in the footsteps of legends through Sherpa villages, ancient monasteries, and glacial moraines to the foot of the highest mountain on earth.',
    highlights: ['Kala Patthar Viewpoint', 'Namche Bazaar', 'Tengboche Monastery', 'Khumbu Glacier'],
    startPoint: 'Lukla',
    endPoint: 'Lukla',
    category: 'trek',
  },
  {
    id: 3,
    title: 'Gosaikunda',
    slug: 'gosaikunda',
    region: 'Langtang National Park',
    difficulty: 'Moderate',
    duration: '3-4 Days',
    elevation: '4,380m',
    distance: '35 km',
    season: 'Apr-Jun, Sep-Nov',
    image: '/Gosaikunda.webp',
    description: 'A sacred alpine lake trek through rhododendron forests and high mountain passes. One of the most spiritual trails in Nepal, revered by both Hindu and Buddhist pilgrims.',
    highlights: ['Sacred Gosaikunda Lake', 'Lauribinayak Pass', 'Himalayan Views', 'Rhododendron Forests'],
    startPoint: 'Dhunche',
    endPoint: 'Sundarijal',
    category: 'trek',
  },
  {
    id: 4,
    title: 'Mardi Himal',
    slug: 'mardi-himal',
    region: 'Gandaki Province',
    difficulty: 'Moderate',
    duration: '5-7 Days',
    elevation: '4,500m',
    distance: '50 km',
    season: 'Mar-May, Oct-Nov',
    image: '/Mardi.jpg',
    description: 'A hidden gem off the beaten path. The Mardi Himal trek offers stunning close-up views of Machhapuchhre, Annapurna South, and Hiunchuli without the crowds.',
    highlights: ['Mardi Himal Base Camp', 'Machhapuchhre Views', 'Forest Camp', 'Quiet Trails'],
    startPoint: 'Kande',
    endPoint: 'Siding',
    category: 'trek',
  },
  {
    id: 5,
    title: 'Panch Pokhari',
    slug: 'panch-pokhari',
    region: 'Sindhupalchok',
    difficulty: 'Moderate',
    duration: '3-5 Days',
    elevation: '4,100m',
    distance: '45 km',
    season: 'Apr-May, Sep-Oct',
    image: '/PanchPokhari.webp',
    description: 'Five sacred ponds nestled in the high Himalayas of Sindhupalchok. A hidden gem off the beaten path with raw, untouched beauty and deep spiritual significance.',
    highlights: ['Five Sacred Lakes', 'Remote Trails', 'Tamang Villages', 'Panoramic Peaks'],
    startPoint: 'Chautara',
    endPoint: 'Chautara',
    category: 'trek',
  },
]

const difficultyColor = {
  'Easy': '#4a7c59',
  'Moderate': '#8b7355',
  'Challenging': '#7c4a4a',
  'Difficult': '#5c3a3a',
}

const filters = ['All', 'Moderate', 'Challenging', 'Easy']

export default function Trails() {
  const [active, setActive] = useState('All')
  const [hovered, setHovered] = useState(null)

  const filtered = active === 'All' ? trails : trails.filter(t => t.difficulty === active)

  return (
    <main style={{ paddingTop: '64px', minHeight: '100vh', background: '#fafaf9' }}>

      {/* Header */}
      <section style={{ padding: '72px 32px 48px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ width: '28px', height: '1px', background: '#4a5240' }} />
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#78716c' }}>
         Discover Nepal
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300, color: '#1c1917', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Trails worth<br />
            <span style={{  color: '#4a5240' }}>the climb.</span>
          </h1>
          
        </div>
      </section>

      {/* Filters */}
      <div style={{ padding: '0 32px 48px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid #e7e5e4', paddingBottom: '0' }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px 20px', fontSize: '0.78rem', letterSpacing: '0.06em',
              textTransform: 'uppercase', fontFamily: 'Inter, sans-serif',
              color: active === f ? '#1c1917' : '#a8a29e',
              fontWeight: active === f ? 500 : 300,
              borderBottom: active === f ? '1.5px solid #1c1917' : '1.5px solid transparent',
              marginBottom: '-1px', transition: 'all 0.2s'
            }}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Trail Cards */}
      <section style={{ padding: '0 32px 96px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2px' }}>
          {filtered.map(trail => (
            <Link key={trail.id} to={`/trails/${trail.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                onMouseEnter={() => setHovered(trail.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ background: '#fff', overflow: 'hidden', transition: 'all 0.3s', cursor: 'pointer' }}>

                {/* Image */}
                <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                  <img src={trail.image} alt={trail.title}
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                      transform: hovered === trail.id ? 'scale(1.04)' : 'scale(1)'
                    }} />
                  {/* Overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(28,25,23,0.5) 0%, transparent 60%)',
                  }} />
                  {/* Difficulty badge */}
                  <div style={{
                    position: 'absolute', top: '16px', right: '16px',
                    background: 'rgba(250,250,249,0.92)', backdropFilter: 'blur(8px)',
                    padding: '4px 10px', fontSize: '0.65rem',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: difficultyColor[trail.difficulty], fontWeight: 500
                  }}>
                    {trail.difficulty}
                  </div>
                  {/* Region on image */}
                  <div style={{ position: 'absolute', bottom: '16px', left: '16px' }}>
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.08em' }}>
                      {trail.region}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px 28px 28px' }}>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.3rem', fontWeight: 300, color: '#1c1917', marginBottom: '10px', letterSpacing: '-0.01em' }}>
                    {trail.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#78716c', lineHeight: 1.65, marginBottom: '20px', fontWeight: 300 }}>
                    {trail.description.slice(0, 100)}...
                  </p>

                  {/* Stats row */}
                  <div style={{ display: 'flex', gap: '20px', paddingTop: '16px', borderTop: '1px solid #f5f5f4' }}>
                    {[
                      { label: 'Duration', value: trail.duration },
                      { label: 'Elevation', value: trail.elevation },
                      { label: 'Distance', value: trail.distance },
                    ].map(s => (
                      <div key={s.label}>
                        <div style={{ fontSize: '0.6rem', color: '#a8a29e', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px' }}>{s.label}</div>
                        <div style={{ fontSize: '0.78rem', color: '#44403c', fontWeight: 400 }}>{s.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  )
}