import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "Nikki Ricks",
      headerLinks: [
        { title: "Home", path: "/"},
        { title: "About", path: "/about"},
        { title: "Contact", path: "/contact"}
      ],
      home: {
        title: "Be Curious",
        subTitle: "Projects that I care about",
        text: "Checkout my projects below:"
      },
      about: {
        title: "About Me",
        subTitle: " ",
        text: " "
      },
      contact: {
        title: "Let's Chat",
        subTitle: " ",
        text: " "
      }
    }
  }

  render() {
    return (
      <div>
        Hello from React
      </div>
    );
  }
}

export default App;
