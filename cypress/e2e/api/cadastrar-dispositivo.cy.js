/// <reference types='cypress' />
describe('Cadastrar dispositivo', () => {
    it('Cadastrar dispositivo com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body: {
                "name": "Zenfone BH1994",
                "data": {
                    "year": 2025,
                    "price": 199.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "2 TB"
                }
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.name).to.equal('Zenfone BH1994')
            expect(response.body.name).to.contain('Zenfone')
        })
    })
})