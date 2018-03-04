import React, {Component} from 'react';
import OpeningHours from './OpeningHours';
import Prices from './Prices';
import PartyRoom from './PartyRoom';
import PhotoGallery from './PhotoGallery';
import Contact from './Contact';
import HomeScreen from './HomeScreen';
import DesignedByAndrew from './DesignedByAndrew';


class App extends Component {

  console.log('Test');

  constructor(props) {
    super();

    this.state = {
      lang: "dk"
    }

    this.langSwitch = this.langSwitch.bind(this);
  }

  langSwitch(e) {
    let newLang = e.target.id;
    this.setState({lang: newLang});
  }

  render() {
    return (
      <div>
        <HomeScreen lang={ this.state.lang } langSwitch={ this.langSwitch } toggleNavigation={ this.toggleNavigation }/>
        <OpeningHours lang={ this.state.lang } />
        <Prices lang={ this.state.lang } />
        <PartyRoom lang={ this.state.lang } />
        <PhotoGallery ref="gallery" lang={ this.state.lang } />
        <Contact lang={ this.state.lang } />
        <DesignedByAndrew />
      </div>
    );
  }
}
export default App;
