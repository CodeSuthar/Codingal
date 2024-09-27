import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class SomeElement extends React.Component {
  render() {
    return (
      <div>
        <h1>I am {this.props.name} aka {this.props.aka}</h1>
      </div>
    );
  }
}

class App extends React.Component {  
  render() {
    const name = "Aditya K. Suthar";
    const aka = "CodeSuthar";

    return (
      <div>
        <SomeElement name={name} aka={aka} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);