const { db } = require('../db/sequelize.js')

module.exports = (app) => {
	app.get('/api/findAll', (req, res) => {
	db.findAll()
	.then(dbs => {
        const message = 'La liste des données a bien été récupéré.'
        res.json({ message, data: dbs })
    })
    .catch(error => {
        const message = `La liste des données n'a pas pu être récupéré`
        res.status(500).json({ message, data: error })
    })
})
}