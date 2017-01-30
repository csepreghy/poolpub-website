import React, {Component} from 'react';
import * as TEXT from './TEXT';

class PriceList extends Component {

  constructor(props) {
    super();

  }

  render() {

    let array = ["80kr","70kr","110kr","85kr","300kr","1500kr","2500kr"];

    return (
      <ul>
        <li>80kr</li>
        <li>70kr</li>
        <li>110kr</li>
        <li>85kr</li>
        <li>300kr</li>
        <li>1500kr</li>
        <li>2500kr</li>
      </ul>
    );
  }
}
export default PriceList;
