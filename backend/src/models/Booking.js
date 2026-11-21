const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
        customerId: { type: mongoose.Schema.Types.ObjectId, required: true },
        advisorId: { type: mongoose.Schema.Types.ObjectId, required: true },
        topic: String,
        scheduledAt: Date,
        price: Number,
        status: { type: String, default: "pending" }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
