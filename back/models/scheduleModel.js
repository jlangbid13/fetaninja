// scheduleModel.js
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mobile_number: {
    type: String,
    required: true,
  },
  service_options: {
    type: String,
    required: false,
  },
  weight: {
    type: Number,
    required: false,
  },
  laundry_services: {
    type: [String],
    required: false,
  },
  payment: {
    type: String,
    required: false,
  },
  delivery_options: {
    type: String,
    required: false,
  },
  total: {
    type: Number,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
