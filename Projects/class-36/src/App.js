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
    if (this.state.grade === "X") {
      this.setState({
        grade: "10"
      });
    } else {
      this.setState({
        grade: "X"
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Student Details</h1>
        <p>Name: {this.state.name}</p>
        <p>Friend: {this.state.friend}</p>
        <p>Grade: {this.state.grade}</p>
        <p>Age: {this.state.age}</p>
        <button onClick={this.updateNum}>Change to number style!</button>
      </div>
    );
  }
}

export default Student;