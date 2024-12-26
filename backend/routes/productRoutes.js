const express = require('express');
const { manualMatch, getAllMappings, autoMatch } = require('../controllers/productController');

const router = express.Router();

router.post('/manual', manualMatch);
router.get('/', getAllMappings);
router.post('/auto', autoMatch);

module.exports = router;
