import React, {Component} from 'react';
import PriceBlock from './PriceBlock';
import Package from './Package';
import { TEXT } from './TEXT';
import MenuGallery from './MenuGallery';

class Prices extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <section id="prices" className="block">
        <div className="title-container">
          <h1>{TEXT.prices.pricesTitle[this.props.lang]}</h1>
          <img className="divider" src="assets/divider-white.png" />
          <span>{ TEXT.prices.membership[this.props.lang] }</span>
          <span>{ TEXT.prices.evening[this.props.lang] }</span>
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
        <PriceBlock img={ "assets/tabletennis.jpg" }
                    lang={ this.props.lang }
                    type={ "tableTennisPrices" } />
        <div className="special-offers-title-container">
          <h1>{TEXT.prices.specialOffersTitle[this.props.lang]}</h1>
          <img className="divider" src="assets/divider-white.png" />
        </div>
        <div className="packages-container">
          <Package packageLabels={ TEXT.prices.package1 }
                   lang={ this.props.lang } 
                   frameClass={ 'frame-1' }
                   price={ '1600kr' } />
          <Package packageLabels={ TEXT.prices.package2 }
                   lang={ this.props.lang } 
                   frameClass={ 'frame-2' }
                   price={ '1300kr' } />
          <Package packageLabels={ TEXT.prices.package3 }
                   lang={ this.props.lang }
                   frameClass={ 'frame-3' } 
                   price={ '650kr' } />
        </div>
        <div className="menu">
          <h1 className="menu-title">{TEXT.prices.menu.title[this.props.lang]}</h1>
          <img  className="divider" src="assets/divider-white.png" />
          <MenuGallery />
          <div className="menu-prices">
            <h1>{ TEXT.prices.menu.burgers.title[this.props.lang] }</h1>
            <span>(69kr)</span>
            <div className="menu-prices-list">
              <div className="menu-prices-list-item">
                <h3>{ TEXT.prices.menu.burgers.mrCheesy.title[this.props.lang] }</h3>
                <p>{ TEXT.prices.menu.burgers.mrCheesy.description[this.props.lang] }</p>
              </div>
              <div className="menu-prices-list-item">
                <h3>{ TEXT.prices.menu.burgers.houseBurger.title[this.props.lang] }</h3>
                <p>{ TEXT.prices.menu.burgers.houseBurger.description[this.props.lang] }</p>
              </div>
              <div className="menu-prices-list-item">
                <h3>{ TEXT.prices.menu.burgers.hotAsHell.title[this.props.lang] }</h3>
                <p>{ TEXT.prices.menu.burgers.hotAsHell.description[this.props.lang] }</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Prices;
