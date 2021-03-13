import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //引入App
import Progress from './Progress'; //引入App
import NameForm from './NameForm'; //引入App
import EssayForm from './EssayForm'; //引入App

import { encodeFunctionSignature } from './Web3'; //引入App

import * as reportWebVitals from './reportWebVitals';

import AutowidthInput from 'react-autowidth-input';

const render = () => {
  return (
    <div>
      <div>
        <NameForm />
      </div>
      <br></br>

      <div>
        <EssayForm />
      </div>
    </div>
  );
};

// ReactDOM.render(<div>{encodeFunctionSignature('getMyvalue(uint256)')}</div>, document.getElementById('root'));
ReactDOM.render(render(), document.getElementById('root'));
