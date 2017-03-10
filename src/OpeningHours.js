import React, {Component} from 'react';
import Day from './Day';
import { TEXT } from './TEXT';

class OpeningHours extends Component {

  constructor(props) {
    super();

  }

  render() {

    return (
      <section id="opening-hours" className="block">
        <h2>{TEXT.openingHours[this.props.lang]}</h2>
        <ul className="days-container">
          <Day day={ TEXT.days[this.props.lang].sun.letters } dayEnding={ TEXT.days[this.props.lang].sun.ending } openingTime={ TEXT.days[this.props.lang].sun.openingTime } closingTime={ TEXT.days[this.props.lang].sun.closingTime } />
          <Day day={ TEXT.days[this.props.lang].mon.letters } dayEnding={ TEXT.days[this.props.lang].mon.ending } openingTime={ TEXT.days[this.props.lang].mon.openingTime } closingTime={ TEXT.days[this.props.lang].mon.closingTime } />
          <Day day={ TEXT.days[this.props.lang].tue.letters } dayEnding={ TEXT.days[this.props.lang].tue.ending } openingTime={ TEXT.days[this.props.lang].tue.openingTime } closingTime={ TEXT.days[this.props.lang].tue.closingTime } />
          <Day day={ TEXT.days[this.props.lang].wed.letters } dayEnding={ TEXT.days[this.props.lang].wed.ending } openingTime={ TEXT.days[this.props.lang].wed.openingTime } closingTime={ TEXT.days[this.props.lang].wed.closingTime } />
          <Day day={ TEXT.days[this.props.lang].thu.letters } dayEnding={ TEXT.days[this.props.lang].thu.ending } openingTime={ TEXT.days[this.props.lang].thu.openingTime } closingTime={ TEXT.days[this.props.lang].thu.closingTime } />
          <Day day={ TEXT.days[this.props.lang].fri.letters } dayEnding={ TEXT.days[this.props.lang].fri.ending } openingTime={ TEXT.days[this.props.lang].fri.openingTime } closingTime={ TEXT.days[this.props.lang].fri.closingTime } />
          <Day day={ TEXT.days[this.props.lang].sat.letters } dayEnding={ TEXT.days[this.props.lang].sat.ending } openingTime={ TEXT.days[this.props.lang].sat.openingTime } closingTime={ TEXT.days[this.props.lang].sat.closingTime } />
        </ul>
      </section>
    );
  }
}
export default OpeningHours;
