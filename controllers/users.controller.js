const userJson = require('../user.json');

const { searchUserValidation } = require('../validation/user.validator');


const getUser = (req, res) => {
    console.log(process.env.PASSWORD)
    if (req.headers.authorization !== process.env.PASSWORD)
      return res.status(401).send({ message: "Unauthorized" });
    res.send(userJson.data);
  };


const getUserLogin = (req, res) => {
    const userUuid = userJson.data.find((user) => user.login.uuid === req.params.symbol);
    if (userUuid)
        return res.send(userUuid);
    res.status(404).send({ message: `User with uuid "${req.params.symbol}" is not found.` })
}

const getUserBySearch = (req, res) => {
    const { gender, age } = req.query;
    const { error } = searchUserValidation.validate({ gender, age });

    if (error) {
        res.status(400).send({ message: error.details[0].message });
    }

    else if (gender && age) {
        res.send(userJson.data.filter((user) => user.gender === gender && user.dob.age === parseInt(age)))
    } else if (gender) {
        res.send(userJson.data.filter((user) => user.gender === gender));
    } else if (age) {
        res.send(userJson.data.filter((user) => user.dob.age === parseInt(age)))
    } else {
        res.status(400).send({ message: `Please provide correct gender or age` });
    }

}

module.exports = { getUser, getUserLogin, getUserBySearch };