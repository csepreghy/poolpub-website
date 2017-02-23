import React, {Component} from 'react';
import BackgroundContainer from './BackgroundContainer';
import NavBar from './NavBar';
import OpeningHours from './OpeningHours';
import Prices from './Prices';
import PartyRoom from './PartyRoom';
import PhotoGallery from './PhotoGallery';
import Contact from './Contact';
import SeeMoreButton from './SeeMoreButton';
import 'bootstrap';
import scrollToElement from 'scroll-to-element';
import scrollTo from 'scroll-to';

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      lang: "en"
    }

    this.langSwitch = this.langSwitch.bind(this);
    this.seeMoreToggle = this.seeMoreToggle.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
  }

  langSwitch(e) {
    let newLang = e.target.id;
    this.setState({lang: newLang});
  }

  seeMoreToggle() {
    this.refs['gallery'].seeMoreToggle();
  }

  scrollTo() {
    console.log(scrollToElement(document.getElementById("opening-hours")));
    scrollToElement(document.getElementById("opening-hours"), {
      offset: 0,
      ease: 'out-bounce',
      duration: 1500
    });
    console.log(scrollTo(500, 1200, {
      ease: 'out-bounce',
      duration: 1500
    }));
    let elem = document.getElementById('gallery');

    elem.scrollTop = 0;
  }

  render() {
    return (
      <div>
        <BackgroundContainer langSwitch={ this.langSwitch }/>
        <NavBar scrollTo={ this.scrollTo } lang={ this.state.lang } />
        <OpeningHours lang={ this.state.lang } />
        <Prices lang={ this.state.lang } />
        <PartyRoom lang={ this.state.lang } />
        <PhotoGallery ref="gallery" lang={ this.state.lang } />
        <SeeMoreButton seeMoreToggle={ this.seeMoreToggle } lang={ this.state.lang }/>
        <Contact lang={ this.state.lang } />
      </div>
    );
  }
}
export default App;
