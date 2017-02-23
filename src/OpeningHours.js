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
      letters: ['S','u','n'],
      ending: "day"
    },
    mon: {
      openingTime: "1pm",
      closingTime: "12pm",
      letters: ['M','o','n'],
      ending: "day"
    },
    tue: {
      openingTime: "1pm",
      closingTime: "12pm",
      letters: ['T','u','e'],
      ending: "sday"
    },
    wed: {
      openingTime: "1pm",
      closingTime: "12pm",
      letters: ['W','e','d'],
      ending: "nesday"
    },
    thu: {
      openingTime: "1pm",
      closingTime: "12pm",
      letters: ['T','h','u'],
      ending: "rsday"
    },
    fri: {
      openingTime: "1pm",
      closingTime: "3am",
      letters: ['F','r','i'],
      ending: "day"
    },
    sat: {
      openingTime: "12am",
      closingTime: "3am",
      letters: ['S','a','t'],
      ending: "urday"
    }
  };

  render() {

    return (
      <section id="opening-hours" className="block">
        <h2>{this.TEXT.openingHours[this.props.lang]}</h2>
        <ul className="days-container">
          <Day day={ this.days.sun.letters } dayEnding={ this.days.sun.ending } openingTime={ this.days.sun.openingTime } closingTime={ this.days.sun.closingTime } />
          <Day day={ this.days.mon.letters } dayEnding={ this.days.mon.ending } openingTime={ this.days.mon.openingTime } closingTime={ this.days.mon.closingTime } />
          <Day day={ this.days.tue.letters } dayEnding={ this.days.tue.ending } openingTime={ this.days.tue.openingTime } closingTime={ this.days.tue.closingTime } />
          <Day day={ this.days.wed.letters } dayEnding={ this.days.wed.ending } openingTime={ this.days.wed.openingTime } closingTime={ this.days.wed.closingTime } />
          <Day day={ this.days.thu.letters } dayEnding={ this.days.thu.ending } openingTime={ this.days.thu.openingTime } closingTime={ this.days.thu.closingTime } />
          <Day day={ this.days.fri.letters } dayEnding={ this.days.fri.ending } openingTime={ this.days.fri.openingTime } closingTime={ this.days.fri.closingTime } />
          <Day day={ this.days.sat.letters } dayEnding={ this.days.sat.ending } openingTime={ this.days.sat.openingTime } closingTime={ this.days.sat.closingTime } />
        </ul>
      </section>
    );
  }
}
export default OpeningHours;
