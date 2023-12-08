import {cores, temaFormatado} from '../../support/helper-functions';
const component = 'Caixa de checagem';
const simplificado = true;

describe(`${temaFormatado} - Cor do componente "${component}"`, () => {
    
    before(() => {
        cy.acesso(component)
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.checkbox(cor.id);
        });
    });
});