import React, {Component} from 'react';
import Slider from 'react-slick';
import LanguageSwitcher from './LanguageSwitcher';

class BackgroundContainer extends Component {

  constructor(props) {
    super();

  }

  numberOfImages = 10;
  imageUrls = [];

  settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 4500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: false,
    pauseOnHover: false,
    swipe: false,
    adaptiveHeight: false
  }

  componentWillMount() {
    for (var i = 1; i < this.numberOfImages + 1; i++) {
      this.imageUrls.push("assets/backgrounds/bg" + i + ".jpg")
    }
  }
 
  render() {
    return (
      <section id="background-slider">
        <Slider {...this.settings}>
        {
          this.imageUrls.map((url, index) => {
            return (
              <div className="bg-img-container" key={ index }>
                <h3><img src={ url } /></h3>
              </div>
            )
          })
        }
        </Slider>
        <img className="logo" src="assets/logo.png" />
        <LanguageSwitcher langSwitch={ this.props.langSwitch }/>
      </section>
    );
  }
}
export default BackgroundContainer;
