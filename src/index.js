import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {ADD_USER, LOAD_USERS} from "./redux/actions";
import ReduxThunk from "redux-thunk";

const reducer = (state = {users: []}, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return {...state, users: [...action.payload]}
        case ADD_USER:
            // state.users.push(action.payload)
            // return {...state}
            return {...state, users:[...state.users, action.payload]}
        default:
            return state;
    }
}

let store = createStore(reducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
