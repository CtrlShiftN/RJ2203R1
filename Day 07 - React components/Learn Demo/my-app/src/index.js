import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import AddComponent from './components/AddComponent';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AddComponent firstNum={3} secondNum={5} />);