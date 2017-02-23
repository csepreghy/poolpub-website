import React, {Component} from 'react';
import * as TEXT from './TEXT';
import { Link } from 'react-router';
import scrollToElement from 'scroll-to-element';
import scrollTo from 'scroll-to';
import TWEEN from 'tween.js';

class NavBar extends Component {

  TEXT = TEXT.default;

  constructor(props) {
    super();

    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo(id) {

    console.log(id);


    //document.body.scrollTop = document.getElementById("gallery").offsetTop;
    let targetScrollPosition = document.getElementById(id).offsetTop;
    let currentScrollPosition = document.body.scrollTop;

    let time = (targetScrollPosition - currentScrollPosition)/3 + 1000;

    var tween = new TWEEN.Tween({x: currentScrollPosition})
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
    console.log(TWEEN);
    return (
      <div id="navbar">
        <ul>
          <li onClick={ () => this.scrollTo("opening-hours") }>{ this.TEXT.navbar.openingHours[this.props.lang] }</li>
          <li onClick={ () => this.scrollTo("prices") }>{ this.TEXT.navbar.prices[this.props.lang] }</li>
          <li onClick={ () => this.scrollTo("partyroom") }>{ this.TEXT.navbar.partyRoom[this.props.lang] }</li>
          <li onClick={ () => this.scrollTo("gallery") }>{ this.TEXT.navbar.gallery[this.props.lang] }</li>
          <li onClick={ () => this.scrollTo("contact") }>{ this.TEXT.navbar.contact[this.props.lang] }</li>
        </ul>
      </div>
    );
  }
}
export default NavBar;
