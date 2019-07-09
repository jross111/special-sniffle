# React State


* [Render `state` in the User Interface](#Render-State-in-the-User-Interface)
* [Set State with `this.setState`](#set-state-with-this.setstate)
* [Bind `this` to a Class Method](#bind-this-to-a-class-method)
* [Use `state` to Toggle an Element](#Use-State-to-Toggle-an-Element)
* [A Simple Counter](#A-Simple-Counter)
* [Create a Controlled `Input`](#Create-a-Controlled-Input)
* [Create a Controlled `Form`](#Create-a-Controlled-Form)
* [Pass `state` as `props` to Child Components](#Pass-state-as-props-to-Child-Components)
* [Pass a Callback as `props`](#Pass-a-Callback-as-props)
* [Lifecycle Methods](#Lifecycle-Methods)
* [Event Listeners](#Event-Listeners)

***


## Render `state` in the User Interface


Anytime we return state, `this.state` needs to be wrapped in curly braces. This should render 'Jamie' in h1 tags:
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jamie'
    }
  }
  render() {
    return (
      <div>
          <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```



Another way to render `state` in a component: set a variable to contain `this.state.name` and then return the jsx with the variable.  This will return same as above:
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jamie'
    }
  }
  render() {
    const name = this.state.name
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
};
```
***
## **Set State with** `this.setState`

Call `setState` method inside a component class: `this.setState({ key: value })`

```javascript
this.setState({
  name: 'Jamie',
})
```
Never modify state directly, always use `this.setState()` when changes occur.

The following will allow a button click to change 'Initial State' to 'Second State':
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: 'Second State',
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```
***
## Bind `this` to a Class Method
This will allow a Class Method to access `this` from outside the normal scope.  One way is to explicitly bind `this` in the cunstructor.

The following will bind `this` to the `adItem()` method, allowing us to increment the count `onClick`:
``` Javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };
    this.addItem = this.addItem.bind(this)
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addItem} >Click Me</button>
        <h1>Current Item Count: {this.state.itemCount}</h1>
      </div>
    );
  }
};
```
***
## Use `state` to Toggle an Element
The following renders the text "Now you see me!" if the `visibility` props state is `true`.  The `button` element will toggle the state on click.  

We can toggle the state of an element using a simple `if else` statement.  This is done in the `toggleVisibility()` method below:
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }
toggleVisibility() {
    if (this.state.visibility == true) {
    this.setState({
      visibility: false
    })} else {
      this.setState({
        visibility: true
      })
    }
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}; 
```
***
## A Simple Counter

An exemple that renders three buttons, each changing the state of `count`:

```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  this.increment = this.increment.bind(this)
  this.decrement = this.decrement.bind(this)
  this.reset = this.reset.bind(this)
  }

  increment(){
    this.setState({
      count: this.state.count + 1
    })
  };

  decrement(){
    this.setState({
      count: this.state.count - 1
    })
  }

  reset(){
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
```
***
## Create a Controlled Input

When a user adds text to an `input` we can treat it as part of the `state`.  Using the `value` and `onChange` properties of the `input` html element, we can send it to `this.state.input` and display it in real time.

```javascript
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }
    handleChange(event){
      this.setState({
        input: event.target.value
      })
    };
  render() {
    return (
      <div>
        <input value ={this.state.input} onChange={this.handleChange} />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
```
***
## Create a Controlled Form

We can also create a form with `<button type='submit'>` to update and render the `state` when clicked.  This form will clear the input `state` and display it's previous state below.

```javascript
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      input: '',
      submit: this.state.input
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
};
```
***
## Pass `state` as `props` to Child Components

`state` flows in one direction down the tree of components, from the parents `state` to child components as `props`.  The child should only receive the `state` data that is required.  Complicated stateful apps can be broken down into only a few, or sometimes just a single stateful component.  All the other components simply use `props` received from a parents `state`.

In the following example, our parent component, `My App`, sets the `state` to `name: 'Jamie'` and passes it to the child component, `Navbar`, as a prop.

```javascript
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jamie'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name}/>
       </div>
    );
  }
};
```
```Javascript
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};
```
***
## **Pass a Callback as `props`**
Just like `state`, you can pass functions and methods to child child components.  This allows child components to interact with their parents.

This example has three components.  The `MyApp` component is the parent component and will pass it's `state` as `props` to the `GetInput` and `RenderInput`.

```javascript
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* change code below this line */ }
      < GetInput input={this.state.inputValue}  handleChange={this.handleChange} />
      < RenderInput input={this.state.inputValue} />
        { /* change code above this line */ }
       </div>
    );
  }
};
```
```javascript
class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};
```
```javascript
class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```
***
## Lifecycle Methods 

`componentWillMount()` method is called before `render()`.

`componentDidMount()` method is often used to place API calls.  It's called after a component is mounted to the DOM. Any calls to `setState()` within this method will trigger a re-render of the component. When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.

`componentWillReceiveProps()`

`shouldComponentUpdate()`

`componentWillUpdate()` 

`componentDidUpdate()`

`componentWillUnmount()`

***
## Event Listeners
`componentDidMount` is the best place to attach event listeners.  

