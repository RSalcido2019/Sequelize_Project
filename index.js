const {sequelize, DataTypes, Model} = require('./db');
const {Menu} = require('./Menu');
const {Restaurant} = require('./Restaurant');
const {Parking} = require('./Parking');

//Create our Association!
Menu.belongsTo(Restaurant) //adds a foreign key on the musician table, for the band they belong to
Restaurant.hasMany(Menu) //gives us Sequelize magic methods
// Associatio between menu and restaurnat
Parking.belongsTo(Restaurant)

 module.exports={Restaurant, Menu, Parking};