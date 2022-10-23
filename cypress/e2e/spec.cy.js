describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.findByRole("textbox", { name: /username:/i }).type("test");
    cy.findByLabelText(/password:/i).type("test");
    cy.findByRole("button", { name: /sign in/i }).click();
    // cy.findByRole("link", { name: /logout/i }).click();
    // cy.request({
    //   method: "GET",
    //   url: "https://react.free.beeceptor.com/my/api/path",
    // }).then((response) => {
    //   // expect(response.body).to.have.property("url", "test data");
    //   // expect(response.body[0].name).to.be.a("string");
    //   console.log(response.body[0].name);
    // });
    cy.request({
      method: "GET",
      url: "https://endtoend.free.beeceptor.com/my/api/path",
    }).then(({ body }) => {
      expect(body.length).to.be.greaterThan(1); // more than 1 item is in list
    });
    cy.findByRole("link", { name: /logout/i }).click();
  });
});

// describe('REST API TEST WITH CYPRESS', function(){
//   it('API Test-Headers Validation' , function(){
//   cy.request('https://pokeapi.co/api/v2/pokemon/25/').as('pokemon")
//   cy.get('@pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')
//   } )

//   })
