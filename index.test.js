const {sequelize} = require('./db');
const {Restaurant} = require('./index')

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
    test('can create a restaurant', async () => {
        const restaurant = await Restaurant.create({ food: 'fries' });
        expect(restaurant.food).toBe('fries');
    })
})