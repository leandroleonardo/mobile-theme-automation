import { cores, temaFormatado, gradientes } from '../support/helper-functions';
const component = 'Botão';

describe(`${temaFormatado} - Componente "${component}"`, () => {

    before(() => {
        cy.acesso(component)
    })
    
    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.botao(cor.id, cor.id_grad);
        });
    });
});