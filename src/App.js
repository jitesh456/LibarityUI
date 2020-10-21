import React from 'react';
import './App.css';
import { DashBoard } from './Component/DashBoard';
import {Provider} from 'react-redux'
import store from './Redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <DashBoard/>
      </Provider>
    </div>
  );
}

export default App;
