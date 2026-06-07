import { useParams, Link } from 'react-router-dom'

const trails = [
  {
    id: 1,
    title: 'Annapurna Base Camp',
    slug: 'annapurna-base-camp',
    region: 'Gandaki Province',
    difficulty: 'Moderate',
    duration: '10-12 Days',
    elevation: '4,130m',
    distance: '110 km',
    season: 'Mar-May, Sep-Nov',
    image: '/ABC2.avif',
    description: 'One of Nepal\'s most iconic treks, leading through terraced fields, rhododendron forests, and dramatic mountain scenery to the base of the Annapurna massif. The trail passes through diverse landscapes — from subtropical forests to alpine meadows — offering a complete Himalayan experience.',
    highlights: ['Annapurna Sanctuary', 'Machhapuchhre Base Camp', 'Rhododendron Forests', 'Hot Springs at Jhinu'],
    startPoint: 'Nayapul',
    endPoint: 'Nayapul',
    itinerary: [
      { day: 1, title: 'Pokhara to Nayapul to Tikhedhunga', elevation: '1,540m', hours: '5-6 hrs' },
      { day: 2, title: 'Tikhedhunga to Ghorepani', elevation: '2,874m', hours: '6-7 hrs' },
      { day: 3, title: 'Ghorepani to Chhomrong via Poon Hill', elevation: '2,170m', hours: '7-8 hrs' },
      { day: 4, title: 'Chhomrong to Dovan', elevation: '2,600m', hours: '5-6 hrs' },
      { day: 5, title: 'Dovan to Machhapuchhre Base Camp', elevation: '3,700m', hours: '5-6 hrs' },
      { day: 6, title: 'MBC to Annapurna Base Camp', elevation: '4,130m', hours: '3-4 hrs' },
    ],
    whatToBring: ['Warm layers', 'Trekking poles', 'Rain gear', 'Sleeping bag', 'First aid kit'],
  },
  {
    id: 2,
    title: 'Everest Base Camp',
    slug: 'everest-base-camp',
    region: 'Koshi Province',
    difficulty: 'Challenging',
    duration: '14-16 Days',
    elevation: '5,364m',
    distance: '130 km',
    season: 'Mar-May, Sep-Nov',
    image: '/EBC2.avif',
    description: 'The world\'s most famous trek. Walk in the footsteps of legends through Sherpa villages, ancient monasteries, and glacial moraines to the foot of the highest mountain on earth. Every step on this trail is a step into history.',
    highlights: ['Kala Patthar Viewpoint', 'Namche Bazaar', 'Tengboche Monastery', 'Khumbu Glacier'],
    startPoint: 'Lukla',
    endPoint: 'Lukla',
    itinerary: [
      { day: 1, title: 'Fly Kathmandu to Lukla, trek to Phakding', elevation: '2,610m', hours: '3-4 hrs' },
      { day: 2, title: 'Phakding to Namche Bazaar', elevation: '3,440m', hours: '5-6 hrs' },
      { day: 3, title: 'Acclimatization day in Namche', elevation: '3,440m', hours: 'Rest day' },
      { day: 4, title: 'Namche to Tengboche', elevation: '3,860m', hours: '5-6 hrs' },
      { day: 5, title: 'Tengboche to Dingboche', elevation: '4,410m', hours: '5-6 hrs' },
      { day: 6, title: 'Dingboche to Lobuche', elevation: '4,940m', hours: '5-6 hrs' },
      { day: 7, title: 'Lobuche to EBC to Gorak Shep', elevation: '5,364m', hours: '7-8 hrs' },
    ],
    whatToBring: ['Down jacket', 'Altitude sickness medication', 'Trekking poles', 'Gaiters', 'Sunglasses'],
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
    image: '/GS2.avif',
    description: 'A sacred alpine lake trek through rhododendron forests and high mountain passes. One of the most spiritual trails in Nepal, revered by both Hindu and Buddhist pilgrims. The lake itself sits at 4,380m surrounded by snow-capped peaks.',
    highlights: ['Sacred Gosaikunda Lake', 'Lauribinayak Pass', 'Himalayan Views', 'Rhododendron Forests'],
    startPoint: 'Dhunche',
    endPoint: 'Sundarijal',
    itinerary: [
      { day: 1, title: 'Dhunche to Sing Gompa', elevation: '3,330m', hours: '5-6 hrs' },
      { day: 2, title: 'Sing Gompa to Gosaikunda', elevation: '4,380m', hours: '5-6 hrs' },
      { day: 3, title: 'Gosaikunda to Lauribinayak', elevation: '4,610m', hours: '4-5 hrs' },
      { day: 4, title: 'Lauribinayak to Sundarijal', elevation: '1,460m', hours: '6-7 hrs' },
    ],
    whatToBring: ['Warm jacket', 'Rain gear', 'Trekking boots', 'Sunscreen', 'Water purification'],
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
    image: '/Mardi2.avif',
    description: 'A hidden gem off the beaten path. The Mardi Himal trek offers stunning close-up views of Machhapuchhre, Annapurna South, and Hiunchuli without the crowds. Perfect for trekkers seeking solitude and raw mountain beauty.',
    highlights: ['Mardi Himal Base Camp', 'Machhapuchhre Views', 'Forest Camp', 'Quiet Trails'],
    startPoint: 'Kande',
    endPoint: 'Siding',
    itinerary: [
      { day: 1, title: 'Pokhara to Kande to Forest Camp', elevation: '2,550m', hours: '4-5 hrs' },
      { day: 2, title: 'Forest Camp to High Camp', elevation: '3,580m', hours: '5-6 hrs' },
      { day: 3, title: 'High Camp to Mardi Himal Base Camp', elevation: '4,500m', hours: '4-5 hrs' },
      { day: 4, title: 'Base Camp to Low Camp', elevation: '2,990m', hours: '5-6 hrs' },
      { day: 5, title: 'Low Camp to Siding to Pokhara', elevation: '1,070m', hours: '4-5 hrs' },
    ],
    whatToBring: ['Layered clothing', 'Camera', 'Trekking poles', 'Snacks', 'First aid'],
  },
  {
    id: 5,
    title: 'Panch Pokhari',
    slug: 'panch-pokhari',
    region: 'Sindhupalchok',
    difficulty: 'Moderate',
    duration: '4-5 Days',
    elevation: '4,100m',
    distance: '45 km',
    season: 'Apr-May, Sep-Oct',
    image: '/pp2.jpg',
    description: 'Five sacred ponds nestled in the high Himalayas of Sindhupalchok. A hidden gem off the beaten path with raw, untouched beauty and deep spiritual significance. Far from tourist crowds, this trail shows you the real Nepal.',
    highlights: ['Five Sacred Lakes', 'Remote Trails', 'Tamang Villages', 'Panoramic Peaks'],
    startPoint: 'Chautara',
    endPoint: 'Chautara',
    itinerary: [
      { day: 1, title: 'Chautara to Thadepati', elevation: '3,490m', hours: '6-7 hrs' },
      { day: 2, title: 'Thadepati to Panch Pokhari', elevation: '4,100m', hours: '5-6 hrs' },
      { day: 3, title: 'Explore Panch Pokhari', elevation: '4,100m', hours: 'Full day' },
      { day: 4, title: 'Panch Pokhari to Chautara', elevation: '1,500m', hours: '7-8 hrs' },
    ],
    whatToBring: ['Warm layers', 'Sleeping bag', 'Rain gear', 'Trekking poles', 'Snacks'],
  },
]

const difficultyColor = {
  'Easy': '#4a7c59',
  'Moderate': '#8b7355',
  'Challenging': '#7c4a4a',
  'Difficult': '#5c3a3a',
}

export default function TrailDetail() {
  const { slug } = useParams()
  const trail = trails.find(t => t.slug === slug)

  if (!trail) return (
    <main style={{ paddingTop: '120px', textAlign: 'center', color: '#78716c' }}>
      <p>Trail not found.</p>
      <Link to="/trails" style={{ color: '#4a5240' }}>← Back to Trails</Link>
    </main>
  )

  return (
    <main style={{ paddingTop: '64px', background: '#fafaf9', minHeight: '100vh' }}>

      {/* Hero Image */}
      <div style={{ height: '85vh', position: 'relative', overflow: 'hidden' }}>
        <img src={trail.image} alt={trail.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,25,23,0.75) 0%, rgba(28,25,23,0.1) 60%)' }} />

        {/* Back button */}
        <Link to="/trails" style={{
          position: 'absolute', top: '32px', left: '32px',
          color: 'rgba(255,255,255,0.85)', textDecoration: 'none',
          fontSize: '0.78rem', letterSpacing: '0.06em',
          display: 'flex', alignItems: 'center', gap: '6px'
        }}>
          ← All Trails
        </Link>

        {/* Hero text */}
        <div style={{ position: 'absolute', bottom: '48px', left: '48px', right: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              {trail.region}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: difficultyColor[trail.difficulty], fontWeight: 500 }}>
              {trail.difficulty}
            </span>
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '24px' }}>
            {trail.title}
          </h1>
          {/* Quick stats */}
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            {[
              { label: 'Duration', value: trail.duration },
              { label: 'Max Elevation', value: trail.elevation },
              { label: 'Distance', value: trail.distance },
              { label: 'Best Season', value: trail.season },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>{s.label}</div>
                <div style={{ fontSize: '0.88rem', color: '#fff', fontWeight: 300 }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px', display: 'grid', gridTemplateColumns: '1fr 340px', gap: '80px', alignItems: 'start' }} className="trail-detail-grid">

        {/* Left */}
        <div>
          {/* Description */}
          <section style={{ marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '24px', height: '1px', background: '#4a5240' }} />
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#78716c' }}>Overview</span>
            </div>
            <p style={{ fontSize: '1rem', color: '#44403c', lineHeight: 1.85, fontWeight: 300 }}>
              {trail.description}
            </p>
          </section>

          {/* Highlights */}
          <section style={{ marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <div style={{ width: '24px', height: '1px', background: '#4a5240' }} />
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#78716c' }}>Highlights</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {trail.highlights.map((h, i) => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 18px', background: '#fff', border: '1px solid #e7e5e4' }}>
                  <span style={{ fontFamily: "'Fraunces', serif", fontSize: '0.75rem', color: '#d6d3d1', fontWeight: 300 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#44403c', fontWeight: 300 }}>{h}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Itinerary */}
          <section style={{ marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <div style={{ width: '24px', height: '1px', background: '#4a5240' }} />
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#78716c' }}>Itinerary</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {trail.itinerary.map((day) => (
                <div key={day.day} style={{ background: '#fff', border: '1px solid #e7e5e4', padding: '20px 24px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'Fraunces', serif", fontSize: '1.1rem', color: '#d6d3d1', fontWeight: 300, minWidth: '32px' }}>
                    {String(day.day).padStart(2, '0')}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.88rem', color: '#1c1917', fontWeight: 400, marginBottom: '4px' }}>{day.title}</div>
                    <div style={{ fontSize: '0.72rem', color: '#a8a29e' }}>{day.elevation} · {day.hours}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What to bring */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '24px', height: '1px', background: '#4a5240' }} />
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#78716c' }}>What to Bring</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {trail.whatToBring.map(item => (
                <span key={item} style={{ fontSize: '0.78rem', padding: '6px 14px', border: '1px solid #e7e5e4', color: '#57534e', fontWeight: 300 }}>
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Right — Sidebar */}
        <div style={{ position: 'sticky', top: '88px' }}>

          {/* Book card */}
          <div style={{ background: '#1c1917', padding: '32px', marginBottom: '16px' }}>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.2rem', fontWeight: 300, color: '#fff', marginBottom: '8px' }}>
              Plan this trek
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '28px', fontWeight: 300, lineHeight: 1.6 }}>
              Connect with a certified local guide and plan your journey with confidence.
            </p>
            <button style={{
              width: '100%', background: '#fafaf9', color: '#1c1917',
              border: 'none', padding: '13px', cursor: 'pointer',
              fontSize: '0.8rem', letterSpacing: '0.06em', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, marginBottom: '10px', transition: 'background 0.2s'
            }}>
              Find a Guide
            </button>
            <button style={{
              width: '100%', background: 'transparent', color: 'rgba(255,255,255,0.6)',
              border: '1px solid rgba(255,255,255,0.15)', padding: '13px', cursor: 'pointer',
              fontSize: '0.8rem', letterSpacing: '0.06em', fontFamily: 'Inter, sans-serif', fontWeight: 300
            }}>
              Save Trail
            </button>
          </div>

          {/* Trail Info Card */}
          <div style={{ background: '#fff', border: '1px solid #e7e5e4', padding: '28px' }}>
            <h4 style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a8a29e', marginBottom: '20px' }}>
              Trail Info
            </h4>
            {[
              { label: 'Start Point', value: trail.startPoint },
              { label: 'End Point', value: trail.endPoint },
              { label: 'Duration', value: trail.duration },
              { label: 'Max Elevation', value: trail.elevation },
              { label: 'Distance', value: trail.distance },
              { label: 'Best Season', value: trail.season },
              { label: 'Difficulty', value: trail.difficulty },
            ].map(info => (
              <div key={info.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f5f5f4' }}>
                <span style={{ fontSize: '0.75rem', color: '#a8a29e', fontWeight: 300 }}>{info.label}</span>
                <span style={{ fontSize: '0.82rem', color: '#1c1917', fontWeight: 400 }}>{info.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .trail-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}