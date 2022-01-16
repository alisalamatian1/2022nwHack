const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter the title!"]
    },
    body: {
        type: String,
        required: [true, "Please elaborate on the problem!"]
    },
    likeCount: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Problem', ProblemSchema);