import { cores, temaFormatado } from '../support/helper-functions';
const component = 'Deslizar';

describe(`${temaFormatado} - Componente "${component}"`, () => {

    before(() => {
        cy.acesso(component)
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.deslizar(cor.id);
        });
    });
});
