import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import reducer from './reducer';
import {createStore} from 'redux'

const store = createStore(reducer);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Counter />
  </ Provider>
)