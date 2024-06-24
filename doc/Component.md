# Components

A React component provides these functionalities:
- Rendering of the initial user interface.
- Managing and handling of events.
- Updating the UI whenever the internal state is changed.

## State of component

State is an object used by React to represent information about the component’s current situation. It determines how a component renders and behaves. When the state object changes, the component re-renders. React components have a built-in state object.

```js
const TestComponent extends React.component {
  constructor() {
    this.state = { id: 1, name: "John" };
  }

  render() {
    return <p>{this.state.name}</p>
  }
}
```

A React component can be either "stateful" or "stateless". A "stateful" component updates as per the current state. "Stateful" components are class type, "while stateless" components are function type.

**Type of React states**

- Shared state is shared by multiple components.
- Local state lives in a single component and is not used in other components.

## Props

Props is short for properties, and they are used to pass data between React components. React’s data flow between components is uni-directional from parent to child only. Props are read-only components, cannot be modified from inside the component.

The state is managed in the parent component, and the child component does not have a state of their own.

```js
const TestComponent extends React.component {
  render() {
    return <div>Hi {this.props.name}</div>
  }
}

// passing the props
<TestComponent name="John" />
```

## Passing data between components

- From parent to child using props.
- From child to parent using callbacks.

```jsx
class App extends React.Component {
  state = {message: ""};

  func1 = (childData) => this.setState({message: childData});

  render() {
    return (
      <div>
        <AppInner parentCallBack = {this.func1}/>
        {this.state.message}
      </div>
    );
  }
}

class AppInner extends React.Component {
  sendData = () => {
    setInterval(() => {
      const currTime = Date();
      this.props.parentCallBack(currTime)
    }, 1000)
  };

  componentDidMount() {
    this.sendData()
  };

  render() {
    return <div></div>
  }
}
```

- Between siblings using Redux.
