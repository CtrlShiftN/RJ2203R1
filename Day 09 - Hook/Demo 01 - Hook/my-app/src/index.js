import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import Account from './components/Account';
import Person from './components/Account';
import Student from './components/Student';
import Course from './components/Course';
import CustomHookDemo from './components/CustomHookDemo';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CustomHookDemo />)