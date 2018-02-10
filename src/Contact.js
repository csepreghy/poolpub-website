import React, {Component} from 'react';
import { TEXT } from './TEXT';
import PhotoGallery from './PhotoGallery';

class Contact extends Component {

  constructor(props) {
    super();

    this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
    this.initMap();
  }

  initMap() {
    let uluru = {lat: 55.708353, lng: 12.522530 };
    if (typeof(google) !== "undefined") {
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru,
        mapTypeControl: false,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#716464"
                    },
                    {
                        "weight": "0.01"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.landcover",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi.attraction",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#a05519"
                    },
                    {
                        "saturation": "-13"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#84afa3"
                    },
                    {
                        "lightness": 52
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
      });
      let marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    } else {
      setTimeout(this.initMap, 50);
    }
  }

  render() {

    return (
      <section id="contact" name="contact" className="block clearfix">
          <h1>{ TEXT.contact.title[this.props.lang] }</h1>
          <img className="divider" src="assets/divider-black.png" />
        <div className="content-container">
          <div id="map" className="card-3"></div>
          <div className="list card-2">
            <ul className="left-list">
              <li>{ TEXT.contact.address.title[this.props.lang] }</li>
              <li>{ TEXT.contact.phone.title[this.props.lang] }</li>
              <li>{ TEXT.contact.email.title[this.props.lang] }</li>
              <li>{ TEXT.contact.facebook.title[this.props.lang] }</li>
              <li>{ TEXT.contact.instagram.title[this.props.lang] }</li>
            </ul>
            <ul className="right-list">
              <li>{ TEXT.contact.address.content[this.props.lang] }</li>
              <li>{ TEXT.contact.phone.content[this.props.lang] }</li>
              <li><a href="mailto:info@poolpub.dk?Subject=Hello!">info@poolpub.dk</a></li>
              <li><a href="https://www.facebook.com/POOL-PUB-Copenhagen-104637576234219/" target="_blank">{ TEXT.contact.facebook.content[this.props.lang] }</a></li>
              <li><a href="https://www.instagram.com/poolpub_cph/" target="_blank">{ TEXT.contact.instagram.content[this.props.lang] }</a></li>
            </ul>
          </div>
          <div className="social-media-container">
            <div className="social-icons">

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
