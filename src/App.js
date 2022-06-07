import React, { Component } from 'react';
import Card from './components/Card';
import { cardInfo } from './Data';

class App extends Component {
  render() {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Card cardInfo={cardInfo} />
      </div>
    );
  }
}

export default App;
