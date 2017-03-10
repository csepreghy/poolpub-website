import React, {Component} from 'react';
import {TEXT} from './TEXT';
import { Link } from 'react-router';
import TWEEN from 'tween.js';

class NavBar extends Component {

  constructor(props) {
    super();

    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo(id) {

    this.props.toggleNavigation();

    let targetScrollPosition = document.getElementById(id).offsetTop;
    let currentScrollPosition = document.body.scrollTop;

    let time = Math.abs(targetScrollPosition - currentScrollPosition)/3 + 1000;

    let tween = new TWEEN.Tween({x: currentScrollPosition})
        .easing(TWEEN.Easing.Quadratic.InOut)
        .to({ x: targetScrollPosition }, time)
        .onUpdate(function() {
          document.body.scrollTop = this.x;
        })
        .start();

        requestAnimationFrame(animate);

        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
  }

  render() {
    console.log(TEXT);
    return (
      <div id="navbar" className="overlay-hide">
        <ul>
          <li onClick={ () => this.scrollTo("opening-hours") }>{ TEXT.navbar.openingHours[this.props.lang] }</li>
          <li onClick={ () => this.scrollTo("prices") }>{ TEXT.navbar.prices[this.props.lang] }</li>
          <li onClick={ () => this.scrollTo("partyroom") }>{ TEXT.navbar.partyRoom[this.props.lang] }</li>
          <li onClick={ () => this.scrollTo("gallery") }>{ TEXT.navbar.gallery[this.props.lang] }</li>
          <li onClick={ () => this.scrollTo("contact") }>{ TEXT.navbar.contact[this.props.lang] }</li>
        </ul>
      </div>
    );
  }
}
export default NavBar;
