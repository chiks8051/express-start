const userJson = require('../user.json');



const getUser = (req, res) => {
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


    if (gender && age) {
        return res.send(userJson.data.filter((user) => user.gender === gender && user.dob.age === parseInt(age)))
    } else if (gender) {
        return res.send(userJson.data.filter((user) => user.gender === gender));
    } else if (age) {
        return res.send(userJson.data.filter((user) => user.dob.age === parseInt(age)))
    } else {
        return res.status(400).send({ message: `Please provide correct gender or age` });
    }

}

module.exports = { getUser, getUserLogin, getUserBySearch };