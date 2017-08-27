import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';
import { TEXT } from './TEXT';
import { PHOTO_SET } from './photoSet.js';

class PhotoGallery extends Component {

  constructor(props) {
    super();

    this.state = {
      isGalleryVisible: false
    }

    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery() {
    this.setState({ isGalleryVisible: !this.state.isGalleryVisible });  
  }

  render() {
    return (
      <section id="gallery" className="block">
        <div className="gallery-container" style={{ 'width': this.state.width }}>
          <div className="gallery-modal" style={{'display': this.state.isGalleryVisible ? 'block' : 'none'}}>
            <Gallery photos={ PHOTO_SET } cols={7}/>
          </div>
          <div onClick={ this.toggleGallery } 
               className="close-gallery-btn" 
               style={{'display': this.state.isGalleryVisible ? 'block' : 'none'}}><img src="/assets/close.png" /></div>
          <div onClick={ this.toggleGallery } className="open-gallery-btn">{ TEXT.photoGallery.openGalleryBtn[this.props.lang] }</div>
        </div>
      </section>
    );
  }
}

export default PhotoGallery;
