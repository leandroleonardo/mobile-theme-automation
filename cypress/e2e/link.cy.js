import {cores, temaFormatado} from '../support/helper-functions';
const component = 'Link';

describe(`${temaFormatado} - Componente "${component}"`, () => {
    
    before(() => {
        cy.acesso(component)
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.link(cor.id);
        });
    });
});