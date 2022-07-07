require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");

// get host information
const networkAdresses = (() => {
    const networkInterfaces = require("os").networkInterfaces();

    return Object.keys(networkInterfaces).reduce(
        (networkAdresses, key) => {
            const interfaceType = networkInterfaces[key][0].internal ? "local" : "network";
            const interfaceAdresses = networkInterfaces[key].reduce(
                (interfaceAddress, connection) =>
                    connection.family === "IPv4" ? [
                        ...interfaceAddress,
                        connection.address === '127.0.0.1' ? 'localhost' : connection.address
                    ]
                        : interfaceAddress,
                [] //interfaceAddress
            );
            return {
                ...networkAdresses,
                [interfaceType]: [
                    ...networkAdresses[interfaceType],
                    ...interfaceAdresses,
                ],
            };
        },
        { local: [], network: [] } //networkAdresses
    );
})();

// server config
const app = express();
const PORT = process.env.PORT || 5000;

// static files config
app.use(express.static(path.join(__dirname, './build')));

// routes config
const serveAPIResponse = async (req, res, next) => {
    const query = req.query;
    if (Object.keys(query).length === 0) return next();
    try {
        const { data, status } = await axios.request({
            baseURL: "https://gnews.io/api/v4",
            url: req.path,
            params: {
                ...query,
                token: process.env.TOKEN,
            },
            timeout: 10000,
        });
        res.status(status).json(data);
    }
    catch (err) {
        if (err.response) {
            const { response: { data, status } } = err;
            res.status(status).json(data);
            return;
        }
        res.status(504).json({ errors: ["Can not reach the server"] });
    };
};
app.get('/top-headlines', serveAPIResponse);
app.get('/search', serveAPIResponse);
app.use((_, res) => res.sendFile('./build/index.html', { root: __dirname }));

//start the server
app.listen(PORT, (err) => {
    if (err) console.error(err);
    console.log("Server is running on:");
    console.log(`Local: http://${networkAdresses.local.join(`:${PORT} http://`)}:${PORT}`);
    if (networkAdresses.network.length === 0) return;
    console.log(`On Your Network: http://${networkAdresses.network.join(`:${PORT} http://`)}:${PORT}`);
});
