const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const dbConnection = require('./databaseConnection');
const roomsRouter = require('./router/roomsRouter');
const userRouter = require('./router/user.Router')


const app = express();
app.use(express.json());
app.use('/api/rooms', roomsRouter);
app.use('/api/users', userRouter);
const port = process.env.PORT;
dbConnection.Connection;
app.listen(port, () => console.log(`server listening on ${port}`));