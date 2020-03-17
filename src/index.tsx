import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

const container = document.createElement('div');

ReactDOM.render(
  <App />,
  container,
);

document.body.appendChild(container); // чтобы отобразить контейнер в браузере
