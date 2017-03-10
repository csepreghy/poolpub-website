import React, {Component} from 'react';
import { TEXT } from './TEXT';

class PriceList extends Component {

  constructor(props) {
    super();

  }

  render() {

    return (
      <ul>
        {
          TEXT.prices[this.props.type].prices.map(function(item, index) {
          return <li key={index}>{item}</li>
          })
        }
      </ul>
    );
  }
}
export default PriceList;
