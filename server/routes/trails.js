const router = require('express').Router()
const { getTrails, getTrail, createTrail, updateTrail, deleteTrail } = require('../controllers/trailController')
const { protect, authorize } = require('../middleware/auth')

router.get('/', getTrails)
router.get('/:id', getTrail)
router.post('/', protect, authorize('admin', 'guide'), createTrail)
router.put('/:id', protect, authorize('admin', 'guide'), updateTrail)
router.delete('/:id', protect, authorize('admin'), deleteTrail)

module.exports = router