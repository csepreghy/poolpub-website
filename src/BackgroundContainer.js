import React, {Component} from 'react';
import Slider from 'react-slick';
import LanguageSwitcher from './LanguageSwitcher';

class BackgroundContainer extends Component {

  constructor(props) {
    super();

  }

  settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 1500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    pauseOnHover: false,
    swipe: false,
    adaptiveHeight: false
  }

  render() {
    return (
      <section id="background-slider">
        <Slider {...this.settings}>
          <div className="bg-img-container"><h3><img src="assets/backgrounds/bg1.jpg" /></h3></div>
          <div className="bg-img-container"><h3><img src="assets/backgrounds/bg2.jpg" /></h3></div>
          <div className="bg-img-container"><h3><img src="assets/backgrounds/bg3.jpg" /></h3></div>
          <div className="bg-img-container"><h3><img src="assets/backgrounds/bg4.jpg" /></h3></div>
          <div className="bg-img-container"><h3><img src="assets/backgrounds/bg5.jpg" /></h3></div>
          <div className="bg-img-container"><h3><img src="assets/backgrounds/bg6.jpg" /></h3></div>
          <div className="bg-img-container"><h3><img src="assets/backgrounds/bg7.jpg" /></h3></div>
          <div className="bg-img-container"><h3><img src="assets/backgrounds/bg8.jpg" /></h3></div>
          <div className="bg-img-container"><h3><img src="assets/backgrounds/bg9.jpg" /></h3></div>
          <div className="bg-img-container"><h3><img src="assets/backgrounds/bg10.jpg" /></h3></div>
          <div className="bg-img-container"><h3><img src="assets/backgrounds/bg11.jpg" /></h3></div>
          <div className="bg-img-container"><h3><img src="assets/backgrounds/bg12.jpg" /></h3></div>
          <div className="bg-img-container"><h3><img src="assets/backgrounds/bg13.jpg" /></h3></div>
          <div className="bg-img-container"><h3><img src="assets/backgrounds/bg14.jpg" /></h3></div>
        </Slider>
        <img className="logo" src="assets/logo.png" />
        <LanguageSwitcher langSwitch={ this.props.langSwitch }/>
      </section>
    );
  }
}
export default BackgroundContainer;
