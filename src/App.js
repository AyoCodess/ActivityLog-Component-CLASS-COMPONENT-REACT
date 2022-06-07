import React, { Component } from 'react';
import Card from './components/Card';
import { cardInfo } from './Data';

class App extends Component {
  render() {
    return (
      <div className='flex justify-center items-center h-screen px-3 '>
        <Card cardInfo={cardInfo} />
      </div>
    );
  }
}

export default App;
