const express = require('express');
const app = express();
const port = 8081;

const { getCurrency, getCurrencyBySymbol } = require('./controllers/currencies.controllers')
const { getUser, getUserLogin, getUserBySearch } = require('./controllers/users.controller');

app.get('/', (req, res) => { res.send('<h1>Currency Database</h1>') })
app.get('/currencies/:symbol', getCurrencyBySymbol)
app.get('/currencies', getCurrency)

app.get('/users', getUser)
app.get('/users/search',getUserBySearch);
app.get('/users/:symbol', getUserLogin);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})