const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://' + process.env.DB_USER +':' + process.env.DB_PASS + '@dev.dqr3s.mongodb.net/mirror',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));