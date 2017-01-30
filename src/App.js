import React, {Component} from 'react';
import BackgroundContainer from './BackgroundContainer';
import NavBar from './NavBar';
import OpeningHours from './OpeningHours';

class App extends Component {

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
    return (
      <div>
        <BackgroundContainer langSwitch={ this.langSwitch }/>
        <NavBar lang={ this.state.lang } />
        <OpeningHours lang={ this.state.lang } />
      </div>
    );
  }
}
export default App;
