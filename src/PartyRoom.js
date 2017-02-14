import React, {Component} from 'react';
import * as TEXT from './TEXT';
//import jQuery from 'jquery';
//import * as jQuery from 'jquery';

class PartyRoom extends Component {

  TEXT = TEXT.default;

  constructor(props) {
    super();

  }

  render() {

    return (
      <section id="partyroom" className="block clearfix">
        <h1>{ this.TEXT.partyRoom.title[this.props.lang] }</h1>
        <img className="divider" src="assets/divider-black.png" />
        <div className="content container row">
          <div className="party-room-img col-sm-12 col-md-6 col-lg-6">
            <img src="assets/party-room.jpg" />
          </div>
          <div className="party-room-content col-sm-12 col-md-6 col-lg-6">
            <p>{ this.TEXT.partyRoom.content1[this.props.lang] }</p>
            <ul>
              <li>{ this.TEXT.partyRoom.contentList[0][this.props.lang] }</li>
              <li>{ this.TEXT.partyRoom.contentList[1][this.props.lang] }</li>
              <li>{ this.TEXT.partyRoom.contentList[2][this.props.lang] }</li>
              <li>{ this.TEXT.partyRoom.contentList[3][this.props.lang] }</li>
            </ul>
            <p>{ this.TEXT.partyRoom.content2[this.props.lang] }</p>
          </div>
        </div>
      </section>
    );
  }
}

export default PartyRoom;
