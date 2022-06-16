import React, { Component } from 'react';
import Card from './components/Card';
import { cardInfo } from './Data';
import DataCard from './components/DataCard';

class App extends Component {
  render() {
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
        <DataCard />
        <Card cardInfo={cardInfo} />
      </div>
    );
  }
}

export default App;
