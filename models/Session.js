const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },

    currentStep: {
        type: Number,
        default: 1
    },

    completed: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model(
    "Session",
    SessionSchema
);