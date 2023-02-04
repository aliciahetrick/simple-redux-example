import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

//STORE aka global state
import { createStore } from 'redux'
// let store = createStore(reducer)

//ACTION aka verb describing what you want to do
//is a function that returns an object
function increment() {
  return {
    type: 'INCREMENT',
  }
}

function decrement() {
  return {
    type: 'DECREMENT',
  }
}

//REDUCER aka describes how your actions transform state into the next state
//is a function that returns an object
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let store = createStore(counter)

//display it in the console:
store.subscribe(() => {
  console.log(store.getState())
})

//DISPATCH aka the way you execute your action
store.dispatch(increment())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
