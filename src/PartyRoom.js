import React, {Component} from 'react';
import { TEXT } from './TEXT';
import MenuGallery from './MenuGallery';

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
        <div className="buffet">
          <h1 className="menu-title">Buffet</h1>
          <img  className="divider" src="assets/divider-black.png" />
        </div>

        <div className="menu">
          <MenuGallery imgPath="buffet/buffet" numberOfImages={ 8 }/>
          <div className="menu-prices">
            <div className="menu-item-title">
              <h2>{ TEXT.chacuteri[this.props.lang] }</h2>
            </div>
            <ul className="buffet-list">
              <li>3 slags pølser</li>
              <li>2 slags ost</li>
              <li>Dijonaise</li>
              <li>Humus</li>
              <li>Sylt</li>
              <li>Brød</li>
            </ul>
            <div className="menu-item-title">
              <h2>{ TEXT.salater[this.props.lang] }</h2>
            </div>
            <ul className="buffet-list">
              <li>Tomatsalat med mozzarella, Balsamico dressing, græskar kerner og frisk basilikum.</li>
              <li>Beder vendt i tahini dressing, knust feta og hakket persille.</li>
              <li>Bulgur salat med agurk, rødløg, majs, mynte og cherry tomater. </li>
              <li>Alm. Old school kartoffel salat.</li>
              <li>Cæsarsalat m. Croutons, parmesanost, stegt bacon og 3 forskellige dressinger Thousand island, bearnaise mayo og hvidløgs dressing.</li>
            </ul>
            <div className="menu-item-title">
              <h2>{ TEXT.kod[this.props.lang] }</h2>
            </div>
            <ul className="buffet-list">
              <li>Grillet drumstick</li>
              <li>Langtids stegt lamme culotte</li>
              <li>Grillet lamme culotte</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default PartyRoom;
