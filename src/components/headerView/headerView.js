import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <nav className="header">
        <div className="container">
          <img
            alt="yemek"
            src="https://cdn.evtiko.com/images/evtiko-logo.svg"
          />
        </div>
      </nav>
    );
  }
}
