const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema(
    {
        advisorId: { type: mongoose.Schema.Types.ObjectId, required: true },
        slots: [
            {
                day: Number,
                startTime: String,
                endTime: String
            }
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Availability", availabilitySchema);
