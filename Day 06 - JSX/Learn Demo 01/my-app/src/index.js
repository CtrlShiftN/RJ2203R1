import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';

// const myName = React.createElement("h3", { style: { textAlign: "center" } }, "My Name");

// create element 
const myName = React.createElement("div", { style: { textAlign: "center", paddingTop: "20px" } }, React.createElement("hr", null, null), React.createElement("h3", null, "My Name"));

// JSX
const myNameJsx = (
  <div style={{ textAlign: "center" }}>
    <h3>My Name</h3>
  </div>
);


const container = document.getElementById('root');
const root = createRoot(container);
root.render(myNameJsx);