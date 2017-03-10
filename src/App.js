import React, {Component} from 'react';
import OpeningHours from './OpeningHours';
import Prices from './Prices';
import PartyRoom from './PartyRoom';
import PhotoGallery from './PhotoGallery';
import Contact from './Contact';
import SeeMoreButton from './SeeMoreButton';
import 'bootstrap';
import scrollToElement from 'scroll-to-element';
import scrollTo from 'scroll-to';
import HomeScreen from './HomeScreen';

let handleScroll = () => {
  console.log("scroll");
}

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      lang: "en"
    }

    this.langSwitch = this.langSwitch.bind(this);
    this.seeMoreToggle = this.seeMoreToggle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    console.log("scroll");
    setTimeout(function () {
      window.addEventListener("scroll", function () {
        console.log("scroll");
      }, false);
    }, 1000);
  }

  handleScroll() {
    console.log("scroll");
  }

  langSwitch(e) {
    let newLang = e.target.id;
    this.setState({lang: newLang});
  }

  seeMoreToggle() {
    this.refs['gallery'].seeMoreToggle();
  }

  render() {
    return (
      <div>
        <HomeScreen lang={ this.state.lang } langSwitch={ this.langSwitch } toggleNavigation={ this.toggleNavigation }/>
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
