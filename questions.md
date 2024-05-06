1. What is the difference between Component and PureComponent?
   Give an example where it might break my app.

PureComponent implents shouldComponentUpdate and a normal Component does not.
A PureComponent should always render the same results given the same inputs.

The shallow comparison done by a pure component can cause unnecessary re-renders. shouldComponentUpdate and a normal Component can be used to avoid this.

2. Context + ShouldComponentUpdate might be dangerous. Why is
   that?

ShouldComponentUpdate is used as a performance optimization. The default behaviour of a component is to re-render on every state change.
Content updates cause re-renders to be triggered locally. If the context value changes then the component's data will re-render even if there are no changes to the data relevant to the component.
Using these two methods together will cause the effects of ShouldComponentUpdate to not happen as the context will still change and thus cause it to re-render.

3. Describe 3 ways to pass information from a component to its
   PARENT.

Callback
A callback function is defined in the parent component and passed as a prop the the child component. The callback function is invoked in the child component and the parent component handles the information.

Events
Custom event handlers are created and invoked in the child component and the parent component listens for these events.

Props
Data can be passed as an argument in the prop

4. Give 2 ways to prevent components from re-rendering.

Using shouldComponentUpdate on a normal component
Using a pure component

5. What is a fragment and why do we need it? Give an example where it
   might break my app.

A fragment groups multiple children elements without adding an additional node to the DOM. We use to avoid wrapping additional elements like <div>. React has strict rendering requirements and a component can only return a single element.

6. Give 3 examples of the HOC pattern.

withAuthentication
withLoading
withErrorHandling

7. What's the difference in handling exceptions in promises,
   callbacks and async...await?

Promises are best used to manage complex asynchronous code flows. Errors that occur within the promise chain will be caught at the nearest 'catch()' handler.
Callbacks functions passed as arguements to another function. The error handling happens when the operation completes. This method is hard to read and maintain in large asynchronous code bases.
Async/Await uses try catch blocks. It allows for asynchronous error handling. then catch can also be used.

8. How many arguments does setState take and why is it async.

setState is used to update the state of a component. It takes 2 arguments and can also accept a function as an argument.
It is asynch to avoid unnecessary re-renders and improve performance.

9. List the steps needed to migrate a Class to Function
   Component.

Convert State to useState
State variables defined in the class component needs to be replaced with useState hooks in the function component.

Convert Lifecycle Methods to useEffect
Lifecycle methods life componentDidMount, componentDidUpdate used in the class component need to be converted into useEffect hooks in the function component

10. List a few ways styles can be used with components.

Vanilla CSS
Css Modules
CSS-in-JS

11. How to render an HTML string coming from the server.

Using the dangerouslySetInnerHTML attribute. It is important to sanitize the HTML code against anything malicious.
