const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true});

const connection = mongoose.connection;
connection.once('open', () => console.log('MongoDB database connection successful'));

app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);



app.listen(port, () => console.log(`server is running on port: ${port}`));