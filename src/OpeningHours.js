import React, {Component} from 'react';
import Day from './Day';
import * as TEXT from './TEXT';

class OpeningHours extends Component {

  TEXT = TEXT.default;

  constructor(props) {
    super();

  }

  days = {
    sun: {
      openingTime: "1pm",
      closingTime: "11:30pm",
      letters: ['S','u','n']
    },
    mon: {
      openingTime: "1pm",
      closingTime: "12pm",
      letters: ['M','o','n']
    },
    tue: {
      openingTime: "1pm",
      closingTime: "12pm",
      letters: ['T','u','e']
    },
    wed: {
      openingTime: "1pm",
      closingTime: "12pm",
      letters: ['W','e','d']
    },
    thu: {
      openingTime: "1pm",
      closingTime: "12pm",
      letters: ['T','h','u']
    },
    fri: {
      openingTime: "1pm",
      closingTime: "3am",
      letters: ['F','r','i']
    },
    sat: {
      openingTime: "12am",
      closingTime: "3am",
      letters: ['S','a','t']
    }
  };

  render() {

    console.log(this.props.lang);
    console.log(this.TEXT);

    return (
      <section id="opening-hours">
        <h2>{this.TEXT.openingHours[this.props.lang]}</h2>
        <ul className="days-container">
          <Day day={ this.days.sun.letters } openingTime={ this.days.sun.openingTime } closingTime={ this.days.sun.closingTime } />
          <Day day={ this.days.mon.letters } openingTime={ this.days.mon.openingTime } closingTime={ this.days.mon.closingTime } />
          <Day day={ this.days.tue.letters } openingTime={ this.days.tue.openingTime } closingTime={ this.days.tue.closingTime } />
          <Day day={ this.days.wed.letters } openingTime={ this.days.wed.openingTime } closingTime={ this.days.wed.closingTime } />
          <Day day={ this.days.thu.letters } openingTime={ this.days.thu.openingTime } closingTime={ this.days.thu.closingTime } />
          <Day day={ this.days.fri.letters } openingTime={ this.days.fri.openingTime } closingTime={ this.days.fri.closingTime } />
          <Day day={ this.days.sat.letters } openingTime={ this.days.sat.openingTime } closingTime={ this.days.sat.closingTime } />
        </ul>
      </section>
    );
  }
}
export default OpeningHours;
