import React, {Component} from 'react';
import * as TEXT from './TEXT';

class List extends Component {

  constructor(props) {
    super();

  }

  render() {

    return (
      <ul>
        {
          TEXT.default.prices[this.props.type].text[this.props.lang].map(function(item, index) {
          return <li key={index}>{item}</li>
          })
        }
      </ul>
    );
  }
}
export default List;
