import React, { Component } from "react";
import Slider from "react-slick";

export default class Gallery extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      // adaptiveHeight: true
    };

    return (
      <div className="site-gallery">
        <Slider {...settings}>
          {this.props.gallery.map(i => (
            <div key={i} className="site-gallery__image">
              <a
                href={i.url}
                target="_blank"
                rel="noopener noreferrer"
                className="site-gallery__zoom"
              >
                <span className="icon-zoom-in" />
              </a>
              <img src={i.url} alt="gallery_image" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
