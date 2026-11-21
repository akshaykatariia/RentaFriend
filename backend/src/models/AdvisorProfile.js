const mongoose = require("mongoose");

const advisorProfileSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, required: true },
        headline: String,
        bio: String,
        expertise: [String],
        sessionRate: Number,
        profilePhoto: String
    },
    { timestamps: true }
);

module.exports = mongoose.model("AdvisorProfile", advisorProfileSchema);
