import React, {Component} from 'react';
import BackgroundContainer from './BackgroundContainer';
import NavBar from './NavBar';

class App extends Component {

  render() {
    return (
      <div>
        <BackgroundContainer />
        <NavBar />
      </div>
    );
  }
}
export default App;
