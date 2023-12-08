import {cores, temaFormatado, activeFallBack} from '../../support/helper-functions';
const component = 'Abas';

describe(`${temaFormatado} - Fallback do componente "${component}"`, () => {
    
    before(() => {
        cy.acesso(component)
        activeFallBack('gradient')
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.aba(cor.id, cor.id_grad);
        });
    });
});