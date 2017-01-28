import React, {Component} from 'react';
import Day from './Day';
import * as TEXT from './TEXT';

class OpeningHours extends Component {

  TEXT = TEXT.default;

  constructor(props) {
    super();

  }
  
  days = {
    sun: ['S','u','n'],
    mon: ['M','o','n'],
    tue: ['T','u','e'],
    wed: ['W','e','d'],
    thu: ['T','h','u'],
    fri: ['F','r','i'],
    sat: ['S','a','t']
  };

  render() {

    console.log(this.props.lang);
    console.log(this.TEXT);

    return (
      <section id="opening-hours">
        <h2>{this.TEXT.openingHours[this.props.lang]}</h2>
        <ul className="days-container">
          <Day day={ this.days.sun } />
          <Day day={ this.days.mon } />
          <Day day={ this.days.tue } />
          <Day day={ this.days.wed } />
          <Day day={ this.days.thu } />
          <Day day={ this.days.fri } />
          <Day day={ this.days.sat } />
        </ul>
      </section>
    );
  }
}
export default OpeningHours;
