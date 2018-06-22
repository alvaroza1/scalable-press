import React, { Component } from 'react';

class Flipcoin extends Component {

  constructor(props){
    super(props);

    this.state = {
      randomNumber: 0
    };
    this.flip = this.flip.bind(this);
    this.randomNumber = this.randomNumber.bind(this);
    this.recursiveRandom = this.recursiveRandom.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  randomNumber(n){
    console.log('click')
    if(n > 0 && n < 1000000){
      return this.recursiveRandom(n, 0);
    }
    else
      throw 'Error número inválido';
  }

  recursiveRandom(n, m){

    if(n === 0)
      return n;

    m++;
    n--;

    if(m === parseInt(this.refs.number.value)){
      return n;
    }

    if(this.flip() && this.flip() && this.flip()){
      if(this.flip())
        return m;
      else
        return n;
    }else{
      return this.recursiveRandom(n, m);
    }

  }

  flip(){
    return Math.random() >= 0.5;
  }

  handleClick(){
    var number = this.refs.number.value;
    try{
      var random = this.randomNumber(number);
      this.setState({
        randomNumber: random
      });
    }catch(err){
      this.setState({
        randomNumber: err
      });
    }
  }

  render(){

    return(
      <div>
        <h3>Enter de number</h3>
        <input ref="number" type="number" placeholder="Enter de number" />
        <div><button onClick={this.handleClick}>Flip</button></div>
        <h1>{this.state.randomNumber}</h1>
      </div>
    );
  }
}

export default Flipcoin;
