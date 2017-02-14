import React, {Component} from 'react';
import BackgroundContainer from './BackgroundContainer';
import NavBar from './NavBar';
import OpeningHours from './OpeningHours';
import Prices from './Prices';
import PartyRoom from './PartyRoom';
import { Router, Route, Link } from 'react-router';
import 'bootstrap';

class App extends Component {

  PHOTO_SET = [
  {
    src: 'assets/prices-hunting.jpg',
    width: 681,
    height: 1024,
    aspectRatio: 1.5,
    lightboxImage:{
    src: 'assets/prices-hunting.jpg',
    srcset: [
      'assets/prices-hunting.jpg 1024w',
      'assets/prices-hunting.jpg 800w',
      'assets/prices-hunting.jpg 500w',
      'assets/prices-hunting.jpg 320w',
    ]
    }
  },
  {
    src: 'assets/prices-hunting.jpg',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: 'assets/prices-hunting.jpg',
    srcset: [
      'assets/prices-hunting.jpg 1024w',
      'assets/prices-hunting.jpg 800w',
      'assets/prices-hunting.jpg 500w',
      'assets/prices-hunting.jpg 320w',
    ]
    }
  }
];

  constructor(props) {
    super();

    this.state = {
      lang: "en"
    }

    this.langSwitch = this.langSwitch.bind(this);
  }

  langSwitch(e) {
    let newLang = e.target.id;
    this.setState({lang: newLang});
  }

  render() {
    console.log(jQuery);
    return (
      <div>
        <BackgroundContainer langSwitch={ this.langSwitch }/>
        <NavBar lang={ this.state.lang } />
        <OpeningHours lang={ this.state.lang } />
        <Prices lang={ this.state.lang } />
        <PartyRoom lang={ this.state.lang } />
      </div>
    );
  }
}
export default App;
