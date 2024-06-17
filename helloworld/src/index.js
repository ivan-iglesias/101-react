import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Counter from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <App />
// );

// To ensure the time is constantly changing
function ref() {
  root.render(
    <>
      <App color="green" size="25" clickEvent={() => alert('Hello')}/>
      <Counter buttonText="Increment Counter!!" />
    </>
  );
}

setInterval(ref, 1000);
