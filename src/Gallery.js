import React, {Component} from 'react';


class Gallery extends Component {

  constructor(props) {
    super();

  }

  PHOTO_SET = [
    {
      src: 'http://example.com/example/img1_small.jpg',
      width: 681,
      height: 1024,
      aspectRatio: 1.5,
      lightboxImage:{
      src: 'http://example.com/example/img1_large.jpg',
      }
    },
    {
      src: 'http://example.com/example/img2_small.jpg',
      width: 600,
      height: 600,
      aspectRatio: 1.5,
      lightboxImage:{
      src: 'http://example.com/example/img2_large.jpg',
      }
    }
  ];

  render() {
    return (
        <div></div>
    );
  }
}

export default Gallery;
