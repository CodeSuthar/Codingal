import React from 'react';
import ReactDOM from 'react-dom';

function greet(propName) {
  return <h1>Hello, {propName}</h1>;
};

const myelement = greet("Aditya Suthar");

ReactDOM.render(myelement, document.getElementById('root'));