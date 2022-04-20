import React from 'react';
import StateDemo from './components/StateDemo';
import './index.css';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<StateDemo />);