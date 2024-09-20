import react from 'react';
import ReactDOM from 'react-dom';

class Student extends react.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const myelement = <Student name="John" />;

ReactDOM.render(myelement, document.getElementById('root'));