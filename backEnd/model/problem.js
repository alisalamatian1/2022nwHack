const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter the title!"]
    },
    body: {
        type: String,
        required: [true, "Please elaborate on the problem!"]
    }
});

module.exports = mongoose.model('Problem', ProblemSchema);