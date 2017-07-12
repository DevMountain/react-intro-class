<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project we will use an npm package called `create-react-app` to quickly spin up a react application. We'll cover how to use `onClick` and `onChange` events in React, state, JSX, and how to import/export components.

<img src="https://github.com/DevMountain/react-intro-online/blob/solution/readme/1.png" />

## Setup

* `Fork` and `clone` this repository and then `cd` into it.
* If you don't have `create-react-app` installed, do so by running `sudo npm install -g create-react-app`.
* Run `create-react-app app`in the root directory. ( This will create a folder called app )
* Open the newly created `app` folder in your editor.
* Make sure to move the calculator.png image into the app/src folder to avoid any errors!

## Step 1

### Summary

In this step we will modify the first component `create-react-app` makes for us.

### Instructions

* Open `src/App.js`.
* Delete all the content in the `return` statement in the `render` method.
* Remove all content from `App.css` and paste in the solution. ( Found below ) 

<details>

<summary> <code> App.js </code> </summary>

```jsx
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (

    );
  }
}

export default App;
```

</details>

<details>

<summary> <code> App.css </code> </summary>

```css
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.remove-highlight {
  user-select: none;
}

#calculator-container {
  height: 325px;
}

#calculator-mask {
  width: 325px;
  height: 267px;
  position: relative;
  top: -272px;
}

.btn {
  width: 66px;
  height: 40px;
  display: inline-block;
  position: absolute;
  cursor: pointer;
}

.output {
  position: absolute;
  width: 212px;
  height: 40px;
  top: 21px;
  left: 93px;
}

.total {
  position: absolute;
  right: 7px;
  bottom: 3px;
  font-size: 27px;
  color: burlywood;
}

.clear {
  left: 20px;
  bottom: 206px;
}

.zero {
  bottom: 18px;
  left: 20px;
}

.one {
  bottom: 65px;
  left: 20px;
}

.two {
  bottom: 65px;
  left: 93px;
}

.three {
  bottom: 65px;
  left: 166px;
}

.four {
  bottom: 112px;
  left: 20px;
}

.five {
  bottom: 112px;
  left: 93px;
}

.six {
  bottom: 112px;
  left: 166px;
}

.seven {
  bottom: 159px;
  left: 20px;
}

.eight {
  bottom: 159px;
  left: 93px;
}

.nine {
  bottom: 159px;
  left: 166px;
}

.decimal {
  bottom: 18px;
  left: 93px;
}

.equal {
  bottom: 18px;
  left: 166px;
}

.multiply {
  bottom: 18px;
  left: 239px;
}

.divide {
  bottom: 65px;
  left: 239px;
}

.subtract {
  bottom: 112px;
  left: 239px;
}

.add {
  bottom: 159px;
  left: 239px;
}

#header {
  text-align: center;
  color: #6ebfe0;
}

#header-input {
  width: 325px;
  position: absolute;
  height: 33px;
  background: transparent;
  border: none;
  color: transparent;
  outline: none;
}
```

</details>

## Step 2

### Summary

In this step we will create our `Calculator` component that will render in our calculator.

### Instructions


* Create a folder called `components` inside of the `src` folder. (`app/src`)
* Create a folder called `Calculator` inside of the `components` folder. ( `app/src/components` )
* Create a file called `Caclulator.js` inside of the `Calculator` folder you just created.
* Create a basic react component called `Calculator` in the `Calculator.js` file you just created.
* Import the calculator image from the root directory. ( hint: `import varName from "picturepath.png"` )
  * Call your variable `calculatorImg`.
* Paste the following `JSX` layout inside the render method of the `Calculator` component. ( Found below )
  * <details>
    
    <summary> <code> JSX Layout </code> </summary>

    ```jsx
    return (
      <div id="calculator-container">
        <input id="header-input"/>
        <h1 id="header"> Calculator </h1>
        <img className="remove-highlight" src={calculatorImg} alt="calculator" />
        <div id="calculator-mask" className="remove-highlight">
          <div className="output">
            <span className="total"></span>
          </div>

          <div className="btn clear"></div>

          <div className="btn zero"></div>
          <div className="btn one"></div>
          <div className="btn two"></div>
          <div className="btn three"></div>
          <div className="btn four"></div>
          <div className="btn five"></div>
          <div className="btn six"></div>
          <div className="btn seven"></div>
          <div className="btn eight"></div>
          <div className="btn nine"></div>

          <div className="btn equal"></div>
          <div className="btn multiply"></div>
          <div className="btn divide"></div>
          <div className="btn subtract"></div>
          <div className="btn add"></div>
        </div>
      </div>
    )
    ```
    
    </details>
* Export default the calculator component at the bottom of `Calculator.js`.
* Import the calculator component in `App.js`.
* Add the calculator component in the return of the render method in `App.js`.
* Once you finish these steps run `npm start` (from the app folder) on the command line and you should see your calculator rendered on the screen.

### Solution

<details>

<summary> <code> Calculator.js </code> </summary>

```jsx
import React, { Component } from 'react';
import calculatorImg from '../../../../calculator.png';

class Calculator extends Component {
  render() {
    return (
      <div id="calculator-container">
        <input id="header-input"/>
        <h1 id="header"> Calculator </h1>
        <img className="remove-highlight" src={calculatorImg} alt="calculator" />
        <div id="calculator-mask" className="remove-highlight">
          <div className="output">
            <span className="total"></span>
          </div>

          <div className="btn clear"></div>

          <div className="btn zero"></div>
          <div className="btn one"></div>
          <div className="btn two"></div>
          <div className="btn three"></div>
          <div className="btn four"></div>
          <div className="btn five"></div>
          <div className="btn six"></div>
          <div className="btn seven"></div>
          <div className="btn eight"></div>
          <div className="btn nine"></div>

          <div className="btn equal"></div>
          <div className="btn multiply"></div>
          <div className="btn divide"></div>
          <div className="btn subtract"></div>
          <div className="btn add"></div>
        </div>
      </div>
    )
  }
}

export default Calculator;
```

</details>

<details>

<summary> <code> App.js </code> </summary>

```jsx
import React, { Component } from 'react';
import './App.css';

import Calculator from './components/Calculator/Calculator';

class App extends Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
```

</details>

<br />

<img src="https://github.com/DevMountain/react-intro-online/blob/solution/readme/3.png" />

## Step 3

### Summary

In this step we'll make our calculator header editable by the user using state and an `onChange` event in `Calculator.js`.

Our header has two pieces : The visible text and an invisible input box.  We're going to wire up the header so that 
when we click on it we can type in the invisible input box and the text part will update.

VOCAB : class method = A class method is a method on a class.  It is a sibling to the constructor function.

### Instructions

* Open `Calculator.js`. ( `src/components/Calculator/Calculator.js` )
* Create a `constructor` method on the same level as the `render` method.
  * Inside the `contructor` method invoke the `super()` method.
  * After `super()`, create a state object that has a `header` property and give it a default value of `"Calculator"`.
* Create a class method called `updateHeader` that takes `val` as a parameter.
  * This method should set the `header` property on state to the value of `val`. ( hint: `this.setState({...})` )
* Add an `onChange` event to the input element with an id of `#header-input` and make its value be an arrow function that receives a parameter `e`. This parameter represents the changeEvent object.
* Inside the arrow function, call the `updateHeader` method and pass in the value from the event: `e.target.value`.
* Inside the h1 element `#header`, change `Calculator` to the value of the `header` property on state.  ( hint: `{this.state.xyz}` )
* Test your header is working by clicking on it and typing in a new header. 

### Solution

<details>

<summary> <code> Calculator.js </code> </summary>

```jsx
import React, { Component } from 'react';
import calculatorImg from '../../../../calculator.png';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      header: 'Calculator'
    }
  }

  updateHeader(val) {
    this.setState({ header: val });
  }

  render() {
    return (
      <div id="calculator-container">
        <input id="header-input" onChange={ (e) => { this.updateHeader(e.target.value); }}/>
        <h1 id="header"> {this.state.header} </h1>
        <img className="remove-highlight" src={calculatorImg} alt="calculator" />
        <div id="calculator-mask" className="remove-highlight">

          <div className="output">
            <span className="total"></span>
          </div>

          <div className="btn clear"></div>

          <div className="btn zero"></div>
          <div className="btn one"></div>
          <div className="btn two"></div>
          <div className="btn three"></div>
          <div className="btn four"></div>
          <div className="btn five"></div>
          <div className="btn six"></div>
          <div className="btn seven"></div>
          <div className="btn eight"></div>
          <div className="btn nine"></div>

          <div className="btn equal"></div>
          <div className="btn multiply"></div>
          <div className="btn divide"></div>
          <div className="btn subtract"></div>
          <div className="btn add"></div>
        </div>
      </div>
    )
  }
}

export default Calculator;
```

</details>

<br />

You should now be able to click on the header and type in a new value for it.

## Step 4

### Summary

In this step we will assign variables to state which we will need to keep track of information during run time. 

VOCAB: Run-time means the state of the code while the application is running, not while we're writing it.

### Instructions

* Open `Calculator.js` ( `src/components/Calculator/Calculator.js` ) and go to the `state` object in the `constructor` method.
* Add `display` to state with an initial value of `'0'`.
* Add `operator` to state with an initial value of `''`.
* Add `temp` to state with an initial value of `0`.
* Add `resetDisplay` to state with an initial value of `false`.

Notice how display is a string and temp is an integer.

#### Solution

<details>

<summary> <code> Constructor Function </code> </summary>

```jsx
constructor() {
  super();
  this.state = {
    header: 'Calculator',
    display: '0',
    operator: '',
    temp: 0,
    resetDisplay: false
  }
}
```

</details>

## Step 5

### Summary

In this step we will create a method called `setDisplay()` that will allow us to click on the number buttons and see the number appear in the output of the calculator.

### Instructions

* Open `Calculator.js`. ( `src/components/Calculator/Calculator.js` )
* Change the value of the span with the class of `.total` to the value of the `display` property on state. ( hint: `{ this.state.abc }` )
* Create a `setDisplay` class method that takes a parameter called `num`. This method should then use `num` to update the value of `display` on state. 
* Update buttons zero through nine to call the `setDisplay` method with the correct number in <b>string</b> format. You can tell which button is which number by its `class`.

### Solution

<details>

<summary> <code> Calculator.js </code> </summary>

```jsx
import React, { Component } from 'react';
import calculatorImg from '../../../../calculator.png';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      header: 'Calculator',
      display: '0',
      operator: '',
      temp: 0,
      resetDisplay: false,
    }
  }

  updateHeader(val) {
    this.setState({ header: val });
  }

  setDisplay(num) {
    this.setState({ display: this.state.display + num });
  }

  render() {
    return (
      <div id="calculator-container">
        <input id="header-input" onChange={ (e) => { this.updateHeader(e.target.value); }}/>
        <h1 id="header"> {this.state.header} </h1>
        <img className="remove-highlight" src={calculatorImg} alt="calculator" />
        <div id="calculator-mask" className="remove-highlight">

          <div className="output">
            <span className="total"> { this.state.display } </span>
          </div>

          <div className="btn clear"></div>

          <div className="btn zero"   onClick={ () => { this.setDisplay('0'); } }></div>
          <div className="btn one"    onClick={ () => { this.setDisplay('1'); } }></div>
          <div className="btn two"    onClick={ () => { this.setDisplay('2'); } }></div>
          <div className="btn three"  onClick={ () => { this.setDisplay('3'); } }></div>
          <div className="btn four"   onClick={ () => { this.setDisplay('4'); } }></div>
          <div className="btn five"   onClick={ () => { this.setDisplay('5'); } }></div>
          <div className="btn six"    onClick={ () => { this.setDisplay('6'); } }></div>
          <div className="btn seven"  onClick={ () => { this.setDisplay('7'); } }></div>
          <div className="btn eight"  onClick={ () => { this.setDisplay('8'); } }></div>
          <div className="btn nine"   onClick={ () => { this.setDisplay('9'); } }></div>

          <div className="btn equal"></div>
          <div className="btn multiply"></div>
          <div className="btn divide"></div>
          <div className="btn subtract"></div>
          <div className="btn add"></div>
        </div>
      </div>
    )
  }
}

export default Calculator;
```

</details>

## Step 6

### Summary

In this step we will be tweaking our calculator to handle certain scenarios. If we click on our buttons we can see that our display now updates. However our calculator keeps the initial 0 and also doesn't account for length and can break out of its container.

### Instructions

* Open `Calculator.js`. ( `src/components/Calculator/Calculator.js` )
* Create a variable called `display` inside the `setDisplay` method.
* Assign the new variable `display` a value:
  * If `this.state.display` is `"0"` then `display` should equal `num` 
  * Otherwise `display` should equal `this.state.display` + `num`
* Modify `this.setState` to update display:
  * If `this.state.display` is less than 13 characters then update with the new `display` variable.
  * Otherwise update with the current value of `this.state.display`.

### Solution

<details>

<summary> <code> setDisplay method </code> </summary>

```jsx
setDisplay(num) {
  var display = ( this.state.display === '0' ) ? num : this.state.display + num;
  this.setState({ display: (this.state.display.length < 13) ? display : this.state.display })
}
```

</details>

### Solution

<img src="https://github.com/DevMountain/react-intro-online/blob/solution/readme/5.png" />

## Step 7

### Summary

In this step will be adding a `setOperator` method that will handle setting our math operator using an `operator` parameter.

### Instructions

* Open `Calculator.js`. ( `src/components/Calcualtor/Calculator.js` )
* Create a method called `setOperator` that takes a parameter called `operator`.
* Update the operator `div` elements to call the `setOperator` method with the correct operator. You can tell which `div` elements are operators by their class name.
  * Use "+" for addition
  * Use "-" for subtraction
  * Use "/" for division
  * Use "*" for multiplication
* Add an if statement at the beginning of the `setOperator` method that checks if the operator has not been set. ( hint: look at the defualt value for `this.state.operator` )
* Update the `operator`, `temp`, and `display` properties on state in the if statement in the `setOperator` method.
  * `temp` should equal the current `display` value on state parsed to an integer.
  * `display` should equal "0".
  * `operator` should equal the value of the `operator` parameter.

### Solution

<details>

<summary> <code> setOperator method </code> </summary>

```jsx
// setOperator Method
setOperator(operator) {
  if ( !this.state.operator ) {
    this.setState({ operator: operator, temp: parseInt(this.state.display, 10), display: '0' });
  }
}

// JSX in return of Calculator.js
<div className="btn multiply" onClick={ () => { this.setOperator('*'); } }></div>
<div className="btn divide"   onClick={ () => { this.setOperator('/'); } }></div>
<div className="btn subtract" onClick={ () => { this.setOperator('-'); } }></div>
<div className="btn add"      onClick={ () => { this.setOperator('+'); } }></div>
```

</details>

<br />

<img src="https://github.com/DevMountain/react-intro-online/blob/solution/readme/2g.gif" />

## Step 8

### Summary

In this step we will be adding a calculate method that will preform the user selected operation.

### Instructions

* Open `Calculator.js`. ( `src/components/Calculator/Calculator.js` )
* Create a `calculate` method.
* Update the `.btn equal` element to call the `calculate` method.
* Add an if statement at the beginning of the `calculate` method that calls `return;` if the operator hasn't been set yet.
* Create a variable called `result` after the if statement.
* Switch the `operator` value on state, based on it's value ( "+", "-", "/", "*" ) perform the correct math operation and update the value of the `result` variable.
* Update the display property on state with `result` after the switch statement.

### Solution

<details>

<summary> <code> calculate method </code> </summary>

```jsx
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
```

</details>

<br />

<img src="https://github.com/DevMountain/react-intro-online/blob/solution/readme/3g.gif" />

## Step 9

### Summary

In this step we will be making the clear button work. 

### Instructions

* Open `Calculator.js`. ( `src/components/Calculator/Calculator.js` )
* Create a `clearDisplay` method.
* Update the `.btn clear` element to call the `clearDisplay` method.
* In the `clearDisplay` method use `setState` to reset the properties on state to their default values.

### Solution

<details>

<summary> <code> clearDisplay method </code> </summary>

```jsx
clearDisplay() {
  this.setState({ display: '0', temp: 0, operator: '', resetDisplay: false });
}
```

</details>

<br />

<img src="https://github.com/DevMountain/react-intro-online/blob/solution/readme/4g.gif" />

## Black Diamond

### Instructions

Figure out how to use the `resetDisplay` state property so that the user can start doing other math operations when clicking on a number after pressing equals.

### Solution

<img src="https://github.com/DevMountain/react-intro-online/blob/solution/readme/5g.gif" />

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
