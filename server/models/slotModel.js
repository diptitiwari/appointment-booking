const mongoose = require('mongoose');

const slotSchema = mongoose.Schema({
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
});
module.exports = mongoose.model('slots', slotSchema);
