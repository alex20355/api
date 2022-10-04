const { db } = require('../db/sequelize.js')

module.exports = (app) => {
	app.delete('/api/del/:id', (req, res) => {
	db.findByPk(req.params.id)
	.then(dbs => {
			if(dbs === null) {
          		const message = `La donnée demandé n'existe pas. essayez avec un autre identifiant.`
          		return res.status(404).json({ message })
        	}
        	return Pokemon.destroy({ where: { id: dbs.id } })
        	.then(_ => {
          		const message = `Le pokémon avec l'identifiant n°${dbs.id} a bien été supprimé.`
         		res.json({message, data: dbs })
        	})
	})
	.catch(error => {
       const message = `La donnée n'a pas pu être récupéré.`
       res.status(500).json({ message, data: error })
    })
})
}