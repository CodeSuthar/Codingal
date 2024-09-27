import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class SomeElement extends React.Component {
  render() {
    return (
      <div>
        <h1>I am {this.props.data.name} aka {this.props.data.aka}</h1>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    const dataForPass = {
      name: "Aditya K. Suthar",
      aka: "CodeSuthar"
    };

    return (
      <div>
        <SomeElement data={dataForPass} />
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