const router = require('express').Router();
const {
    getUser,
    getUserLogin,
    getUserBySearch } = require('../controllers/users.controller');
const { verifyError } = require('../middlewares/verifyError');
const { verifyAuthantication } = require('../middlewares/verifyAuth');


// router.use(verifyAuthantication);
router.get('/', getUser);
router.get('/search', verifyError, getUserBySearch);
router.get('/:symbol', getUserLogin);

module.exports = router;