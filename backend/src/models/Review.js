const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        bookingId: { type: mongoose.Schema.Types.ObjectId, required: true },
        customerId: { type: mongoose.Schema.Types.ObjectId, required: true },
        advisorId: { type: mongoose.Schema.Types.ObjectId, required: true },
        rating: Number,
        comment: String
    },
    { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
