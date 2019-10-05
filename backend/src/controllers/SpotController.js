const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
//retorna a listagem dos Spots
 async index (req, res) {
    const { tech } = req.query;

    const spots = await Spot.find({ techs: tech });

    return res.json(spots);
 },
//Criando novo spot com upload de imagem
 async store(req, res) {
     const { filename } = req.file;
     const { company, techs, price } = req.body;
     const { user_id } = req.headers;

     const user = await User.findById(user_id);
     if(!user) {
         return res.status(400).json({ error: 'Este usuário não existe!' });
     }

     const spot = await Spot.create({
         user: user_id,
         thumbnail: filename,
         company,
         techs: techs.split(',').map(tech => tech.trim()), //trim() tira o espaço antes e depois de uma string
         price
     });

    return res.json(spot);
 }
};