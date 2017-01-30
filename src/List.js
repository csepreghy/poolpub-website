import React, {Component} from 'react';
import * as TEXT from './TEXT';

class List extends Component {

  constructor(props) {
    super();

  }

  render() {

    return (
      <ul>
        <li>{ TEXT.default.prices.price1[this.props.lang] }</li>
        <li>{ TEXT.default.prices.price2[this.props.lang] }</li>
        <li>{ TEXT.default.prices.price3[this.props.lang] }</li>
        <li>{ TEXT.default.prices.price4[this.props.lang] }</li>
        <li>{ TEXT.default.prices.price5[this.props.lang] }</li>
        <li>{ TEXT.default.prices.price6[this.props.lang] }</li>
        <li>{ TEXT.default.prices.price7[this.props.lang] }</li>
      </ul>
    );
  }
}
export default List;
