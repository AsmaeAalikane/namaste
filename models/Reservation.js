const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  campervanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Campervan' },
  pickLocation: String,
  dropLocation: String,
  pickDate: Date,
  dropDate: Date,
  pickTime: String,
  dropTime: String,
});

module.exports = mongoose.model('Reservation', ReservationSchema);
