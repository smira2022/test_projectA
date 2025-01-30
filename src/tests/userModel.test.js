const mongoose = require('mongoose');
const { createUser, User } = require('../functions/userModel.js');



describe('User Model Tests', () =>{
    //jest hook
    afterEach(()=>{
        //Clear all mocks after each test case
        jest.clearAllMocks();
    });

    describe('CreateUser', ()=>{
        // test dtypes, unique email, age boundary, validation/verification, 

        //AAA pattern
        it ('should create new user', async () => {

            //Arrange - setup the variables
            const mockUser = {  name: "Sheena M", 
                                email: "test@yahoo.com", 
                                password: "password", 
                                age: 50}
        
            // Action
            jest.spyOn(User.prototype, 'save').mockResolvedValue(mockUser);
            const result = await createUser('Sheena M', 'test@yahoo.com', 'password', 50);

            //Assert
            expect(result).toEqual(expect.objectContaining(mockUser));
            expect(User.prototype.save).toHaveBeenCalledTimes(1);


        });
        
    });

});


