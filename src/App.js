import React, { Component } from 'react';
import './App.css';

import ReactStandartView from './ReactStandart';
import Notification from './Notification';



const template = {
  message: 'Should we bake a pie?',
  type: 'caution',
  accept: function() {
    console.log('accept')
    // parent component can do something with accept
  },
  decline: function() {
    console.log('decline')
    // parent component can do something with decline
  }
}

class App extends Component {

  render() {
    return (
      <>
        <Notification { ...template }/>
        <ReactStandartView />
      </>
    );
  }
}

export default App;
