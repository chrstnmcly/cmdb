const mongoose = require('mongoose');
const swSchema = new mongoose.Schema({

    brand: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        required: true,
        default: Date.now,
        get: function(value) {
            return value.toISOString().slice(0, 10);
        }
    },
    dateUpdated: {
        type: Date,
        default: null,
        get: function(value) {
          if (!value) return null;
          return value.toISOString().split("T")[0]; // Keep only the date portion (YYYY-MM-DD)
        },
      },
      status: {
        type: String,
        enum: ['stock', 'delisted'],
        default: 'stock',
      },
});

module.exports = mongoose.model("sw", swSchema);
