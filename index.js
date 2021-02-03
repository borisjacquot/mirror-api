const express = require('express');
const app = express();
require('dotenv').config();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use('/posts', postsRoutes);

app.listen(process.env.PORT, () => console.log('Server started on port ' + process.env.PORT));
