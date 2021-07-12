const{sequelize, DataTypes, Model} = require('./db');

class Parking extends Model {}

Parking.init({
    paid: DataTypes.BOOLEAN
}, {
    sequelize
})

module.exports = {Parking}