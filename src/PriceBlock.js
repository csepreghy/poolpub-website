import React, {Component} from 'react';
import List from './List';
import PriceList from './PriceList';
import * as TEXT from './TEXT';

class PriceBlock extends Component {

  constructor(props) {
    super();

  }


  render() {
    return (
      <section id="pool-prices">
        <div className="price-img">
          <img src={ this.props.img} />
        </div>
        <div className="lists-container">
          <h3>{ TEXT.default.prices[this.props.type].title[this.props.lang] }</h3>
          <List lang={ this.props.lang }
                type={ this.props.type }/>
          <PriceList type={ this.props.type }/>
        </div>
      </section>
    );
  }
}

export default PriceBlock;
