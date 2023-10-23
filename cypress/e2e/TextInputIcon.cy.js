import {cores, temaFormatado} from '../support/helper-functions';
const component = 'TextInputIcon';

describe(`${temaFormatado} - Componente "${component}"`, () => {
    
    before(() => {
        cy.acesso(component)
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.textInputIcon(cor.id);
        });
    });
});