# Redux

* [Create a Redux `store`](#Create-a-Redux-store)
* [Get State from the Redux Store](#Get-State-from-the-Redux-Store)
* [Define a Redux Action](#Define-a-Redux-Action)
***

## Create a Redux `store`
Redux is a state management framework that can be used with a number of different web technologies, including React.

In Redux, there is a single state object that's responsible for the entire state of your application. This means if you had a React app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux `store`. This is the first important principle to understand when learning Redux: **the Redux store is the single source of truth when it comes to application state.**

This also means that any time any piece of your app wants to update state, it must do so through the Redux store. The unidirectional data flow makes it easier to track state management in your app.

The Redux `store` object holds and manages application `state`.  The `createStore()` method on the Redux object creates the Redux `store`.   It takes a `reducer` function as a _required_ argument that takes `state` as an argument and returns `state`.

Example of creating a new `store`:

```javascript
const reducer = (state = 5) => {
  return state;
}

const store = Redux.createStore(reducer)
```
***
## Get State from the Redux Store with `getState()`

One way to retrieve `state` from the Redux `store` object is with the `getState()` method:

```javascript
const store = Redux.createStore(
  (state = 5) => state
);
let currentState = store.getState();
```
***
## Define a Redux Action

In Redux, all state is triggered by any action. An action is a JS object that contains info about an action event that has already occured.  The `store` receives these objects and updates its `state`.  A Redux action can also carry data, like a the username of a new log in. The data is optional, but all actions must carry a `type` property that specifies the type of action that occured.  

_Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store. The store then conducts the business of updating state based on the action that occurred._

To write a Redux action, declare an object with a `type` property:

```javascript
const action = {
  type: 'LOGIN'
}
```
***
## Define an Action Creator

Once we create an action, it needs to be sent to the Redux `store` so it can update its `state`.  We can do this by defining an action `creator`, which is a function that returns an action.  **Action creators create objects that represent action events**

```javascript
const action = {
  type: 'LOGIN'
}

function actionCreator(){
    return action
}
```
***
## Dispatch an Action Event

The `dispatch` action dispactes actions to the Redux `store`.  Calling `store.dispatch()` and passing the value returned from an action creator sends an action back to the store.

```javascript
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction())
```
***
## Handle an Action in the Store

The `reducer` determines how the Redux `store` reacts after an action is created and dispatched.  They are responsible for `state` modifications that take place in response to actions.  
The `reducer` takes two arguments, `state` and `action`, and always returns a new `state`.  **This is the only role of the `reducer`.  It is a pure function.**

```javascript
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  if (action.type == 'LOGIN'){
    return {
      login: true
    }
  } else {
    return defaultState
  }
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```
***
## Use a Switch Statement to Handle Multiple Actions

You can tell the Redux store how to handle multiple action types. Say you are managing user authentication in your Redux store. You want to have a state representation for when users are logged in and when they are logged out. You represent this with a single state object with the property `authenticated`. You also need action creators that create actions corresponding to user login and user logout, along with the action objects themselves.

```javascript
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
    switch(action.type){

      case 'LOGIN':
        return {
          authenticated: true 
        }

      case 'LOGOUT':
        return {
          authenticated: false
        }

      default:
        return state 

      
    }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```