const User = require('../models/User');

//Métodos:
//index, show, store, update, destroy.
module.exports = {
    async store(req, res) {
        const email = req.body.email;

        //Busca email pelo id, depois verifica se o msm 
        //existe, se nao existir cria um novo se nao apenas 
        //exibe o msm sem alterar o registro.
        let user = await User.findOne({ email });
        if(!user) {
            user = await User.create({ email });
        }
        return res.json(user);
    }
};