const { Sequelize, DataTypes } = require('sequelize')
const dbdefine = require('../models/dbdefine')

let sequelize = new Sequelize('info301', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: true
  })

const db = dbdefine(sequelize, DataTypes)

const initDb = () => {
  return sequelize.sync().then(_ => {
    console.log('La base de donnée a été initialisée !')
  })
}

module.exports = { 
  sequelize,db,initDb
}