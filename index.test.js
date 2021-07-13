const {sequelize} = require('./db');
const {Restaurant, Menu, Parking} = require('./index');

describe('Restaurant', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a restaurant', async () => {
        const restaurant = await Restaurant.create({ name: 'Ronalds' });
        expect(restaurant.name).toBe('Ronalds');
    })
    test('can create a food', async () => {
        const testrestaurant = await Restaurant.create({ food: 'Fries' });
        expect(testrestaurant.food).toBe('Fries');
    })
    test('has a menu', async () => {
        const testmenu = await Menu.create({ meal: 'Lunch' })
        expect(testmenu.meal).toBe('Lunch')
    })
    test('has parking', async () => {
        const testparking = await Parking.create({ paid: 'true'})
        expect(testparking.paid).toBe(true)
    })
    
})