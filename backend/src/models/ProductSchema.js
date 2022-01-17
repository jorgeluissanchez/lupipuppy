const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 500,
    },
    category: {
      type: String,
      required: true,
      maxlength: 50,
    },
    image: {
      type: String,
      required: true,
    },
    starts: {
      type: Number,
      max: 5,
    },
    price: {
      type: Number,
      required: true,
      min: 1,
    },
    brand: {
      type: String,
      required: true,
    },
    isAdmin: Boolean,
    default: false,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Product", productSchema);
