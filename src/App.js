import React, { Component } from 'react';
import './css/main.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <section className="container">
    			<div className="push-top"></div>
    			<section className="container-wrapper">
    				<section className="content">
              {this.props.children}
    				</section>
    			</section>
    			<div className="push-bottom"></div>
  		</section>
        <Footer />
      </div>
    );
  }
}

export default App;
