/// <reference types='cypress' />
describe('Buscar dispositivo', () => {
    it('Buscar dispositivo especifico', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/7',
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal('7')
            expect(response.body.name).to.equal('Apple MacBook Pro 16')
        })
    })

    it('Buscar dispositivo inexistente', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/dasdasdasdasda3',
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(404)
            expect(response.body.error).to.equal('Oject with id=dasdasdasdasda3 was not found.')
        })
    })
})