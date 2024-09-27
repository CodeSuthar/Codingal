import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class SomeElement extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.data}</h1>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <SomeElement data="Hello, I Am Aditya Suthar" />
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