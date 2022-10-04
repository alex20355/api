const { db } = require('../db/sequelize.js')

module.exports = (app) => {
	app.put('/api/update/:id', (req, res) => {
	const id = req.params.id
    Pokemon.update(req.body, {where: { id: id }})
    .then(_ => {
    return db.findByPk(id).then(dbs => {
        if(dbs === null) {
          const message = `La donnée demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }
        const message = `La donnée ${dbs.name} a bien été modifié.`
        res.json({message, data: dbs })
     })
    .catch(error => {
    	const message = `La donnée n'a pas pu être modifié. Réessayez dans quelques instants.`
      	res.status(500).json({ message, data: error })
    })
	})
})
}