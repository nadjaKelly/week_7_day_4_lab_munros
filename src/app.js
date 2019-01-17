  const Munros_list_view = require('./views/munros_list_view.js');
  const Munros = require('./models/munros.js');



  document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded');

    const munros = new Munros();
    munros.bindEvents();
    munros.getData();

    const munrosView = new munrosView();
    munrosView.bindEvents();

  });
