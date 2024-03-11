const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const dbConnection = require('./databaseConnection');
const router = require('./router/roomsRouter');


const app = express();
app.use(express.json());
app.use('/api/rooms', router);
const port = process.env.PORT;
dbConnection.Connection;
app.listen(port, () => console.log(`server listening on ${port}`));