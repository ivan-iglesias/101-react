import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Counter from './Counter';
import Todolist from './Todolist';

import {Provider} from 'react-redux'
import myReducers from './reducers'
import {legacy_createStore as createStore} from 'redux';

//Create the store
const myStore = createStore(myReducers);

//This will console log the current state everytime the state changes
myStore.subscribe(() => console.log(myStore.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <App />
// );

function ref() {
  root.render(
    // Enveloping the App inside the Provider, ensures that the
    // states in the store are available throughout the application
    <Provider store={myStore}>
      <App color="green" size="25" clickEvent={() => alert('Hello')}/>
      <hr/>
      <Counter buttonText="Increment Counter!!" />
      <hr/>
      <Todolist></Todolist>
    </Provider>
  );
}

// To ensure the time is constantly changing
setInterval(ref, 1000);

// ReactDOM.render(<App />, document.getElementById('root'));
