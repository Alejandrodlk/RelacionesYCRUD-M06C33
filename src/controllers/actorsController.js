const db = require('../database/models');
const sequelize = db.sequelize;


const actorsController = {
    'list': (req, res) => {
        db.Actor.findAll({

            include : [
                {
                    association : 'movies',
                    include : [
                        {
                            association : 'genre',
                            attributes : ['name'] // para mostrar solo la columna "name" correspondiente a genero
                        }
                    ]
                }
            ]

           /* include: [   
                {
                    association : 'movies',   // movies se relaciona con actor pero genre NO, POR ESO SE HACE DE ESTA FORMA
                    include : ['genre']
                }
            ] */
        })
            .then(actors => {
                return res.send(actors)
            })
        }

}

module.exports = actorsController;

