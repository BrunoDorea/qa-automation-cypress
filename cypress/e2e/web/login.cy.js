/// <reference types='cypress' />
describe('Login', () => {
    it('Login com sucesso', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('bruno@qazando.com')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('#swal2-title').should('have.text', 'Login realizado')
    })

    it ('Login - Email inválido', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('bruno')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })

    it ('Login - Email vazio', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })

    it('Login - Senha inválido', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('bruno@qazando.com')
        cy.get('#password').type('123')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    })

    it('Login - Senha vazia', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('bruno@qazando.com')
        cy.get('#password').type('123')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    })

    it('Login - Email e senha vazios', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })
})