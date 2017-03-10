import React, {Component} from 'react';
import { TEXT } from './TEXT';

class PartyRoom extends Component {

  constructor(props) {
    super();

  }

  render() {

    return (
      <section id="partyroom" className="block clearfix">
        <div className="row">
          <h1>{ TEXT.partyRoom.title[this.props.lang] }</h1>
          <img className="divider" src="assets/divider-black.png" />
        </div>
        <div className="party-room-img">
          <img src="assets/party-room.jpg" />
        </div>
        <div className="party-room-content">
          <p>{ TEXT.partyRoom.content1[this.props.lang] }</p>
          <ul>
            <li>{ TEXT.partyRoom.contentList[0][this.props.lang] }</li>
            <li>{ TEXT.partyRoom.contentList[1][this.props.lang] }</li>
            <li>{ TEXT.partyRoom.contentList[2][this.props.lang] }</li>
            <li>{ TEXT.partyRoom.contentList[3][this.props.lang] }</li>
          </ul>
          <p>{ TEXT.partyRoom.content2[this.props.lang] }</p>
        </div>
      </section>
    );
  }
}

export default PartyRoom;
