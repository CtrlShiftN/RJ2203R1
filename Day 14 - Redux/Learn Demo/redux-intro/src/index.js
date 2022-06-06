import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './middlewares/redux-saga/components/Home';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Home />
);