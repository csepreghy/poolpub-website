import React, {Component} from 'react';
import {TEXT} from './TEXT';


class SeeMoreButton extends Component {

  constructor(props) {
    super();

    this.state = {
      btnText: {
        en: "Show more",
        dk: "Show more"
      }
    }

    this.seeMoreToggle = this.seeMoreToggle.bind(this);
  }

  seeMoreToggle() {
    this.props.seeMoreToggle();

    if (this.state.btnText['en'] === "Show more") {
      this.setState({ btnText: {en: "Show less", dk: "Show less"} });
    } else if (this.state.btnText['en'] === "Show less") {
      this.setState({ btnText: {en: "Show more", dk: "Show more"} });
    }
  }

  render() {

    return (
      <div id="see-more-btn">
        <span onClick={ this.seeMoreToggle }>{ this.state.btnText[this.props.lang] }</span>
      </div>
    );
  }
}

export default SeeMoreButton;
