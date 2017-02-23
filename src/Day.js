import React, {Component} from 'react';

class Day extends Component {

  constructor(props) {
    super();

  }

  render() {

    return (
      <li className="day">
        <ul>
          <li>
            <ul>
              <li>{ this.props.day[0] }</li>
              <li>{ this.props.day[1] }</li>
              <li>{ this.props.day[2] }</li>
              <li><span className="day-ending">{ this.props.dayEnding }</span></li>
            </ul>
          </li>
          <li>
            <span className="time">{ this.props.openingTime }</span>
          </li>
          <li><img className="arrow" src="assets/icon-arrow-grey.png" /></li>
          <li className="dash">-</li>
          <li>
            <span className="time">{ this.props.closingTime }</span>
          </li>
        </ul>
      </li>
    );
  }
}
export default Day;
