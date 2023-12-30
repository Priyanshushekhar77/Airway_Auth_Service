const dotenv=  require('dotenv');
dotenv.config();
PORT=3001
const express = require('express');
// const {} = require('./config/serverconfig');

const app = express();

const startServer = async() => {
    app.listen(PORT,async() => {
        console.log(`server start at port:${PORT}`);
    });
}

startServer();

