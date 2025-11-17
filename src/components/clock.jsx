import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const date = this.state.date;
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const dateString = date.toLocaleDateString('en-US', options);
    
    return (
      <div className="clock-container">
        <h2 className="clock-text">{date.toLocaleTimeString()}</h2>
        <p className="clock-date">{dateString}</p>
      </div>
    );
  }
}

export default Clock;
