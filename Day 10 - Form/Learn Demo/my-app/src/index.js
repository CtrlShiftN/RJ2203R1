import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
// import SignupForm from './components/forms/SignupForm';
import LoginForm from './components/formik/LoginForm';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<LoginForm />)

