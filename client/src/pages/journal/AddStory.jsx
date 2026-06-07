import { useState } from 'react'
import { Link } from 'react-router-dom'

const types = ['Trek', 'Ride', 'Travel', 'Guide', 'Other']
const trails = ['Annapurna Base Camp', 'Everest Base Camp', 'Gosaikunda', 'Mardi Himal', 'Panch Pokhari', 'Other']

export default function AddStory() {
  const [form, setForm] = useState({
    title: '',
    type: '',
    trail: '',
    excerpt: '',
    story: '',
    image: null,
    imagePreview: null,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null })
  }

  const handleImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      setForm({
        ...form,
        image: file,
        imagePreview: URL.createObjectURL(file)
      })
    }
  }

  const validate = () => {
    const e = {}
    if (!form.title.trim()) e.title = 'Title is required'
    if (form.title.trim().length < 10) e.title = 'Title must be at least 10 characters'
    if (!form.type) e.type = 'Please select a type'
    if (!form.trail) e.trail = 'Please select a trail'
    if (!form.excerpt.trim()) e.excerpt = 'A short excerpt is required'
    if (form.excerpt.trim().length < 50) e.excerpt = 'Excerpt must be at least 50 characters'
    if (!form.story.trim()) e.story = 'Your story is required'
    if (form.story.trim().length < 200) e.story = `Story must be at least 200 characters (currently ${form.story.trim().length})`
    if (!form.image) e.image = 'Please add a cover photo'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length > 0) {
      setErrors(e)
      return
    }
    setSubmitted(true)
  }

  const inputStyle = (field) => ({
    width: '100%',
    padding: '13px 16px',
    border: `1px solid ${errors[field] ? '#c0392b' : '#e7e5e4'}`,
    background: '#fff',
    fontSize: '0.9rem',
    color: '#1c1917',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 300,
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border 0.2s',
  })

  if (submitted) return (
    <main style={{ paddingTop: '64px', minHeight: '100vh', background: '#fafaf9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', maxWidth: '400px', padding: '32px' }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: '3rem', marginBottom: '16px' }}>🏔️</div>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.8rem', fontWeight: 300, color: '#1c1917', marginBottom: '12px' }}>
          Story submitted!
        </h2>
        <p style={{ color: '#78716c', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '32px', fontWeight: 300 }}>
          Your story has been submitted for review. Once approved it will appear in the community journal.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <Link to="/journal" style={{ background: '#1c1917', color: '#fafaf9', padding: '11px 24px', fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.06em' }}>
            View Stories
          </Link>
          <button onClick={() => { setSubmitted(false); setForm({ title: '', type: '', trail: '', excerpt: '', story: '', image: null, imagePreview: null }) }}
            style={{ border: '1px solid #e7e5e4', background: 'none', color: '#57534e', padding: '11px 24px', fontSize: '0.8rem', cursor: 'pointer', letterSpacing: '0.06em' }}>
            Add Another
          </button>
        </div>
      </div>
    </main>
  )

  return (
    <main style={{ paddingTop: '64px', minHeight: '100vh', background: '#fafaf9' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <Link to="/journal" style={{ fontSize: '0.78rem', color: '#a8a29e', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
            ← Back to Stories
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ width: '24px', height: '1px', background: '#4a5240' }} />
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#78716c' }}>Share Your Journey</span>
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 300, color: '#1c1917', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Tell your<br />
            <span style={{ fontStyle: 'italic', color: '#4a5240' }}>story.</span>
          </h1>
          <p style={{ color: '#78716c', fontSize: '0.88rem', lineHeight: 1.7, marginTop: '14px', fontWeight: 300 }}>
            Your experience could inspire the next trekker. Write honestly — the hard days matter as much as the beautiful ones.
          </p>
        </div>

        {/* Form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* Cover Photo */}
          <div>
            <label style={{ fontSize: '0.7rem', color: '#78716c', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
              Cover Photo *
            </label>
            {form.imagePreview ? (
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden', cursor: 'pointer' }} onClick={() => document.getElementById('imageInput').click()}>
                <img src={form.imagePreview} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,25,23,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 1}
                  onMouseLeave={e => e.currentTarget.style.opacity = 0}>
                  <span style={{ color: '#fff', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Change photo</span>
                </div>
              </div>
            ) : (
              <div onClick={() => document.getElementById('imageInput').click()}
                style={{ border: `2px dashed ${errors.image ? '#c0392b' : '#e7e5e4'}`, height: '180px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: '#fff', transition: 'border 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#1c1917'}
                onMouseLeave={e => e.currentTarget.style.borderColor = errors.image ? '#c0392b' : '#e7e5e4'}>
                <span style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📷</span>
                <span style={{ fontSize: '0.82rem', color: '#78716c', fontWeight: 300 }}>Click to upload cover photo</span>
                <span style={{ fontSize: '0.72rem', color: '#a8a29e', marginTop: '4px' }}>JPG, PNG, WEBP — max 10MB</span>
              </div>
            )}
            <input id="imageInput" type="file" accept="image/*" onChange={handleImage} style={{ display: 'none' }} />
            {errors.image && <p style={{ color: '#c0392b', fontSize: '0.75rem', marginTop: '6px' }}>{errors.image}</p>}
          </div>

          {/* Title */}
          <div>
            <label style={{ fontSize: '0.7rem', color: '#78716c', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
              Story Title *
            </label>
            <input name="title" value={form.title} onChange={handleChange}
              placeholder="e.g. Three Days Above the Clouds at Gosaikunda"
              style={inputStyle('title')}
              onFocus={e => e.target.style.borderColor = '#1c1917'}
              onBlur={e => e.target.style.borderColor = errors.title ? '#c0392b' : '#e7e5e4'} />
            {errors.title && <p style={{ color: '#c0392b', fontSize: '0.75rem', marginTop: '6px' }}>{errors.title}</p>}
          </div>

          {/* Type + Trail */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '0.7rem', color: '#78716c', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                Story Type *
              </label>
              <select name="type" value={form.type} onChange={handleChange}
                style={{ ...inputStyle('type'), cursor: 'pointer', appearance: 'none' }}>
                <option value="">Select type</option>
                {types.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.type && <p style={{ color: '#c0392b', fontSize: '0.75rem', marginTop: '6px' }}>{errors.type}</p>}
            </div>
            <div>
              <label style={{ fontSize: '0.7rem', color: '#78716c', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                Trail *
              </label>
              <select name="trail" value={form.trail} onChange={handleChange}
                style={{ ...inputStyle('trail'), cursor: 'pointer', appearance: 'none' }}>
                <option value="">Select trail</option>
                {trails.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.trail && <p style={{ color: '#c0392b', fontSize: '0.75rem', marginTop: '6px' }}>{errors.trail}</p>}
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label style={{ fontSize: '0.7rem', color: '#78716c', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
              Short Excerpt * <span style={{ color: '#a8a29e', textTransform: 'none', letterSpacing: 0 }}>(shown on story cards — min 50 chars)</span>
            </label>
            <textarea name="excerpt" value={form.excerpt} onChange={handleChange}
              placeholder="A compelling one or two sentence hook that draws readers in..."
              rows={3}
              style={{ ...inputStyle('excerpt'), resize: 'vertical' }}
              onFocus={e => e.target.style.borderColor = '#1c1917'}
              onBlur={e => e.target.style.borderColor = errors.excerpt ? '#c0392b' : '#e7e5e4'} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {errors.excerpt ? <p style={{ color: '#c0392b', fontSize: '0.75rem', marginTop: '6px' }}>{errors.excerpt}</p> : <span />}
              <span style={{ fontSize: '0.7rem', color: '#a8a29e', marginTop: '6px' }}>{form.excerpt.length} / 50 min</span>
            </div>
          </div>

          {/* Full Story */}
          <div>
            <label style={{ fontSize: '0.7rem', color: '#78716c', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
              Your Story * <span style={{ color: '#a8a29e', textTransform: 'none', letterSpacing: 0 }}>(min 200 characters)</span>
            </label>
            <textarea name="story" value={form.story} onChange={handleChange}
              placeholder="Write your full story here. Be honest — the tough moments are as valuable as the breathtaking ones. Describe what you saw, felt, and learned on the trail..."
              rows={12}
              style={{ ...inputStyle('story'), resize: 'vertical', lineHeight: 1.7 }}
              onFocus={e => e.target.style.borderColor = '#1c1917'}
              onBlur={e => e.target.style.borderColor = errors.story ? '#c0392b' : '#e7e5e4'} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {errors.story ? <p style={{ color: '#c0392b', fontSize: '0.75rem', marginTop: '6px' }}>{errors.story}</p> : <span />}
              <span style={{ fontSize: '0.7rem', color: form.story.length >= 200 ? '#4a5240' : '#a8a29e', marginTop: '6px', fontWeight: form.story.length >= 200 ? 500 : 300 }}>
                {form.story.length} / 200 min {form.story.length >= 200 ? '✓' : ''}
              </span>
            </div>
          </div>

          {/* Submit */}
          <div style={{ display: 'flex', gap: '12px', paddingTop: '8px' }}>
            <button onClick={handleSubmit} style={{
              background: '#1c1917', color: '#fafaf9', border: 'none',
              padding: '14px 32px', fontSize: '0.82rem', letterSpacing: '0.06em',
              cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: 400,
              transition: 'background 0.2s'
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#4a5240'}
              onMouseLeave={e => e.currentTarget.style.background = '#1c1917'}>
              Submit Story
            </button>
            <Link to="/journal" style={{
              border: '1px solid #e7e5e4', color: '#78716c',
              padding: '14px 24px', fontSize: '0.82rem', letterSpacing: '0.06em',
              textDecoration: 'none', fontWeight: 300, transition: 'all 0.2s'
            }}>
              Cancel
            </Link>
          </div>

        </div>
      </div>
    </main>
  )
}