import React, {Component} from 'react';

class LanguageSwitcher extends Component {

  constructor(props) {
    super();

    this.flagChange = this.flagChange.bind(this);
  }

  flagChange(flag) {
    if (flag === 'dk') {
      document.getElementById('en').className = 'flag black-and-white';
      document.getElementById('dk').className = 'flag';
    }
    if (flag === 'en') {
      document.getElementById('en').className = 'flag';
      document.getElementById('dk').className = 'flag black-and-white';
    }

  }

  render() {
    return (
      <div id="language-picker">
        <span onClick={(e) => { this.props.langSwitch(e); this.flagChange('dk');} }><img id="dk" src="assets/dk.jpg" /></span>
        <span onClick={(e) => { this.props.langSwitch(e); this.flagChange('en');} }><img className="black-and-white" id="en" src="assets/uk.jpg" /></span>
      </div>
    );
  }
}
export default LanguageSwitcher;
