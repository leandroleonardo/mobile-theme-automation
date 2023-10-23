import {cores, temaFormatado} from '../support/helper-functions';
const component = 'toggle';

describe(`${temaFormatado} - Componente "${component}"`, () => {
    
    before(() => {
        cy.acesso(component)
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.toggle(cor.id);
        });
    });
});