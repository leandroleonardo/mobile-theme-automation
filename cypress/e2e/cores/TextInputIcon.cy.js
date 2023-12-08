import { cores, temaFormatado} from '../../support/helper-functions';
const component = 'textInputIcon';

describe(`${temaFormatado} - Cor do componente "${component}"`, () => {
    
    before(() => {
        cy.acesso(component)
    })

    cores.forEach((cor) => {
        it(`${cor.nome}`, () => {
            cy.textInputIcon(cor.id, cor.id_grad);
        });
    });
});