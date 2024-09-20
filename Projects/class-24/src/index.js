import React from 'react';
import ReactDOM from 'react-dom/client';

const table = (
  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>John</td>
      <td>45</td>
    </tr>
    <tr>
      <td>Doe</td>
      <td>25</td>
    </tr>
  </table>
);

ReactDOM.render(table, document.getElementById('root'));