import { cores, temaFormatado, activeFallBack} from '../../support/helper-functions';
const component = 'Avaliação';

describe(`${temaFormatado} - Fallback do componente "${component}"`, () => {

    before(() => {
        cy.acesso(component)
        activeFallBack()
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.avaliacao(cor.id);
        });
    });
});
