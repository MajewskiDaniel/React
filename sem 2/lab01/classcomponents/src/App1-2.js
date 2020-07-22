import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextState.count % 2 === 0;
  }

  increment() {
    this.setState(
      (state) => ({ count: state.count++ }),
      () => {
        console.log("setState:", this.state.count);
      }
    );
    console.log(this.state.count); //shows us that setState is asynchronous
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        Clicks: {count} <button onClick={this.increment}>Click Me</button>
      </div>
    );
  }
}

export default App;

//without binding:
// import React from "react";

// class App extends React.Component {
//   state = {
//     count: 0,
//   };

//   increment = () => {
//     this.setState((state) => ({ count: state.count + 1 }));
//   };

//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         Clicks: {count} <button onClick={this.increment}>Click Me</button>
//       </div>
//     );
//   }
// }

// export default App;
