import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const card = (
  <div className="card" >
    <img className="card-img-top bg-dark" src="..." alt="Card image cap"></img>
      <div className="card-body text-center">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(card);