const { db } = require('../db/sequelize.js')

module.exports = (app) => {
	app.post('/api/add', (req, res) => {
	db.create(req.body)
      .then(dbs => {
        const message = `La donnée ${req.body.name} a bien été crée.`
        res.json({ message, data: dbs })
      })
	.catch(error => {
    	const message = `La donnée n'a pas pu être ajouté.`
        res.status(500).json({ message, data: error })
    })
})

}	