import { cores, temaFormatado } from '../../support/helper-functions';
const component = 'Deslizar';

describe(`${temaFormatado} - Cor do componente "${component}"`, () => {

    before(() => {
        cy.acesso(component)
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.deslizar(cor.id, cor.id_grad);
        });
    });
});
