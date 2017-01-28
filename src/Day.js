import React, {Component} from 'react';

class Day extends Component {

  constructor(props) {
    super();

  }

  render() {

    return (
      <li>
        <ul>
          <li>
            <ul>
              <li>{ this.props.day[0] }</li>
              <li>{ this.props.day[1] }</li>
              <li>{ this.props.day[2] }</li>
            </ul>
          </li>
        </ul>
      </li>
    );
  }
}
export default Day;
