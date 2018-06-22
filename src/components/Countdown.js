import React, { Component } from 'react';
import '../css/countdown.css';

class Countdown extends Component {

  constructor(props){
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      interval: null
    };
    this.updateCounter = this.updateCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  componentDidMount(){
    var interval = setInterval(this.updateCounter, 1000);
    this.setState({
      interval: interval
    });
  }

  componentWillUnmount(){
    clearInterval(this.state.interval);
  }

  updateCounter(){

    var units = this.state;

    var seconds = units.seconds;
    var minutes = units.minutes;
    var hours = units.hours;
    var days = units.days;

    seconds++;

    if(seconds > 59){
      minutes++; seconds = 0;}

    if(minutes > 59){
      hours++; minutes = 0;}

    if(hours > 23){
      days++; hours = 0;}

    this.setState({
      days: days,hours: hours, seconds: seconds, minutes: minutes
    });
  }

  resetCounter(){
    this.setState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });
    clearInterval(this.state.interval);
    var interval = setInterval(this.updateCounter, 1000);
    this.setState({
      interval: interval
    });
  }

  render(){
    return(
      <div>
        <h2>Countdown timer</h2>
        <div className="counter">
          <div>
            <div>{this.state.days}</div>
            <label>Days</label>
          </div>
          <div>
            <div>{this.state.hours}</div>
            <label>Hours</label>
          </div>
          <div>
            <div>{this.state.minutes}</div>
            <label>Minutes</label>
          </div>
          <div>
            <div>{this.state.seconds}</div>
            <label>Seconds</label>
          </div>
        </div>
        <button onClick={this.resetCounter}>Reset counter</button>
      </div>
    );
  }
}

export default Countdown;
