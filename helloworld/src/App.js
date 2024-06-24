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
      <p>It is {currDate.toLocaleDateString()} and the time now is {currDate.toLocaleTimeString()}.</p>
      <button onClick={props.clickEvent}>Click Me!</button>
    </div>
  );
}
export default App;
