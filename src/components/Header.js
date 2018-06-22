import React, { Component } from 'react';
import {Link} from 'react-router';

class Header extends Component {
  render(){
    return(
      <header>
				<nav>
          <div className="container-max-width">
            <ul>
              <li>
                <Link to="/" className="table ancho100 height100">
                  <div className="cell vertical-middle">Countdown</div>
                </Link>
              </li>
              <li>
                <Link to="/flipcoin" className="table ancho100 height100">
                  <div className="cell vertical-middle">Flip coin</div>
                </Link>
              </li>
            </ul>
          </div>
				</nav>
    </header>
    );
  }
}

export default Header;
