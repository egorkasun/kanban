import * as React from 'react';
import * as L from 'leda';
import { Column } from './components';

export const App = () => (
  <L.Div _container>
    <Column title="To do" />
    <Column title="In progress" />
    <Column title="Done" />
  </L.Div>
);
