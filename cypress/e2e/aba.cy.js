import {cores, temaFormatado} from '../support/helper-functions';
const component = 'Abas';

describe(`${temaFormatado} - Componente "${component}"`, () => {
    
    before(() => {
        cy.acesso(component)
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.aba(cor.id);
        });
    });
});