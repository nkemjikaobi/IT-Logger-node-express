const mongoose = require('mongoose');
const LogSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    attention: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    tech: {
        type: String,
        required: true
    }
})

const Log = mongoose.model('log', LogSchema);

module.exports = Log;