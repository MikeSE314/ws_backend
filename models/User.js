'use strict'

const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory')

class User extends Model {}
User.init({
  username: DataTypes.STRING
}, { sequelize, modelName: 'user' })

User.sync()

module.exports = User
