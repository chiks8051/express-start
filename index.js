const express= require("express");
require('dotenv').config();
const app = express();
const port = 8081;

const userRouter = require('./routes/user.routes');
const currencyRouter = require('./routes/currency.routes')


app.use('/currencies',currencyRouter);
app.use('/users', userRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})