// Functional component
function App(props) {
  const titleStyles = {
    color: props.color,
    fontSize: props.size
  };

  const currDate = new Date();

  return (
    <div>
      <h1 style={titleStyles}>Hello, world!</h1>
      <h2>It is {currDate.toLocaleDateString()} and the time now is {currDate.toLocaleTimeString()}.</h2>
      <button onClick={props.clickEvent}>Click Me!</button>
    </div>
  );
}
export default App;
