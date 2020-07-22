import React from "react";

class Clock extends React.Component {
  state = {
    time: new Date(),
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { time } = this.state;
    return <div>{time.toTimeString()}</div>;
  }
}

class App extends React.Component {
  state = {
    showClock: true,
  };

  toggle = () => {
    this.setState((state) => ({ showClock: !state.showClock }));
  };

  render() {
    const { showClock } = this.state;

    return (
      <div>
        <button onClick={this.toggle}>Show/hide Clock</button>
        {showClock && <Clock />}
      </div>
    );
  }
}

export default App;
