import {cores, temaFormatado} from '../../support/helper-functions';
const component = 'Abas';

describe(`${temaFormatado} - Cor do componente "${component}"`, () => {
    
    before(() => {
        cy.acesso(component)
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.aba(cor.id, cor.id_grad);
        });
    });
});