import React, {Component} from 'react';

class VintageTitle extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <div className="title-container">
        <h1>{ this.props.title }</h1>
        <img src="assets/titile-divider-white.png" />
      </div>
    );
  }
}
export default VintageTitle;
