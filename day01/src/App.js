import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27}
      ]
    });
  }

    render() {
      return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}>My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

/*
const app = props => {
  const [ PersonsState, setPersonState ] = useState({
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(PersonsState, otherState);

  const switchNameHandler = () => {
    // console.log("Was clicked!");
    // DON'T DO THIS: PersonsState.persons[0].name = 'Maximilian';
    setPersonState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ],
      otherState: PersonsState.otherState
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={PersonsState.persons[0].name}
        age={PersonsState.persons[0].age} />
      <Person
        name={PersonsState.persons[1].name}
        age={PersonsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={PersonsState.persons[2].name}
        age={PersonsState.persons[2].age}
        />
      </div>
  );
};  

export default app;
*/