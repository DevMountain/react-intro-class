import React, { Component } from 'react';
import calculatorImg from '../../calculator.png';


class Calculator extends Component {
  constructor(){
    super();
    this.state = {
      display: '0',
      operator: '',
      temp: 0,
      resetDisplay: false,
    }
  }
  
  updateHeader(value) {
    this.setState({ header: value });
  }

  setDisplay(num) {
    var display = ( this.state.display === '0' ) ? num : this.state.display + num;
    this.setState({ display: (this.state.display.length < 13) ? display : this.state.display })
  }

  setOperator(operator) {
    if ( !this.state.operator ) {
          this.setState({ operator: operator, temp: parseInt(this.state.display, 10), display: '0'});
    }
  }

  calculate() {
    if ( this.state.operator === '' ) { return; }
    var result;
  
    switch ( this.state.operator ) {
      case '+':
        result = this.state.temp + parseInt(this.state.display, 10);
        break;
      case '-':
        result = this.state.temp - parseInt(this.state.display, 10);
        break;
      case '*':
        result = this.state.temp * parseInt(this.state.display, 10);
        break;
      case '/':
        result = this.state.temp / parseInt(this.state.display, 10);
        break;
      default:
        break;
    }
  
    this.setState({ display: String(result) });
  }

  clearDisplay(){
    this.setState({ display: '0', temp: 0, operator: '', resetDisplay: false });
  }
  
  

  render() {
    return (
        <div id="calculator-container">
          <input id="header-input" onChange={ (e) => { this.updateHeader(e.target.value); }}/>
          <h1 id="header"> Landon's ReactJS <br /> Calculator </h1>
          {/* <img className="remove-highlight" src={calculatorImg} alt="calculator" /> */}
          <div id="calculator-mask" className="remove-highlight">


            <div className="output">
              <span className="total">  {this.state.display} </span>
            </div>
      
            <div className="btn clear" onClick={ () => { this.clearDisplay(); } }><p>C</p></div>
      
            <div className="btn zero"   onClick={ () => { this.setDisplay('0'); } }><p>0</p></div>
            <div className="btn one"    onClick={ () => { this.setDisplay('1'); } }><p>1</p></div>
            <div className="btn two"    onClick={ () => { this.setDisplay('2'); } }><p>2</p></div>
            <div className="btn three"  onClick={ () => { this.setDisplay('3'); } }><p>3</p></div>
            <div className="btn four"   onClick={ () => { this.setDisplay('4'); } }><p>4</p></div>
            <div className="btn five"   onClick={ () => { this.setDisplay('5'); } }><p>5</p></div>
            <div className="btn six"    onClick={ () => { this.setDisplay('6'); } }><p>6</p></div>
            <div className="btn seven"  onClick={ () => { this.setDisplay('7'); } }><p>7</p></div>
            <div className="btn eight"  onClick={ () => { this.setDisplay('8'); } }><p>8</p></div>
            <div className="btn nine"   onClick={ () => { this.setDisplay('9'); } }><p>9</p></div>
      
            <div className="btn equal"    onClick={ () => { this.calculate(); } }><p>=</p></div>
            <div className="btn multiply" onClick={ () => { this.setOperator('*'); } }><p>×</p></div>
            <div className="btn divide"   onClick={ () => { this.setOperator('/'); } }><p>÷</p></div>
            <div className="btn subtract" onClick={ () => { this.setOperator('-'); } }><p>-</p></div>
            <div className="btn add"      onClick={ () => { this.setOperator('+'); } }><p>+</p></div>
          </div>
        </div>
      )
      
  }
}


export default Calculator;