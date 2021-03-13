// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 宣告state物件，內包含一個變數percent
      percent: '10%',
      mounted: false,
    };
    this.changePercent = this.changePercent.bind(this);
  }

  changePercent() {
    console.log('123');
    // this.setState({ percent: 40, counter: 0 });
  }

  render() {
    return (
      <div>
        <div
          className="progress-back"
          style={{ backgroundColor: 'rgba(0,0,0,0.2)', width: '200px', height: '7px', borderRadius: '10px' }}
        >
          <div
            className="progress-bar"
            style={{ backgroundColor: '#fe5196', width: this.state.percent, height: '100%', borderRadius: '10px' }}
          ></div>
        </div>
        <button onClick={this.changePercent}>轉換百分比 </button>
      </div>
    );
  }
}
export default App;
