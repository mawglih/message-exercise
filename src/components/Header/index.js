import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  render() {
    const {
      messages,
    } = this.props;
    var count = 0;
    for(let i = 0; i < messages.length; i++) {
      if(messages[i].is_new) {
        count++;
      }
    }
    return(
      <div className="header">
        <div className="count">
          Number of unread messages is {count}
        </div>
      </div>
    );
  }
}
export default Header;
