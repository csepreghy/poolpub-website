import React, {Component} from 'react';
import { TEXT } from './TEXT';

class HamburgerMenu extends Component {

  constructor(props) {
    super();

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    console.log("scroll");
  }

  handleClick = () => {
    this.props.toggleNavigation();
  }

  render() {
    return (
      <section id="hamburger-menu">
        <div onClick={ this.handleClick } className="hamburger-menu">
          <div className="bar"></div>
        </div>
      </section>
    );
  }
}
export default HamburgerMenu;
