<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project we will use an npm package called `create-react-app` to quickly spin up a react application. We'll cover how to use `onClick` and `onChange` events in React, state, JSX, and how to import/export components.

<img src="https://github.com/DevMountain/react-intro-online/blob/solution/readme/1.png" />

## Setup

* Run `npm install` in root directory
* Run `sudo npm install -g create-react-app`
* Run `create-react-app app`

## Step 1

### Summary

In this step we will modify the first component `create-react-app` makes for us.

### Instructions

Clear out the `return` statement in the `render` method.

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

<br />

Clear out `App.css` and paste in the following styles:

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

Create a basic react component, `Calculator`, in `app/src/components/Calculator/Calculator.js`. Also import the calculator img from the root directory.

To save time, paste the following JSX into the the `return` of the `render` method. This is the JSX that will create our calculator.

<details>

<summary> <code> JSX </code> </summary>

```js
<div id="calculator-container">
  <input id="header-input"></input>
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
```

</details>

<br />

Export `Calculator` so that `App.js` can import it. After exporting `Calculator` go into `App.js` and import it. We can then add `Calculator` to the `render` of `App.js`.

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
        <input id="header-input"></input>
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

### Instructions

* Create a constructor method 
* Create a state object that has a `header` property
* Create a method called `updateHeader` that takes `val` as a parameter
* Add an `onChange` event to `#header-input` element that calls `updateHeader` with the value of the element
* Change the value of the `#header` element to the header property on state

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
        <input id="header-input" onChange={ (e) => { this.updateHeader(e.target.value); }}></input>
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

### Instructions

* Add `display` to state with an initial value of `'0'`
* Add `operator` to state with an initial value of `''`
* Add `temp` to state with an initial value of `0`
* Add `resetDisplay` to state with an initial value of `false`

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

To start, let's take a look at our `div` element with the className of output. Inside that `div` we have a `span` with the `className` of total. This element sits in the output section of our calculator.

Inside the span tags let's `render` our display property on state by using `{ this.state.display }`.

````jsx
<div className="output">
  <span className="total"> { this.state.display } </span>
</div>
````

Now we can create our method that will update our state property `display`. Let's add our new method above the render method on our class. In react in order to trigger a method on a click event we use the attribute called `onClick={}`. Let's take a look at our `div` with the className of `btn one`.

```jsx
<div className="btn one"></div>
```

We'll want to call our `setDisplay` method with a parameter so it knows which button was clicked.

```jsx
<div className="btn one" onClick={ () => { this.setDisplay('#'); } }></div>
```

Let's copy and paste `onClick={ () => { this.setDisplay('#'); } }` over to each number button and be sure to replace # with the number of the button. You can determine which `div` is which number based on its className.

```jsx
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
```

Since we are getting the number passed in as a parameter we can use the parameter to update `this.state.display`.

```jsx
setDisplay(num) {
  this.setState({ display: this.state.display + num });
}
```

### Solution

<details>

<summary> <code> Calculator.js </code> </summary>

```jsx
import React, { Component } from 'react';
import calculatorImg from '../../../../calculator.png';

class Calculator extends Component {
  constructor(props) {
    super();
    this.state = {
      display: '0',
      operator: '',
      temp: 0,
      resetDisplay: false,
    }
  }

  setDisplay(num) {
    this.setState({ display: this.state.display + num });
  }

  render() {
    return (
      <div id="calculator-container">
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

<img src="https://github.com/DevMountain/react-intro-online/blob/solution/readme/4.png" />

### Instructions

#### Exclude initial 0

In order to remove the first 0 we can check to see if the display is currently '0'. Otherwise if it is not '0' do string concatenation.

##### Solution

```jsx
setDisplay(num) {
  var display = ( this.state.display === '0' ) ? num : this.state.display + num;
  this.setState({ display: display });
}
```

#### Keep length contained in output field

With the current size of the output field you can fit about 13 characters before breaking outside the border. Therefore, we can check to see if the length of display is less than 13 characters before updating state.

##### Solution

```jsx
setDisplay(num) {
  var display = ( this.state.display === '0' ) ? num : this.state.display + num;
  this.setState({ display: (this.state.display.length < 13) ? display : this.state.display })
}
```

### Solution

<img src="https://github.com/DevMountain/react-intro-online/blob/solution/readme/5.png" />

## Step 7

### Summary

In this step will be adding a `setOperator` method that will handle setting our math operator using an `operator` parameter.

### Instructions

There are a couple things to consider on this step. When a user types in their first number and then presses an operator we need to do four things.

1. Save which operator the user chooses
2. Only allow for the operator to be selected once
3. Save the first number the user inputted
4. Clear the display for the second number

We can do all of these things using one `this.setState({})` with the following properties: `display`, `operator`, and `temp`.

If we take a look in our `Calculator.js` we'll see we have four elements with classes of `multiply`, `divide`, `subtract`, and `add`. Using an `onClick={}` we can call a method called `setOperator` that takes an operator as an arugment.

```jsx
setOperator(operator) {

}
```

```jsx
<div className="btn multiply" onClick={ () => { this.setOperator('*'); } }></div>
<div className="btn divide"   onClick={ () => { this.setOperator('/'); } }></div>
<div className="btn subtract" onClick={ () => { this.setOperator('-'); } }></div>
<div className="btn add"      onClick={ () => { this.setOperator('+'); } }></div>
```

If one of our requirements is to set the operator only one time, we can use an if statement to check to see if it has already been set on state.

```jsx
setOperator(operator) {
  if (!this.state.operator) {

  }
}
```

Since we are getting the operator as a parameter we can just use setState to set the operator, reset the display, and save the current number.

```jsx
setOperator(operator) {
  if (!this.state.operator) {
    this.setState({ operator: operator, temp: parseInt(this.state.display, 10), display: '0' })
  }
}
```

### Solution

<img src="https://github.com/DevMountain/react-intro-online/blob/solution/readme/2g.gif" />

## Step 8

### Summary

In this step we will be adding a calculate method that will preform the user selected operation.

### Instructions

To start let's take a look at our `Calculator.js` and find the element that corresponds to the equal button.

```jsx
<div className="btn equal"></div>
```

Since all the values we need are already being stored on state, we do not need to call this function with any parameters.

```jsx
calculate() {

}
```

```jsx
<div className="btn equal" onClick={ () => { this.calculate() } }></div>
```

There are some scenarios to consider when creating this method. For example, how do we know when we press the equal button that the user has already selected an operator? Well, if we look at our code base when we select an operator we update the operator and temp properties. We can use these as a source of truth for determining if we should preform a math operation.

Therefore, we can code an if statement that checks to see if operator is `''`, and if it is, exit the function.

```jsx
calculate() {
  if ( this.state.operator === '' ) { return; }
}
```

Let's add a switch statement for `this.state.operator` ( '+', '-', '*', '/' )

```jsx
calculate() {
  if ( this.state.temp === 0 ) { return; }

  switch ( this.state.operator ) {
    case '+':

      break;
    case '-':

      break;
    case '*':

      break;
    case '/':

      break;
    default:
      break;
  }
}
```

Let's create a variable called result and update its value and use one `this.setState({})` after the switch statement has completed. Our variable result should be equal to the `this.state.temp` value ( +, -, *, / ) the current `this.state.display` value.

```jsx
calculate() {
  if ( this.state.temp === 0 ) { return; }
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

### Solution

<img src="https://github.com/DevMountain/react-intro-online/blob/solution/readme/3g.gif" />

## Step 9

### Summary

In this step we will be making the clear button work. 

### Instructions

In our `Calculator.js` find the element with the `clear` class and let's add an `onClick={}` attribute to call a `clearDisplay` method.

```jsx
clearDisplay() {

}
```

```jsx
<div className="btn clear" onClick={ () => { this.clearDisplay() } }></div>
```

When we clear the display we also want to reset the calculator no matter what state it is in.

```jsx
clearDisplay() {
  this.setState({ display: '0', temp: 0, operator: '', resetDisplay: false });
}
```

### Solution

<p align="center">
<img src="https://github.com/DevMountain/react-intro-online/blob/solution/readme/4g.gif" />
</p>

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