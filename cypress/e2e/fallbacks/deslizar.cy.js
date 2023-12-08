import { cores, temaFormatado, activeFallBack } from '../../support/helper-functions';
const component = 'Deslizar';

describe(`${temaFormatado} - Fallback do componente "${component}"`, () => {

    before(() => {
        cy.acesso(component)
        activeFallBack('gradient')
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.deslizar(cor.id, cor.id_grad);
        });
    });
});
