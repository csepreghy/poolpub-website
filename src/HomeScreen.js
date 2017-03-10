import React, {Component} from 'react';
import { TEXT } from './TEXT';
import BackgroundContainer from './BackgroundContainer';
import HamburgerMenu from './HamburgerMenu';
import NavBar from './NavBar';

class HomeScreen extends Component {

  constructor(props) {
    super();

  }

  componentDidMount() {
    $(window).scroll(function() {
      console.log("scroll");
    });
  }

  toggleNavigation = () => {
    $('.bar').toggleClass('animate');
    let elem = document.getElementById('navbar');
    if (elem.className === 'overlay-show') {
      elem.className = 'overlay-hide';
      return;
    }
    if (elem.className === 'overlay-hide') {
      elem.className = 'overlay-show';
      return;
    }
  }

  render() {
    return (
      <section id="homescreen">
        <BackgroundContainer langSwitch={ this.props.langSwitch } />
        <HamburgerMenu toggleNavigation={ this.toggleNavigation } />
        <NavBar lang={ this.props.lang } toggleNavigation={ this.toggleNavigation } />
      </section>
    );
  }
}
export default HomeScreen;
