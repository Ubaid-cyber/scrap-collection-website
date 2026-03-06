// Import mongoose
import mongoose from "mongoose";

// Create schema for pickup request
const pickupSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  scrapType: {
    type: String,
    required: true
  },

  weight: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  pickupDate: {
    type: String,
    required: true
  },

  status: {
    type: String,
    default: "pending"
  }

}, { timestamps: true });


// Create model
const Pickup = mongoose.model("Pickup", pickupSchema);

export default Pickup;