import React from 'react';
import './App.css';
import './styles.css';
import Info from './Info';

class App extends React.Component {
  render() {
    const myStyle = { color: 'blue', backgroundColor: 'yellow' };
    return (
      <>
        <div className='App'>
          <h1 style={myStyle}>I'm the best</h1>
        </div>
        <Info name='Sanaz' />
      </>
    );
  }
}

export default App;
