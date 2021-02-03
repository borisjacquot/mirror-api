const mongoose = require('mongoose');

const PostsModel = mongoose.model(
    "mirror",
    {
        name: {
            type: String,
            required: true
        },
        news: {
            type: String,
            required: true
        },
        calendar: {
            type: String,
            required: true
        }
    },
    "data"
);

module.exports = { PostsModel };