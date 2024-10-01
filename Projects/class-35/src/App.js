import React from 'react';
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

  updateNum = () => {
    this.setState({
      grade: "10"
    });
  }

  render() {
    return (
      <div>
        <h1>Student Details</h1>
        <p>Name: {this.state.name}</p>
        <p>Friend: {this.state.friend}</p>
        <p>Grade: {this.state.grade}</p>
        <p>Age: {this.state.age}</p>
        <button onClick={this.updateNum}>Change to normal number!</button>
      </div>
    );
  }
}

export default Student;