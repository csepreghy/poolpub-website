import React, {Component} from 'react';
import List from './List';
import PriceList from './PriceList';

class PoolPrices extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <section id="pool-prices">
        <div className="price-img">
          <img src="assets/prices-pool.jpg" />
        </div>
        <div className="lists-container">
          <h3>Pool</h3>
          <List lang={ this.props.lang }/>
          <PriceList />
        </div>
      </section>
    );
  }
}
export default PoolPrices;
