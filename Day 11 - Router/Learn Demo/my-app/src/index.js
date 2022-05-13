import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import Shop from './components/demo2/Shop';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Shop />)