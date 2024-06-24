# Component types

## Functional

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

## Class

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

## Pure

- Better than functional components.
- Primarily used to provide optimizations.
- Simplest and fastest components to write.
- Do not depend on or modify the state of variables outside their scope.
- Can replace simple functional components.

## High-order component (HOC)

- Advanced technique in React for reusing component logic.
- Not available in the API.
- A pattern that emerged from React's compositional nature.
- A function that returns a component(s).
- Used to share logic with other component.
