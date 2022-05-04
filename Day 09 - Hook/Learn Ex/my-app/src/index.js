import React from 'react';
import { createRoot } from 'react-dom/client';
import Hello from './components/Hello';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/Login';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<LoginForm />)