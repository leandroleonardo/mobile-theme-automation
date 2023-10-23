import {cores, temaFormatado} from '../support/helper-functions';
const component = 'ItemIcon';

describe(`${temaFormatado} - Componente "${component}"`, () => {
    
    before(() => {
        cy.acesso(component)
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.itemIcone(cor.id);
        });
    });
});