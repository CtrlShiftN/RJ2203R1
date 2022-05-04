import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
// import App from './App';
// import MyForm from './components/intro/MyForm';
import YupValidationForm from './components/validation/YupValidationForm';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<YupValidationForm />);