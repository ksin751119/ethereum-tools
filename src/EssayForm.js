import React, { Component } from 'react';
import { encodeFuncSignaturesFromABI } from './Web3'; //引入App

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    let sigs = encodeFuncSignaturesFromABI(this.state.value);
    alert('Function Signature: ' + sigs);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          ABI:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Get function signatures" />
      </form>
    );
  }
}

export default EssayForm;
