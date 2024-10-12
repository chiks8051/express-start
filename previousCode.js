const http = require('http');
const port = 8081;

const localDate = new Date().toLocaleDateString();
const localTime = new Date().toLocaleTimeString();

const serverInfo = {
    serverName: "Crio Server",
    version: "1.0.0",
    currentDate: new Date().toDateString(),
    currentTime: new Date().toTimeString(),
};


const server = http.createServer((req, res) => {
    console.log("Hello from Server started");


    res.write(`<h1>server created at ${localDate} at ${localTime}</h1>`);
    res.write(`\nserverName: ${serverInfo.serverName}\n version: ${serverInfo.version}\n currentDate: ${serverInfo.currentDate}, \ncurrentTime: ${serverInfo.currentTime}`);

    res.end();
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

const http = require('http');
const port = 8081;

// const localDate = new Date().toLocaleDateString();
// const localTime = new Date().toLocaleTimeString();

const serverInfo = {
    serverName: "Crio Server",
    version: "1.0.0",
    currentDate: new Date().toDateString(),
    currentTime: new Date().toTimeString(),
};


const server = http.createServer((req, res) => {
    console.log("Hello from Server started");


    // res.write(`<h1>server created at ${localDate} at ${localTime}</h1>`);
    // res.write(`{serverName: ${serverInfo.serverName}, version: ${serverInfo.version}, currentDate: ${serverInfo.currentDate}, currentTime: ${serverInfo.currentTime}}`);
    res.writeHead(200, {'content-type': 'application/json'})
    res.write(JSON.stringify(serverInfo));

    res.end();
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
const http = require('http');
const port = 8081;

// const localDate = new Date().toLocaleDateString();
// const localTime = new Date().toLocaleTimeString();

const serverInfo = {
    serverName: "Crio Server",
    version: "1.0.0",
    currentDate: new Date().toDateString(),
    currentTime: new Date().toTimeString(),
};


const server = http.createServer((req, res) => {
    console.log("Hello from Server started");


    if (req.url === '/search') {
        res.writeHead(200, { 'content-type': 'application/json' })
        res.write(JSON.stringify(serverInfo));
        res.end();
    }else{
        res.writeHead(404, { 'content-type': 'application/json' });
        res.write('<h1> Hello from Server </h1>');
        res.end();
    }

});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

===========================================================================================================const http = require('http');
const port = 8081;
const currencyJson = require('./currency.json');


const server = http.createServer((req, res) => {
    console.log(req);

    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h1>Currency Database</h1>');
            res.end();
            break;

        case '/currencies':
            res.writeHead(200, { 'content-type': 'application/json' });
            res.write(JSON.stringify(currencyJson));
            res.end();
            
        case '/currencies/:symbol':
            console.log(req.params);
            res.write()
            res.end();
        default:
            res.write('Not Found');
            res.end();
            break;
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

===========================================================================================================================
