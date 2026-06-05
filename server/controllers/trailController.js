const Trail = require('../models/Trail')

// Get all trails
exports.getTrails = async (req, res) => {
  try {
    const { difficulty, category, search, sort } = req.query
    let filter = {}

    if (difficulty) filter.difficulty = difficulty
    if (category) filter.category = category
    if (search) filter.title = { $regex: search, $options: 'i' }

    let sortOption = { createdAt: -1 }
    if (sort === 'rating') sortOption = { averageRating: -1 }
    if (sort === 'views') sortOption = { views: -1 }

    const trails = await Trail.find(filter).sort(sortOption).populate('createdBy', 'name avatar')
    res.json({ success: true, count: trails.length, trails })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Get single trail
exports.getTrail = async (req, res) => {
  try {
    const trail = await Trail.findById(req.params.id).populate('createdBy', 'name avatar')
    if (!trail) return res.status(404).json({ error: 'Trail not found' })
    trail.views += 1
    await trail.save()
    res.json({ success: true, trail })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Create trail
exports.createTrail = async (req, res) => {
  try {
    const trail = await Trail.create({ ...req.body, createdBy: req.user._id })
    res.status(201).json({ success: true, trail })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Update trail
exports.updateTrail = async (req, res) => {
  try {
    const trail = await Trail.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!trail) return res.status(404).json({ error: 'Trail not found' })
    res.json({ success: true, trail })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Delete trail
exports.deleteTrail = async (req, res) => {
  try {
    await Trail.findByIdAndDelete(req.params.id)
    res.json({ success: true, message: 'Trail deleted' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}