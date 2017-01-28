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
  }

  render() {
    return (
      <div>
        <BackgroundContainer />
        <NavBar />
        <OpeningHours lang= { this.state.lang }/>
      </div>
    );
  }
}
export default App;
