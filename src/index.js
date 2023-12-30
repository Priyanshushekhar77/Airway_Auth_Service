const dotenv=  require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
PORT=4000
const express = require('express');
const Apiroutes = require('./routes/index');
// const {} = require('./config/serverconfig');

const app = express();

const startServer = async() => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',Apiroutes);

    app.listen(PORT,async() => {
        console.log(`server start at port:${PORT}`);
    });
}

startServer();

