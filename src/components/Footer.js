import React, { Component } from "react";
import SocialIcon from "./SocialIcon";

export default class Footer extends Component {
  render() {
    return (
      <div className="site-footer grid-container">
        <div className="site-footer__social-container">
          <SocialIcon
            href="http://fb.me/bryanaldrin09"
            alt="facebook icon"
            icon="icon-facebook2"
          />
          <SocialIcon
            href="http://twitter.com/brynldrn"
            alt="twitter icon"
            icon="icon-twitter"
          />
          <SocialIcon
            href="http://deviantart.com/bryanaldrin"
            alt="deviantart icon"
            icon="icon-deviantart"
          />
        </div>
        <p className="site-footer__copy">&copy; 2019 brynldrn.github.io</p>
      </div>
    );
  }
}
