# Redux

* [Create a Redux `store`](#Create-a-Redux-store)
* [Get State from the Redux Store](#Get-State-from-the-Redux-Store)
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
## Get State from the Redux Store

