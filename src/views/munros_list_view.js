  const PubSub = require('../helpers/pub_sub.js');


  const Munros_list_view = function(container) {
    this.container = container;
  }

  Munros_list_view.prototype.bindEvents = function() {
    PubSub.subscribe('Munros:munro-data-loaded', (event) => {
      const munros = event;
      this.render(munros);
    });
  }

  Munros_list_view.prototype.render = function (munros) {
    this.element.innerHTML = '';
    console.dir(munros);
    const name = this.createName(munro);
    const meaning = this.createMeaning(munro);
    this.element.appendChild(name);
    this.element.appendChild(meaning);
  };

  Munros_list_view.prototype.render = function (munros) {
    const munrosName = this.createTextElement('h2', munros.name);
    this.container.appendChild(munrosName);

    const meaning = this.createTextElement('h3', 'Meaning:');
    this.container.appendchild(meaning);

    Munros_list_view.prototype.createTextElement = function (elementType, text) {
    const element = document.createElement(elementType);
    element.textContent = text;
    return element;
};

  }





  //    munros.forEach((munro) => {
  //      const textContent = this.textContent(munro);
  //      this.container.appendChild(textContent);
  //    });



  module.exports = Munros_list_view;
