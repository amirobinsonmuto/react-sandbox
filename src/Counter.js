import React from "react";

class Counter extends React.Component {
  constructor(props) {
    console.log("Constructor");
    super(props);
    this.state = {
      count: 0,
    };

    this.increment = () => this.setState({ count: this.state.count + 1 });
    this.decrement = () => this.setState({ count: this.state.count - 1 });
  }

  componentDidMount() {
    console.log("Component Did Mount");
    console.log("---------------------------");
  }

  render() {
    console.log("Render");

    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div>Counter: {this.state.count}</div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log("---------------------------");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    console.log("---------------------------");
  }
}

export default Counter;
