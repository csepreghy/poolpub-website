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
          <p>{ TEXT.bookAnEvent[this.props.lang] }<a href="mailto:poolpub@poolpub.dk">poolpub@poolpub.dk</a></p>
          <img className="divider" src="assets/divider-black.png" />
        </div>
        <MenuGallery imgPath="partyroom/party" numberOfImages={ 8 }/>
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
          <img className="divider" src="assets/divider-black.png" />
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
          <h1 className="menu-title">{ TEXT.partyRoomPrices[this.props.lang] }</h1>
          <img className="divider" src="assets/divider-black.png" />  
          <div className="party-room-prices">
            <h2>{ TEXT.equipmentRental[this.props.lang] }</h2>
            <div className="party-room-item-body">
              <p>{ TEXT.lokalet[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>3000 kr</p>
            </div>
            <div className="party-room-item-body">
              <p>{ TEXT.serveringsfad[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>5 kr</p>
            </div>
            <div className="party-room-item-body">
              <p>{ TEXT.vinglas[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>0.50 kr</p>
            </div>
            <div className="party-room-item-body">
              <p>{ TEXT.champagneGlass[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>1 kr</p>
            </div>
            <div className="party-room-item-body">
              <p>{ TEXT.vandglas[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>0.25 kr</p>
            </div>
            <div className="party-room-item-body">
              <p>{ TEXT.vandkander[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>2 kr</p>
            </div>
            <div className="party-room-item-body">
              <p>{ TEXT.tallerkner[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>1.50 kr</p>
            </div>
            <div className="party-room-item-body">
              <p>{ TEXT.bestik[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>1 kr { TEXT.perSet[this.props.lang] }</p>
            </div>
            <div className="party-room-item-body">
              <p>{ TEXT.dug[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>30 kr</p>
            </div>
            <div className="party-room-item-body">
              <p>{ TEXT.friIs[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>100 kr</p>
            </div>

            <h2 className="m-t-20">{ TEXT.activities[this.props.lang] }</h2>

            <div className="party-room-item-body">
              <p>{ TEXT.beerpongBoard[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>100 kr</p>
            </div>
            <div className="party-room-item-body">
              <p>{ TEXT.allDayPool[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>500 kr</p>
            </div>

            <h2 className="m-t-20">{ TEXT.drinks[this.props.lang] }</h2>

            <div className="party-room-item-body">
              <p>{ TEXT.sodavand[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>600 kr</p>
            </div>
            <div className="party-room-item-body">
              <p>{ TEXT.fustage[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>1350 kr</p>
            </div>
            <div className="party-room-item-body">
              <p>{ TEXT.sprut[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>450 kr</p>
            </div>
            <div className="party-room-item-body">
              <p>{ TEXT.luxSprut[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>550 kr</p>
            </div>
            <div className="party-room-item-body">
              <p>{ TEXT.shots[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>400 kr</p>
            </div>
            <div className="party-room-item-body">
              <p>{ TEXT.redWine[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>150 kr</p>
            </div>
            <div className="party-room-item-body">
              <p>{ TEXT.whiteWine[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>130 kr</p>
            </div>
            <div className="party-room-item-body">
              <p>{ TEXT.kaffe[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>50 kr</p>
            </div>
            <div className="party-room-item-body">
              <p>{ TEXT.cookies[this.props.lang] }</p>
              <div className="dotted-line"></div>
              <p>15 kr</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PartyRoom;
