import React, { Component } from 'react';
import Slider from 'react-slick';

function NextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div className={className}
         onClick={onClick}>
      <img src="assets/arrow-right.png" alt="Right arrow"/>
    </div>
  );
}

function PrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div className={className}
         onClick={onClick}>
      <img src="assets/arrow-left.png" alt="Right arrow"/>
    </div>
  );
}


class MenuGallery extends Component {

  constructor(props) {
    super();
  }

  numberOfImages = 6;
  imageUrls = [];

  settings = {
    dots: true,
    arrows: true,
    autoplay: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    pauseOnHover: false,
    swipe: true,
    adaptiveHeight: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  componentWillMount() {
    for (var i = 1; i < this.numberOfImages + 1; i++) {
      this.imageUrls.push("assets/menu-gallery/menu-gallery-img" + i + ".jpg")
    }
  }

  render() {
    return (
      <div className="menu-gallery">
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
      </div>
    );
  }
}

export default MenuGallery;