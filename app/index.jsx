import 'main.css';

import component from 'component.js';

import React from 'react';
import App from './components/App.jsx';

main();

function main() {
  document.body.appendChild(component());

  const app = document.createElement('div');
  app.setAttribute('id', 'kanban-app')

  document.body.appendChild(app);

  React.render(<App />, app);
}
