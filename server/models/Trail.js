const mongoose = require('mongoose')

const trailSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    region: String,
    district: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Moderate', 'Challenging', 'Difficult'],
    required: true
  },
  duration: String,
  distance: String,
  elevation: String,
  season: [String],
  highlights: [String],
  images: [String],
  coverImage: String,
  category: {
    type: String,
    enum: ['trek', 'hike', 'ride', 'tour'],
    default: 'trek'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  averageRating: {
    type: Number,
    default: 0
  },
  totalReviews: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  }
}, { timestamps: true })

module.exports = mongoose.model('Trail', trailSchema)