import {cores, temaFormatado} from '../support/helper-functions';
const component = 'Ícone';

describe(`${temaFormatado} - Componente "${component}"`, () => {
    
    before(() => {
        cy.acesso(component)
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.icone(cor.id);
        });
    });
});