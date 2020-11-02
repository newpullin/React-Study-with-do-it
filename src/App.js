import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodaysPlan from './03/TodaysPlan'
import BooleanComponent from './03/BooleanComponent'
import Counter from './03/Counter'
import CPC from './03/cpc'

class App extends Component {
  render() {
    return (
      //아래는 JSX 양식입니다.
      <div className="body">
        <div><b>지루할 때:</b><BooleanComponent bored /></div>
        <div><b>즐거울 떄:</b><BooleanComponent /></div>
        <div><Counter /></div>
        <div><CPC /></div>
      </div>
    );
  }
}

export default App;
