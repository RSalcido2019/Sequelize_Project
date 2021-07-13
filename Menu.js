const {sequelize, DataTypes, Model} = require('./db');


// Create a Menu Table
class Menu extends Model {}

// Create attributes for menu model
Menu.init({
	
    meal: DataTypes.ENUM('Breakfast', 'Lunch', 'Dinner')
    
}, {
	sequelize
})


module.exports = { Menu }