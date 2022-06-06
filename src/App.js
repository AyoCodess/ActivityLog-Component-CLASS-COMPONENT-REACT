import React, { Component } from 'react';
import Card from './components/Card';
import { cardInfo } from './Data';

class App extends Component {
  render() {
    return (
      <div className='grid place-items-center h-screen p-3 '>
        <Card cardInfo={cardInfo} />
      </div>
    );
  }
}

export default App;
