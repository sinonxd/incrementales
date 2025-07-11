describe('Proceso de compra', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fakestoreapi.com/products', { fixture: 'products.json' });
    cy.visit('/');
  });

  it('Debería añadir 3 productos y completar la compra', () => {
    cy.get('.product-card').eq(0).click();
    cy.get('input[name="cantidad"]').clear().type('2');
    cy.get('button.add-to-cart').click();
    cy.go('back');

    cy.get('.product-card').eq(1).click();
    cy.get('input[name="cantidad"]').clear().type('1');
    cy.get('button.add-to-cart').click();
    cy.go('back');

    cy.get('input[placeholder="Buscar productos"]').type('shirt');
    cy.contains('Buscar').click();
    cy.get('.product-card').first().click();
    cy.get('input[name="cantidad"]').clear().type('1');
    cy.get('button.add-to-cart').click();

    cy.get('a[routerlink="/basket"]').click();
    cy.get('input[name="nombre"]').type('Juan');
    cy.get('input[name="apellido"]').type('Pérez');
    cy.get('input[name="direccion"]').type('Calle 123');
    cy.get('input[name="cp"]').type('08001');
    cy.get('input[name="telefono"]').type('3001234567');

    cy.get('button[routerlink="/payment"]').click();
    cy.get('input[name="tarjeta"]').type('4999 9999 9999 9999');
    cy.get('input[name="caducidad"]').type('12/30');
    cy.get('input[name="cvc"]').type('123');
    cy.contains('Pagar').click();

    cy.wait(3000);
    cy.contains('Pago completado').should('exist');
  });
});
