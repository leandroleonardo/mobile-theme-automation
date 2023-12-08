import { cores, temaFormatado } from '../../support/helper-functions';
const component = 'Avaliação';

describe(`${temaFormatado} - Cor do componente "${component}"`, () => {

    before(() => {
        cy.acesso(component)
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.avaliacao(cor.id);
        });
    });
});
