# Connecting to external services

Most requests to external servers are blocking. To make the call asynchronous, you can use promises.

```jsx
class App extends React.Component {
  state = { user: "None Logged In" };

  componentDidMount() {
    const req = axios.get("<external server>");
    req.then(response => {
      this.setState({ user: response.data.name })
    })
    .catch(err => {
      this.setState({ user: "Invalid user" })
    })
  }

  render() {
    return (
      <div>
        Current user: {this.state.user}
      </div>
    );
  }
}
```

Sending data with POST

```js
const express = require('express');
const app = new express();

const cors_app = require('cors');
app.use(cors_app());

let userCollection = [];

app.post("/user", (req, res) => {
  userCollection.push({'name': req.query.name});
  return res.send('User successfully added');
})

app.get('/user', (req, res) => {
  return res.send(userCollection);
})

app.listen(3333, () => {
  console.log('listening at http://localhost:3333');
})
```

```jsx
class App extends React.Component {
  state = { completionStatus: '' };

  createNewUser() {
    axios.get(
      'http://localhost:3333/user?name=' + document.getElementById('name').value
    ).then(response => {
      this.setState({ completionStatus: response.data })
    })
    .catch(err => {
      this.setState({ completionStatus: "Operation failure" })
    })
  }

  render() {
    return (
      <div>
        Name: <input type="text" id="name"></input>
        <br/>
        <button onClick={this.createNewUser}>Add User</button>
        <span>{this.state.completionStatus}</span>
      </div>
    );
  }
}
```
