import React, { Component } from 'react';
import Card from '../Card/Card';

export const MyContext = React.createContext();

export class TestContext extends Component {
  state = {
    name: 'Liron',
    lastName: 'weiner'
  }
  render() {
    return (
      <MyContext.Provider value={this.state}>
        <Card />
      </MyContext.Provider>
    );
  }
}
