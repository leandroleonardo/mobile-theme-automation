import { cores, temaFormatado, activeFallBack } from '../../support/helper-functions';
const component = 'Botão';

describe(`${temaFormatado} - Fallback do componente "${component}"`, () => {

    before(() => {
        cy.acesso(component)
        activeFallBack('gradient')
    })
    
    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.botao(cor.id, cor.id_grad);
        });
    });
});