# Hooks

Hooks were introduced in February 2019 as part of React 16.8. They are a simpler way to encapsulate stateful behavior and side effects in user interfaces.

They provide a way to use functionalities such as context or state, without classes.

Hooks allow function components to have access to state and other React features. This state will be preserved by React when the component re-renders. Hence, this allows React to be used without classes.

You can create your own Hooks. This means that instead of re-writing code from one component to another, you can write an abstract custom Hook and reuse it.

Advantages of using Hooks:

- Readable.
- Lesser code.
- Overall, the component written with Hooks is optimized.
- Hooks enable you to write a functional component with state.
- Writing complex components became easier using Hooks.
- Handle events and logics in functional components without using classes.
- Provides performance boost with functional components.

Best practices:

- Hooks can only be called inside React function components.
- You cannot call Hooks from regular Javascript functions.
- Hooks can only be called at the top level of a component.
- You cannot call Hooks inside loops, conditions, or nested functions.
- Hooks cannot be conditional.

Standard Hooks:

- **useState**, allows you to use state in your function.
- **useEffect** manages side effects such as document changes, HTTP, and so on.
- **useContext** manages context changes and provides the component with access to a context.
- **useReducer** manages Redux state changes. Like a light form of Redux, this Hook provides a dispatch function and a state, while taking a reducer and an initial state. This is not a full replacement for Redux, though it could be used in certain situations.

Custom Hooks:

- Custom React hooks let you add special, unique functionality to your React applications.
- Custom Hooks are named with "use" as a prefix (useLocalStorage, useAuthentication).
- A custom Hook is a new composition of one or multiple Hooks.
- Since Hooks can be treated as functions, they have the same features as functions. They are reusable, can be broken into smaller hooks that can be combined, and they are testable.


```jsx
import React, { useState } from 'react';
function CountApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} many times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default CountApp;
```
