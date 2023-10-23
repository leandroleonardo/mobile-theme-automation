import {cores, temaFormatado} from '../support/helper-functions';
const component = 'Caixa de checagem';
const simplificado = true;

describe(`${temaFormatado} - Componente "${component}"`, () => {
    
    before(() => {
        cy.acesso(component)
        cy.wait(1000)
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.checkbox(cor.id);
        });
    });
});