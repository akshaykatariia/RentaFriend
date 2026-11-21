const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
    {
        bookingId: { type: mongoose.Schema.Types.ObjectId, required: true },
        amount: Number,
        status: { type: String, default: "created" } // created | succeeded | failed
    },
    { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
