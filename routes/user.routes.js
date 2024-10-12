const router = require('express').Router();
const {
    getUser,
    getUserLogin,
    getUserBySearch } = require('../controllers/users.controller');

router.get('/', getUser);
router.get('/search', getUserBySearch);
router.get('/:symbol', getUserLogin);

module.exports = router;