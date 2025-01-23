//Bug found in condition whwre user has only first name
function getUserFullName(user){
    if(!user || !user.firstName){
        throw new Error('Invalid user data')
    }

    return `${user.firstName} ${user.lastName || ''}`.trim() ; 
}

function calculateAge(birthYear, currentYear) {

    //if(isNaN(birthYear) || isNaN(currentYear) || birthYear%1 != 0 || currentYear%1 != 0){
    if(isNaN(birthYear) || isNaN(currentYear) || !Number.isInteger(birthYear) || !Number.isInteger(currentYear)){
        throw new Error('Invalid year');
    }

    const age = currentYear - birthYear;

    //Boundary condition
    if ((age <=0) || (age > 124)) {
        throw new Error('Invalid birth year');
    } else {
        return age
    }
    
}

//Assume that user object has user.firstName & user.lastName
function getUserInitials(user){
    if(!user || !user.firstName || !user.lastName){
        throw new Error('Invalid user data')
    }

    return `${user.firstName.toUppercase().charAt(0)}${user.lastName.toUppercase().charAt(0)}`; 
}

module.exports = {
    getUserFullName,
    calculateAge,
    getUserInitials,
}
