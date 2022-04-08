import './App.css';
import Header from './Header';
import Tindercards from './Tindercards';
import Swipebuttons from './Swipebuttons';
import React from 'react';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Tinder Cards */}
      <Tindercards />
      {/* Swipe Buttons */}
      <Swipebuttons />
    </div>
  );
}

export default App;
