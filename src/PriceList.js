import React, {Component} from 'react';
import * as TEXT from './TEXT';

class PriceList extends Component {

  constructor(props) {
    super();

  }

  render() {

    return (
      <ul>
        {
          TEXT.default.prices[this.props.type].prices.map(function(item, index) {
          return <li key={index}>{item}</li>
          })
        }
      </ul>
    );
  }
}
export default PriceList;
