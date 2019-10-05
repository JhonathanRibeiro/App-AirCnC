const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String], //array de string(vetor com várias strings dentro)
    user: {
        type: mongoose.Schema.Types.ObjectId, //ID de objeto
        ref: 'User' // informação de usuario se refere ao model User
    }
}, {
    //Toda vez que um spot for convertido para JSON
    //calcule os virtuals automaticamente
    toJSON: {
        virtuals: true,
    }
});

SpotSchema.virtual('thumbnail_url').get(function() {
    return `http://192.168.56.1:3333/files/${this.thumbnail}`;
});

module.exports = mongoose.model('Spot', SpotSchema);