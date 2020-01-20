import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.png';
import cookie from './cookie.png';
import './App.css';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Frozen Dough logo" className="main-logo"/>
      <h2>La página se encuentra en mantenimiento</h2>
      <br />
      <h3>¡Te pedimos disculpas por las molestias!</h3>
      
      <img src={cookie} alt="Rotating cookie" className="App-logo"/>
    </div>
  );
}

export default App;
