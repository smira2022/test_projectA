//test suite
describe('Login Page', ()=>{
  //pre-condition 
  beforeEach(()=>{
    cy.visit('http://localhost:3000');
  });

  //Positive testing
  it('should login with valid credentials', ()=> {

    //Arrange
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');

    //Act
    cy.get('#login-button').click();

    //Assert
    cy.on('window:alert', (txt)=> {
      expect(txt).to.contains('Login Successful!')
    });

  });

  //Negative testing
  it('should display error message if wrong credentials', ()=> {
    //Arrange
    cy.get('#email').type('test@examples.com');
    cy.get('#password').type('password123');

    //Act
    cy.get('#login-button').click();

    //Assert
    cy.get('#error-message').should(
      'contain',
      'Invalid email or password'
    );
  });


  it('should only submit once', ()=> {
    //Arrange
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');

    //Act
    cy.get('#login-button').click();

    
    //Assert
    cy.get('#submitCount').should('have.text', '1');

  });

});