# Forms

Most React forms are single page applications (SPAs) or web applications that load a single page.

In React, form data is usually handled by the components. They allow users to directly input and submit data in components ranging from a login screen to a checkout page. When the data is handled by the components, all the data is stored in the component state.

You do not submit the information directly from the form to a server. Instead, you will capture the form information on the client side.

You can control changes by adding event handlers in the onChange attribute, and that event handler will be used to update the state of the variable.

Forms validation is not out of the box in React, and you need to validate the forms using tasks such as:
- Getting the input values in the form.
- Managing the form state and updating the state with the current values.
- Validating the form on the fly to check the correctness of the input values.
- Showing the error messages for every incorrect value during validation.

Inputs in React can be one of two types: controlled or uncontrolled:

An **uncontrolled** input is the simpler of the two. React puts the value on the page, and the browser keeps track of the rest. You can access the input’s value through React’s change events. Uncontrolled inputs require less code but make it difficult to do certain actions.

To write an uncontrolled component, you need to use a ref function to get the form input values from the DOM. In other words, there is no need to write an event handler for every state update.

With a **controlled** input, you explicitly control the value that the input displays. You need to write code to respond to keypresses, store the current value somewhere, and pass that value back to the input to be displayed. It requires more code for each action, but this type of input offers more control over the input value.

```jsx
import React, { Component } from 'react';

export default function App() {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (event) => {
    console.log(`Email: ${email}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email
      <input
        name="email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      </label>

      <button>Submit</button>
    </form>
  );
}
```

[React Hook Form](https://react-hook-form.com/) is a package for creating simple to complex web forms. It is a form state management and validation library for React web-based applications and React Native mobile applications. It has zero dependencies.

```jsx
import { useForm } from "react-hook-form"

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("email"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: true })} />
      {errors.emailRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  )
}
```

TypeScript

```ts
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
}

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("email"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: true })} />
      {errors.emailRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  )
}
```
