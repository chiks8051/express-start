const { searchUserValidation } = require('../validation/user.validator');


const verifyError = (req, res, next) => {
    const { gender, age } = req.query;
    const { error } = searchUserValidation.validate({ gender, age });
    if (error) {
        return res.status(400).send({ message: error.details[0].message });
    }
    next();
}

module.exports = { verifyError };