import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';
import {TEXT} from './TEXT';

class PhotoGallery extends Component {

  constructor(props) {
    super();

    this.state = {
      width: "0px",
      fullHeight: true,
      heightClassName: "h-100vh"
    }

    this.seeMoreToggle = this.seeMoreToggle.bind(this);
    this.setAutoHeight = this.setAutoHeight.bind(this);
  }

  componentDidMount() {
    this.setState({ width: "80vw" });
  }

  setAutoHeight() {
    this.setState({ heightClassName: "auto" });
  }

  seeMoreToggle() {
    if (this.state.heightClassName === "h-100vh") {
      this.setState({ heightClassName: "h-380vh" });
      setTimeout(() => this.setAutoHeight(), 1100);
    } else if (this.state.heightClassName === "auto" || this.state.heightClassName === "h-100vh") {
      this.setState({ heightClassName: "h-100vh" });
    }
  }

  TEXT = TEXT.default;

  PHOTO_SET = [
    {
      src: 'assets/gallery/400/a1.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a1.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a2.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a2.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a3.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a3.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a4.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a4.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a5.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a5.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a6.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a6.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a7.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a7.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a8.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a8.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a9.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a9.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a10.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a10.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a11.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a11.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a12.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a12.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a13.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a13.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a14.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a14.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a15.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a15.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a16.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a16.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a17.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a17.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a18.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a18.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a19.jpg',
      width: 1200,
      height: 1800,
      aspectRatio: 0.66,
      lightboxImage:{
        src: 'assets/gallery/1800/a19.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a20.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a20.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a21.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a21.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a22.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a22.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a23.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a23.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a24.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a24.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a26.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a26.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a27.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a27.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a28.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a28.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a29.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a29.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a30.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a30.jpg',
      }
    },
    {
      src: 'assets/gallery/400/a31.jpg',
      width: 1800,
      height: 1200,
      aspectRatio: 1.5,
      lightboxImage:{
        src: 'assets/gallery/1800/a31.jpg',
      }
    }
  ];

  render() {
    return (
      <section id="gallery" className={ "block " + this.state.heightClassName } style={{ "height": this.state.height }}>
        <div className="row">
          <h1>{ TEXT.photoGallery.title[this.props.lang] }</h1>
          <img className="divider" src="assets/divider-white.png" />
        </div>
        <div className="gallery-container" style={{ "width": this.state.width }}>
          <Gallery photos={ this.PHOTO_SET }/>
        </div>
      </section>
    );
  }
}

export default PhotoGallery;
