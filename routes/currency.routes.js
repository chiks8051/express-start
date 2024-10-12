const router = require('express').Router();
const { getCurrency, getCurrencyBySymbol } = require('../controllers/currencies.controllers')

router.get('/', getCurrency);
router.get('/:symbol', getCurrencyBySymbol);

module.exports = router;