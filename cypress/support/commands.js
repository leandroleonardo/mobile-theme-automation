import * as func from './helper-functions';
import chaiColors from 'chai-colors'
const time_wait = Cypress.env("time_wait");

const tema = Cypress.env('tema');

chai.use(chaiColors)

Cypress.Commands.addAll({

  acesso(pagina) {

    if (func.getViewByComponent(pagina) === 1) {
      cy.url().then((url) => {
        if (!url.includes('/public/form1')) { cy.visit('/public/form1'); cy.wait(time_wait); }
      });
    }
    else if (func.getViewByComponent(pagina) === 2) {
      cy.url().then((url) => {
        if (!url.includes('/public/form2')) { cy.visit('/public/form2'); cy.wait(time_wait); }
      });
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