import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class SomeElement extends React.Component {
  constructor(props) {
    super(props);
    this.data = {
      name: "Aditya Suthar",
      aka: "CodeSuthar"
    };
  }

  render() {
    return (
      <div>
        <h1>I am {this.data.name} aka {this.data.aka}, from {this.props.data.city}, {this.props.data.state}, {this.props.data.country} - {this.props.data.pincode}</h1>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    const dataForPass = {
      city: "Vadodara",
      state: "Gujarat",
      country: "India",
      pincode: 390019
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