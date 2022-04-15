import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import SayHello from './components/GreetingApp';
import App from './App';
import HelloHero from './components/HelloHero';
import Greeting from './components/Greeting';
import Person from './components/Person';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Greeting />)