# React

- React is an efficient, flexible JavaScript library for building user interfaces.
- React uses a special markup language called JSX. The main benefits of using JSX are that you can leverage the full power of JavaScript in HTML and avoid learning or using a templating language.
- A React application is a tree of components and an extension of the HTML DOM.

Create a React application

```
npx create-react-app <nombre>
```

## JSX

JSX (JavaScript Syntax Extension or JavaScript XML) is a declarative language that combines JS with HTML. It makes React code much easier to read, write and understand. JSX syntax is intended to be used by preprocessors, for example, transpilers or compiler like Babel, to transform HTML-like text found in JS files into standard JS objects.

```jsx
const el1 = <h1>This is a sample JSX code snippet</h1>
```

## Components

A React component provides these functionalities:
- Rendering of the initial user interface.
- Managing and handling of events.
- Updating the UI whenever the internal state is changed.

### State of component

State is an object to describe the behavior of a component.
A React component can be either "stateful" or "stateless".
A stateful compoentn updates as per the current state.
Stateful components are class type, while "stateless" components are function type.

### Working if a component

Properties enable the component to pass data.
Events enable the component to manage document object model (DOM) events anda end-user interaction.
States enable the component to stay stateful.

### Types of React components

- **Functional**
  - Created by writing JS function.
  - May or may not receive data as parameters.
  - Functions that take in props and return JSX.
  - Do not natively have state or lifecycle methods, but they can be added by implementing React Hooks.
  - Used to display information that is easy to read, debug, and test.
  - Stateless. A functional component does not have a state and is a plain JS function.
  - Most useful when the lifecycle of the component doesn`t have to be manage.

  ```jsx
  const Democomponent = () => {
    return <h1>Welcome Message!</h1>;
  }
  ```

- **Class**
  - More complex than functional components, but more versatile.
  - Can pass data to other class components.
  - Can be created using JS ES6 classes.
  - More frequently used than some additional functions.
  - Can use React functions like state, props, and lifecycle methods.
  - Inherits React.Component and has to override the render method.
  - Every time the state changes, the class component rerenders.

  ```jsx
  class Democomponent extends React.Component
  {
    render() {
      return <h1>Welcome Message!</h1>;
    }
  }
  ```

- **Pure**
  - Better than functional components.
  - Primarily used to provide optimizations.
  - Simplest and fastest components to write.
  - Do not depend on or modify the state of variables outside their scope.
  - Can replace simple functional components.

- **High-order component (HOC)**
  - Advanced technique in React for reusing component logic.
  - Not available in the API.
  - A pattern that emerged from React's compositional nature.
  - A function that returns a component(s).
  - Used to share logic with other component.
