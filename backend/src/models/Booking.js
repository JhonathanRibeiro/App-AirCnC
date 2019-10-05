const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
   date: String,
   approved: Boolean,
   //criando relacionamento com usuario 
   user: {
        type: mongoose.Schema.Types.ObjectId, //ID de objeto
        ref: 'User' // informação de usuario se refere ao model User
    },
    //criando relacionamento como o spot
    spot: {
        type: mongoose.Schema.Types.ObjectId, //ID de objeto
        ref: 'Spot' // informação de usuario se refere ao model Spot
    }
});

module.exports = mongoose.model('Booking', BookingSchema);