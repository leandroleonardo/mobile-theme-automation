import * as func from './helper-functions';
import chaiColors from 'chai-colors'

const tema = Cypress.env('tema');

chai.use(chaiColors)

Cypress.Commands.addAll({

  sessao(usuario, senha) {
    cy.session((usuario, senha), () => {
      cy.visit('/login')
      cy.get('#crn-input-username').type(usuario)
      cy.get('#crn-input-password').type(senha)
      cy.get('form').contains('Entrar').click()
      cy.contains('h1', 'Views').should('be.visible')
    })
  },

  acesso(pagina) {

    cy.sessao('admin', 'admin')

    if (func.getViewByComponent(pagina) === 1) {
      cy.visit('/logged/form1')
    }
    else if (func.getViewByComponent(pagina) === 2) {
      cy.visit('/logged/form2')
    }

  },

  avaliacao(cor) {
    const estrela = func.singleGet(`[id="rating-${cor}"]`);
    estrela.should("have.css", "color").and("be.colored", func.getHexadecimal(cor));
  },

  botao(cor, gradiente) {
    if (func.gradientes.includes(tema)) {
      if (tema === 'aquamarine' && ['claro', 'informacao'].includes(cor)) {
        func.singleGet(`#button-${cor} > span`)
          .should('have.css', 'color')
          .and('be.colored', func.getHexadecimal(cor));
      } else {
        func.singleGet(`#button-${cor}`)
          .should('have.css', 'background')
          .then($attr => {

            let colors = func.getCSSColors($attr), colorsJson = [cor, gradiente]

            colors.forEach((color, index) => colors[index] = 'rgb' + color.substring(0, func.endOfString(color, ')')));

            for (let i = 0; i < colorsJson.length; i++) {
              expect(func.ConvertRGBtoHex(colors[i])).to.eq(func.getHexadecimal(colorsJson[i]));
            }

          });
      }
    } else {

      let property = 'background-color';

      func.singleGet(`#button-${cor}`)
        .should('have.css', property)
        .and('be.colored', func.getHexadecimal(cor));
    }
  },

  icone(cor) {
    const icone = func.singleGet(`[id="icone-${cor}"]`);
    icone.should("have.css", "color").and("be.colored", func.getHexadecimal(cor));
  },

  link(cor) {
    func.singleGet(`[id="link-${cor}"]`)
      .should('have.css', 'color')
      .and('be.colored', func.getHexadecimal(cor))
  },

  checkbox(cor) {

    let property = 'background-color';
    if (tema === 'aquamarine')
      property = 'background';
    else if (tema === 'dsgov')
      property = 'border-color';

    cy.get(`#checkbox-${cor}`)
      .then($els => {
        const win = $els[0].ownerDocument.defaultView
        const before = win.getComputedStyle($els[0], 'before')
        const color = before.getPropertyValue(property)
        expect(func.ConvertRGBtoHex(color)).to.eq(func.getHexadecimal(cor));
      });
  },

  toggle(cor) {
    func.singleGet(`#toggle-${cor}`)
      .should("have.css", "background-color")
      .and("be.colored", func.getHexadecimal(cor));
  },

  aba(cor, gradiente) {
    if (func.gradientes.includes(tema)) {
      func.singleGet(`#aba-${cor}`).parent('li')
        .should('have.css', 'background')
        .then($attr => {
          let colors = func.getCSSColors($attr), colorsJson = [cor, gradiente]

          colors.forEach((color, index) => colors[index] = 'rgb' + color.substring(0, func.endOfString(color, ')')));

          for (let i = 0; i < colorsJson.length; i++) {
            expect(func.ConvertRGBtoHex(colors[i])).to.eq(func.getHexadecimal(colorsJson[i]));
          }
        });
    } else {

      let property = 'background-color';

      if (tema === 'dsgov' && cor === 'secundario')
        property = 'color';

      func.singleGet(`#aba-${cor}`).parent('li')
        .should('have.css', property)
        .and('be.colored', func.getHexadecimal(cor));
    }
  },

  itemIcone(cor) {
    const seletores = [`#item-${cor} > i`, `#item-${cor} > h2`]

    seletores.forEach(function (element) {
      func.singleGet(element).should("have.css", "color").and("be.colored", func.getHexadecimal(cor));
    })
  },

  textInputIcon(cor, gradiente) {

    if (func.gradientes.includes(tema)) {
      func.singleGet(`#texto-botao-${cor}`)
        .should('have.css', 'background')
        .then($attr => {

          let colors = func.getCSSColors($attr), colorsJson = [cor, gradiente]

          colors.forEach((color, index) => colors[index] = 'rgb' + color.substring(0, func.endOfString(color, ')')));

          for (let i = 0; i < colorsJson.length; i++) {
            expect(func.ConvertRGBtoHex(colors[i])).to.eq(func.getHexadecimal(colorsJson[i]));
          }

        })
    } else {

      for (let j = 0; j <= 1; j++) {
        func.singleGet(`#texto-botao-${cor}`)
          .should("have.css", "background-color").and("be.colored", func.getHexadecimal(cor));
      }

    }
  },

  deslizar(cor, gradiente) {

    if (func.gradientes.includes(tema)) {
      if (tema === 'aquamarine' && ['claro', 'informacao'].includes(cor)) {
        func.singleGet(`#crn-button-${cor} > i`)
          .should('have.css', 'color')
          .and('be.colored', func.getHexadecimal(cor));
      } else {
        func.singleGet(`#crn-button-${cor}`)
          .should('have.css', 'background')
          .then($attr => {
            let colors = func.getCSSColors($attr), colorsJson = [cor, gradiente]

            colors.forEach((color, index) => colors[index] = 'rgb' + color.substring(0, func.endOfString(color, ')')));

            for (let i = 0; i < colorsJson.length; i++) {
              expect(func.ConvertRGBtoHex(colors[i])).to.eq(func.getHexadecimal(colorsJson[i]));
            }
          });
      }
    } else {

      let property = 'background-color';

      if (tema === 'dsgov' && cor === 'secundario')
        property = 'color';

      func.singleGet(`#crn-button-${cor}`)
        .should('have.css', property)
        .and('be.colored', func.getHexadecimal(cor));
    }
  }

})