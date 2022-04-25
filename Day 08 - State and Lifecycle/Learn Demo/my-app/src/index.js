import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import IncreaseButton from './components/IncreaseButton';
import UnmountDemo from './components/UnmountDemo';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Home />);