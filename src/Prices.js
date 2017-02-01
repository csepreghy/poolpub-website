import React, {Component} from 'react';
import PriceBlock from './PriceBlock';
import * as TEXT from './TEXT';
//import VintageTitle from './VintageTitle';

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
        <PriceBlock img={ "assets/prices-pool.jpg" }
                    lang={ this.props.lang }
                    type={ "poolPrices" } />
        <PriceBlock img={ "assets/prices-snooker.jpg" }
                    lang={ this.props.lang }
                    type={ "snookerPrices" } />
        <PriceBlock img={ "assets/prices-golf.jpg" }
                    lang={ this.props.lang }
                    type={ "golfPrices" } />
        <PriceBlock img={ "assets/prices-hunting.jpg" }
                    lang={ this.props.lang }
                    type={ "huntingPrices" } />
      </div>
    );
  }
}
export default Prices;
