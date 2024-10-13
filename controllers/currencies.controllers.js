const currencyJson = require('../currency.json');


getCurrency = (req, res) => {
    const reqCurrency = currencyJson.data.filter((curr) => curr.min_size === req.query.min_value);
    if (req.query.min_value)
        return res.send(reqCurrency);
    res.send(currencyJson.data);
};

getCurrencyBySymbol = (req, res) => {
    const reqCurrency = currencyJson.data.find((curr) => curr.id === req.params.symbol.toUpperCase());
    if (reqCurrency)
        return res.send(reqCurrency);
    res.status(404).send({ message: `Invalid Symbol ${req.params.symbol}` });
};

module.exports = { getCurrency, getCurrencyBySymbol }

