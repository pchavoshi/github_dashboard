import React from 'react';
import axios from 'axios';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = ""
  }

  componentDidMount() {
    console.log("before");
    axios.get('https://api.github.com/orgs/facebook/members')
  .then(function (response) {
    console.log("yes i have", response);
  })
  }

  render() {
    return (
      <div>
        <h1>eat dick</h1>
        <p>Hello {this.state}</p>
      </div>
    );
  }
}

export default Dashboard 
