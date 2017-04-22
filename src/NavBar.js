import React, {Component} from 'react';
import { TEXT } from './TEXT';
import { Link } from 'react-router';
import TWEEN from 'tween.js';

class NavBar extends Component {

  constructor(props) {
    super();

    this.scrollTo = this.scrollTo.bind(this);
  }
  //
  // componentDidMount() {
  //   $(function() {
  //     console.log("1");
  //     $('a[href*="#"]:not([href="#"])').click(function() {
  //       console.log(2);
  //       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //         console.log(3);
  //         var target = $(this.hash);
  //         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //         if (target.length) {
  //           console.log(4);
  //           //location.replace('#contact')
  //           $('html, body').animate({
  //             scrollTop: target.offset().top
  //           }, 1000);
  //           return false;
  //         }
  //       }
  //     });
  //   });
  // }

  scrollTo(id) {

    // console.log("ScrollToId: ", id);
    //
    this.props.toggleNavigation();
    //
    // let targetScrollPosition = document.getElementById(id).offsetTop;
    // let currentScrollPosition = document.body.scrollTop;

    // window.scroll({
    //   top: 2500,
    //   left: 0,
    //   behavior: 'smooth'
    // });
    //
    // // Scroll certain amounts from current position
    // window.scrollBy({
    //   top: 100, // could be negative value
    //   left: 0,
    //   behavior: 'smooth'
    // });

    // Scroll to a certain element
    // document.querySelector('#contact').scrollIntoView({
    //   behavior: 'smooth'
    // });
    //location.hash('contact');
    //location.replace('#contact');

    // let time = Math.abs(targetScrollPosition - currentScrollPosition)/3 + 1000;
    //
    // let tween = new TWEEN.Tween({x: currentScrollPosition})
    //     .easing(TWEEN.Easing.Quadratic.InOut)
    //     .to({ x: targetScrollPosition }, time)
    //     .onUpdate(function() {
    //       let roundX = Math.round(this.x);
    //       window.pageYOffset = roundX;
    //       document.documentElement.scrollTop = roundX;
    //       document.body.scrollTop = roundX;
    //       document.documentElement.pageYOffset = roundX;
    //       document.getElementById('the-universe').scrollTop = roundX;
    //
    //       console.log(window.pageYOffset);
    //       console.log(document.documentElement.pageYOffset);
    //     })
    //     .start();
    //
    //     requestAnimationFrame(animate);
    //
    //     function animate(time) {
    //         requestAnimationFrame(animate);
    //         TWEEN.update(time);
    //     }
  }

  render() {
    console.log(TEXT);
    return (
      <div id="navbar" className="overlay-hide">
        <ul>
          <li onClick={ () => this.scrollTo("openinghours") }><a href="#openinghours">{ TEXT.navbar.openingHours[this.props.lang] }</a></li>
          <li onClick={ () => this.scrollTo("prices") }><a href="#prices">{ TEXT.navbar.prices[this.props.lang] }</a></li>
          <li onClick={ () => this.scrollTo("partyroom") }><a href="#partyroom">{ TEXT.navbar.partyRoom[this.props.lang] }</a></li>
          <li onClick={ () => this.scrollTo("gallery") }><a href="#gallery">{ TEXT.navbar.gallery[this.props.lang] }</a></li>
          <li onClick={ () => this.scrollTo("contact") }><a href="#contact">{ TEXT.navbar.contact[this.props.lang] }</a></li>
        </ul>
      </div>
    );
  }
}
export default NavBar;
