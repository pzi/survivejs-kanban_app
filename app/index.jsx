import 'main.css';

import component from 'component.js';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import alt from './utils/alt';
import storage from './libs/storage';
import persist from './libs/persist';

main();

function main() {
  persist(alt, storage, 'app');

  document.body.appendChild(component());

  const app = document.createElement('div');
  app.setAttribute('id', 'kanban-app')

  document.body.appendChild(app);

  ReactDOM.render(<App />, app);
}
