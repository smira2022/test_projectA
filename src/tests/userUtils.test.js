//Testing a whole module
const {calculateAge, getUserFullName, getUserInitials} = require('../functions/userUtils.js');

//Test Suite or Procedure
describe('User Utilities', ()=> {

    describe('getUserFullName', ()=>{
        it('should return the full name of the user with first and last name', ()=> {
            const user = {firstName: 'Bob', lastName: 'Smith' };
            expect(getUserFullName(user)).toBe('Bob Smith');
        });

        it('should return the full name of the user with first and last name', ()=> {
            const user = {firstName: 'Bob', lastName: '' };
            expect(getUserFullName(user)).toBe('Bob');
        });

    });

    describe('calculateAge', ()=>{
        it('should calculate the correct age based on birth year & current year', ()=> {
            const birthYear = 2000;
            const currentYear = 2025;
            expect(calculateAge(birthYear, currentYear)).toBe(25);
        });  

        it('should error if one of the input is a float & not an integer', ()=> {
            const birthYear = 2.00;
            const currentYear = 2025;
            expect(() => calculateAge(birthYear, currentYear).toThrow('Invalid year'));
        });

        //it('should error if one of the input is a float & not an integer', ()=> {
        //    const birthYear = 1989;
        //    const currentYear = 2025;
        //    expect(() => calculateAge(birthYear, currentYear).toThrow('Invalid birth year'));
        //});
    

        
    });



});