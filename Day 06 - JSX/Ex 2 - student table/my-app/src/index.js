import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const students = [
  {
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany'
  },
  {
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico'
  },
  {
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria'
  },
  {
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK'
  },
  {
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada'
  },
  {
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy'
  }
];

const studentTable = (
  <div className='container-fluid'>
    <h2>Student List</h2>
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {
          students.map(studentInfo => (
            <tr>
              <td>{studentInfo.company}</td>
              <td>{studentInfo.contact}</td>
              <td>{studentInfo.country}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(studentTable);
