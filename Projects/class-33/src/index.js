import React from 'react';
import ReactDOM from 'react-dom/client';
const Component = React.Component;

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Aditya K. Suthar",
      friend: "Krisha",
      grade: "X",
      age: 15
    };
  }

  render() {
    return (
      <div>
        <h1>Student Details</h1>
        <p>Name: {this.state.name}</p>
        <p>Friend: {this.state.friend}</p>
        <p>Grade: {this.state.grade}</p>
        <p>Age: {this.state.age}</p>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Student />
  </React.StrictMode>
);
