import './App.css';
import React from 'react';
import {evaluate} from 'mathjs'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      decimal: false,
      answer: 0
    };
    this.updateInput = this.updateInput.bind(this);
    this.returnAnswer = this.returnAnswer.bind(this);
  }

  updateInput(character){
    if (this.state.input === 'Syntax Error'){
      this.setState({
        input: ''
      });
    }
    
    this.setState((state)=>({
      input: [character == 'clear' ? '' : state.input + character]
    }));
  }

  returnAnswer(){
    try {
      const evaluatedExpression = evaluate(this.state.input);
      this.setState({
        answer: evaluatedExpression
      })
      this.setState(state => ({
        input: state.answer
      }));
    }  
    catch {
      this.setState(state => ({
        input: 'Syntax Error'
      }));
    }
  }

  render (){
    return(
      <div className="calculator">
        <p id="display">{this.state.input}</p>
        <div id="first-row">
          <button id="clear" onClick={()=> {
            this.updateInput('clear');
            this.setState({decimal: false});
          }}>AC</button>
          <button id="divide" onClick={()=>this.updateInput('/')}>/</button>
          <button id="multiply" onClick={()=>this.updateInput('*')}>x</button>
        </div>
        <div id="second-row">
          <button id="7" onClick={()=>this.updateInput('7')}>7</button>
          <button id="8" onClick={()=>this.updateInput('8')}>8</button>
          <button id="9" onClick={()=>this.updateInput('9')}>9</button>
          <button id="minus" onClick={()=>this.updateInput('-')}>-</button>
        </div>
        <div id="third-row">
          <button id="4" onClick={()=>this.updateInput('4')}>4</button>
          <button id="5" onClick={()=>this.updateInput('5')}>5</button>
          <button id="6" onClick={()=>this.updateInput('6')}>6</button>
          <button id="add" onClick={()=>this.updateInput('+')}>+</button>
        </div>
        <div id="forth-row">
          <button id="1" onClick={()=>this.updateInput('1')}>1</button>
          <button id="2" onClick={()=>this.updateInput('2')}>2</button>
          <button id="3" onClick={()=>this.updateInput('3')}>3</button>
          <button id="equals" onClick={()=>this.returnAnswer()}>=</button>
          <button id="0" onClick={()=>this.updateInput('0')}>0</button>
          <button id="point" onClick={()=>this.updateInput(this.state.decimal == false ? '.' : '')}>.</button>
        </div>
      </div>
    )
  }
}

export default App;
