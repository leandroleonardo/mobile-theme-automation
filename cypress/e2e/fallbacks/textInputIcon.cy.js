import { cores, temaFormatado, activeFallBack} from '../../support/helper-functions';
const component = 'textInputIcon';

describe(`${temaFormatado} - Fallback do componente "${component}"`, () => {
    
    before(() => {
        cy.acesso(component)
        activeFallBack('gradient')
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.textInputIcon(cor.id, cor.id_grad);
        });
    });
});