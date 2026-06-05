const User = require('../models/User')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' })
}

// Register
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body
  try {
    const userExists = await User.findOne({ email })
    if (userExists) return res.status(400).json({ error: 'Email already registered' })

    const user = await User.create({ name, email, password, role: role || 'traveler' })
    const token = generateToken(user._id)

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      }
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) return res.status(401).json({ error: 'Invalid credentials' })

    const isMatch = await user.matchPassword(password)
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' })

    const token = generateToken(user._id)

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      }
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Get current user
exports.getMe = async (req, res) => {
  res.json({ success: true, user: req.user })
}