import React, {Component} from 'react';
import * as TEXT from './TEXT';
import { Link } from 'react-router';

class NavBar extends Component {

  TEXT = TEXT.default;

  constructor(props) {
    super();

  }

  render() {
    return (
      <div id="navbar">
        <ul>
          <li>{ this.TEXT.navbar.menu[this.props.lang] }</li>
          <li><Link to="/gallery">{ this.TEXT.navbar.gallery[this.props.lang] }</Link></li>
          <li>{ this.TEXT.navbar.partyRoom[this.props.lang] }</li>
          <li>{ this.TEXT.navbar.prices[this.props.lang] }</li>
          <li>{ this.TEXT.navbar.aboutUs[this.props.lang] }</li>
          <li>{ this.TEXT.navbar.contact[this.props.lang] }</li>
        </ul>
      </div>
    );
  }
}
export default NavBar;
