import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import BoxContainer from "./container/box-container.js"

class App extends React.Component {
  render() {
    return (
      <BoxContainer></BoxContainer>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
