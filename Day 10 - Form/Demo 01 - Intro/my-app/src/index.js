import React from 'react';
import './index.css';
// import App from './App';
import { createRoot } from 'react-dom/client';
// import MyForm from './components/intro/MyForm';
// import Textarea from './components/other-tags-form/TextArea';
// import Dropdown from './components/other-tags-form/Dropdown';
// import File from './components/other-tags-form/File';
import MyValidatedForm from './components/validate/MyValidatedForm';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MyValidatedForm />)