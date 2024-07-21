const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const { v4: uuidv4 } = require("uuid");
const crypto = require('crypto');

const propertySchema = new Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    propertyId: {
        type: String,
        // default: uuidv4,
        unique: true,
      },
    title: {
      type: String,
      trim: true,
    },
    price: {
        type: Number,
        set: v => parseFloat(v.replace(/,/g, '')),
    },
    location: {
        type: String,
    },
    feature: {
        type: String,
    },
    status: {
        type: String,
    },
    bedroom: {
        type: String,
    },
    bathroom: {
        type: String,
    },
    images: {
      type: [String],
    },
    imagePublicId: {
      type: String,
    },
  },
  { timestamps: true }
);

propertySchema.pre('save', function(next) {
    if (this.isNew) {
      this.propertyId = crypto.randomInt(100000000000, 999999999999).toString(); // Generate 12-digit number
    }
    next();
  });

const Property = mongoose.model("Property", propertySchema);
module.exports = Property;
