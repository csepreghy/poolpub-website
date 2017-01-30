import React, {Component} from 'react';
import PoolPrices from './PoolPrices';
//import VintageTitle from './VintageTitle';
import * as TEXT from './TEXT';

class Prices extends Component {

  constructor(props) {
    super();

  }

  //<VintageTitle title={ TEXT.default.prices.pricesTitle[this.props.lang] } />


  render() {
    return (
      <div id="prices">
        <div className="title-container">
          <h1>{TEXT.default.prices.pricesTitle[this.props.lang]}</h1>
          <img className="divider" src="assets/divider-white.png" />
        </div>
        <PoolPrices lang={ this.props.lang }/>
      </div>
    );
  }
}
export default Prices;
