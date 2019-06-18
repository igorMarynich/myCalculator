import React, {Component} from 'react';
import './App.css';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import * as math from 'mathjs';
import ClearButton from '../../Components/ClearButton/ClearButton';

class App extends Component {

  state = {
    input: ''
  };

  addNumber = val => {
    this.setState({
      input: this.state.input + val
    });
  }

  toEqual = () => {
    this.setState({
      input: math.evaluate(this.state.input)
    });
  }

  render() {
    return (
        <div className="App">

            <Input input={this.state.input} />

            <div className='row'>
                <Button handleClick={this.addNumber}>7</Button>
                <Button handleClick={this.addNumber}>8</Button>
                <Button handleClick={this.addNumber}>9</Button>
                <Button handleClick={this.addNumber}>/</Button>
            </div>

            <div className='row'>
                <Button handleClick={this.addNumber}>4</Button>
                <Button handleClick={this.addNumber}>5</Button>
                <Button handleClick={this.addNumber}>6</Button>
                <Button handleClick={this.addNumber}>*</Button>
            </div>

            <div className='row'>
                <Button handleClick={this.addNumber}>1</Button>
                <Button handleClick={this.addNumber}>2</Button>
                <Button handleClick={this.addNumber}>3</Button>
                <Button handleClick={this.addNumber}>-</Button>
            </div>

            <div className='row'>
                <Button handleClick={this.addNumber}>0</Button>
                <Button handleClick={this.addNumber}>.</Button>
                <Button handleClick={this.addNumber}>+</Button>
                <Button handleClick={() => this.toEqual()}>=</Button>
            </div>

            <ClearButton handleClick={()=> this.setState({input: ''})}>Clear</ClearButton>
        </div>
      )
    }
 }


export default App;
