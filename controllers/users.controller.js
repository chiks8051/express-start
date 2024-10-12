const userJson = require('../user.json');


const getUser = (req, res) => {
    res.send(userJson.data);
}


const getUserLogin = (req, res) => {
    const userUuid = userJson.data.find((user) => user.login.uuid === req.params.symbol);
    if (userUuid)
        return res.send(userUuid);
    res.status(404).send({ message: `User with uuid "${req.params.symbol}" is not found.` })
}

const getUserBySearch = (req, res) => {
    const { gender, age } = req.query;
    if (gender && !possibleGender.includes(gender)) {
        return res.status(422).send({ message: `Gender to search can either be 'male' or 'female'` })
    }

    if ((age && isNaN(age)) || Number(age) < 0 || Number(age) > 100) {
        return res.status(400).send({ message: "Invalid age, Please enter age between 1 to 100" })
    }

    if (gender && age) {
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