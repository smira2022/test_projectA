const { getUserFromDatabase } = require('../functions/getUser.js');

//Mocking the entire database module
jest.fn('../src/database');

//test suite or procedure
test('fetch user from database', ()=> {
    jest.fn().mockReturnValueOnce({id: 1, name: 'Sheena M'});

    const user = getUserFromDatabase(1);

    expect(user.name).toBe('Sheena M');
});

